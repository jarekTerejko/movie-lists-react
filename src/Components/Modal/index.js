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
  ModalFlexWrapper,
} from "./ModalElements";
import CloseX from "../../images/x.svg";
import Calendar from "../../images/calendar.svg";
import Clock from "../../images/clock.svg";
import DollarSign from "../../images/dollar-sign.svg";
import Film from "../../images/film.svg";
import StarWhite from "../../images/star--white.svg";
import StarRating from "../StarRating";
import {
  MovieListContainer,
  MovieListWrapper,
} from "../MovieList/MovieListElements";
import {
  MovieCardPoster,
  MovieCardWrapper,
} from "../MovieCard/MovieCardElements";
import NoImage from "../../images/no-image-available.jpg";

const Modal = () => {
  const {
    movieDetails,
    closeModal,
    imgBig,
    imgPoster,
    imgBaseUrl,
    director,
    screenplay,
    cast,
  } = useContext(MovieContext);
  console.log(movieDetails);
  console.log(director);

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

  const modalBgDesktop = `url('${imgBaseUrl}${imgBig}${movieDetails.backdrop_path}')`;
  const modalBgMobile = `url("${imgBaseUrl}${imgPoster}${movieDetails.poster_path}")`;

  return (
    <ModalOverlay>
      <ModalWrapper>
        <ModalBgImg
          modalBgDesktop={modalBgDesktop}
          modalBgMobile={modalBgMobile}
        >
          <Button
            className="modal-close"
            buttonSrc={CloseX}
            handleClick={closeModal}
          />
        </ModalBgImg>
        <ModalContent>
          <div style={{ gridColumn: "1/3" }}>
            <ModalMovieTitle>{movieDetails.title}</ModalMovieTitle>
            <StarRating
              noMarginLeft
              starSrc={StarWhite}
              rating={movieDetails.vote_average}
            />
          </div>
          <ModalContentColLeft>
            {director.length > 0 ? <span>Director</span> : null}
            {director ? (
              <ModalContentP>
                {director.map((person, i, arr) => {
                  return (
                    <span key={i}>
                      {person.name}
                      {i + 1 < arr.length ? ", " : ""}
                    </span>
                  );
                })}
              </ModalContentP>
            ) : null}
          </ModalContentColLeft>
          <ModalContentColLeft>
            {screenplay.length > 0 ? <span>Screenplay</span> : null}
            {screenplay ? (
              <ModalContentP>
                {screenplay.map((person, i, arr) => {
                  return (
                    <span key={i}>
                      {person.name}
                      {i + 1 < arr.length ? ", " : ""}
                    </span>
                  );
                })}
              </ModalContentP>
            ) : null}
          </ModalContentColLeft>
          <ModalContentColLeft>
            {movieDetails.overview ? (
              <ModalContentP> {movieDetails.overview}</ModalContentP>
            ) : null}
          </ModalContentColLeft>
          <ModalContentColRight>
            <ModalFlexWrapper marginBottom={"1rem"}>
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
            </ModalFlexWrapper>
            {movieDetails.runtime ? (
              <ModalFlexWrapper marginBottom={"1rem"}>
                <ModalIcon src={Clock} />{" "}
                <span>{convertTime(movieDetails.runtime)}</span>
              </ModalFlexWrapper>
            ) : null}
            {movieDetails.release_date ? (
              <ModalFlexWrapper marginBottom={"1rem"}>
                <ModalIcon src={Calendar} />
                {movieDetails.release_date}
              </ModalFlexWrapper>
            ) : null}
            {movieDetails.budget ? (
              <ModalFlexWrapper marginBottom={"1rem"}>
                <ModalIcon src={DollarSign} />
                {formatter.format(movieDetails.budget)}
              </ModalFlexWrapper>
            ) : null}
          </ModalContentColRight>
          <MovieListWrapper style={{ gridColumn: "1/3" }}>
            <MovieListContainer>
              <MovieListWrapper>
                {cast.map((actor, i) => {
                  return (
                    <MovieCardWrapper style={{ width: "200px" }} key={i}>
                      <MovieCardPoster
                        src={
                          actor.profile_path
                            ? `${imgBaseUrl}${imgPoster}${actor.profile_path}`
                            : NoImage
                        }
                      />
                      <div
                        style={{
                          padding: "1rem 1rem 2rem 1rem",
                          background: "#f1f1f1",
                        }}
                      >
                        <ModalContentP
                          style={{ color: "#000", fontWeight: 700 }}
                        >
                          {actor.name}
                        </ModalContentP>
                        <span style={{ color: "#000" }}>{actor.character}</span>
                      </div>
                    </MovieCardWrapper>
                  );
                })}
              </MovieListWrapper>
            </MovieListContainer>
          </MovieListWrapper>
        </ModalContent>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default Modal;
