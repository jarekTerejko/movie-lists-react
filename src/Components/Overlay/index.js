import React from "react";
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
}) => {
  return (
    <OverlayWrapper className="overlay">
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
      <MovieTitle title={title} />
    </OverlayWrapper>
  );
};

export default Overlay;
