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
import Film from "../../images/film.svg";
import StarWhite from "../../images/star--white.svg";
import StarRating from "../StarRating";

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
            background: movieDetails.backdrop_path
              ? `linear-gradient(to bottom, rgba(0,0,0,.1) 20%, rgba(0,0,0,.9) 100%), url('${imgBaseUrl}${imgBig}${movieDetails.backdrop_path}')`
              : "black",
          }}
        >
          <Button
            className="modal-close"
            buttonSrc={CloseX}
            handleClick={closeModal}
          />
        </ModalBgImg>
        <ModalContent>
          <ModalMovieTitle>
            {movieDetails.title}
            <StarRating
              starSrc={StarWhite}
              rating={movieDetails.vote_average}
            />
          </ModalMovieTitle>
          <ModalContentColLeft>
            {movieDetails.overview ? (
              <ModalContentP> {movieDetails.overview}</ModalContentP>
            ) : null}
          </ModalContentColLeft>
          <ModalContentColRight>
            <ModalContentP>
              <ModalIcon src={Film} />
              <span>
                {movieDetails.genres
                  ? movieDetails.genres.map((item, i, arr) => {
                      return (
                        <span key={item.id}>
                          {item.name}
                          {i + 1 < arr.length ? ", " : ""}
                        </span>
                      );
                    })
                  : null}
              </span>
            </ModalContentP>
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
