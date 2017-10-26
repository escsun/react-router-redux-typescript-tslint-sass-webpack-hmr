import "./polyfills";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";

import { IHotModule } from "./interfaces/hot-module.interface";

declare let module: IHotModule;

import App from "./containers/app/App";
import "./index.scss";
import configureStore from "./store/configureStore";

const root = document.getElementById("root") as HTMLElement;

const render = (Component: React.ComponentType) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={configureStore()}>
        <Component />
      </Provider>
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
