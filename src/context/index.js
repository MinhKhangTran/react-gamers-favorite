import React from "react";

const API_ENDPOINT = "https://api.rawg.io/api/";

// get Date
const format = (date) => {
  if (date < 10) {
    date = `0${date}`;
  }
  return date;
};

const month = format(new Date().getMonth() + 1);
const day = format(new Date().getDate());
const year = new Date().getFullYear();

const currentDate = `${year}-${month}-${day}`;
const lastYear = `${year - 1}-${month}-${day}`;
const nextYear = `${year + 1}-${month}-${day}`;

// GamesLinks
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
const searchedGame = (query) => `games?search=${query}&page_size=10`;

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <AppContext.Provider
      value={{
        API_ENDPOINT,
        popular_games,
        upcoming_games,
        newGames,
        showModal,
        openModal,
        closeModal,
        query,
        setQuery,
        searchedGame,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};
