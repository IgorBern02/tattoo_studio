import { CardArtist } from "./CardArtist";
import type { ArtistsProps } from "../../types/artists";
import { ArrayArtists } from "../../data/artistsData";
export const Artists = ({ Title }: ArtistsProps) => {
  return (
    <section className="relative w-full min-h-screen flex flex-col gap-10 items-center justify-center text-center mt-30">
      <div className="flex flex-col items-center justify-centerp-10 rounded-xl ">
        <h2 className="relative text-2xl font-bold text-secondary uppercase mb-6">
          {Title}
        </h2>
        <div className="flex flex-col justify-center items-center gap-10">
          {ArrayArtists.map(
            ({ Artist, Tattoo, NameTattoo, StyleTattoo }, index) => (
              <CardArtist
                key={index}
                Artist={Artist}
                Tattoo={Tattoo}
                NameTattoo={NameTattoo}
                StyleTattoo={StyleTattoo}
              />
            )
          )}
        </div>
      </div>
      ;
    </section>
  );
};
