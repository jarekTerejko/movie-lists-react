import React, { useContext } from "react";
import { Container } from "./Components/Container";
import ListTitle from "./Components/ListTitle";
import Loader from "./Components/Loader";
import MovieList from "./Components/MovieList";
import SearchForm from "./Components/SearchForm";
import { MovieContext } from "./Context/MovieContext";
import Heart from "./images/heart.svg";
import Trash from "./images/trash.svg";
import Tv from "./images/tv.svg";
import Modal from "./Components/Modal";

const App = () => {
  const {
    movies,
    favourites,
    handleAddToFavourites,
    handleRemoveFromFavourites,
    watchLater,
    handleAddToWatchLater,
    handleRemoveFromWatchLater,
    getMoreMovies,
    clearFavourites,
    clearWatchLater,
    isLoading,
    movieDetails,
  } = useContext(MovieContext);

  const allMovies = "Movies";
  const favouritesMovies = "Favourites";
  const watchLaterMovies = "Watchlist";

  return (
    <>
      {isLoading ? <Loader /> : null}
      {movieDetails ? <Modal /> : null}
      <Container>
        <SearchForm />
        {movies.length > 0 && (
          <ListTitle className="movies--all" listName={allMovies} />
        )}
        <MovieList
          movies={movies}
          buttonSrcTv={Tv}
          handleClickTv={handleAddToWatchLater}
          buttonSrcHeart={Heart}
          handleClickHeart={handleAddToFavourites}
          getMoreMovies={getMoreMovies}
          showBtnGetMore={true}
        />
        {favourites.length > 0 && (
          <ListTitle
            className="movies--favourites"
            listName={favouritesMovies}
          />
        )}
        <MovieList
          movies={favourites}
          buttonSrcTrash={Trash}
          handleClickTrash={handleRemoveFromFavourites}
          buttonSrcTv={Tv}
          handleClickTv={handleAddToWatchLater}
          showBtnClearFav={true}
          clearFavourites={clearFavourites}
        />
        {watchLater.length > 0 && (
          <ListTitle
            className="movies--watch-list"
            listName={watchLaterMovies}
          />
        )}
        <MovieList
          movies={watchLater}
          buttonSrcTrash={Trash}
          handleClickTrash={handleRemoveFromWatchLater}
          buttonSrcHeart={Heart}
          handleClickHeart={handleAddToFavourites}
          showBtnClearWatchLater={true}
          clearWatchLater={clearWatchLater}
        />
      </Container>
    </>
  );
};

export default App;
