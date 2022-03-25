import CardsActionTypes from "./cards.types";

const { FETCH_CARDS_START, FETCH_CARDS_SUCCESS, FETCH_CARDS_FAILURE } =
  CardsActionTypes;

export const fetchCardsStart = (fetchUrl) => ({
  type: FETCH_CARDS_START,
  payload: fetchUrl,
});

export const fetchCardsSuccess = (cardsMap) => ({
  type: FETCH_CARDS_SUCCESS,
  payload: cardsMap,
});

export const fetchCardsFailure = (errorMessage) => ({
  type: FETCH_CARDS_FAILURE,
  payload: errorMessage,
});
