import styled from "styled-components";

export const MovieCardWrapper = styled.div`
  width: 300px;
  overflow: hidden;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  margin-bottom: 5rem;
  transition: 0.3s;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }

  &:hover .overlay {
    transform: translateY(0);
    opacity: 1;
  }
`;
export const MovieCardPoster = styled.img``;
