import React, { useContext } from "react";
import { Container } from "./Components/Container";
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

  return (
    <>
      <Container>
        <MovieList
          movies={movies}
          buttonSrcTv={Tv}
          handleClickTv={handleAddToWatchLater}
          buttonSrcHeart={Heart}
          handleClickHeart={handleAddToFavourites}
        />
        <MovieList
          movies={favourites}
          buttonSrcTrash={Trash}
          handleClickTrash={handleRemoveFromFavourites}
          buttonSrcTv={Tv}
          handleClickTv={handleAddToWatchLater}
        />
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
