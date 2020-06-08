import UserState from "./User";
import TasksState from "./Tasks";

type RootState = {
  user: UserState,
  tasks: TasksState
}

export default RootState;