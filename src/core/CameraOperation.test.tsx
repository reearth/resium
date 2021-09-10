import React, { FC } from "react";
import { render } from "@testing-library/react";

import { Provider } from "./context";
import { createCameraOperation } from "./CameraOperation";

describe("core/cameraop", () => {
  it("should call proper methods", () => {
    const camera = {
      cancelFlight: jest.fn(),
    };
    const scene = {
      isDestroyed: () => false,
    };

    const cameraOperationStart = jest.fn();
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
      cancelFlight: jest.fn(),
    };
    const scene = {
      isDestroyed: () => false,
    };

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
