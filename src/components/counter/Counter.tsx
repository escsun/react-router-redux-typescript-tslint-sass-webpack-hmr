import * as React from "react";

interface Props {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter = (props: Props) => {
  return (
    <div>
      Counter: {props.count}
      <div className="btn-group">
        <button onClick={props.onIncrement}>+</button>
        <button onClick={props.onDecrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
