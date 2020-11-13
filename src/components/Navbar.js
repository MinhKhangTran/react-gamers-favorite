import React from "react";
import { useGlobalContext } from "../context";

export const Navbar = () => {
  const { query, setQuery } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-11/12 md:w-4/5 mx-auto mt-4">
      <form action="" className="flex flex-col" onSubmit={handleSubmit}>
        <label className="text-red-500 text-2xl md:text-3xl" htmlFor="suche">
          Search your favorite game:
        </label>
        <input
          className="md:w-1/2 w-full text-xl md:text-2xl text-red-700 bg-red-200 rounded-lg pl-2"
          type="text"
          id="suche"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </form>
    </div>
  );
};
