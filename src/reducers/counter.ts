import * as counterActions from "../actions/counter";
import {
  Reducer,
  ReducersMapObject
} from "redux";

export interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

type Action = counterActions.All;

export function counterReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case counterActions.INCREMENT:
      return {...state, count: state.count + 1};
    case counterActions.DECREMENT:
      return {...state, count: state.count - 1};
    default:
      return state;
  }
}

export const fetchCount = (state: State) => state.count;
