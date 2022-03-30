import memoize from "lodash.memoize";
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

export const selectCardsOffset = createSelector(
  [selectCardsCollection],
  (cardsCollection) => cardsCollection.fetchOffset
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

export const selectIsCardsFetching = createSelector(
  [selectCardsCollection],
  (cardsCollection) => cardsCollection.isFetching
);

export const selectIsCardsLoaded = createSelector(
  [selectCardsCollection],
  (cardsCollection) => !!cardsCollection.cards
);

export const selectIsCardFetching = memoize((cardId) =>
  createSelector([selectCardsForPreview], (cards) =>
    !!cards[cardId] ? cards[cardId] : false
  )
);
