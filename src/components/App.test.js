import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from '../store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
  <Provider store={store}>
    <App healthCheck={() => {}} />
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
