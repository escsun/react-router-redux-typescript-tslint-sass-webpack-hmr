import "./polyfills";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import { IHotModule } from "./interfaces/hot-module.interface";

declare let module: IHotModule;

import configureStore, { history } from "./store/configureStore";
import App from "./components/app/App";
import "./index.scss";

const root = document.getElementById("root") as HTMLElement;
const store = configureStore();

const render = (Component: React.ComponentType) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component/>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    root
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./components/app/App", () => {
    const NextApp = require("./components/app/App").default;
    render(NextApp);
  });
}
