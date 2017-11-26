import * as React from "react";

import "./App.scss";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React with Typescript</h1>
        <img src={"/assets/images/logo.svg"} className="App-logo"/>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/components/App.js</code> and save to reload.
      </p>
    </div>
  );
};

export default App;
