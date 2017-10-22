import * as React from "react";

import Counter from "../counter/Counter";
import Hello from "../hello/Hello";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>Welcome to React with Typescript</h1>
      <Hello name="React"/>
      <Counter />
    </div>
  );
};

export default App;
