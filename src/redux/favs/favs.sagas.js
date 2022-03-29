import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCardsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { fetchFavsItemsSuccess, fetchFavsItemsFailure } from "./favs.actions";

import FavsActionTypes from "./favs.types";

export function* fetchFavsItemsAsync({ payload: curerntUser }) {
  try {
    const favsItemsRef = firestore
      .collection("users")
      .doc(`${curerntUser.id}`)
      .collection("favs");

    const cardsSnapshot = yield favsItemsRef.get();

    const cardsMap = yield call(convertCardsSnapshotToMap, cardsSnapshot);

    yield put(fetchFavsItemsSuccess(cardsMap));
  } catch (error) {
    yield put(fetchFavsItemsFailure(error));
  }
}

export function* onFetchFavsItemsStart() {
  yield takeLatest(FavsActionTypes.FETCH_FAVS_ITEMS_START, fetchFavsItemsAsync);
}

export function* favsItemsSagas() {
  yield all([call(onFetchFavsItemsStart)]);
}
