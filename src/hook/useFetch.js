import React from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = React.useState(false);
  const [games, setGames] = React.useState([]);
  const fetchGames = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setGames(data.results || data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchGames(url);
  }, [url]);

  return { loading, games };
};
