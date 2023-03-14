import { render } from "@testing-library/react";
import { FC } from "react";
import { describe, expect, it, vi } from "vitest";

import { createCameraOperation } from "./CameraOperation";
import { Provider } from "./context";

describe("core/cameraop", () => {
  it("should call proper methods", () => {
    const camera = {
      cancelFlight: vi.fn(),
    } as any;
    const scene = {
      isDestroyed: () => false,
    } as any;

    const cameraOperationStart = vi.fn();
    const DummyCameraOperation = createCameraOperation<{ test: number }>(
      "dummy",
      cameraOperationStart,
    );

    const Test: FC<{ test: number }> = ({ test }) => (
      <Provider value={{ camera, scene }}>
        <DummyCameraOperation test={test} />
      </Provider>
    );
    const { rerender } = render(<Test test={0} />);

    expect(cameraOperationStart).toHaveBeenCalledTimes(1);
    expect(camera.cancelFlight).toHaveBeenCalledTimes(1);

    rerender(<Test test={1} />);

    expect(cameraOperationStart).toHaveBeenCalledTimes(2);
    expect(camera.cancelFlight).toHaveBeenCalledTimes(2);
  });

  it("should call cancelFlight", () => {
    const camera = {
      cancelFlight: vi.fn(),
    } as any;
    const scene = {
      isDestroyed: () => false,
    } as any;

    const DummyCameraOperation = createCameraOperation("dummy", () => {});

    const { unmount } = render(
      <Provider value={{ camera, scene }}>
        <DummyCameraOperation cancelFlightOnUnmount />
      </Provider>,
    );

    expect(camera.cancelFlight).toHaveBeenCalledTimes(1);

    unmount();

    expect(camera.cancelFlight).toHaveBeenCalledTimes(2);
  });
});
