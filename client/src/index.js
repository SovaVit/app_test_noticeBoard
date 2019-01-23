import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import "./cssComponents/index.css";
import App from "./containers/App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const { store, persistor } = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading="null" persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
