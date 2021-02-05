import React, { useContext } from "react";
import { MovieListWrapper, MovieListContainer } from "./MovieListElements";
import MovieCard from "../MovieCard";
import { SearchFormBtn } from "../SearchForm/SearchFormElements";
import { MovieContext } from "../../Context/MovieContext";

const MovieList = ({
  movies,
  buttonSrcTv,
  handleClickTv,
  buttonSrcHeart,
  handleClickHeart,
  buttonSrcTrash,
  handleClickTrash,
  showBtnGetMore,
  showBtnClearFav,
  showBtnClearWatchLater,
  getMoreMovies,
}) => {
  const {
    totalPages,
    currentPage,
    clearFavourites,
    clearWatchLater,
  } = useContext(MovieContext);

  if (movies.length > 0) {
    // console.log(movies)
    return (
      <MovieListWrapper>
        <MovieListContainer>
          <MovieListWrapper>
            {movies.map((movie, i) => {
              return (
                <MovieCard
                  key={i}
                  movie={movie}
                  buttonSrcTv={buttonSrcTv}
                  handleClickTv={handleClickTv}
                  buttonSrcHeart={buttonSrcHeart}
                  handleClickHeart={handleClickHeart}
                  buttonSrcTrash={buttonSrcTrash}
                  handleClickTrash={handleClickTrash}
                />
              );
            })}
            {totalPages > currentPage && showBtnGetMore && (
              <SearchFormBtn onClick={getMoreMovies}>Get More</SearchFormBtn>
            )}
            {showBtnClearFav && (
              <SearchFormBtn onClick={clearFavourites}>Clear</SearchFormBtn>
            )}
            {showBtnClearWatchLater && (
              <SearchFormBtn onClick={clearWatchLater}>Clear</SearchFormBtn>
            )}
          </MovieListWrapper>
        </MovieListContainer>
      </MovieListWrapper>
    );
  } else {
    return null;
  }
};

export default MovieList;
