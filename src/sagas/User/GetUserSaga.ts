import { PromiseGenericType } from "../PromiseGenericType";
import { getUserApi } from "../../apis/User/GetUserApi";
import { call, put } from "redux-saga/effects";
import { GetUserRequest } from "../../actions/User/Action";
import { getUserSuccess, getUserFail } from "../../actions/User/ActionCreator";

export function* getUserSaga(action: GetUserRequest) {
  try {
    const response: PromiseGenericType<ReturnType<typeof getUserApi>> = yield call(
      getUserApi,
      action.param
    );
    if (response.status === 200 && response.data) {
      yield put(getUserSuccess(response.data));
    } else {
      yield put(getUserFail(new Error('fail get user')))
    }
  } catch (e) {
    yield put(getUserFail(new Error('fail get user in api')))
  }
}