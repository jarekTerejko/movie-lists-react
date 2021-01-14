import React from "react";
import {
  StarRatingImg,
  StarRatingNumber,
  StarRatingWrapper,
} from "./StarRatingElements";
import Star from "../../images/star.svg";

const StarRating = ({ rating, starSrc, noMarginLeft }) => {
  return (
    <StarRatingWrapper noMarginLeft={noMarginLeft}>
      <StarRatingImg src={starSrc ? starSrc : Star} />
      <StarRatingNumber>{rating}</StarRatingNumber>
    </StarRatingWrapper>
  );
};

export default StarRating;
