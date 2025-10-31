import { CardArtist } from "./CardArtist";
import type { ArtistsProps } from "../../types/artists";
import { ArrayArtists } from "../../data/artistsData";
import { Link } from "react-router-dom";
export const Artists = ({ Title }: ArtistsProps) => {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col gap-10 items-center justify-center text-center mt-32"
      id="artists"
    >
      <div className="flex flex-col items-center justify-centerp-10 rounded-xl ">
        <h2 className="relative text-2xl md:text-3xl font-irish font-normal text-secondary uppercase mb-6">
          {Title}
        </h2>
        <div className="flex md:grid md:grid-cols-2 flex-col md:flex-row justify-center items-center gap-10">
          {ArrayArtists.map(
            ({ Artist, Tattoo, NameTattoo, StyleTattoo }, index) => (
              <Link to={`/artist/${index}`} key={index}>
                <CardArtist
                  Artist={Artist}
                  Tattoo={Tattoo}
                  NameTattoo={NameTattoo}
                  StyleTattoo={StyleTattoo}
                />
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
};
