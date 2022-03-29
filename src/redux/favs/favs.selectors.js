import { createSelector } from "reselect";

const selectFavs = (state) => state.favs;

export const selectFavsItems = createSelector(
  [selectFavs],
  (favs) => favs.favsItems
);
