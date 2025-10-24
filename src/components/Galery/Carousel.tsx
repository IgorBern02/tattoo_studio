import { useState } from "react";
import Photo1 from "../assets/images/carousel/photo1.jpg";
import Photo2 from "../assets/images/carousel/photo2.jpg";
import Photo3 from "../assets/images/carousel/photo3.jpg";
import Photo4 from "../assets/images/carousel/photo4.jpg";
import Photo5 from "../assets/images/carousel/photo5.jpg";
import Photo6 from "../assets/images/carousel/photo6.jpg";
import Photo7 from "../assets/images/carousel/photo7.jpg";
import Photo8 from "../assets/images/carousel/photo8.jpg";

export const Carousel = () => {
  const images = [
    Photo1,
    Photo2,
    Photo3,
    Photo4,
    Photo5,
    Photo6,
    Photo7,
    Photo8,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden shadow-lg p-8">
      <div className="flex justify-center items-center w-4/5 mx-auto">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-65 object-cover transition-all duration-500 rounded-2xl"
        />
      </div>

      {/* Botões de navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
      >
        ▶
      </button>

      {/* Indicadores */}
      {/* <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div> */}

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-5/6 h-0.5 bg-white/30 rounded-full overflow-hidden">
        <div
          className="h-full bg-secondary transition-all duration-500"
          style={{
            width: `${((currentIndex + 1) / images.length) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};
