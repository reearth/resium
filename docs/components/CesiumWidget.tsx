import React from "react";
import CesiumWidget, { CesiumWidgetProps } from "../../src/CesiumWidget/CesiumWidget";

const CesiumWidgetForPlayground: React.FC<CesiumWidgetProps> = props => (
  <div style={{ minHeight: "300px" }}>
    <CesiumWidget {...props} />
  </div>
);

export default CesiumWidgetForPlayground;
