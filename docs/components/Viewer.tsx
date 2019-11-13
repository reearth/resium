import React from "react";
import Viewer, { ViewerProps } from "../../src/Viewer/Viewer";

const ViewerForPlayground: React.FC<ViewerProps> = props => (
  <div style={{ minHeight: "300px" }}>
    <Viewer {...props} />
  </div>
);

export default ViewerForPlayground;
