import { connect, Dispatch } from "react-redux";

import Counter from "../../components/counter/Counter";

import * as counterActions from "../../actions/counter";

import { RootState } from "../../reducers/index";

function mapStateToProps(state: RootState) {
  return {
    count: state.counter.count
  };
}

function mapDispatchToProps(dispatch: Dispatch<RootState>) {
  return {
    onDecrement: () => dispatch({type: counterActions.DECREMENT}),
    onIncrement: () => dispatch({type: counterActions.INCREMENT}),
  };
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;
