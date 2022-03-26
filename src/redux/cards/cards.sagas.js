import { takeLatest, call, put, all } from "redux-saga/effects";
import { select } from "redux-saga/effects";

import {
  fetchCardsFailure,
  fetchCardsSuccess,
  fetchStatsFailure,
  fetchStatsSuccess,
} from "./cards.actions";

import * as selectors from "./cards.selectors";

import CardsActionTypes from "./cards.types";

export function* fetchStatsAsync() {
  try {
    const statsUrls = yield all(
      ["1", "2", "3", "4", "5", "6"].map((num) =>
        call(fetch, `https://pokeapi.co/api/v2/stat/${num}`)
      )
    );

    const statsMap = yield all(
      statsUrls.map((statsUrl) => call([statsUrl, "json"]))
    );

    yield put(fetchStatsSuccess(statsMap));
  } catch (error) {
    yield put(fetchStatsFailure(error));
  }
}

export function* fetchCardsAsync() {
  try {
    const fetchUrl = yield select(selectors.selectFetchUrl);
    const pokemonsRes = yield call(fetch, fetchUrl);
    const pokemonsData = yield call([pokemonsRes, "json"]);

    const pokemonUrls = yield all(
      pokemonsData.results.map((pokemon) =>
        call(fetch, `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      )
    );

    const cardsMap = yield all(
      pokemonUrls.map((pokemonUrl) => call([pokemonUrl, "json"]))
    );

    const loadMore = pokemonsData.next;

    yield put(fetchCardsSuccess([cardsMap, loadMore]));
  } catch (error) {
    yield put(fetchCardsFailure(error));
  }
}

export function* onFetchCardsStart() {
  yield takeLatest(CardsActionTypes.FETCH_CARDS_START, fetchCardsAsync);
}

export function* onFetchStatsStart() {
  yield takeLatest(CardsActionTypes.FETCH_STATS_START, fetchStatsAsync);
}

export function* cardsSagas() {
  yield all([call(onFetchCardsStart), call(onFetchStatsStart)]);
}
