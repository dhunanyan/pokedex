import FavsActionTypes from "./favs.types";

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
