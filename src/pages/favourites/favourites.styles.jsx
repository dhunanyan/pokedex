import styled, { css } from "styled-components";
import { CardsEmptyMessage } from "../../components/cards/cards.styles";
import { Wrapper } from "../../global.styles";

export const FavouritesCardWrapperLoading = styled.div`
  position: relative;
  width: 100%;
`;

export const FavouritesWrapper = styled.div`
  padding: 70px 0 0 0;
  width: 100%;
  min-height: calc(100vh);
  background-color: ${({ appColor }) => appColor.secondary};
  transition: background-color 150ms ease-out;
`;

export const FavouritesContainer = styled(Wrapper)`
  ${({ bigDisplay }) =>
    bigDisplay ? bigDisplayStyleContainer : smallDisplayStyleContainer}
`;

export const FavouritesDisplayButtons = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  padding: 5px;
  margin: 0 10px 0 auto;
`;

export const FavouritesDisplayButton = styled.button`
  font-size: 34px;
  color: #636363;
  background-color: rgba(241, 241, 241, 0.5);
  margin: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  transition: all 150ms ease-out;
  border-radius: 10px;

  &:hover {
    background-color: rgba(68, 68, 68, 0.15);
    color: ${({ appColor }) => appColor.basic};
  }
`;

const bigDisplayStyleContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  transition: all 250ms ease-out;
  padding: 30px 0;
  overflow: hidden;
`;

const bigDisplayStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: all 250ms ease-out;
`;

const smallDisplayStyleContainer = css``;

const smallDisplayStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 20px 0 0 0;
`;

export const FavouritesCards = styled.ul`
  ${({ bigDisplay }) => (bigDisplay ? bigDisplayStyle : smallDisplayStyle)}
`;

export const FavouritesEmptyMessage = styled(CardsEmptyMessage)``;
