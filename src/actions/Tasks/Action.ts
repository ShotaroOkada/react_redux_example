import TasksActionType from "./ActionType";

export type AddTask = {
  type: TasksActionType.ADD_TASK,
  taskName: string
}

export type DeleteTask = {
  type: TasksActionType.DELETE_TASK,
  taskIndex: number
}

type TasksAction = AddTask | DeleteTask

export default TasksAction;