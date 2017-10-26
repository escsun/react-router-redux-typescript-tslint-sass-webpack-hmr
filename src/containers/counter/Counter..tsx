import { connect } from "react-redux";

import Counter from "../../components/counter/Counter";

import { RootState } from "../../reducers/index";

function mapStateToProps(state: RootState) {
  return {
    count: state.counter.count
  };
}

const CounterContainer = connect(mapStateToProps)(Counter);

export default CounterContainer;
