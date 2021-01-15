import styled from "styled-components";

export const MovieListContainer = styled.div`
  padding: 2rem 0;
`;
export const MovieListWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  align-items: center;
  min-height: 540px;

  @media screen and (max-width: 370px) {
    min-height: 420px;
  }
`;
