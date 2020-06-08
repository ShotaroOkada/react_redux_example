import UserActionType from "./ActionType"
import { GetUserParam } from "../../apis/User/GetUserApi";
import { GetUserRequest, GetUserSuccess, GetUserFail } from "./Action";
import UserModel from "../../apis/User/Model";

export const getUserRequest = (param: GetUserParam): GetUserRequest => {
  return {
    type: UserActionType.GET_USER_REQUEST,
    param
  }
}

export const getUserSuccess = (user: UserModel): GetUserSuccess => {
  return {
    type: UserActionType.GET_USER_SUCCESS,
    user
  }
}

export const getUserFail = (error: Error): GetUserFail => {
  return {
    type: UserActionType.GET_USER_FAIL,
    error
  }
}