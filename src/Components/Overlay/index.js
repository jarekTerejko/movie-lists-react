import React, { useContext } from "react";
import StarRating from "../StarRating";
import { OverlayWrapper } from "./OverlayElements";
import ChevronDown from "../../images/chevron-down.svg";
import { MovieContext } from "../../Context/MovieContext";

const Overlay = ({
  title,
  MovieTitle,
  Button,
  movie,
  buttonSrcTv,
  handleClickTv,
  buttonSrcHeart,
  handleClickHeart,
  handleClickTrash,
  buttonSrcTrash,
  rating,
}) => {
  const { getMovieDetails } = useContext(MovieContext);

  return (
    <OverlayWrapper className="overlay">
      <StarRating rating={rating} />
      <MovieTitle title={title} />
      {buttonSrcHeart && (
        <Button
          buttonSrc={buttonSrcHeart}
          handleClick={handleClickHeart}
          movie={movie}
        />
      )}

      {buttonSrcTv && (
        <Button
          buttonSrc={buttonSrcTv}
          handleClick={handleClickTv}
          movie={movie}
        />
      )}

      {buttonSrcTrash && (
        <Button
          buttonSrc={buttonSrcTrash}
          handleClick={handleClickTrash}
          movie={movie}
        />
      )}
      <Button
        buttonSrc={ChevronDown}
        handleClick={getMovieDetails}
        movie={movie.id}
      />
    </OverlayWrapper>
  );
};

export default Overlay;
