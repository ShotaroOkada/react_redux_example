import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

type TasksAction = ActionType<typeof ActionCreators>;

export default TasksAction;