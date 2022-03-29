import React from "react";
import { FormInputContainer, FormInputWrapper } from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <FormInputWrapper>
    <FormInputContainer
      onChange={handleChange}
      {...otherProps}
      placeholder={label}
    />
  </FormInputWrapper>
);

export default FormInput;
