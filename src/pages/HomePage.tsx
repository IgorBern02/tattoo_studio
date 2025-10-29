import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeroSection } from "../components/Hero/HeroSection";
import { Header } from "../components/Header/Header";
import { About } from "../components/About/About";
import { Galery } from "../components/Gallery/Gallery";
import { Artists } from "../components/Artists/Artists";
import { Footer } from "../components/Footer/Footer";
import { Faq } from "../components/Faq/Faq";
import heroImage from "../assets/images/herobg.jpg";
import Aboutbg from "../assets/images/aboutbg.jpg";
import Gallerybg from "../assets/images/gallerybg.jpg";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleClick = () => {
    alert("Vamos marcar sua tatuagem!");
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header Title="Tattoo Studio" />

      {/* 🔽 IDs que o scroll usa */}
      <section id="hero">
        <HeroSection
          backgroundImage={heroImage}
          title="Artes que contam sua história"
          subtitle="Cada traço é uma expressão única."
          subtitlebutton="Agende seu horário e transforme sua pele em uma obra de arte."
          buttonText="Agendar sessão"
          buttonAction={handleClick}
        />
      </section>

      <section id="about">
        <About backgroundImage={Aboutbg} />
      </section>

      <section id="gallery">
        <Galery backgroundImage={Gallerybg} />
      </section>

      <section id="artists">
        <Artists Title="Veja nossos artistas" />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <Footer />
    </div>
  );
}
