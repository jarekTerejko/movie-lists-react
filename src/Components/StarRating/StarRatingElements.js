import styled from "styled-components";

export const StarRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${(props) => (props.noMarginLeft ? "0" : "1rem")};
`;

export const StarRatingImg = styled.img``;

export const StarRatingNumber = styled.span`
  font-size: 2rem;
  margin-left: 0.5rem;
`;
