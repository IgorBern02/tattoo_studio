import type { HeroSectionProps } from "../types/hero";

export const HeroSection = ({
  backgroundImage,
  title,
  subtitle,
  subtitlebutton,
  buttonText,
  buttonAction,
}: HeroSectionProps) => {
  return (
    <section
      className="absolute top-0 w-full h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradiente escuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Conteúdo */}
      <div className="absolute right-30 px-4flex flex-col items-center py-10 ">
        <h1 className="text-5xl text-secondary p-4 w-[400px] text-left uppercase">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm text-gray-200 relative bottom-[30px] p-4 w-[400px] text-left">
            {subtitle}
          </p>
        )}
        {subtitlebutton && (
          <p className="text-[10px] text-gray-200 p-4 w-[400px] text-left">
            {subtitlebutton}
          </p>
        )}
        {buttonText && buttonAction && (
          <button
            onClick={buttonAction}
            className="relative right-27 text-[13px] bg-[#C19A6B] text-white font-semibold py-3 px-6 rounded-lg transition-colors cursor-pointer"
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};
