import React from "react";
import { CustomInput, SearchBoxContainer } from "./search-box.styles";

export const SearchBox = ({ placeholder, handleChange }) => (
  <SearchBoxContainer>
    <CustomInput
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </SearchBoxContainer>
);
