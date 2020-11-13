import React from "react";
import { useGlobalContext } from "../context";
import { Games, GameDetail } from "../components";

export const Home = () => {
  const {
    popular_games,
    API_ENDPOINT,
    upcoming_games,
    newGames,
  } = useGlobalContext();
  return (
    <div>
      <Games type="Popular Games" url={`${API_ENDPOINT}${popular_games}`} />
      <Games type="Upcoming Games" url={`${API_ENDPOINT}${upcoming_games}`} />
      <Games type="New Games" url={`${API_ENDPOINT}${newGames}`} />

      <GameDetail />
    </div>
  );
};
