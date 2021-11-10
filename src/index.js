import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";

const logger = function ({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      // here we basically write all the middleware code
      console.log("action: ", action.type);
      next(action);
    };
  };
};
// it will create a store to the movies and the actions invoked from the store will be handled
// by the reducers defined in the resp file.
const store = createStore(rootReducer, applyMiddleware(logger));
// console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
