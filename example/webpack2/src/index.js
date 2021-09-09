import React from "react";
import ReactDOM from "react-dom";

// https://github.com/CesiumGS/cesium/issues/9212
// Workaround: load CSS from index.html
// import "cesium/Build/Cesium/Widgets/widgets.css";

import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
