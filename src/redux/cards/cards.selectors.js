import memoize from "lodash.memoize";

import { createSelector } from "reselect";

const selectCardsCollection = (state) => state.cardsCollection;

export const selectCards = createSelector(
  [selectCardsCollection],
  (cardsCollection) => cardsCollection.cards
);

export const selectCardsForPreview = memoize((someCondition) =>
  createSelector([selectCards], (cards) =>
    cards ? Object.values(cards).filter((card) => (true ? card : false)) : []
  )
);
