import { takeLatest } from "redux-saga/effects";
import UserActionType from "../../actions/User/ActionType";
import { getUserSaga } from "./GetUserSaga";

export const userSaga = [
  takeLatest(UserActionType.GET_USER_REQUEST, getUserSaga),
];