import styled from "styled-components";

export const SearchFormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  max-width: 800px;
  margin: 3rem auto;
  padding: 1.8rem;
  background: #000;
  position: relative;
  border-radius: 4rem;
`;

export const SearchFormInput = styled.input`
  background: none;
  border: none;
  padding: 1rem 1rem 1rem 6rem;
  color: #f1f1f1;
  width: 100%;
  font-size: 1.8rem;

  &::placeholder {
    color: #f1f1f1;
    font-size: 1.8rem;
    font-family: "Montserrat", sans-serif;
  }
`;

export const SearchFormBtn = styled.button`
  background: none;
  border: none;
  padding: 0.85rem 4rem;
  border-radius: 3rem;
  font-size: 2.2rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
  background: #fdcc0d;
  color: #000;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  white-space: nowrap;
  display: ${(showBtn) => (showBtn ? "block" : "none")};
  margin: ${(showBtn) => (showBtn ? "0 1.5rem" : "")};
  cursor: pointer;
`;

export const SearchFormImg = styled.img`
  position: absolute;
  top: 26px;
  left: 30px;
`;