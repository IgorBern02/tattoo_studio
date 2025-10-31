import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { SectionImages } from "./SectionImages";
import { useArtist } from "../../hooks/useArtist";

export const ArtistPage = () => {
  const { artist } = useArtist();

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
      <div className="flex flex-col items-start justify-center gap-10 p-10 max-w-6xl mx-auto mt-15">
        <div className="flex flex-col md:flex-row w-full md:gap-10 ">
          <div className="flex flex-col w-3/4 gap-5">
            <h1 className="text-xl text-white">{artist.NameTattoo}</h1>
            <img
              src={artist.Artist}
              alt={artist.NameTattoo}
              className="w-60 h-60 md:w-68 md:h-68 object-cover shadow-lg"
            />
          </div>
          <div className="flex flex-row mt-12 ">
            <p className="text-white text-sm md:text-lg w-4/5">{artist.bio}</p>
          </div>
        </div>

        <div className="text-left text-white flex flex-row gap-4 w-full md:w-2/3">
          <button className="text-white bg-secondary px-6 py-2 h-10 hover:bg-accent transition cursor-pointer">
            Instagram
          </button>
        </div>
      </div>

      <SectionImages />
      <Footer />
    </div>
  );
};
