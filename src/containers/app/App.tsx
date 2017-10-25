import * as React from "react";

import Counter from "../../components/counter/Counter";
import Hello from "../../components/hello/Hello";

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
