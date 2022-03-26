import React from "react";
import { CustomInput } from "./search-box.styles";

export const SearchBox = ({ placeholder, handleChange, type, min }) => (
  <CustomInput
    className="search"
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    min={min}
  />
);
