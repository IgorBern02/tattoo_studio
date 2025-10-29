// src/hooks/useScrollNavigation.ts
import { useNavigate, useLocation } from "react-router-dom";

export const useScrollNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string, onClose?: () => void) => {
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
    onClose?.();
  };

  return { scrollToSection };
};
