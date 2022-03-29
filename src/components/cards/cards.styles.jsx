import { BeatLoader } from "react-spinners";
import { TransitionGroup } from "react-transition-group";
import styled from "styled-components";

const getRandomBool = () => {
  const randomNum = Math.random();
  return randomNum < 0.5 ? false : 1;
};

const getTranslateValue = () =>
  getRandomBool()
    ? "translate(0, -150px)"
    : getRandomBool()
    ? "translate(0, 150px)"
    : getRandomBool()
    ? "translate(150px, 0)"
    : "translate(0, 0)";

export const CardsWrapper = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  transition: all 250ms ease-out;
  padding: 30px 0;
  overflow: hidden;
`;

export const CardsContainer = styled(TransitionGroup)`
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: all 250ms ease-out;

  .pokemons-enter {
    opacity: 0;

    &.pokemon__4,
    &.pokemon__8 {
      transform: translate(0, -150px);
    }
    &.pokemon__2,
    &.pokemon__6 {
      transform: translate(0, 150px);
    }
    &.pokemon__3,
    &.pokemon__5 {
      transform: translate(150px, 0);
    }
    &.pokemon__1,
    &.pokemon__7 {
      transform: translate(-150px, 0);
    }
  }
  .pokemons-enter-active {
    &.pokemon__1,
    &.pokemon__2,
    &.pokemon__3,
    &.pokemon__4,
    &.pokemon__5,
    &.pokemon__6,
    &.pokemon__7,
    &.pokemon__8 {
      opacity: 1;
      transform: translate(0);
      transition: opacity 180ms, transform 250ms;
    }
  }
  .pokemons-exit {
    opacity: 1;
  }
  .pokemons-exit-active {
    opacity: 0;
    transition: opacity 250ms, transform 250ms;

    &.pokemon__1,
    &.pokemon__8 {
      transform: translate(0, -150px);
    }
    &.pokemon__2,
    &.pokemon__6 {
      transform: translate(0, 150px);
    }
    &.pokemon__3,
    &.pokemon__5 {
      transform: translate(150px, 0);
    }
    &.pokemon__4,
    &.pokemon__7 {
      transform: translate(-150px, 0);
    }
  }
`;

export const CardsEmptyMessage = styled.p`
  font-size: 28px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #525252;
  margin: 120px auto;
  padding: 20px;
  border-radius: 20px;
  background: linear-gradient(
    to left top,
    rgba(248, 248, 248, 0.2),
    rgba(248, 248, 248, 0.5)
  );
`;

export const CardsLoading = styled.div`
  margin: 25px auto 320px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardsPageLoading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoadButtonContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  margin: 15px auto 300px auto;
  width: max-content;
  transition: all 150ms ease-out;
  width: 50px;
  height: 50px;

  &:hover {
    width: 150px;
    border-radius: 10px;

    button {
      color: #f1f1f1;
      background-color: #303030;

      p {
        animation: showLoadButtonText 150ms ease-out 160ms forwards;
      }

      svg {
        transform: translate(0, 38px);
      }
    }
  }

  @keyframes showLoadButtonText {
    0% {
    }
    1% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const LoadButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 36px;
  font-weight: 700;
  padding: 8px;
  width: 100%;
  height: 100%;
  color: #636363;
  background-color: rgba(248, 248, 248, 0.5);
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.2);
  position: relative;
  z-index: 1;
  transition: all 150ms ease-out;

  svg {
    color: #636363;
    transition: all 150ms ease-out;
  }
`;

export const LoadButtonText = styled.p`
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  opacity: 0;
`;
