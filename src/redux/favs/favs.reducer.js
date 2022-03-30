import FavsActionTypes from "./favs.types";
import { addItemtoFavs, removeItemFromFavs } from "./favs.utils";

const INITIAL_STATE = {
  favsItems: [],
  isFetching: false,
  isPosting: false,
  errosMessage: undefined,
  postSuccess: false,
};

const favsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavsActionTypes.FETCH_FAVS_ITEMS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FavsActionTypes.FETCH_FAVS_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        favsItems: action.payload,
      };
    case FavsActionTypes.FETCH_FAVS_ITEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errosMessage: action.payload,
      };
    case FavsActionTypes.ADD_FAV_START:
      return {
        ...state,
        isPosting: true,
      };
    case FavsActionTypes.ADD_FAV_SUCCESS:
      return {
        ...state,
        isPosting: false,
      };
    case FavsActionTypes.ADD_FAV_FAILURE:
      return {
        ...state,
        isPosting: false,
        errosMessage: action.payload,
      };
    case FavsActionTypes.ADD_FAV_LOCAL:
      return {
        ...state,
        favsItems: addItemtoFavs(state.favsItems, action.payload),
      };
    case FavsActionTypes.REMOVE_FAV:
      return {
        ...state,
        favsItems: removeItemFromFavs(state.favsItems, action.payload),
      };
    case FavsActionTypes.CLEAR_FAVS:
      return {
        ...state,
        favsItems: [],
      };
    default:
      return state;
  }
};

export default favsReducer;
