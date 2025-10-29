import { useState } from "react";
import Photo1 from "../../assets/images/carousel/photo1.jpg";
import Photo2 from "../../assets/images/carousel/photo2.jpg";
import Photo3 from "../../assets/images/carousel/photo3.jpg";
import Photo4 from "../../assets/images/carousel/photo4.jpg";
import Photo5 from "../../assets/images/carousel/photo5.jpg";
import Photo6 from "../../assets/images/carousel/photo6.jpg";
import Photo7 from "../../assets/images/carousel/photo7.jpg";
import Photo8 from "../../assets/images/carousel/photo8.jpg";

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
    setCurrentIndex((prev) => (prev + 2) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 + images.length) % images.length);
  };

  // Pega duas imagens (a atual e a próxima)
  const visibleImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden shadow-lg p-8">
      <div className="flex justify-center items-center gap-4 transition-all duration-500 p-2">
        {visibleImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${currentIndex + index + 1}`}
            className="w-1/2 h-72 object-cover rounded-2xl shadow-md"
          />
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 cursor-pointer"
      >
        ▶
      </button>

      {/* Barra de progresso */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-5/6 h-0.5 bg-white/30 rounded-full overflow-hidden">
        <div
          className="h-full bg-secondary transition-all duration-500"
          style={{
            width: `${
              (((currentIndex + 2) % images.length) / images.length) * 100
            }%`,
          }}
        ></div>
      </div>
    </div>
  );
};
