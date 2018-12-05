import React from "react";
import { Cartesian3, Color, Transforms } from "cesium";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Viewer from "../Viewer";
import Billboard from "../Billboard";
import BillboardCollection from "../BillboardCollection";

const center = Cartesian3.fromDegrees(-75.59777, 40.03883);
import exampleImg from "./assets/example.png";

export default () => {
  storiesOf("Billboard", module)
    .add("default", () => (
      <Viewer full>
        <BillboardCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
          <Billboard
            color={Color.ORANGE}
            position={new Cartesian3(0.0, 0.0, 0.0)}
            image={exampleImg}
            scale={0.1}
          />
          <Billboard
            color={Color.YELLOW}
            position={new Cartesian3(1000000.0, 0.0, 0.0)}
            image={exampleImg}
            scale={0.1}
          />
          <Billboard
            color={Color.GREEN}
            position={new Cartesian3(0.0, 1000000.0, 0.0)}
            image={exampleImg}
            scale={0.1}
          />
          <Billboard
            color={Color.CYAN}
            position={new Cartesian3(0.0, 0.0, 1000000.0)}
            image={exampleImg}
            scale={0.1}
          />
        </BillboardCollection>
      </Viewer>
    ))
    .add("Events", () => (
      <Viewer full>
        <BillboardCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
          <Billboard
            color={Color.ORANGE}
            position={new Cartesian3(0.0, 0.0, 0.0)}
            image={exampleImg}
            scale={0.1}
            onClick={action("onClick")}
            onDoubleClick={action("onDoubleClick")}
            onMouseDown={action("onMouseDown")}
            onMouseUp={action("onMouseUp")}
            onMiddleClick={action("onMiddleClick")}
            onMiddleDown={action("onMiddleDown")}
            onMiddleUp={action("onMiddleUp")}
            onMouseMove={action("onMouseMove")}
            onPinchEnd={action("onPinchEnd")}
            onPinchMove={action("onPinchMove")}
            onPinchStart={action("onPinchStart")}
            onRightClick={action("onRightClick")}
            onRightDown={action("onRightDown")}
            onRightUp={action("onRightUp")}
            onWheel={action("onWheel")}
            onMouseEnter={action("onMouseEnter")}
            onMouseLeave={action("onMouseLeave")}
          />
        </BillboardCollection>
      </Viewer>
    ));
};
