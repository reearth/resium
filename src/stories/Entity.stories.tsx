import React from "react";
import { Cartesian3, Color } from "cesium";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Viewer from "../Viewer";
import Entity from "../Entity";
import EntityDescription from "../EntityDescription";
import CanvasEntity from "./CanvasEntity";
import BillboardGraphics from "../BillboardGraphics";
import BoxGraphics from "../BoxGraphics";
import CorridorGraphics from "../CorridorGraphics";
import CylinderGraphics from "../CylinderGraphics";
import EllipseGraphics from "../EllipseGraphics";
import EllipsoidGraphics from "../EllipsoidGraphics";
import LabelGraphics from "../LabelGraphics";
import ModelGraphics from "../ModelGraphics";
import PathGraphics from "../PathGraphics";
import PlaneGraphics from "../PlaneGraphics";
import PointGraphics from "../PointGraphics";
import PolylineGraphics from "../PolylineGraphics";
import PolylineVolumeGraphics from "../PolylineVolumeGraphics";
import RectangleGraphics from "../RectangleGraphics";
import WallGraphics from "../WallGraphics";

import billboardImage from "./assets/example.jpg";

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
    .add("Selected and tracked", () => (
      <Viewer full>
        <Entity
          name="test"
          description="test!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          point={{ pixelSize: 10 }}
          selected
          tracked
        />
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
    .add("Events", () => (
      <Viewer full>
        <Entity
          name="test"
          description="test!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          point={{ pixelSize: 10 }}
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
      </Viewer>
    ))
    .add("Graphics", () => (
      <Viewer full>
        <Entity
          name="BillboardGraphics"
          description="BillboardGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          selected
          tracked>
          <BillboardGraphics image={billboardImage} />
        </Entity>
        <Entity
          name="BoxGraphics"
          description="BoxGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          tracked>
          <BoxGraphics material={Color.RED} />
        </Entity>
        <Entity
          name="CorridorGraphics"
          description="CorridorGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          tracked>
          <CorridorGraphics material={Color.RED} />
        </Entity>
        <Entity
          name="CylinderGraphics"
          description="CylinderGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          tracked>
          <CylinderGraphics material={Color.RED} />
        </Entity>
        <Entity
          name="EllipseGraphics"
          description="EllipseGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          tracked>
          <EllipseGraphics material={Color.RED} />
        </Entity>
        <Entity
          name="EllipsoidGraphics"
          description="EllipsoidGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          tracked>
          <EllipsoidGraphics material={Color.RED} />
        </Entity>
        <Entity
          name="LabelGraphics"
          description="LabelGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          tracked>
          <LabelGraphics text="LabelGraphics" />
        </Entity>
        <Entity
          name="ModelGraphics"
          description="ModelGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          tracked>
          <ModelGraphics />
        </Entity>
        <Entity
          name="PathGraphics"
          description="PathGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          tracked>
          <PathGraphics material={Color.RED} />
        </Entity>
        <Entity
          name="PlaneGraphics"
          description="PlaneGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          tracked>
          <PlaneGraphics material={Color.RED} />
        </Entity>
        <Entity
          name="PointGraphics"
          description="PointGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          tracked>
          <PointGraphics color={Color.RED} />
        </Entity>
        <Entity
          name="PolylineGraphics"
          description="PolylineGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          tracked>
          <PolylineGraphics material={Color.RED} />
        </Entity>
        <Entity
          name="PolylineVolumeGraphics"
          description="PolylineVolumeGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          tracked>
          <PolylineVolumeGraphics material={Color.RED} />
        </Entity>
        <Entity
          name="RectangleGraphics"
          description="RectangleGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          tracked>
          <RectangleGraphics material={Color.RED} />
        </Entity>
        <Entity
          name="WallGraphics"
          description="WallGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          tracked>
          <WallGraphics material={Color.RED} />
        </Entity>
      </Viewer>
    ));
};
