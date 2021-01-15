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
          title="Add to Favourites"
        />
      )}

      {buttonSrcTv && (
        <Button
          buttonSrc={buttonSrcTv}
          handleClick={handleClickTv}
          movie={movie}
          title="Add to Watchlist"
        />
      )}

      {buttonSrcTrash && (
        <Button
          buttonSrc={buttonSrcTrash}
          handleClick={handleClickTrash}
          movie={movie}
          title="Remove from List"
        />
      )}
      <Button
        buttonSrc={ChevronDown}
        handleClick={getMovieDetails}
        movie={movie.id}
        title="More Info"
      />
    </OverlayWrapper>
  );
};

export default Overlay;
