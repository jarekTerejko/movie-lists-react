import React, { useContext } from "react";
import {
  SearchFormImg,
  SearchFormInput,
  SearchFormBtn,
  SearchFormWrapper,
  SearchFormEl,
} from "./SearchFormElements";
import SearchImg from "../../images/search.svg";
import { MovieContext } from "../../Context/MovieContext";
const SearchForm = () => {
  const { searchTerm, setSearchTerm, handleSubmit } = useContext(MovieContext);

  return (
    <SearchFormWrapper>
      <SearchFormEl onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          name="movie-search"
          placeholder="Search..."
        />
        <SearchFormBtn>Go</SearchFormBtn>
        <SearchFormImg src={SearchImg} alt="search-icon" />
      </SearchFormEl>
    </SearchFormWrapper>
  );
};

export default SearchForm;
