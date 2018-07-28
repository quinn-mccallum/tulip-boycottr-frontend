import React from "react";
import {Provider} from 'react-redux';
import ReactDOM from "react-dom";
import configureStore from './store/configureStore';
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

// import { healthCheck } from "./api/health";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
