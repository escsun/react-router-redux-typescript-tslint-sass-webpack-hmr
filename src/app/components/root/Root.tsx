import * as React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import App from "../app/App";
import About from "../about/About";
import Home from "../home/Home";

const Root = (): JSX.Element => {
  return (
    <div className="Root">
      <Route component={App} />
      <div className="main">
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
      </div>
    </div>
  );
};

export default Root;
