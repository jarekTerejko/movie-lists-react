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
  showBtn,
}) => {
  const { totalPages, currentPage, getMoreMovies } = useContext(MovieContext);

  if (movies.length > 0) {
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
            {totalPages > currentPage && showBtn && (
              <SearchFormBtn showBtn onClick={getMoreMovies}>
                Get More
              </SearchFormBtn>
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
