import styled from "styled-components";

export const MovieCardWrapper = styled.div`
  width: 300px;
  overflow: hidden;
  margin: 5rem 1.5rem;
  margin-bottom: 5rem;
  transition: 0.3s;
  position: relative;
  border-radius: 0.5rem;

  &:hover {
    transform: scale(1.1);
  }

  &:hover .overlay {
    transform: translateY(0);
    opacity: 1;
  }
`;
export const MovieCardPoster = styled.img``;
