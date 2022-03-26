import CardsActionTypes from "./cards.types";

const INITIAL_STATE = {
  cards: [],
  stats: [],
  isFetching: false,
  errorMessage: undefined,
  fetchUrl: "https://pokeapi.co/api/v2/pokemon?limit=20",
};

const {
  FETCH_CARDS_START,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  FETCH_STATS_START,
  FETCH_STATS_SUCCESS,
  FETCH_STATS_FAILURE,
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
        cards: state.cards.concat(action.payload[0]),
        fetchUrl: action.payload[1],
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
    default:
      return state;
  }
};

export default cardsReducer;
