import { getUsers } from "../../actions/User/ActionCreator";
import { PromiseGenericType } from "../PromiseGenericType";
import { getUserApi } from "../../apis/User/GetUserApi";
import { call, put } from "redux-saga/effects";

export function* getUserSaga(action: ReturnType<typeof getUsers.request>) {
  try {
    const response: PromiseGenericType<ReturnType<typeof getUserApi>> = yield call(
      getUserApi,
      action.payload
    );
    if (response.status === 200 && response.data) {
      yield put(getUsers.success(response.data));
    } else {
      yield put(getUsers.failure(new Error('fail get user')))
    }
  } catch (e) {
    yield put(getUsers.failure(new Error('fail get user in api')))
  }
}