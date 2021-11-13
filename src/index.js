import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       // here we basically write all the middleware code
//       console.log("action: ", action.type);
//       next(action);
//     };
//   };
// };

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // here we basically write all the middleware code
    if (typeof action !== "function") {
      console.log("action: ", action.type);
    }
    next(action);
  };
// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     if (typeof action === "function") {
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };

// it will create a store to the movies and the actions invoked from the store will be handled
// by the reducers defined in the resp file.
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

// export const StoreContext = createContext();
// console.log(StoreContext);

// class Provider extends Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }

// const connectAppComponent = connect(callback)(App);
// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         const { store } = this.props;
//         const unsubscribe = store.subscribe(() => {
//           // never use this foreupate method
//           this.forceUpdate();
//         });
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const propsToBePassed = callback(state);
//         return <Component {...propsToBePassed} dispatch={store.dispatch} />;
//       }
//     }
//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => {
//               return <ConnectedComponent store={store} />;
//             }}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   };
// }

// console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
