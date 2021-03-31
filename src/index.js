import { AppContainer } from "react-hot-loader";
import "react-hot-loader/patch";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store/";
import App from "./App";

const load = (Component) => {
  render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById("root")
  );
};

load(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  console.log(module.hot);
  module.hot.accept("./App", () => {
    load(App);
  });
}
