import React, { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Overlay from "../Overlay";
import MovieTitle from "../MovieTitle";
import { MovieCardWrapper, MovieCardPoster } from "./MovieCardElements";
import Button from "../Button";

const MovieCard = ({
  movie,
  buttonSrcTv,
  handleClickTv,
  buttonSrcHeart,
  handleClickHeart,
  handleClickTrash,
  buttonSrcTrash,
}) => {
  const { imgBaseUrl, imgPoster } = useContext(MovieContext);

  return (
    <MovieCardWrapper>
      <MovieCardPoster src={`${imgBaseUrl}${imgPoster}${movie.poster_path}`} />
      <Overlay
        rating={movie.vote_average}
        title={movie.title}
        MovieTitle={MovieTitle}
        Button={Button}
        movie={movie}
        buttonSrcTv={buttonSrcTv}
        handleClickTv={handleClickTv}
        buttonSrcHeart={buttonSrcHeart}
        handleClickHeart={handleClickHeart}
        buttonSrcTrash={buttonSrcTrash}
        handleClickTrash={handleClickTrash}
      />
    </MovieCardWrapper>
  );
};

export default MovieCard;
