import * as fromRouter from "react-router-redux";
import { combineReducers } from "redux";

export interface RootState {
  routing: fromRouter.RouterState;
}

const rootReducer = combineReducers<RootState>({
  routing: fromRouter.routerReducer
});

export default rootReducer;
