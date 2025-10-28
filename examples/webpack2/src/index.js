import React from "react";
import ReactDOM from "react-dom/client";

// https://github.com/CesiumGS/cesium/issues/9212
// Workaround: load CSS from index.html
// import "cesium/Build/Cesium/Widgets/widgets.css";

import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
