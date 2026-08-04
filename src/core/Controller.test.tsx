import { render, waitFor } from "@testing-library/react";
import { MouseButton } from "cesium";
import { expect, it, vi } from "vitest";

import ScreenSpaceTiltOrbitCameraController from "../ScreenSpaceTiltOrbitCameraController";

import { CesiumContext } from "./context";

function makeContext() {
  const registerController = vi.fn();
  const unregisterController = vi.fn();
  const container = document.createElement("div");
  const cesiumWidget = {
    container,
    isDestroyed: () => false,
    scene: { controllerHost: { registerController, unregisterController } },
  } as any;
  return { ctx: { cesiumWidget } as any, registerController, unregisterController, container };
}

it("registers the controller against the widget container", async () => {
  const { ctx, registerController, container } = makeContext();

  render(
    <CesiumContext.Provider value={ctx}>
      <ScreenSpaceTiltOrbitCameraController />
    </CesiumContext.Provider>,
  );

  await waitFor(() => expect(registerController).toHaveBeenCalledTimes(1));
  const [controller, element, priority] = registerController.mock.calls[0];
  expect(element).toBe(container);
  expect(priority).toBeUndefined();
  expect(controller.tiltEnabled).toBe(true);
});

it("forwards priority to registerController", async () => {
  const { ctx, registerController } = makeContext();

  render(
    <CesiumContext.Provider value={ctx}>
      <ScreenSpaceTiltOrbitCameraController priority={0} />
    </CesiumContext.Provider>,
  );

  await waitFor(() => expect(registerController).toHaveBeenCalledTimes(1));
  expect(registerController.mock.calls[0][2]).toBe(0);
});

it("unregisters the same controller on unmount", async () => {
  const { ctx, registerController, unregisterController, container } = makeContext();

  const { unmount } = render(
    <CesiumContext.Provider value={ctx}>
      <ScreenSpaceTiltOrbitCameraController />
    </CesiumContext.Provider>,
  );
  await waitFor(() => expect(registerController).toHaveBeenCalledTimes(1));
  const controller = registerController.mock.calls[0][0];

  unmount();

  await waitFor(() => expect(unregisterController).toHaveBeenCalledTimes(1));
  expect(unregisterController).toHaveBeenCalledWith(controller, container);
});

it("applies mutable props to the controller after creation", async () => {
  const { ctx, registerController } = makeContext();

  render(
    <CesiumContext.Provider value={ctx}>
      <ScreenSpaceTiltOrbitCameraController orbitEnabled={false} tiltMagnitude={0.5} />
    </CesiumContext.Provider>,
  );

  await waitFor(() => expect(registerController).toHaveBeenCalledTimes(1));
  const controller = registerController.mock.calls[0][0];
  await waitFor(() => expect(controller.orbitEnabled).toBe(false));
  expect(controller.tiltMagnitude).toBe(0.5);
});

it("passes dragInputs through the constructor, since bindings attach at registration", async () => {
  const { ctx, registerController } = makeContext();
  const dragInputs = [{ button: MouseButton.LEFT }];

  render(
    <CesiumContext.Provider value={ctx}>
      <ScreenSpaceTiltOrbitCameraController dragInputs={dragInputs} />
    </CesiumContext.Provider>,
  );

  await waitFor(() => expect(registerController).toHaveBeenCalledTimes(1));
  expect(registerController.mock.calls[0][0].dragInputs).toEqual(dragInputs);
});

it("re-creates the controller when dragInputs changes", async () => {
  const { ctx, registerController, unregisterController } = makeContext();

  const { rerender } = render(
    <CesiumContext.Provider value={ctx}>
      <ScreenSpaceTiltOrbitCameraController dragInputs={[{ button: MouseButton.LEFT }]} />
    </CesiumContext.Provider>,
  );
  await waitFor(() => expect(registerController).toHaveBeenCalledTimes(1));

  rerender(
    <CesiumContext.Provider value={ctx}>
      <ScreenSpaceTiltOrbitCameraController dragInputs={[{ button: MouseButton.RIGHT }]} />
    </CesiumContext.Provider>,
  );

  await waitFor(() => expect(registerController).toHaveBeenCalledTimes(2));
  expect(unregisterController).toHaveBeenCalledTimes(1);
  expect(registerController.mock.calls[1][0].dragInputs).toEqual([{ button: MouseButton.RIGHT }]);
});

it("does nothing when there is no widget in context", async () => {
  const { registerController } = makeContext();

  render(
    <CesiumContext.Provider value={{} as any}>
      <ScreenSpaceTiltOrbitCameraController />
    </CesiumContext.Provider>,
  );

  await waitFor(() => expect(registerController).not.toHaveBeenCalled());
});
