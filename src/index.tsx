import "./polyfills";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import { IHotModule } from "./interfaces/hot-module.interface";

declare let module: IHotModule;

import App from "./containers/app/App";
import "./index.scss";

const root = document.getElementById("root") as HTMLElement;

const render = (Component: React.ComponentType) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./containers/app/App", () => {
    const NextApp = require("./containers/app/App").default;
    render(NextApp);
  });
}
