import * as React from "react";
import {
  Route,
  Switch
} from "react-router-dom";

import About from "../About";
import Home from "../Home";

const App = (): JSX.Element => {
  return (
    <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
    </Switch>
  );
};

export default App;
