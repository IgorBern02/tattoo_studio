import { HeroSection } from "../components/HeroSection";
import { Header } from "../components/Header";
import { About } from "../components/About";
import { Galery } from "../components/Galery";
import heroImage from "../assets/images/herobg.jpg";
import Aboutbg from "../assets/images/aboutbg.jpg";
import Galerybg from "../assets/images/galerybg.jpg";

export function HomePage() {
  const handleClick = () => {
    alert("Vamos marcar sua tatuagem!");
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
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
    </div>
  );
}
