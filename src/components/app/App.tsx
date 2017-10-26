import * as React from "react";

import Main from "../main/Main.";
import Nav from "../nav/Nav";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>Welcome to React with Typescript</h1>
      <Nav />
      <Main />
    </div>
  );
};

export default App;
