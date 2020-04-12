import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AsyncComponent from "./components/common/AsyncComponent";
import NavBar from "./nav";

const App = AsyncComponent(() => import("./App"));
const Sample1 = AsyncComponent(() => import("./samples/sample1"));
const Sample2 = AsyncComponent(() => import("./samples/sample2"));

ReactDOM.render(
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={App} />
      <Route path="/sample1" component={Sample1} />
      <Route path="/sample2" component={Sample2} />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
