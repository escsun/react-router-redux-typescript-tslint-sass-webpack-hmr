import * as React from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import CounterContainer from "../../containers/counter/Counter";
import Hello from "../hello/Hello";

const Main = (): JSX.Element => {
  return (
    <main>
      <Switch>
        <Route exact={true} path="/" render={(props) => <Hello {...props} name="React"/>} />
        <Route path="/counter" component={CounterContainer}/>
      </Switch>
    </main>
  );
};

export default Main;
