import TasksActionType from "./ActionType";
import { AddTask, DeleteTask } from "./Action";

export const addTask = (taskName: string): AddTask => {
  return {
    type: TasksActionType.ADD_TASK,
    taskName
  }
}

export const deleteTask = (taskIndex: number): DeleteTask => {
  return {
    type: TasksActionType.DELETE_TASK,
    taskIndex
  }
}