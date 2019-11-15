import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import CesiumWidget from "./CesiumWidget";

storiesOf("CesiumWidget", module)
  .add("Basic", () => <CesiumWidget full />)
  .add("Events", () => (
    <CesiumWidget
      full
      onClick={action("onClick")}
      onDoubleClick={action("onDoubleClick")}
      onMouseDown={action("onMouseDown")}
      onMouseUp={action("onMouseUp")}
      onMiddleClick={action("onMiddleClick")}
      onMiddleDown={action("onMiddleDown")}
      onMiddleUp={action("onMiddleUp")}
      // onMouseMove={action("onMouseMove")}
      onPinchEnd={action("onPinchEnd")}
      onPinchMove={action("onPinchMove")}
      onPinchStart={action("onPinchStart")}
      onRightClick={action("onRightClick")}
      onRightDown={action("onRightDown")}
      onRightUp={action("onRightUp")}
      onWheel={action("onWheel")}
    />
  ));
