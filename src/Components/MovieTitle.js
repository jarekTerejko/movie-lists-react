import React from "react";
import styled from "styled-components";

const MovieTitleElement = styled.h3`
  font-size: 2rem;
  padding-left: 1rem;
`;

const MovieTitle = ({ title }) => {
  return <MovieTitleElement>{title}</MovieTitleElement>;
};

export default MovieTitle;
