import React from "react";
import { mount } from "enzyme";

import { Provider } from "../../core/context";
import createCameraOperation from "../../core/CameraOperation";

describe("core/CameraOperation", () => {
  it("should call proper methods", () => {
    const camera = {
      cancelFlight: jest.fn(),
    };

    const cameraOperationStart = jest.fn();

    const DummyCameraOperation = createCameraOperation<{ test: number }>({
      name: "dummy",
      cameraOperationStart,
    });

    const wrapper = mount(
      <Provider value={{ camera }}>
        <DummyCameraOperation test={0} />
      </Provider>,
    );

    expect(cameraOperationStart).toHaveBeenCalledTimes(1);
    expect(camera.cancelFlight).not.toHaveBeenCalled();

    wrapper.find(DummyCameraOperation).setProps({ test: 1 });

    expect(cameraOperationStart).toHaveBeenCalledTimes(2);
    expect(camera.cancelFlight).not.toHaveBeenCalled();

    wrapper.unmount();

    expect(camera.cancelFlight).toHaveBeenCalledTimes(1);
  });
});
