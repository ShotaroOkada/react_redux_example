import { StateType } from "typesafe-actions";
import rootReducer from "../reducers";

type RootState = StateType<typeof rootReducer>

export default RootState;