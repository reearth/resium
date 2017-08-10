import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Sidebar from "./sidebar";
import pages from "./pages";

import styles from "./style.css";

const App = () => (
  <BrowserRouter>
    <div className="full">
      <Sidebar
        className={styles.sidebar}
        pages={pages} />
      <div className={styles.viewer}>
        <Switch>
          {pages.map(p => (
            <Route
              key={p.slug}
              path={`/${p.slug}`}
              component={p.component} />
          ))}
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
