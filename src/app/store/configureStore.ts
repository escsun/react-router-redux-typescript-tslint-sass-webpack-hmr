import {
  applyMiddleware,
  createStore
} from "redux";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { IHotModule } from "../core/models/hot-module.model";
import rootReducer from "../reducers/index";

const history = createHistory();
const router = routerMiddleware(history);

const middlewares = [
  thunk,
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
    module.hot.accept("../reducers", () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
