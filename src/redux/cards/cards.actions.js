import CardsActionTypes from "./cards.types";

const {
  FETCH_CARDS_START,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  FETCH_STATS_START,
  FETCH_STATS_SUCCESS,
  FETCH_STATS_FAILURE,
  FETCH_ADD_OFFSET,
} = CardsActionTypes;

export const fetchCardsStart = (fetchUrl) => ({
  type: FETCH_CARDS_START,
  payload: fetchUrl,
});

export const fetchCardsSuccess = (cardsMapAndLoadMore) => ({
  type: FETCH_CARDS_SUCCESS,
  payload: cardsMapAndLoadMore,
});

export const fetchCardsFailure = (errorMessage) => ({
  type: FETCH_CARDS_FAILURE,
  payload: errorMessage,
});

export const fetchStatsStart = () => ({
  type: FETCH_STATS_START,
});

export const fetchStatsSuccess = (stats) => ({
  type: FETCH_STATS_SUCCESS,
  payload: stats,
});

export const fetchStatsFailure = (errorMessage) => ({
  type: FETCH_STATS_FAILURE,
  payload: errorMessage,
});

export const fetchAddOffset = () => ({
  type: FETCH_ADD_OFFSET,
});
