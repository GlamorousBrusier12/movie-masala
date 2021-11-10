import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import rootReducer from "./reducers";

// it will create a store to the movies and the actions invoked from the store will be handled
// by the reducers defined in the resp file.
const store = createStore(rootReducer);
// console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
