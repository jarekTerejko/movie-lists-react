import React, { useState, createContext, useEffect } from "react";
import { apiKey, apiUrl, imgBaseUrl, imgPoster } from "../config";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const initialFavourites =
    JSON.parse(localStorage.getItem("favourites")) || [];
  const initialWatchLater =
    JSON.parse(localStorage.getItem("watchLater")) || [];

  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [watchLater, setWatchLater] = useState([]);

  useEffect(() => {
    const endpoint = `${apiUrl}movie/popular?api_key=${apiKey}&page=1`;

    getMovies(endpoint);
    // return () => {
    //     cleanup
    // }
  }, []);

  useEffect(() => {
    setFavourites(initialFavourites);
    setWatchLater(initialWatchLater);
    // return () => {
    //   cleanup
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
    // return () => {
    //   cleanup
    // }
  }, [favourites]);

  useEffect(() => {
    localStorage.setItem("watchLater", JSON.stringify(watchLater));
    // return () => {
    //   cleanup
    // }
  }, [watchLater]);

  const handleAddToFavourites = (movie) => {
    if (favourites.some((item) => item.id === movie.id)) return;

    const newFavourites = [...favourites, movie];
    setFavourites(newFavourites);
    // localStorage.setItem("favourites", JSON.stringify(favourites));
  };

  const handleRemoveFromFavourites = (movie) => {
    const newFavourites = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );
    setFavourites(newFavourites);
  };

  const handleAddToWatchLater = (movie) => {
    if (watchLater.some((item) => item.id === movie.id)) return;

    const newWatchLater = [...watchLater, movie];
    setWatchLater(newWatchLater);
  };

  const handleRemoveFromWatchLater = (movie) => {
    const newWatchLater = watchLater.filter((item) => item.id !== movie.id);
    setWatchLater(newWatchLater);
  };

  const getMovies = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log(data);
      if (data.results) {
        setMovies(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        imgBaseUrl,
        imgPoster,
        favourites,
        watchLater,
        handleAddToFavourites,
        handleRemoveFromFavourites,
        handleAddToWatchLater,
        handleRemoveFromWatchLater,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
