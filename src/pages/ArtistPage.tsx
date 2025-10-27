import { useParams } from "react-router-dom";
import { ArrayArtists } from "../data/artistsData";
import { Header } from "../components/Header/Header";

interface ArtistPageParams {
  id: string;
}
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
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 p-10 max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <img
            src={artist.Artist}
            alt={artist.NameTattoo}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <button className="text-white bg-secondary px-6 py-2 h-10 hover:bg-accent transition rounded-md">
            Instagram
          </button>
        </div>

        <div className="text-left text-white flex flex-col gap-4 w-full md:w-2/3">
          <h1 className="text-3xl font-bold">{artist.NameTattoo}</h1>
          <p className="text-gray-300">{artist.bio}</p>
        </div>
      </div>

      {/* Seção das imagens (grid responsivo mobile) */}
      <section className="w-full bg-black px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Obras de {artist.NameTattoo}
        </h2>
        <p className="text-white text-sm text-center mb-8">Página (0 - 4)</p>

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
