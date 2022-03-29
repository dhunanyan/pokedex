import styled from "styled-components";
import { CardsEmptyMessage } from "../../components/cards/cards.styles";
import { Wrapper } from "../../global.styles";

export const FavouritesWrapper = styled.div`
  padding: 70px 0 0 0;
  width: 100%;
  min-height: calc(100vh - 70px);
  background-color: ${({ appColor }) => appColor.secondary};
  transition: background-color 150ms ease-out;
`;

export const FavouritesContainer = styled(Wrapper)``;

export const FavouritesCards = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const FavouritesEmptyMessage = styled(CardsEmptyMessage)``;
