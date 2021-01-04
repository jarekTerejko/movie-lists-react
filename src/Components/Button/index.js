import React from "react";
import { ButtonImg, ButtonWrapper } from "./ButtonElements";

const Button = ({ buttonSrc, handleClick, movie }) => {
  return (
    <ButtonWrapper onClick={() => handleClick(movie)}>
      <ButtonImg src={buttonSrc} />
    </ButtonWrapper>
  );
};

export default Button;
