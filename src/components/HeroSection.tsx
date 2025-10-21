import type { HeroSectionProps } from "../types/hero";

export const HeroSection = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonAction,
}: HeroSectionProps) => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradiente escuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Conteúdo */}
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200 mb-8">{subtitle}</p>
        )}
        {buttonText && buttonAction && (
          <button
            onClick={buttonAction}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};
