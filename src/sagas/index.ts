import { all } from "redux-saga/effects";
import { userSaga } from "./User";

export default function* rootSaga() {
  yield all([
    ...userSaga,
  ])
}