import styled from "styled-components";

export const CustomInput = styled.input`
  font-size: 24px;
  width: 100%;
  padding: 10px 25px;
  border-radius: 10px;
  font-weight: 700;
  color: #303030;
  background: linear-gradient(
    to left top,
    rgba(248, 248, 248, 0.4),
    rgba(248, 248, 248, 0.7)
  );
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.2);
  position: relative;
  z-index: 2;
  height: 52px;

  &:first-of-type {
    margin: 0 25px 0 0;
  }

  &:last-of-type {
    margin: 0 0 0 25px;
  }

  &::placeholder {
    font-weight: 700;
    color: #636363;
  }
`;
