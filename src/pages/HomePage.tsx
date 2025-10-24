import { HeroSection } from "../components/Hero/HeroSection";
import { Header } from "../components/Header/Header";
import { About } from "../components/About/About";
import { Galery } from "../components/Galery/Galery";
import { Artists } from "../components/Artists/Artists";
import { Footer } from "../components/Footer/Footer";
import heroImage from "../assets/images/herobg.jpg";
import Aboutbg from "../assets/images/aboutbg.jpg";
import Galerybg from "../assets/images/galerybg.jpg";

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
      <Galery backgroundImage={Galerybg} />
      <Artists Title=" Veja nossos artistas" />
      <Footer />
    </div>
  );
}
