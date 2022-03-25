import CardsActionTypes from "./cards.types";

const INITIAL_STATE = {
  cards: null,
  isFetching: false,
  errorMessage: undefined,
  fetchUrl: "",
};

const {
  FETCH_CARDS_START,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  LOAD_CARDS_START,
  LOAD_CARDS_SUCCESS,
  LOAD_CARDS_FAILURE,
} = CardsActionTypes;

const cardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CARDS_START:
    case LOAD_CARDS_START:
      return {
        ...state,
        isFetching: true,
        fetchUrl: action.payload,
      };
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        cards: action.payload,
      };
    case LOAD_CARDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        cards: action.payload,
      };
    case FETCH_CARDS_FAILURE:
    case LOAD_CARDS_FAILURE:
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
