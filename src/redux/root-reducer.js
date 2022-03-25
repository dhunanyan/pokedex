import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cardsReducer from "./cards/cards.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["card"],
};

const rootReducer = combineReducers({
  cardsCollection: cardsReducer,
});

export default persistReducer(persistConfig, rootReducer);
