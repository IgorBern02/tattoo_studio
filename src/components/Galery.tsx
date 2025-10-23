import { Carousel } from "./Carousel";

interface GaleryProps {
  backgroundImage: string;
}
export const Galery = ({ backgroundImage }: GaleryProps) => {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col gap-10 items-center justify-center text-center "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {" "}
      {/* Gradiente escuro */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="w-4/5">
        <h2 className="relative text-2xl font-bold text-secondary uppercase mb-6">
          Galeria de Arte
        </h2>

        <p className="relative text-white max-w-2xl mx-auto w-full text-left">
          Explore nossa galeria de tatuagens, desde designs minimalistas até
          obras de arte complexas, veja como transformamos ideias em realidade
          na pele de nossos clientes.
        </p>
      </div>
      <Carousel />
    </section>
  );
};
