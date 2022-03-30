import CardsActionTypes from "./cards.types";
import { addLoadedToState } from "./cards.utils";

const INITIAL_STATE = {
  cards: [],
  stats: [],
  isFetching: false,
  errorMessage: undefined,
  fetchOffset: 0,
};

const {
  FETCH_CARDS_START,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  FETCH_STATS_START,
  FETCH_STATS_SUCCESS,
  FETCH_STATS_FAILURE,
  FETCH_ADD_OFFSET,
} = CardsActionTypes;

const cardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CARDS_START:
    case FETCH_STATS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        cards: addLoadedToState(state.cards, action.payload),
      };
    case FETCH_STATS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        stats: action.payload,
      };
    case FETCH_CARDS_FAILURE:
    case FETCH_STATS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case FETCH_ADD_OFFSET:
      return {
        ...state,
        fetchOffset: state.fetchOffset + 8,
      };
    default:
      return state;
  }
};

export default cardsReducer;
