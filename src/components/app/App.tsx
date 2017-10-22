import * as React from "react";

import Counter from "../counter/Counter";
import Hello from "../hello/Hello";

function App() {
  return (
    <div>
      <h1>Welcome to React with Typescript</h1>
      <Hello name="React"/>
      <Counter />
    </div>
  );
}

export default App;
