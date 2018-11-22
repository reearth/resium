import React from "react";
import { mount } from "enzyme";
import { Event } from "cesium";

import createCesiumComponent, { CesiumElementHolder } from "../../core/CesiumComponent";
import { Provider } from "../../core/context";
import { number } from "prop-types";

describe("core/CesiumComponent", () => {
  it("should call create fn when it is initialized", () => {
    const create = jest.fn();
    const value = { hoge: 1 };

    const Component = createCesiumComponent<{}, { test: number }, {}>({
      name: "test",
      create,
    });

    mount(
      <Provider value={value}>
        <Component test={1} />
      </Provider>,
    );

    expect(create).toBeCalledWith({}, { cesium: value, test: 1 }, value, undefined);
  });

  it("should call mount fn when it is mounted", () => {
    const mountFn = jest.fn();
    const value = { hoge: 1 };

    const Component = createCesiumComponent<string, { test: number }, {}>({
      name: "test",
      create() {
        return "foobar";
      },
      mount: mountFn,
    });

    mount(
      <Provider value={value}>
        <Component test={1} />
      </Provider>,
    );

    expect(mountFn).toBeCalledWith("foobar", value, { cesium: value, test: 1 }, undefined);
  });

  it("should call unmount fn when it is unmounted", () => {
    const unmount = jest.fn();
    const value = { hoge: 1 };

    const Component = createCesiumComponent<string, { test: number }, {}>({
      name: "test",
      create() {
        return "foobar";
      },
      unmount,
    });

    mount(
      <Provider value={value}>
        <Component test={1} />
      </Provider>,
    ).unmount();

    expect(unmount).toBeCalledWith(
      "foobar",
      value,
      { cesium: value, test: 1 },
      undefined,
      undefined,
    );
  });

  it("should expose cesiumElement", () => {
    const Component = createCesiumComponent<string, {}, {}>({
      name: "test",
      create() {
        return "foobar";
      },
    });

    class TestComponent extends React.PureComponent {
      public ref: React.RefObject<CesiumElementHolder<string>> = React.createRef();

      public render() {
        return <Component ref={this.ref} />;
      }
    }

    const wrapper = mount(<TestComponent />);

    const cesiumElement = (wrapper.find(TestComponent).instance() as any).ref.current.cesiumElement;
    expect(cesiumElement).toBe("foobar");
  });

  it("should set cesium events after it is created", () => {
    const cesiumElement = {
      foo: 0,
      hoge: new Event(),
    };

    const Component = createCesiumComponent<
      typeof cesiumElement,
      { foo?: number; bar?: () => void },
      {}
    >({
      name: "test",
      create() {
        return cesiumElement;
      },
      cesiumProps: ["foo"],
      cesiumEventProps: {
        hoge: "bar",
      },
    });

    // tslint:disable-next-line:no-empty
    const bar = () => {};

    mount(<Component foo={10} bar={bar} />);

    expect(cesiumElement.foo).toBe(0);
    expect(cesiumElement.hoge.numberOfListeners).toBe(1);
    expect(cesiumElement.hoge.addEventListener).toBeCalledWith(bar);
  });

  it("should set cesium props after it is created", () => {
    const cesiumElement = {
      foo: 0,
    };

    const Component = createCesiumComponent<typeof cesiumElement, { foo?: number }, {}>({
      name: "test",
      create() {
        return cesiumElement;
      },
      cesiumProps: ["foo"],
      setCesiumPropsAfterCreate: true,
    });

    const wrapper = mount(<Component foo={10} />);

    expect(cesiumElement.foo).toBe(10);
  });

  it("should update cesium props", () => {
    const cesiumElement = {
      foo: 0,
    };

    const Component = createCesiumComponent<typeof cesiumElement, { foo?: number }, {}>({
      name: "test",
      create() {
        return cesiumElement;
      },
      cesiumProps: ["foo"],
    });

    const wrapper = mount(<Component />);

    expect(cesiumElement.foo).toBe(0);

    wrapper.setProps({ foo: 1 });

    expect(cesiumElement.foo).toBe(1);
  });

  it("should update cesium events", () => {
    const cesiumElement = {
      foo: new Event(),
      bar: new Event(),
      hoge: new Event(),
    };

    const Component = createCesiumComponent<
      typeof cesiumElement,
      { foo?: () => void; bar?: () => void; hoge?: () => void },
      {}
    >({
      name: "test",
      create() {
        return cesiumElement;
      },
      cesiumEventProps: {
        foo: "foo",
        bar: "bar",
        hoge: "hoge",
      },
    });

    // tslint:disable-next-line:no-empty jsx-no-lambda
    const wrapper = mount(<Component foo={() => {}} hoge={() => {}} />);

    expect(cesiumElement.foo.numberOfListeners).toBe(1);
    expect(cesiumElement.bar.numberOfListeners).toBe(0);

    // tslint:disable-next-line:no-empty
    wrapper.setProps({ foo: undefined, bar: () => {}, hoge: () => {} });

    expect(cesiumElement.foo.numberOfListeners).toBe(0);
    expect(cesiumElement.bar.numberOfListeners).toBe(1);
    expect(cesiumElement.hoge.numberOfListeners).toBe(1);
  });

  it("should remount when cesium read only props are updated", () => {
    const cesiumElement = {
      foo: 0,
    };

    const createFn = jest.fn((cprops: { foo?: number }) => {
      if (typeof cprops.foo === "number") {
        cesiumElement.foo = cprops.foo;
      }
      return cesiumElement;
    });
    const mountFn = jest.fn();
    const unmountFn = jest.fn();

    const Component = createCesiumComponent<typeof cesiumElement, { foo?: number }, {}>({
      name: "test",
      create: createFn,
      mount: mountFn,
      unmount: unmountFn,
      cesiumReadonlyProps: ["foo"],
    });

    const wrapper = mount(<Component foo={1} />);

    expect(createFn).toBeCalledTimes(1);
    expect(mountFn).toBeCalledTimes(1);
    expect(unmountFn).toBeCalledTimes(0);
    expect(cesiumElement.foo).toBe(1);

    wrapper.setProps({ foo: 2 });

    expect(createFn).toBeCalledTimes(2);
    expect(mountFn).toBeCalledTimes(2);
    expect(unmountFn).toBeCalledTimes(1);
    expect(cesiumElement.foo).toBe(2);
  });

  it("should provide context", () => {
    const create1 = jest.fn(() => () => "test");
    const create2 = jest.fn(() => () => "test");

    const Component1 = createCesiumComponent<string, { children?: React.ReactNode }, {}>({
      name: "test",
      create: create1,
      provide() {
        return { context: "b" };
      },
    });

    const Component2 = createCesiumComponent<string, {}, {}>({
      name: "test2",
      create: create2,
    });

    mount(
      <Provider value={{ context: "a", context2: "foo" }}>
        <Component1>
          <Component2 />
        </Component1>
      </Provider>,
    );

    expect(create1).toBeCalledWith(
      expect.anything(),
      expect.anything(),
      { context: "a", context2: "foo" },
      undefined,
    );

    expect(create2).toBeCalledWith(
      expect.anything(),
      expect.anything(),
      { context: "b", context2: "foo" },
      undefined,
    );
  });

  it("should initialize with ref", () => {
    const mountFn = jest.fn();
    const value = { hoge: 1 };

    const Component = createCesiumComponent<string, { test: number }, {}>({
      name: "test",
      create() {
        return "foobar";
      },
      mount: mountFn,
      createRef: true,
    });

    mount(
      <Provider value={value}>
        <Component test={1} />
      </Provider>,
    );

    expect(mountFn).toBeCalledWith(expect.anything(), expect.anything(), expect.anything(), {
      current: null,
    });
  });

  it("should render", () => {
    const render = jest.fn(() => <div />);
    const value = { hoge: 1 };

    const Component = createCesiumComponent<string, { test: number }, {}>({
      name: "test",
      create() {
        return "foobar";
      },
      createRef: true,
      render,
    });

    const wrapper = mount(
      <Provider value={value}>
        <Component test={1} />
      </Provider>,
    );

    expect(render).toBeCalledWith("foobar", { cesium: value, test: 1 }, true, { current: null });
    expect(wrapper.find("div").length).toBe(1);
  });

  it("should not render when noRender is true", () => {
    const Component = createCesiumComponent<string, { children?: React.ReactNode }, {}>({
      name: "test",
      create() {
        return "foobar";
      },
      noRender: true,
    });

    const wrapper = mount(
      <Component>
        <div />
      </Component>,
    );

    expect(wrapper.find("div").length).toBe(0);
  });

  it("should set state", () => {
    const provide = jest.fn();
    const unmount = jest.fn();
    const value = { hoge: 1 };

    const Component = createCesiumComponent<string, {}, any>({
      name: "test",
      create() {
        return ["foobar", "state"];
      },
      provide,
      unmount,
    });

    mount(<Component />).unmount();

    expect(provide).toBeCalledWith("foobar", { cesium: {} }, "state");
    expect(unmount).toBeCalledWith("foobar", {}, { cesium: {} }, undefined, "state");
  });
});
