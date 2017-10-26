import { combineReducers } from "redux";
import * as fromCounter from "./counter";

export interface RootState {
  counter: fromCounter.State;
}

const rootReducer = combineReducers<RootState>({
  counter: fromCounter.counterReducer
});

export default rootReducer;
