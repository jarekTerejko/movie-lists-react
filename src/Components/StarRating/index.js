import React from "react";
import {
  StarRatingImg,
  StarRatingNumber,
  StarRatingWrapper,
} from "./StarRatingElements";
import Star from "../../images/star.svg";

const StarRating = ({ rating }) => {
  return (
    <StarRatingWrapper>
      <StarRatingImg src={Star} />
      <StarRatingNumber>{rating}</StarRatingNumber>
    </StarRatingWrapper>
  );
};

export default StarRating;
