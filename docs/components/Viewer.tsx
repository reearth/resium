import React from "react";
import Viewer, { ViewerProps } from "../../src/Viewer";

const ViewerForPlayground: React.SFC<ViewerProps> = props => (
  <div style={{ minHeight: "300px" }}>
    <Viewer {...props} />
  </div>
);

export default ViewerForPlayground;
