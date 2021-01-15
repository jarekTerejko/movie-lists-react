import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  padding: 3rem 2rem;
  overflow-y: scroll;
`;

export const ModalWrapper = styled.div`
  position: relative;
  min-height: 80rem;
  background: rgba(0, 0, 0, 0.99);
  max-width: 128rem;
  margin: 0rem auto;
  border-radius: 1rem;
`;

export const ModalBgImg = styled.div`
  min-height: 72rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background: ${(props) =>
    props.modalBgDesktop ? `${props.modalBgDesktop}` : "black"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media screen and (max-width: 500px) {
    background: ${(props) =>
      props.modalBgMobile ? `${props.modalBgMobile}` : "black"};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 1));
  }
`;

export const ModalContent = styled.div`
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;
export const ModalContentColLeft = styled.div`
  @media screen and (max-width: 500px) {
    grid-column: 1/3;
  }
`;

export const ModalIcon = styled.img`
  margin-right: 1rem;
`;

export const ModalContentColRight = styled.div`
  @media screen and (max-width: 500px) {
    grid-column: 1/3;
  }
`;

export const ModalMovieTitle = styled.h2`
  grid-column: 1/3;
  font-size: 4rem;
  margin-bottom: 0.5rem;
`;

export const ModalContentP = styled.p`
  margin-bottom: 1rem;
  font-size: 1.4rem;
  line-height: 1.5;
`;

export const ModalFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}` : ""};
`;
