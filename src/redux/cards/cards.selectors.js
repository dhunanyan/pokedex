import { createSelector } from "reselect";

const selectCardsCollection = (state) => state.cardsCollection;

export const selectFetchUrl = createSelector(
  [selectCardsCollection],
  (cardsCollection) => cardsCollection.fetchUrl
);

export const selectCards = createSelector(
  [selectCardsCollection],
  (cardsCollection) => cardsCollection.cards
);

export const selectStats = createSelector(
  [selectCardsCollection],
  (cardsCollection) => cardsCollection.stats
);

export const selectCardsForPreview = createSelector([selectCards], (cards) =>
  Object.values(cards)
);

export const selectStatsForPreview = createSelector([selectStats], (stats) =>
  Object.values(stats)
);
