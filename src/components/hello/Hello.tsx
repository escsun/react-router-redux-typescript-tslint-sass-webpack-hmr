import * as React from "react";

interface Props {
  name: string;
}

const Hello = (props: Props) => {
  return (
    <div>Hello, {props.name}</div>
  );
};

export default Hello;
