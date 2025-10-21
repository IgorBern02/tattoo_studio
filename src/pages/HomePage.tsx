import { HeroSection } from "../components/HeroSection";
import heroImage from "../assets/images/herobg.jpg";

export function HomePage() {
  const handleClick = () => {
    alert("Vamos marcar sua tatuagem!");
  };

  return (
    <div>
      <HeroSection
        backgroundImage={heroImage}
        title="Arte que marca"
        subtitle="Transforme sua pele em uma obra de arte única"
        buttonText="Agende agora"
        buttonAction={handleClick}
      />
    </div>
  );
}
