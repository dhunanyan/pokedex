import styled from "styled-components";

export const FormInputWrapper = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: rgba(248, 248, 248, 0.7);
  color: grey;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  min-width: calc(100% - 15px);
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;
  border-radius: 10px;

  &:focus {
    outline: none;
  }

  &:focus ~ .form-input-label {
    top: -14px;
    font-size: 12px;
    color: #303030;
  }
`;
