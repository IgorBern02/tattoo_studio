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

      <SectionImages />
      <Footer />
    </div>
  );
};
