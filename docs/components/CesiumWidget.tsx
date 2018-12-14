import React from "react";
import CesiumWidget, { CesiumWidgetProps } from "../../src/CesiumWidget";

const CesiumWidgetForPlayground: React.SFC<CesiumWidgetProps> = props => (
  <div style={{ minHeight: "300px" }}>
    <CesiumWidget {...props} />
  </div>
);

export default CesiumWidgetForPlayground;
