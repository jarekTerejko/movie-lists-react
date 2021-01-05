import React from "react";
import StarRating from "../StarRating";
import { OverlayWrapper } from "./OverlayElements";

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
    </OverlayWrapper>
  );
};

export default Overlay;
