import { combineReducers } from "redux";
import * as fromCounter from "./counter";

const rootReducer = combineReducers({
  counter: fromCounter.counterReducer
});

export default rootReducer;
