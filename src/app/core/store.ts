import {
  applyMiddleware,
  createStore
} from "redux";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { IHotModule } from "./models/hot-module.model";
import rootReducer from "./reducers/index";

const history = createHistory();
const router = routerMiddleware(history);

const middlewares = [
  router,
];

declare let module: IHotModule;

const configureStore = (initialState: object = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers/index").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
