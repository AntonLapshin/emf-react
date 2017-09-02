import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DM from "./components/DM";
import FM from "./components/FM";
import registerServiceWorker from "./registerServiceWorker";
import createHistory from "history/createBrowserHistory";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Route } from "react-router";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";

const reducers = [];
const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/dm" component={DM} />
        <Route path="/fm" component={FM} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
