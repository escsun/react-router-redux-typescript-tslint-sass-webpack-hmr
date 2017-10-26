import * as React from "react";

interface Props {
  count: number;
}

const Counter = (props: Props) => {
  return (
    <div>
      Counter: {props.count}
    </div>
  );
};

export default Counter;
