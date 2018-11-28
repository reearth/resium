import React from "react";
import { Cartesian3, Color, CornerType, LabelStyle } from "cesium";
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

import billboardImage from "./assets/example.png";

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
          position={Cartesian3.fromDegrees(-40.0707383, 40.7117244, 100)}
          selected>
          <BillboardGraphics image={billboardImage} scale={0.05} />
        </Entity>
        <Entity
          name="BoxGraphics"
          description="BoxGraphics!!"
          position={Cartesian3.fromDegrees(0.0707383, 40.7117244, 100)}>
          <BoxGraphics
            material={Color.RED}
            dimensions={new Cartesian3(400000.0, 300000.0, 500000.0)}
          />
        </Entity>
        <Entity
          name="CorridorGraphics"
          description="CorridorGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
          <CorridorGraphics
            material={Color.YELLOW}
            positions={Cartesian3.fromDegreesArray([-100.0, 40.0, -105.0, 40.0, -105.0, 35.0])}
            height={200000.0}
            extrudedHeight={100000.0}
            width={200000.0}
            cornerType={CornerType.BEVELED}
            outline // height or extrudedHeight must be set for outlines to display
            outlineColor={Color.WHITE}
          />
        </Entity>
        <Entity
          name="CylinderGraphics"
          description="CylinderGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 20.7117244, 100)}>
          <CylinderGraphics
            length={400000.0}
            topRadius={200000.0}
            bottomRadius={200000.0}
            material={Color.GREEN.withAlpha(0.5)}
            outline
            outlineColor={Color.DARKGREEN}
          />
        </Entity>
        <Entity
          name="EllipseGraphics"
          description="EllipseGraphics!!"
          position={Cartesian3.fromDegrees(-34.0707383, 60.7117244, 100)}>
          <EllipseGraphics
            material={Color.RED}
            semiMinorAxis={150000.0}
            semiMajorAxis={300000.0}
            extrudedHeight={200000.0}
            rotation={0.78539}
            outline
          />
        </Entity>
        <Entity
          name="EllipsoidGraphics"
          description="EllipsoidGraphics!!"
          position={Cartesian3.fromDegrees(-14.0707383, 0.7117244, 100)}>
          <EllipsoidGraphics
            material={Color.BLUEVIOLET}
            radii={new Cartesian3(300000.0, 300000.0, 300000.0)}
            fill
            outline
            outlineColor={new Color(0, 0, 0, 1)}
          />
        </Entity>
        <Entity
          name="LabelGraphics"
          description="LabelGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
          <LabelGraphics
            text="LabelGraphics"
            font="24px Helvetica"
            fillColor={Color.SKYBLUE}
            outlineColor={Color.BLACK}
            outlineWidth={2}
            style={LabelStyle.FILL_AND_OUTLINE}
          />
        </Entity>
        <Entity
          name="ModelGraphics"
          description="ModelGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
          <ModelGraphics uri={url} minimumPixelSize={128} maximumScale={20000} />
        </Entity>
        <Entity
          name="PathGraphics"
          description="PathGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
          <PathGraphics material={Color.RED} />
        </Entity>
        <Entity
          name="PlaneGraphics"
          description="PlaneGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
          <PlaneGraphics material={Color.RED} />
        </Entity>
        <Entity
          name="PointGraphics"
          description="PointGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
          <PointGraphics color={Color.RED} />
        </Entity>
        <Entity
          name="PolylineGraphics"
          description="PolylineGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
          <PolylineGraphics material={Color.RED} />
        </Entity>
        <Entity
          name="PolylineVolumeGraphics"
          description="PolylineVolumeGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
          <PolylineVolumeGraphics material={Color.RED} />
        </Entity>
        <Entity
          name="RectangleGraphics"
          description="RectangleGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
          <RectangleGraphics material={Color.RED} />
        </Entity>
        <Entity
          name="WallGraphics"
          description="WallGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
          <WallGraphics material={Color.RED} />
        </Entity>
      </Viewer>
    ));
};
