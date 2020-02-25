import UserState from "../states/User";
import UserAction from "../actions/User/Action";
import UserActionType from "../actions/User/ActionType";

const initialState: UserState = {
  name: '',
  age: 0
}

export default (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.GET_USER_SUCCESS:
      return {
        ...action.payload
      }
    default:
      return state
  }
}