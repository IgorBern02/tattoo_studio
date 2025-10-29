import { useParams } from "react-router-dom";
import { ArrayArtists } from "../data/artistsData";

export const useArtist = () => {
  const { id } = useParams<{ id: string }>();
  const artist = ArrayArtists[Number(id)];

  return { artist };
};
