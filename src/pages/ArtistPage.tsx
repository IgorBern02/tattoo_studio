import { useParams } from "react-router-dom";
import { ArrayArtists } from "../data/artistsData";
import { Header } from "../components/Header/Header";

export const ArtistPage = () => {
  const { id } = useParams<{ id: string }>();
  const artist = ArrayArtists[Number(id)];

  const heights = [
    "h-[250px] sm:h-[300px]",
    "h-[150px] sm:h-[180px]",
    "h-[180px] sm:h-[200px]",
    "h-[280px] sm:h-[320px]",
    "h-[220px] sm:h-[260px]",
    "h-[300px] sm:h-[350px]",
  ];

  if (!artist) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">
          Artista não encontrado 😢
        </h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <Header Title="Tattoo Studio" />

      {/* Seção principal */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 p-10 max-w-6xl mx-auto mt-15">
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <h1 className="text-xl text-white">{artist.NameTattoo}</h1>
          <img
            src={artist.Artist}
            alt={artist.NameTattoo}
            className="w-60 h-60 object-cover shadow-lg"
          />
        </div>

        <div className="text-left text-white flex flex-row gap-4 w-full md:w-2/3">
          <button className="text-white bg-secondary px-6 py-2 h-10 hover:bg-accent transition">
            Instagram
          </button>
          <p className="text-white text-sm">{artist.bio}</p>
        </div>
      </div>

      {/* Seção das imagens (grid responsivo mobile) */}
      <section className="w-full bg-black px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Obras de {artist.NameTattoo}
        </h2>

        {/* GRID RESPONSIVO */}
        <div
          className="
            grid 
            grid-cols-1
            sm:grid-cols-2
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
                  className={`${
                    heights[index % heights.length]
                  } overflow-hidden`}
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
    </div>
  );
};
