import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import {
  Cartesian2,
  Cartesian3,
  Color,
  CornerType,
  LabelStyle,
  Plane,
  PolylineDashMaterialProperty,
  // Rectangle,
  // Math as CesiumMath,
} from "cesium";
import { useState, useEffect, useRef, useMemo, FC, StrictMode } from "react";

import BillboardGraphics from "../BillboardGraphics";
import BoxGraphics from "../BoxGraphics";
import { events } from "../core/storybook";
import CorridorGraphics from "../CorridorGraphics";
import CylinderGraphics from "../CylinderGraphics";
import EllipseGraphics from "../EllipseGraphics";
import EllipsoidGraphics from "../EllipsoidGraphics";
import EntityDescription from "../EntityDescription";
import LabelGraphics from "../LabelGraphics";
import ModelGraphics from "../ModelGraphics";
import PathGraphics from "../PathGraphics";
import PlaneGraphics from "../PlaneGraphics";
import PointGraphics from "../PointGraphics";
import PolygonGraphics from "../PolygonGraphics";
import PolylineGraphics from "../PolylineGraphics";
import Viewer from "../Viewer";

import Entity, { EntityProps } from "./Entity";
// import PolylineVolumeGraphics from "../PolylineVolumeGraphics";
// import RectangleGraphics from "../RectangleGraphics";
// import WallGraphics from "../WallGraphics";

type Story = StoryObj<typeof Entity>;

export default {
  title: "Entity",
  component: Entity,
} as Meta;

const initCanvas = () => {
  const can = document.createElement("canvas");
  can.width = 100;
  can.height = 100;
  return can;
};

const renderCanvas = (can: HTMLCanvasElement, p: number) => {
  const c = can.getContext("2d");
  if (!c) return;
  c.clearRect(0, 0, can.width, can.height);
  c.fillStyle = "rgba(100,0,0,0.8)";
  c.beginPath();
  c.arc(can.width / 2, can.height / 2, (p * can.width) / 2, 0, Math.PI * 2, false);
  c.fill();
};

const CanvasEntity: FC<EntityProps> = props => {
  const c1 = useMemo<HTMLCanvasElement>(initCanvas, []);
  const c2 = useMemo<HTMLCanvasElement>(initCanvas, []);
  const [image, setImage] = useState<HTMLCanvasElement>();
  const progress = useRef(0);

  useEffect(() => {
    const i = window.setInterval(() => {
      progress.current = Math.min(progress.current + 0.01, 1);
      setImage(image => {
        const canvas = image === c1 ? c2 : c1;
        if (canvas) {
          renderCanvas(canvas, progress.current);
        }
        return canvas;
      });
      if (progress.current >= 1) {
        clearInterval(i);
      }
    }, 10);
    return () => window.clearInterval(i);
  }, [c1, c2]);

  return <Entity {...props} billboard={{ image }} />;
};

export const Basic: Story = {
  render: args => (
    <Viewer full>
      <Entity
        {...args}
        name="test"
        description="test!!"
        position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
        point={{ pixelSize: 10 }}
      />
    </Viewer>
  ),
};

export const Description: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0);
    return (
      <Viewer full>
        <Entity
          {...args}
          name="test1"
          position={Cartesian3.fromDegrees(-74, 40, 100)}
          point={{ pixelSize: 15, color: Color.YELLOW }}
          description="Normal Description"
        />
        <Entity
          {...args}
          name="test3"
          position={Cartesian3.fromDegrees(-74, 30, 100)}
          point={{ pixelSize: 15, color: Color.RED }}>
          <EntityDescription>
            <h1>Hello!</h1>
          </EntityDescription>
        </Entity>
        <Entity
          {...args}
          name="test4"
          position={Cartesian3.fromDegrees(-74, 20, 100)}
          point={{ pixelSize: 15, color: Color.ORANGE }}>
          <EntityDescription>
            <h1>Hello!</h1>
            <p>This is description. It can be described with React!</p>
            <button onClick={() => setCount(i => i + 1)}>counter: {count}</button>
          </EntityDescription>
        </Entity>
      </Viewer>
    );
  },
};

export const SelectedAndTracked: Story = {
  render: args => (
    <Viewer full>
      <Entity
        {...args}
        name="test"
        description="test!!"
        position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
        point={{ pixelSize: 10 }}
        selected
        tracked
      />
    </Viewer>
  ),
};

export const AnimatedCanvas: Story = {
  render: () => (
    <Viewer full>
      <CanvasEntity
        name="test"
        description="test"
        position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
      />
    </Viewer>
  ),
};

export const Events: Story = {
  render: args => (
    <Viewer full>
      <Entity
        {...args}
        name="test"
        description="test!!"
        position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
        point={{ pixelSize: 10 }}
        {...events}
      />
    </Viewer>
  ),
};

export const Graphics: Story = {
  render: args => (
    <Viewer full onMouseEnter={action("mouseenter")}>
      <Entity
        {...args}
        name="BillboardGraphics"
        description="BillboardGraphics!!"
        position={Cartesian3.fromDegrees(-40.0707383, 40.7117244, 100)}
        selected>
        <BillboardGraphics image="example.png" scale={0.05} />
      </Entity>
      <Entity
        {...args}
        name="BoxGraphics"
        description="BoxGraphics!!"
        position={Cartesian3.fromDegrees(0.0707383, 40.7117244, 100)}>
        <BoxGraphics
          material={Color.RED}
          dimensions={new Cartesian3(400000.0, 300000.0, 500000.0)}
        />
      </Entity>
      <Entity
        {...args}
        name="CorridorGraphics"
        description="CorridorGraphics!!"
        position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
        <CorridorGraphics
          material={Color.YELLOW}
          positions={Cartesian3.fromDegreesArray([-100.0, 40.0, -105.0, 40.0, -105.0, 35.0]) as any} // WORKAROUND
          height={200000.0}
          extrudedHeight={100000.0}
          width={200000.0}
          cornerType={CornerType.BEVELED}
          outline // height or extrudedHeight must be set for outlines to display
          outlineColor={Color.WHITE}
        />
      </Entity>
      <Entity
        {...args}
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
        {...args}
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
        {...args}
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
        {...args}
        name="LabelGraphics"
        description="LabelGraphics!!"
        position={Cartesian3.fromDegrees(-34.0707383, 5.7117244, 100)}>
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
        {...args}
        name="ModelGraphics"
        description="ModelGraphics!!"
        position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
        <ModelGraphics uri="Cesium_Air.glb" minimumPixelSize={128} maximumScale={20000} />
      </Entity>
      <Entity
        {...args}
        name="PathGraphics"
        description="PathGraphics!!"
        position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
        <PathGraphics
          material={Color.RED}
          width={8}
          leadTime={10}
          trailTime={1000}
          resolution={5}
        />
      </Entity>
      <Entity
        {...args}
        name="PlaneGraphics"
        description="PlaneGraphics!!"
        position={Cartesian3.fromDegrees(-74.0707383, 50.7117244, 100)}>
        <PlaneGraphics
          plane={new Plane(Cartesian3.UNIT_Z, 0.0)}
          dimensions={new Cartesian2(400000.0, 300000.0)}
          fill={false}
          outline
          outlineColor={Color.YELLOW}
        />
      </Entity>
      <Entity
        {...args}
        name="PointGraphics"
        description="PointGraphics!!"
        position={Cartesian3.fromDegrees(-74.0707383, 60.7117244, 100)}>
        <PointGraphics color={Color.BISQUE} pixelSize={10} />
      </Entity>
      <Entity {...args} name="PolygonGraphics" description="PolygonGraphics!!">
        <PolygonGraphics
          hierarchy={Cartesian3.fromDegreesArray([-108.0, 42.0, -100.0, 42.0, -104.0, 40.0]) as any} // WORKAROUND
          material={Color.GREEN}
        />
      </Entity>
      <Entity
        {...args}
        name="PolylineGraphics"
        description="PolylineGraphics!!"
        position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
        <PolylineGraphics
          positions={Cartesian3.fromDegreesArrayHeights([-75, 45, 500000, -125, 45, 500000])}
          width={4}
          material={
            new PolylineDashMaterialProperty({
              color: Color.CYAN,
            })
          }
        />
      </Entity>
      {/* <Entity
      {...args}
      name="PolylineVolumeGraphics"
      description="PolylineVolumeGraphics!!"
      position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
      <PolylineVolumeGraphics
        positions={Cartesian3.fromDegreesArrayHeights([
          -90.0, 32.0, 0.0, -90.0, 36.0, 100000.0, -94.0, 36.0, 0.0,
        ])}
        shape={[
          new Cartesian2(-50000, -50000),
          new Cartesian2(50000, -50000),
          new Cartesian2(50000, 50000),
          new Cartesian2(-50000, 50000),
        ]}
        cornerType={CornerType.BEVELED}
        material={Color.GREEN.withAlpha(0.5)}
        outline
        outlineColor={Color.BLACK}
      />
    </Entity> */}
      {/* <Entity
      {...args}
      name="RectangleGraphics"
      description="RectangleGraphics!!"
      position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
      <RectangleGraphics
        coordinates={Rectangle.fromDegrees(-140.0, 30.0, -100.0, 40.0)}
        material={Color.PEACHPUFF.withAlpha(0.5)}
        rotation={CesiumMath.toRadians(45)}
        extrudedHeight={300000.0}
        height={100000.0}
        outline // height must be set for outline to display
        outlineColor={Color.BLACK}
      />
    </Entity> */}
      {/* <Entity
      {...args}
      name="WallGraphics"
      description="WallGraphics!!"
      position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
      <WallGraphics
        positions={Cartesian3.fromDegreesArray([
          -115.0, 50.0, -112.5, 50.0, -110.0, 50.0, -107.5, 50.0, -105.0, 50.0, -102.5, 50.0,
          -100.0, 50.0, -97.5, 50.0, -95.0, 50.0, -92.5, 50.0, -90.0, 50.0,
        ])}
        maximumHeights={[
          100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000,
        ]}
        minimumHeights={[0, 100000, 0, 100000, 0, 100000, 0, 100000, 0, 100000, 0]}
        material={Color.BLUE.withAlpha(0.5)}
        outline
        outlineColor={Color.BLACK}
      />
    </Entity> */}
    </Viewer>
  ),
};

export const Strict: Story = {
  render: args => (
    <StrictMode>
      <Viewer full onMouseEnter={action("mouseenter")}>
        <Entity
          {...args}
          name="BillboardGraphics"
          description="BillboardGraphics!!"
          position={Cartesian3.fromDegrees(-40.0707383, 40.7117244, 100)}
          selected>
          <BillboardGraphics image="example.png" scale={0.05} />
        </Entity>
        <Entity
          {...args}
          name="BoxGraphics"
          description="BoxGraphics!!"
          position={Cartesian3.fromDegrees(0.0707383, 40.7117244, 100)}>
          <BoxGraphics
            material={Color.RED}
            dimensions={new Cartesian3(400000.0, 300000.0, 500000.0)}
          />
        </Entity>
        <Entity
          {...args}
          name="CorridorGraphics"
          description="CorridorGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
          <CorridorGraphics
            material={Color.YELLOW}
            positions={
              Cartesian3.fromDegreesArray([-100.0, 40.0, -105.0, 40.0, -105.0, 35.0]) as any
            } // WORKAROUND
            height={200000.0}
            extrudedHeight={100000.0}
            width={200000.0}
            cornerType={CornerType.BEVELED}
            outline // height or extrudedHeight must be set for outlines to display
            outlineColor={Color.WHITE}
          />
        </Entity>
        <Entity
          {...args}
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
          {...args}
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
          {...args}
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
          {...args}
          name="LabelGraphics"
          description="LabelGraphics!!"
          position={Cartesian3.fromDegrees(-34.0707383, 5.7117244, 100)}>
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
          {...args}
          name="ModelGraphics"
          description="ModelGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
          <ModelGraphics uri="Cesium_Air.glb" minimumPixelSize={128} maximumScale={20000} />
        </Entity>
        <Entity
          {...args}
          name="PathGraphics"
          description="PathGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
          <PathGraphics
            material={Color.RED}
            width={8}
            leadTime={10}
            trailTime={1000}
            resolution={5}
          />
        </Entity>
        <Entity
          {...args}
          name="PlaneGraphics"
          description="PlaneGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 50.7117244, 100)}>
          <PlaneGraphics
            plane={new Plane(Cartesian3.UNIT_Z, 0.0)}
            dimensions={new Cartesian2(400000.0, 300000.0)}
            fill={false}
            outline
            outlineColor={Color.YELLOW}
          />
        </Entity>
        <Entity
          {...args}
          name="PointGraphics"
          description="PointGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 60.7117244, 100)}>
          <PointGraphics color={Color.BISQUE} pixelSize={10} />
        </Entity>
        <Entity {...args} name="PolygonGraphics" description="PolygonGraphics!!">
          <PolygonGraphics
            hierarchy={
              Cartesian3.fromDegreesArray([-108.0, 42.0, -100.0, 42.0, -104.0, 40.0]) as any
            } // WORKAROUND
            material={Color.GREEN}
          />
        </Entity>
        <Entity
          {...args}
          name="PolylineGraphics"
          description="PolylineGraphics!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
          <PolylineGraphics
            positions={Cartesian3.fromDegreesArrayHeights([-75, 45, 500000, -125, 45, 500000])}
            width={4}
            material={
              new PolylineDashMaterialProperty({
                color: Color.CYAN,
              })
            }
          />
        </Entity>
        {/* <Entity
      {...args}
      name="PolylineVolumeGraphics"
      description="PolylineVolumeGraphics!!"
      position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
      <PolylineVolumeGraphics
        positions={Cartesian3.fromDegreesArrayHeights([
          -90.0, 32.0, 0.0, -90.0, 36.0, 100000.0, -94.0, 36.0, 0.0,
        ])}
        shape={[
          new Cartesian2(-50000, -50000),
          new Cartesian2(50000, -50000),
          new Cartesian2(50000, 50000),
          new Cartesian2(-50000, 50000),
        ]}
        cornerType={CornerType.BEVELED}
        material={Color.GREEN.withAlpha(0.5)}
        outline
        outlineColor={Color.BLACK}
      />
    </Entity> */}
        {/* <Entity
      {...args}
      name="RectangleGraphics"
      description="RectangleGraphics!!"
      position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
      <RectangleGraphics
        coordinates={Rectangle.fromDegrees(-140.0, 30.0, -100.0, 40.0)}
        material={Color.PEACHPUFF.withAlpha(0.5)}
        rotation={CesiumMath.toRadians(45)}
        extrudedHeight={300000.0}
        height={100000.0}
        outline // height must be set for outline to display
        outlineColor={Color.BLACK}
      />
    </Entity> */}
        {/* <Entity
      {...args}
      name="WallGraphics"
      description="WallGraphics!!"
      position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}>
      <WallGraphics
        positions={Cartesian3.fromDegreesArray([
          -115.0, 50.0, -112.5, 50.0, -110.0, 50.0, -107.5, 50.0, -105.0, 50.0, -102.5, 50.0,
          -100.0, 50.0, -97.5, 50.0, -95.0, 50.0, -92.5, 50.0, -90.0, 50.0,
        ])}
        maximumHeights={[
          100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000,
        ]}
        minimumHeights={[0, 100000, 0, 100000, 0, 100000, 0, 100000, 0, 100000, 0]}
        material={Color.BLUE.withAlpha(0.5)}
        outline
        outlineColor={Color.BLACK}
      />
    </Entity> */}
      </Viewer>
    </StrictMode>
  ),
};
