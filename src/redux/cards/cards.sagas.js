import { takeLatest, call, put, all } from "redux-saga/effects";

import { fetchCardsFailure, fetchCardsSuccess } from "./cards.actions";

import CardsActionTypes from "./cards.types";

export function* fetchCardsAsync({ payload: fetchUrl }) {
  try {
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

    yield put(fetchCardsSuccess(cardsMap));
  } catch (error) {
    yield put(fetchCardsFailure(error));
  }
}

export function* onFetchCardsStart() {
  yield takeLatest(CardsActionTypes.FETCH_CARDS_START, fetchCardsAsync);
}

export function* cardsSagas() {
  yield all([call(onFetchCardsStart)]);
}
