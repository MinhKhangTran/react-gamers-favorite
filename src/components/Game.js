import React from "react";
import { smallImage } from "../assets";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { Loader } from "./Loader";
const defaultImg =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

export const Game = ({ id, name, released, background_image }) => {
  const { openModal } = useGlobalContext();
  return (
    <Link to={`/game/${id}`} onClick={openModal}>
      <div className="bg-red-200 rounded-lg overflow-hidden text-center hover:shadow-2xl cursor-pointer">
        <h1 className="text-red-600 font-bold my-2">{name}</h1>
        <p className="text-red-500 my-2">{released}</p>
        <div className="w-full h-64">
          {background_image ? (
            <img
              className="h-full w-full object-cover"
              src={smallImage(background_image, 640)}
              alt={name}
            />
          ) : (
            <img
              className="h-full w-full  object-center"
              src={defaultImg}
              alt={name}
            />
          )}
        </div>
      </div>
    </Link>
  );
};
