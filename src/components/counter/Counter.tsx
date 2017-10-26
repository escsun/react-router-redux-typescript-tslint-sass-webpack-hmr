import * as React from "react";

interface Props {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

const Counter = (props: Props): JSX.Element => {
  return (
    <div>
      Counter: {props.count}
      <div className="btn-group">
        <button onClick={props.onIncrement}>+</button>
        <button onClick={props.onReset}>R</button>
        <button onClick={props.onDecrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
