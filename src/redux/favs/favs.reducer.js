import FavsActionTypes from "./favs.types";
import { addItemToFavs, removeItemFromFavs } from "./favs.utils";

const INITIAL_STATE = {
  favsItems: [],
};

const favsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavsActionTypes.ADD_FAV:
      return {
        ...state,
        favsItems: addItemToFavs(state.favsItems, action.payload),
      };
    case FavsActionTypes.REMOVE_FAV:
      return {
        ...state,
        favsItems: removeItemFromFavs(state.favsItems, action.payload),
      };
    case FavsActionTypes.CLEAR_FAVS: {
      return {
        ...state,
        favsItems: [],
      };
    }
    default:
      return state;
  }
};

export default favsReducer;
