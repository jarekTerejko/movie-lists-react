import React from "react";
import { ButtonImg, ButtonWrapper } from "./ButtonElements";

const Button = ({ buttonSrc, handleClick, movie, className, title }) => {
  return (
    <ButtonWrapper
      className={className}
      title={title}
      onClick={() => handleClick(movie)}
    >
      <ButtonImg src={buttonSrc} />
    </ButtonWrapper>
  );
};

export default Button;
