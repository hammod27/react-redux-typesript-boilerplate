import * as React from "react";
import * as ReactDOM from "react-dom";
import { Test } from "src/components/Test/index";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import createStore from "./store/createStore";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Test.byRoute />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
