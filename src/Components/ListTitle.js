import React from "react";
import styled from "styled-components";

const ListTitleElement = styled.h2`
  font-size: 4rem;
  padding-left: 1rem;
  margin-top: 3rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 4px;
    background: #e50914;
  }
`;

const ListTitle = ({ listName }) => {
  return <ListTitleElement>{listName}</ListTitleElement>;
};

export default ListTitle;
