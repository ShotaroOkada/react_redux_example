import { combineReducers } from "redux";
import tasks from './Tasks'

const rootReducer = combineReducers({
  tasks,
});

export default rootReducer;