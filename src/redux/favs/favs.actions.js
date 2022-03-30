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

export const addFavsItemStart = (curerntUser, currentFav) => ({
  type: FavsActionTypes.ADD_FAV_START,
  payload: { curerntUser, currentFav },
});

export const addFavsItemSuccess = (addSuccess) => ({
  type: FavsActionTypes.ADD_FAV_SUCCESS,
  payload: addSuccess,
});

export const addFavsItemFailure = (errorMessage) => ({
  type: FavsActionTypes.ADD_FAV_FAILURE,
  payload: errorMessage,
});

export const deleteFavsItemFailure = (errorMessage) => ({
  type: FavsActionTypes.DELETE_FAV_FAILURE,
  payload: errorMessage,
});

export const deleteFavsItemStart = (curerntUser, currentFav) => ({
  type: FavsActionTypes.DELETE_FAV_START,
  payload: { curerntUser, currentFav },
});

export const deleteFavsItemSuccess = (deleteSuccess) => ({
  type: FavsActionTypes.DELETE_FAV_SUCCESS,
  payload: deleteSuccess,
});

export const removeFav = (item) => ({
  type: FavsActionTypes.DELETE_FAV_LOCAL,
  payload: item,
});

export const addFav = (item) => ({
  type: FavsActionTypes.ADD_FAV_LOCAL,
  payload: item,
});

export const clearFavs = () => ({
  type: FavsActionTypes.CLEAR_FAVS,
});
