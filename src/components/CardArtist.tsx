import type { CardArtistProps } from "../types/cardArtist";
export const CardArtist = ({
  Artist,
  Tattoo,
  NameTattoo,
  StyleTattoo,
}: CardArtistProps) => {
  return (
    <div className="bg-[#1D1D1D] p-6 rounded-4xl shadow-lg w-65 h-4/6 border border-secondary ">
      {/* Conteúdo dos artistas */}
      <div className="flex flex-row items-center overflow-hidden mx-auto mb-4 gap-4">
        <div className="bg-red-500 w-14 h-14 rounded-full overflow-hidden shrink-0">
          <img src={Artist} alt="Tatuador 1" />
        </div>

        <div className=" w-full text-white text-left p-2 flex flex-col gap-1">
          <p className="text-white text-md font-bold">{NameTattoo}</p>
          <span className="text-white text-sm">{StyleTattoo}</span>
        </div>
      </div>

      <img
        src={Tattoo}
        alt="Tatuagem"
        className="rounded-2xl w-full h-60 object-cover"
      />
    </div>
  );
};
