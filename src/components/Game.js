import React from "react";
import { smallImage } from "../assets";
import { Link } from "react-router-dom";

export const Game = ({ id, name, released, background_image }) => {
  return (
    <Link to={`/game/${id}`}>
      <div className="bg-red-200 rounded-lg overflow-hidden text-center hover:shadow-2xl cursor-pointer">
        <h1 className="text-red-600 font-bold my-2">{name}</h1>
        <p className="text-red-500 my-2">{released}</p>
        <div className="w-full h-64">
          <img
            className="h-full w-full object-cover"
            src={smallImage(background_image, 640)}
            alt={name}
          />
        </div>
      </div>
    </Link>
  );
};
