import styled from "styled-components";

export const SearchBoxContainer = styled.div`
  width: calc(100% - 90px);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  position: fixed;
  padding: 20px 45px;
  background-color: #4267b2;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

  z-index: 100;

  &:hover {
  }
`;

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

  &::placeholder {
    font-weight: 700;
    color: #636363;
  }
`;
