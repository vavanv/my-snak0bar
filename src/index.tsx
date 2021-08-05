// tslint:disable:ordered-imports
import "core-js";
import "normalize.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/base.css";
// tslint:enable:ordered-imports

const target = document.querySelector("#root");
ReactDOM.render(<App />, target);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.ready.then((registration) => {
    registration.unregister();
  });
}
