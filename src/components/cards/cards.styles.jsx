import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import Card from "../card/card.component";

export const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: all 250ms ease-out;
  padding: 70px 0 0 0;
`;

export const CardsContainer = styled(TransitionGroup)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  transition: all 250ms ease-out;

  .pokemons-enter {
    opacity: 0;
    transform: scale(1.45) translate(0, -150px);
  }
  .pokemons-enter-active {
    opacity: 1;
    transform: scale(1) translate(0);
    transition: opacity 250ms, transform 250ms;
  }
  .pokemons-exit {
    opacity: 1;
  }
  .pokemons-exit-active {
    opacity: 0;
    transform: scale(1);
    transition: opacity 250ms, transform 250ms;
  }
`;

export const CardsAnimation = styled(Card)``;

export const CardsEmptyMessage = styled.p`
  font-size: 28px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #303030;
  margin: 60px auto;
  padding: 20px;
  border-radius: 20px;
  background: linear-gradient(
    to left top,
    rgba(248, 248, 248, 0.2),
    rgba(248, 248, 248, 0.5)
  );
`;

export const LoadButtonContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  margin: 15px auto 0 auto;
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
