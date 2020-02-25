import { createAction } from "typesafe-actions";
import TasksActionType from "./ActionType";

export const addTask = createAction(
  TasksActionType.ADD_TASK
)<string>();