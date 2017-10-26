import * as React from "react";

import Hello from "../../components/hello/Hello";
import CounterContainer from "../counter/Counter.";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>Welcome to React with Typescript</h1>
      <Hello name="React"/>
      <CounterContainer />
    </div>
  );
};

export default App;
