import { useArtist } from "../../hooks/useArtist";

export const SectionImages = () => {
  const { artist } = useArtist();

  const heights = [
    "h-[250px]  md:h-[300px]",
    "h-[150px]  md:h-[200px]",
    "h-[180px]  md:h-[400px]",
    "h-[280px]  md:h-[300px]",
    "h-[220px]  md:h-[200px]",
    "h-[300px]  md:h-[400px]",
  ];

  {
    /* Seção das imagens (grid responsivo mobile) */
  }
  return (
    <section className="w-full bg-black px-6 py-16">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">
        Obras de {artist.NameTattoo}
      </h2>

      {/* GRID RESPONSIVO */}
      <div
        className="
            grid 
            grid-cols-1
            gap-4
            "
      >
        {artist.Tattoos?.length ? (
          <div
            className="
            grid 
            grid-cols-1
            sm:grid-cols-2
            gap-4
            "
          >
            {artist.Tattoos.map((tattoo, index) => (
              <div
                key={index}
                className={`${heights[index % heights.length]} overflow-hidden`}
              >
                <img
                  src={tattoo}
                  alt={`Tatuagem ${index + 1} feita por ${artist.NameTattoo}`}
                  className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center">
            Nenhuma tatuagem cadastrada ainda.
          </p>
        )}
      </div>
    </section>
  );
};
