import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  fetchCardsFailure,
  fetchCardsSuccess,
  fetchStatsFailure,
  fetchStatsSuccess,
} from "./cards.actions";

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

    const statsMapFiltered = statsMap.map((pokemonStats) => {
      return {
        affecting_moves: pokemonStats.affecting_moves,
        affecting_natures: pokemonStats.affecting_natures,
        id: pokemonStats.id,
        move_damage_class: pokemonStats.move_damage_class,
        name: pokemonStats.name,
      };
    });

    yield put(fetchStatsSuccess(statsMapFiltered));
  } catch (error) {
    yield put(fetchStatsFailure(error));
  }
}

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

    const cardsMapFiltered = cardsMap.map((pokemon) => {
      return {
        abilities: pokemon.abilities,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        id: pokemon.id,
        held_items: pokemon.held_items,
        moves: pokemon.moves,
        sprites: pokemon.sprites,
        types: pokemon.types,
        stats: pokemon.stats,
      };
    });

    // const loadMore = pokemonsData.next;

    yield put(fetchCardsSuccess(cardsMapFiltered));
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
