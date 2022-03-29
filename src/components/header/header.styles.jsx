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

const HeaderThumbNight = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
  "#fff"
)}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`;

const HeaderThumbDay = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
  "#fff"
)}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`;

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
  .MuiSwitch-root {
    width: ${({ isDark }) => (isDark ? "68px" : "58px")};
    padding: ${({ isDark }) => (isDark ? "10" : "12px")};
  }

  span {
    span {
      &:first-of-type {
        top: ${({ isDark }) => (isDark ? "-5px" : "0")};
      }
      span {
        &:first-of-type {
          background: ${({ checked, isDark }) =>
              isDark ? (checked ? HeaderThumbNight : HeaderThumbDay) : ""}
            center center no-repeat;
          width: ${({ isDark }) => (isDark ? "30px" : "20px")};
          height: ${({ isDark }) => (isDark ? "30px" : "20px")};
          background-color: ${({ checked, thumbColor, isCheckbox }) =>
            isCheckbox
              ? checked
                ? thumbColor.basic
                : thumbColor.secondary
              : ""};
        }

        &:last-of-type {
          width: ${({ isDark }) => (isDark ? "36px" : "48px")};
          height: ${({ isDark }) => (isDark ? "36px" : "48px")};
          transform: ${({ isDark }) =>
            isDark ? "translate(6px, 6px)" : "translate(0)"};
          background: none;
        }
      }
    }
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

export const HeaderColor = styled(Switch)``;

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
