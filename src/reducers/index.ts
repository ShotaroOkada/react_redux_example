import { combineReducers } from "redux";
import user from './User';
import tasks from './Tasks'

const rootReducer = combineReducers({
  user,
  tasks,
});

export default rootReducer;