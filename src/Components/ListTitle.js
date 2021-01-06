import React from "react";
import styled from "styled-components";

const ListTitleElement = styled.h2`
  font-size: 4rem;
  padding-left: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 4px;
  }

  &.movies--all::before {
    background: #fdcc0d;
  }

  &.movies--favourites::before {
    background: #e50914;
  }

  &.movies--watch-list::before {
    background: #3490de;
  }
`;

const ListTitle = ({ listName, className }) => {
  return <ListTitleElement className={className}>{listName}</ListTitleElement>;
};

export default ListTitle;
