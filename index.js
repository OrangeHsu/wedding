import { AppContainer } from "react-hot-loader";
import "react-hot-loader/patch";
import React from "react";
import { render } from "react-dom";
import App from "src/App";

const load = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

load(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("src/App", () => {
    load(App);
  });
}
