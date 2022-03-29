import FavsActionTypes from "./favs.types";

export const fetchFavsItemsStart = (curerntUser) => ({
  type: FavsActionTypes.FETCH_FAVS_ITEMS_START,
  payload: curerntUser,
});

export const fetchFavsItemsSuccess = (cardsMap) => ({
  type: FavsActionTypes.FETCH_FAVS_ITEMS_SUCCESS,
  payload: cardsMap,
});

export const fetchFavsItemsFailure = (errorMessage) => ({
  type: FavsActionTypes.FETCH_FAVS_ITEMS_FAILURE,
  payload: errorMessage,
});

export const addFav = (item) => ({
  type: FavsActionTypes.ADD_FAV,
  payload: item,
});

export const removeFav = (item) => ({
  type: FavsActionTypes.REMOVE_FAV,
  payload: item,
});

export const clearFavs = () => ({
  type: FavsActionTypes.CLEAR_FAVS,
});
