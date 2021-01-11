import React, { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Button from "../Button";
import {
  ModalOverlay,
  ModalWrapper,
  ModalMovieTitle,
  ModalBgImg,
  ModalContent,
  ModalContentColLeft,
  ModalContentColRight,
  ModalContentP,
  ModalIcon,
} from "./ModalElements";
import CloseX from "../../images/x.svg";
import Calendar from "../../images/calendar.svg";
import Clock from "../../images/clock.svg";
import DollarSign from "../../images/dollar-sign.svg";

const Modal = () => {
  const { movieDetails, closeModal, imgBig, imgBaseUrl } = useContext(
    MovieContext
  );
  console.log(movieDetails);

  const convertTime = (data) => {
    const min = data % 60;
    const h = (data - min) / 60;
    return `${h}h ${min}min`;
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <ModalOverlay>
      <ModalWrapper>
        <ModalBgImg
          style={{
            backgroundImage: `url(${imgBaseUrl}${imgBig}${movieDetails.backdrop_path})`,
          }}
        >
          <Button
            className="modal-close"
            buttonSrc={CloseX}
            handleClick={closeModal}
          />
        </ModalBgImg>
        <ModalContent>
          <ModalContentColLeft>
            <ModalMovieTitle>{movieDetails.title}</ModalMovieTitle>
            {movieDetails.overview ? (
              <ModalContentP> {movieDetails.overview}</ModalContentP>
            ) : null}
          </ModalContentColLeft>
          <ModalContentColRight>
            {movieDetails.runtime ? (
              <ModalContentP>
                <ModalIcon src={Clock} /> {convertTime(movieDetails.runtime)}
              </ModalContentP>
            ) : null}
            {movieDetails.release_date ? (
              <ModalContentP>
                <ModalIcon src={Calendar} />
                {movieDetails.release_date}
              </ModalContentP>
            ) : null}
            {movieDetails.budget ? (
              <ModalContentP>
                <ModalIcon src={DollarSign} />{" "}
                {formatter.format(movieDetails.budget)}
              </ModalContentP>
            ) : null}
          </ModalContentColRight>
        </ModalContent>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default Modal;
