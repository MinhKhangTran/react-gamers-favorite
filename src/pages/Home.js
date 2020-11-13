import React from "react";
import { useGlobalContext } from "../context";
import { Games, GameDetail } from "../components";
import { motion } from "framer-motion";

export const Home = () => {
  const {
    popular_games,
    API_ENDPOINT,
    upcoming_games,
    newGames,
    query,
    searchedGame,
  } = useGlobalContext();
  return (
    <motion.div layout>
      {query.length > 0 && (
        <Games
          type="Searched Games"
          url={`${API_ENDPOINT}games?search=${query}&page_size=10`}
        />
      )}
      <Games type="Popular Games" url={`${API_ENDPOINT}${popular_games}`} />
      <Games type="Upcoming Games" url={`${API_ENDPOINT}${upcoming_games}`} />
      <Games type="New Games" url={`${API_ENDPOINT}${newGames}`} />

      <GameDetail />
    </motion.div>
  );
};
