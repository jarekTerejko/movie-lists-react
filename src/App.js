import React, { useContext } from "react";
import { Container } from "./Components/Container";
import ListTitle from "./Components/ListTitle";
import MovieList from "./Components/MovieList";
import { MovieContext } from "./Context/MovieContext";
import Heart from "./images/heart.svg";
import Trash from "./images/trash.svg";
import Tv from "./images/tv.svg";

const App = () => {
  const {
    movies,
    favourites,
    handleAddToFavourites,
    handleRemoveFromFavourites,
    watchLater,
    handleAddToWatchLater,
    handleRemoveFromWatchLater,
  } = useContext(MovieContext);

  const allMovies = "Movies";
  const favouritesMovies = "Favourites";
  const watchLaterMovies = "Watchlist";

  return (
    <>
      <Container>
        {movies.length && <ListTitle listName={allMovies} />}
        <MovieList
          movies={movies}
          buttonSrcTv={Tv}
          handleClickTv={handleAddToWatchLater}
          buttonSrcHeart={Heart}
          handleClickHeart={handleAddToFavourites}
        />
        {favourites.length > 0 && <ListTitle listName={favouritesMovies} />}
        <MovieList
          movies={favourites}
          buttonSrcTrash={Trash}
          handleClickTrash={handleRemoveFromFavourites}
          buttonSrcTv={Tv}
          handleClickTv={handleAddToWatchLater}
        />
        {watchLater.length > 0 && <ListTitle listName={watchLaterMovies} />}
        <MovieList
          movies={watchLater}
          buttonSrcTrash={Trash}
          handleClickTrash={handleRemoveFromWatchLater}
          buttonSrcHeart={Heart}
          handleClickHeart={handleAddToFavourites}
        />
      </Container>
    </>
  );
};

export default App;
