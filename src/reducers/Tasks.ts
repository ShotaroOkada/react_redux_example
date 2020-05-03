import TasksState from "../states/Tasks";
import TasksAction from "../actions/Tasks/Action";
import TasksActionType from "../actions/Tasks/ActionType";

const initialState: TasksState = [];

export default (state: TasksState = initialState, action: TasksAction): TasksState => {
  switch (action.type) {
    case TasksActionType.ADD_TASK:
      return [
        ...state,
        action.payload
      ]
    case TasksActionType.DELETE_TASK:
      return [
        ...state.slice(0,action.payload),
        ...state.slice(action.payload+1)
      ]
    default:
      return state
  }
}

/*
const state = [1,2,3,4,5]

state.slice(0,2) //[1,2]
state.slice(3) //[4,5]

return [
  ...state.slice(0,2),
  ...state.slice(3)
]
*/
