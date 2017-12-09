import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import About from "../about/About";
import Home from "../home/Home";
import Layout from "../layout/Layout";

import "./App.scss";

const App = (): JSX.Element => {
  return (
    <>
    <Router>
      <Switch>
        <Layout>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Layout>
      </Switch>
    </Router>
    </>
  );
};

export default App;
