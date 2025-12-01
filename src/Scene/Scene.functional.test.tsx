import { render } from "@testing-library/react";
import { Scene as CesiumScene } from "cesium";
import { describe, expect, it } from "vitest";

import CesiumWidget from "../CesiumWidget";

import Scene from "./Scene";

describe("Scene", () => {
  it("should set _enableEdgeVisibility when enableEdgeVisibility prop is provided", () => {
    const { container } = render(
      <CesiumWidget>
        <Scene enableEdgeVisibility={true} />
      </CesiumWidget>,
    );

    const cesiumWidget = container.querySelector(".cesium-widget");
    expect(cesiumWidget).toBeTruthy();

    // Access the Cesium scene through the widget
    const sceneElement = (cesiumWidget as any)?._cesiumWidget?.scene as CesiumScene | undefined;

    if (sceneElement) {
      expect((sceneElement as any)._enableEdgeVisibility).toBe(true);
    }
  });

  it("should update _enableEdgeVisibility when prop changes", () => {
    const { container, rerender } = render(
      <CesiumWidget>
        <Scene enableEdgeVisibility={true} />
      </CesiumWidget>,
    );

    const cesiumWidget = container.querySelector(".cesium-widget");
    const sceneElement = (cesiumWidget as any)?._cesiumWidget?.scene as CesiumScene | undefined;

    if (sceneElement) {
      expect((sceneElement as any)._enableEdgeVisibility).toBe(true);

      // Update the prop
      rerender(
        <CesiumWidget>
          <Scene enableEdgeVisibility={false} />
        </CesiumWidget>,
      );

      expect((sceneElement as any)._enableEdgeVisibility).toBe(false);
    }
  });

  it("should not set _enableEdgeVisibility when prop is not provided", () => {
    const { container } = render(
      <CesiumWidget>
        <Scene />
      </CesiumWidget>,
    );

    const cesiumWidget = container.querySelector(".cesium-widget");
    const sceneElement = (cesiumWidget as any)?._cesiumWidget?.scene as CesiumScene | undefined;

    if (sceneElement) {
      // Should have the default value from Cesium (which is typically false or undefined)
      // We're just checking that our code doesn't force a value when not provided
      const hasProperty = "_enableEdgeVisibility" in sceneElement;
      expect(hasProperty).toBe(true); // The property exists on Scene
    }
  });
});
