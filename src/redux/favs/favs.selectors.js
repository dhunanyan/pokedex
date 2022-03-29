import { createSelector } from "reselect";

const selectFavs = (state) => state.favs;

export const selectFavsItems = createSelector(
  [selectFavs],
  (favs) => favs.favsItems
);

export const selectFavsItemsForPreview = createSelector([selectFavs], (favs) =>
  Object.values(favs.favsItems).length ? Object.values(favs.favsItems) : []
);

export const selectIsFavsItemsFetching = createSelector(
  [selectFavsItems],
  (favs) => favs.isFetching
);
