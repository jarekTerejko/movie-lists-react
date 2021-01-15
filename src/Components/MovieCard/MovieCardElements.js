import styled from "styled-components";

export const MovieCardWrapper = styled.div`
  width: 300px;
  overflow: hidden;
  margin: 2rem 1.5rem;
  transition: 0.3s;
  position: relative;
  border-radius: 1rem;

  @media screen and (max-width: 370px) {
    width: 250px;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:hover .overlay {
    transform: translateY(0);
    opacity: 1;
  }
`;
export const MovieCardPoster = styled.img``;
