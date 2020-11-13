import React from "react";
import { useFetch } from "../hook/useFetch";
import { useGlobalContext } from "../context";
import { useParams } from "react-router-dom";

export const GameDetail = () => {
  const { API_ENDPOINT } = useGlobalContext();
  const { id } = useParams();
  const { loading, games } = useFetch(`${API_ENDPOINT}games/${id}`);
  return <div>Gamedetail</div>;
};
