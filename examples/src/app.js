import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Sidebar from "./sidebar";
import routes from "./routes";

import styles from "./style.css";

const App = () => (
  <BrowserRouter>
    <div className="full">
      <Sidebar
        className={styles.sidebar}
        routes={routes} />
      <div className={styles.viewer}>
        <Switch>
          {routes.map(r => (
            <Route
              key={r.slug}
              path={`/${r.slug}`}
              component={r.component} />
          ))}
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
