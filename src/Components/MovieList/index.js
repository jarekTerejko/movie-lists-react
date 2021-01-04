import React from "react";
import { MovieListWrapper, MovieListContainer } from "./MovieListElements";
import MovieCard from "../MovieCard";

const MovieList = ({
  movies,

  buttonSrcTv,
  handleClickTv,
  buttonSrcHeart,
  handleClickHeart,
  buttonSrcTrash,
  handleClickTrash,
}) => {
  if (movies.length) {
    return (
      <MovieListWrapper>
        {console.log(movies)}
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
          </MovieListWrapper>
        </MovieListContainer>
      </MovieListWrapper>
    );
  } else {
    return null;
  }
};

export default MovieList;
