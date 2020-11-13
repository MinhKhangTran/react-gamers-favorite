import React from "react";
import { Game } from "./Game";
import { useFetch } from "../hook/useFetch";
import { Loader } from "./Loader";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Games = ({ type, url }) => {
  const { loading, games } = useFetch(url);
  if (loading) {
    <Loader />;
  }
  if (games.length < 1) {
    return (
      <div className="text-center mt-8 text-red-600 text-xl">
        <h1>No Matching Game found. Try another game</h1>
      </div>
    );
  }
  return (
    <div className="w-11/12 md:w-4/5 mx-auto my-4">
      <Title>
        <h1 className="text-red-500 text-xl md:text-3xl mb-4">{type}</h1>
      </Title>
      <motion.article className="grid md:grid-cols-2 grid-cols-1 gap-4" layout>
        {games.map((game) => {
          return <Game key={game.id} {...game} />;
        })}
      </motion.article>
    </div>
  );
};

const Title = styled.div`
  font-family: "Abril Fatface", cursive;
`;
