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

    const TestComponent: React.SFC<{ test: number }> = ({ test }) => (
      <Provider value={{ camera }}>
        <DummyCameraOperation test={test} />
      </Provider>
    );

    const wrapper = mount(<TestComponent test={0} />);

    expect(cameraOperationStart).toHaveBeenCalledTimes(1);
    expect(camera.cancelFlight).toHaveBeenCalledTimes(0);

    wrapper.update();

    expect(cameraOperationStart).toHaveBeenCalledTimes(1);
    expect(camera.cancelFlight).toHaveBeenCalledTimes(0);

    wrapper.setProps({ test: 1 });

    expect(cameraOperationStart).toHaveBeenCalledTimes(2);
    expect(camera.cancelFlight).toHaveBeenCalledTimes(1);
  });

  it("should call cancelFlight", () => {
    const camera = {
      cancelFlight: jest.fn(),
    };

    const DummyCameraOperation = createCameraOperation({
      name: "dummy",
      // tslint:disable-next-line:no-empty
      cameraOperationStart: () => {},
    });

    const wrapper = mount(
      <Provider value={{ camera }}>
        <DummyCameraOperation cancelCameraFlight />
      </Provider>,
    );

    wrapper.unmount();

    expect(camera.cancelFlight).toHaveBeenCalledTimes(1);
  });
});
