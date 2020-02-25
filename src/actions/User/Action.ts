import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

type UserAction = ActionType<typeof ActionCreators>

export default UserAction;
