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
  const handleClick = () => {
    alert("Vamos marcar sua tatuagem!");
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header Title="Tattoo Studio" />
      <HeroSection
        backgroundImage={heroImage}
        title="Artes que contam sua história"
        subtitle="Cada traço é uma expressão única."
        subtitlebutton="Agende seu horario e transforme sua pele em uma obra de arte."
        buttonText="Agendar sessão"
        buttonAction={handleClick}
      />
      <About backgroundImage={Aboutbg} />
      <Galery backgroundImage={Gallerybg} />
      <Artists Title=" Veja nossos artistas" />
      <Faq />
      <Footer />
    </div>
  );
}
