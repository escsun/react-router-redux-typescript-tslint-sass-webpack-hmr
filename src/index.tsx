import "./polyfills";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppContainer } from "react-hot-loader";

import App from "./components/app/App";

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

interface IHotModule {
  hot?: { accept: (path: string, callback: () => void) => void };
}

declare let module: IHotModule;

if (module.hot) {
  module.hot.accept("./components/app/App", () => {
    const NextApp = require("./components/app/App").default;
    render(NextApp);
  });
}
