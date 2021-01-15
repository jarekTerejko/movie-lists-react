import styled from "styled-components";

export const ButtonWrapper = styled.button`
  border: none;
  background: #000;
  padding: 1rem;
  cursor: pointer;
  margin: 0.5rem;
  padding: 1.2rem;
  border-radius: 50%;

  &:first-of-type {
    margin-left: 1rem;
  }

  &.modal-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`;

export const ButtonImg = styled.img``;
