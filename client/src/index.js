import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

console.log("public key:", process.env.STRIPE_PUBLIC_KEY);
