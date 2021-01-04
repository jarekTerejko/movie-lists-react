import styled from "styled-components";

export const OverlayWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 3rem 2rem 3rem 1rem;

  &.overlay {
    position: absolute;
    opacity: 0;
    bottom: 0;
    width: 100%;
    transform: translateY(100%);
    transition: 0.3s;
  }
`;
