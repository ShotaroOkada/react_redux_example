import UserActionType from "./ActionType";
import { GetUserParam } from "../../apis/User/GetUserApi";
import UserModel from "../../apis/User/Model";


export type GetUserRequest = {
  type: UserActionType.GET_USER_REQUEST,
  param: GetUserParam
}

export type GetUserSuccess = {
  type: UserActionType.GET_USER_SUCCESS,
  user: UserModel
}

export type GetUserFail = {
  type: UserActionType.GET_USER_FAIL,
  error: Error
}

type UserAction = GetUserRequest | GetUserSuccess | GetUserFail

export default UserAction;
