import {
  applyMiddleware,
  createStore
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { IHotModule } from "../interfaces/hot-module.interface";
import rootReducer from "../reducers/index";

declare let module: IHotModule;

const middleware = [
  thunk,
];

const configureStore = (initialState: object = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
