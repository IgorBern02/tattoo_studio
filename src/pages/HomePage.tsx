import { HeroSection } from "../components/HeroSection";
import { Header } from "../components/Header";
import heroImage from "../assets/images/herobg.jpg";

export function HomePage() {
  const handleClick = () => {
    alert("Vamos marcar sua tatuagem!");
  };

  return (
    <div>
      <Header />
      <HeroSection
        backgroundImage={heroImage}
        title="Artes que contam sua história"
        subtitle="Cada traço é uma expressão única."
        subtitlebutton="Agende seu horario e transforme sua pele em uma obra de arte."
        buttonText="Agendar sessão"
        buttonAction={handleClick}
      />
    </div>
  );
}
