import React from "react";
import { hot } from "react-hot-loader";
import { Switch, Route } from "react-router-dom";

import Sidebar from "./sidebar";
import pages from "./pages";

import "./style.css";

const App = () => (
  <div className="full">
    <Sidebar className="sidebar" pages={pages} />
    <div className="viewer">
      <Switch>
        {pages.map(p => (
          <Route key={p.slug} path={`/${p.slug}`} component={p.component} />
        ))}
      </Switch>
    </div>
  </div>
);

export default hot(module)(App);
