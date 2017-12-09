import "./polyfills";
import "./index.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import { IHotModule } from "./models/hot-module.model";

import configureStore from "./store/configureStore";
import App from "./components/app/App";

const store = configureStore();
const history = createHistory();

const render = (Component: React.ComponentType) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component/>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById("root") as HTMLElement
  );
};

render(App);

declare let module: IHotModule;

if (module.hot) {
  module.hot.accept("./components/app/App", () => render(App));
}
