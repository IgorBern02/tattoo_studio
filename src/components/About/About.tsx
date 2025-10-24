import TattoMachine from "../assets/icons/TattooMachine.svg";
import AboutUsVideo from "../assets/videos/about.mp4";
import type { AboutProps } from "../../types/about";

export const About = ({ backgroundImage }: AboutProps) => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center text-center "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {" "}
      {/* Gradiente escuro */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="flex flex-col justify-center gap-3">
        <h2 className="relative flex flex-row gap-3 text-2xl font-bold text-secondary p-4 w-full text-left uppercase">
          Sobre o Tattoo Studio
          <img src={TattoMachine} alt="Tatto Machine" />
        </h2>
        <div className="h-0.5 w-5/6 bg-white ml-5"></div>
        <p className="relative text-sm text-gray-200 p-4 w-full text-left">
          No Tattoo Studio, acreditamos que cada tatuagem é uma obra de arte
          única que reflete a personalidade e a história de quem a carrega. Com
          uma equipe de artistas talentosos e apaixonados, oferecemos um
          ambiente acolhedor e profissional para transformar suas ideias em
          realidade. Venha nos visitar e descubra como podemos ajudar você a
          expressar sua individualidade através da arte na pele.
        </p>
        <video
          src={AboutUsVideo}
          controls
          muted
          playsInline
          className="w-full max-w-2xl p-5 rounded-2xl shadow-lg border border-white/20"
        ></video>
      </div>
    </section>
  );
};
