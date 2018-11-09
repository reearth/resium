import React from "react";
import { Cartesian3 } from "cesium";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import Entity from "../Entity";
import EntityDescription from "../EntityDescription";
import ExtendedEntity from "../ExtendedEntity";
import CanvasEntity from "./CanvasEntity";
import { actions } from "@storybook/addon-actions";

export default () => {
  storiesOf("Entity", module)
    .add("default", () => (
      <Viewer full>
        <Entity
          name="test"
          description="test!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          point={{ pixelSize: 10 }}
        />
      </Viewer>
    ))
    .add("Children with JSX", () => (
      <Viewer full>
        <Entity
          name="test"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          point={{ pixelSize: 10 }}>
          <EntityDescription>
            <h1>Hello!</h1>
            <p>This is description. It can be described with JSX!</p>
          </EntityDescription>
        </Entity>
      </Viewer>
    ))
    .add("Animated canvas", () => (
      <Viewer full>
        <CanvasEntity
          name="test"
          description="test"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
        />
      </Viewer>
    ))
    .add("Extended entity", () => (
      <Viewer full>
        <ExtendedEntity
          name="test"
          description="test!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          point={{ pixelSize: 10 }}
          {...actions(
            "onClick",
            "onDoubleClick",
            "onMouseDown",
            "onMouseUp",
            "onMiddleClick",
            "onMiddleDown",
            "onMiddleUp",
            "onMouseMove",
            "onPinchEnd",
            "onPinchMove",
            "onPinchStart",
            "onRightClick",
            "onRightDown",
            "onRightUp",
            "onWheel",
            "onMouseEnter",
            "onMouseLeave",
          )}
        />
      </Viewer>
    ));
};
