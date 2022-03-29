import { all, call } from "redux-saga/effects";
import { cardsSagas } from "./cards/cards.sagas";
import { favsItemsSagas } from "./favs/favs.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(cardsSagas), call(favsItemsSagas)]);
}
