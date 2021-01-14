import React, { useState, createContext, useEffect } from "react";
import { apiKey, apiUrl, imgBaseUrl, imgPoster, imgBig } from "../config";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const initialFavourites =
    JSON.parse(localStorage.getItem("favourites")) || [];
  const initialWatchLater =
    JSON.parse(localStorage.getItem("watchLater")) || [];

  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [watchLater, setWatchLater] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState([]);
  const [screenplay, setScreenplay] = useState([]);

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

  const clearFavourites = () => {
    setFavourites([]);
  };

  const clearWatchLater = () => {
    setWatchLater([]);
  };

  const getMovies = async (endpoint) => {
    try {
      setIsLoading(true);
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log(data);
      if (data.results) {
        setIsLoading(false);
        setMovies(data.results);
        setCurrentPage(data.page);
        setTotalPages(data.total_pages);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    searchMovies(searchTerm);
    e.preventDefault();
  };

  const searchMovies = async (searchTerm) => {
    setMovies([]);
    let endpoint = "";

    if (searchTerm === "") {
      endpoint = `${apiUrl}movie/popular?api_key=${apiKey}&page=1`;
    } else {
      endpoint = `${apiUrl}search/movie?api_key=${apiKey}&query=${searchTerm}`;
    }

    await getMovies(endpoint);
  };

  const getMoreMovies = async (endpoint) => {
    if (searchTerm === "") {
      endpoint = `${apiUrl}movie/popular?api_key=${apiKey}&page=${
        currentPage + 1
      }`;
    } else {
      endpoint = `${apiUrl}search/movie?api_key=${apiKey}&query=${searchTerm}&page=${
        currentPage + 1
      }`;
    }

    try {
      setIsLoading(true);
      const response = await fetch(endpoint);
      const data = await response.json();
      // console.log(data);
      if (data.results) {
        setMovies([...movies, ...data.results]);
        // console.log(movies);
        setCurrentPage(data.page);
        setTotalPages(data.total_pages);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const getMovieDetails = async (id) => {
    try {
      setIsLoading(true);
      const endpoint = `${apiUrl}movie/${id}?api_key=${apiKey}`;
      const response = await fetch(endpoint);
      const data = await response.json();

      getMoviePeople(id);
      console.log(data);
      if (data) {
        setMovieDetails(data);
        document.body.style.overflow = "hidden";
      }
      setIsLoading(false);
    } catch (error) {
      isLoading(false);
      console.log(error);
    }
  };

  const getMoviePeople = async (id) => {
    try {
      const endpoint = `${apiUrl}movie/${id}/credits?api_key=${apiKey}`;
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log(data, "get people");
      if (data) {
        setCast(data.cast);
        setDirector(data.crew.filter((item) => item.job === "Director"));
        setScreenplay(data.crew.filter((item) => item.job === "Screenplay"));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    document.body.style.overflow = "";
    setMovieDetails(null);
    setCast([]);
    setDirector([]);
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        imgBaseUrl,
        imgPoster,
        imgBig,
        favourites,
        watchLater,
        handleAddToFavourites,
        handleRemoveFromFavourites,
        handleAddToWatchLater,
        handleRemoveFromWatchLater,
        searchTerm,
        setSearchTerm,
        searchMovies,
        handleSubmit,
        getMoreMovies,
        totalPages,
        currentPage,
        clearFavourites,
        clearWatchLater,
        isLoading,
        movieDetails,
        getMovieDetails,
        closeModal,
        getMoviePeople,
        director,
        cast,
        screenplay,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
