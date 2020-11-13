import React from "react";
import { useFetch } from "../hook/useFetch";
import { Loader } from "./Loader";
import { useGlobalContext } from "../context";
import { smallImage } from "../assets";
const defaultImg =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

export const Screenshot = ({ id }) => {
  const { API_ENDPOINT } = useGlobalContext();
  const { loading, games } = useFetch(`${API_ENDPOINT}games/${id}/screenshots`);

  if (loading) {
    <Loader />;
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {games.map((game) => {
        return (
          <div key={game.id}>
            {game.image ? (
              <img
                className="rounded-md"
                src={smallImage(game.image, 640)}
                alt={`screenshot${game.id}`}
              />
            ) : (
              <img
                className="h-full w-full  object-center"
                src={defaultImg}
                alt={`screenshot${game.id}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
