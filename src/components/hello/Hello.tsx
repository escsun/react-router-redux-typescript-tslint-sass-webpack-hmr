import * as React from "react";

interface Props {
  name: string;
}

const Hello = (props: Props): JSX.Element => {
  return (
    <div>Hello, {props.name}</div>
  );
};

export default Hello;
