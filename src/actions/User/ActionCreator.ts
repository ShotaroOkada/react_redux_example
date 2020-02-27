import { createAsyncAction } from "typesafe-actions"
import UserActionType from "./ActionType"
import UserState from "../../states/User";
import { GetUserParam } from "../../apis/User/GetUserApi";


export const getUsers = createAsyncAction(
  UserActionType.GET_USER_REQUEST,
  UserActionType.GET_USER_SUCCESS,
  UserActionType.GET_USER_FAIL
)<GetUserParam, UserState, Error>();