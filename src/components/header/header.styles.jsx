import { Switch } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Wrapper } from "../../global.styles";

const blue = {
  700: "#0059B2",
};

const grey = {
  400: "#BFC7CF",
  800: "#2F3A45",
};

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #303030;
  color: #f1f1f1;
  z-index: 999999999999;
`;

export const HeaderContainer = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 100%;
  width: calc(100% - 60px);
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLogoText = styled.p`
  font-size: 42px;
  font-family: "Righteous", cursive;
`;

export const HeaderLogoIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 42px;
  margin: 0 5px 0 0;
`;

export const HeaderList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderColorsList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 45px 5px 5px;
  border-radius: ${({ showColors }) => (showColors ? "20px" : "30px")};
  background-color: #fafae7;
  position: absolute;
  right: 131px;
  top: 50%;
  transform: translate(0, -50%);
  width: ${({ showColors }) => (showColors ? "250px" : "0px")};
  height: 40px;
  transition: all 200ms linear;
  overflow: hidden;

  * {
    transition: all 200ms ease-in;
    position: ${({ showColors }) => (showColors ? "static" : "absolute")};
    opacity: ${({ showColors }) => (showColors ? "1" : "0")};
    pointer-events: ${({ showColors }) => (showColors ? "all" : "none")};
    transition: opacity 0ms ease-in;
  }
`;

export const HeaderItem = styled.li`
  display: ${({ isCheckbox }) => (!isCheckbox ? "flex" : "block")};
  margin: ${({ isCheckbox }) => (isCheckbox ? "0 0px" : "0 20px")};

  &:first-of-type {
    margin: ${({ isCheckbox }) => (isCheckbox ? "0 5px" : "0 20px 0 0")};
  }

  &:last-of-type {
    margin: ${({ isCheckbox }) => (isCheckbox ? "0 5px" : "0 0 0 20px")};
  }
`;

export const HeaderColorPicker = styled.button`
  width: 40px;
  cursor: pointer;
  opacity: 0.85;
  transition: all 150ms ease-out;
  display: ${({ isCheckbox }) => (!isCheckbox ? "flex" : "block")};
  background: transparent;

  &:hover {
    animation: shakeColorPicker 300ms both;
  }

  img {
    width: 100%;
  }

  @keyframes shakeColorPicker {
    0% {
      transform: scale(1) rotate(-0deg);
      opacity: 0.85;
    }
    14.2% {
      transform: scale(1) rotate(-25deg);
      opacity: 0.85;
    }
    28.4% {
      transform: scale(1.04) rotate(-12.5deg);
      opacity: 0.85;
    }
    42.6% {
      transform: scale(1.08) rotate(0deg);
      opacity: 0.925;
    }
    56.8% {
      transform: scale(1.12) rotate(12.5deg);
      opacity: 0.925;
    }
    71% {
      transform: scale(1.16) rotate(25deg);
      opacity: 0.95;
    }
    83.2% {
      transform: scale(1.17) rotate(12.5deg);
      opacity: 1;
    }
    100% {
      transform: scale(1.18) rotate(0deg);
      opacity: 1;
    }
  }
`;

export const HeaderColor = styled(Switch)`
  span {
    span {
      &:first-of-type {
        background-color: ${({ checked, thumbColor }) =>
          checked ? thumbColor.basic : thumbColor.secondary};
      }
    }
  }
`;

export const HeaderLink = styled(Link)`
  font-size: 20px;
  color: #f1f1f1;
  font-weight: 700;
  text-decoration: none;
  padding: 5px;
  display: flex;
  transition: all 150ms ease-out;

  &:hover {
    color: #ffd300;

    svg {
      transition: all 150ms ease-out;
      color: #ffd300;
      transform: scale(1.25);
    }
  }
`;

export const HeaderItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin: 0 0 0 5px;
  transition: all 150ms ease-out;

  svg {
    transition: all 150ms ease-out;
    color: #f1f1f1;
    transform: scale(1);
  }
`;
