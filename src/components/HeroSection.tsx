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
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Conteúdo */}
      <div className="w-full flex flex-col items-start p-3 ">
        <h1 className="relative text-5xl text-secondary p-4 w-full text-left uppercase">
          {title}
        </h1>
        {subtitle && (
          <p className="relative text-sm text-gray-200  bottom-[30px] p-4 w-full text-left">
            {subtitle}
          </p>
        )}
        {subtitlebutton && (
          <p className="relative text-sm text-gray-200 p-4 w-full text-left">
            {subtitlebutton}
          </p>
        )}
        {buttonText && buttonAction && (
          <button
            onClick={buttonAction}
            className="relative text-md bg-secondary hover:bg-accent ml-4 text-white font-semibold py-3 px-6 rounded-lg duration-300 cursor-pointer"
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};
