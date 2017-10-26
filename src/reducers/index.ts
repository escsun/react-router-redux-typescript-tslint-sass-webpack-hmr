import * as fromRouter from "react-router-redux";
import { combineReducers } from "redux";
import * as fromCounter from "./counter";

export interface RootState {
  counter: fromCounter.State;
  routing: fromRouter.RouterState;
}

const rootReducer = combineReducers<RootState>({
  counter: fromCounter.counterReducer,
  routing: fromRouter.routerReducer
});

export default rootReducer;
