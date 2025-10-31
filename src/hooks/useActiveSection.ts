// src/hooks/useActiveSection.ts
import { useEffect, useRef, useState } from "react";

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const ticking = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // calcula a seção "mais relevante" pela posição na viewport
  const computeActiveByPosition = () => {
    let bestId: string | null = null;
    let bestScore = Infinity;

    const header = document.querySelector("header");
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const viewportCenter = window.innerHeight * 0.35; // ponto de referência (um pouco acima do centro)

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();

      // se a seção estiver totalmente fora da tela para baixo, ignora
      if (rect.bottom <= 0) return;

      // score: distância do topo da seção ao ponto de referência
      const topRelative = rect.top + headerHeight; // compensa header fixo
      const score = Math.abs(topRelative - viewportCenter);

      if (score < bestScore) {
        bestScore = score;
        bestId = id;
      }
    });

    if (bestId && bestId !== activeSection) {
      setActiveSection(bestId);
    }
  };

  useEffect(() => {
    if (!sectionIds || !sectionIds.length) return;

    // ---- IntersectionObserver ----
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // debug
          // console.log("IO:", entry.target.id, entry.isIntersecting, entry.intersectionRatio);
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-100px 0px 0px 0px", // compensa header fixo
        threshold: [0.25, 0.5, 0.75],
      }
    );

    observerRef.current = observer;

    // ---- primeira checagem por posição (para o load inicial) ----
    // dá um pequeno timeout para garantir que tudo esteja montado/renderizado
    const initTimeout = window.setTimeout(() => {
      computeActiveByPosition();
    }, 50);

    // ---- fallback durante scroll: recalcula com rAF (leve) ----
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(() => {
          computeActiveByPosition();
          ticking.current = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.clearTimeout(initTimeout);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join("|")]);

  return activeSection;
};
