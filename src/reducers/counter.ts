import * as counterActions from "../actions/counter";

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
    case counterActions.RESET:
      return {...state, count: initialState.count};
    default:
      return state;
  }
}

export default counterReducer;
