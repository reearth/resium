import React, { createRef, ReactNode } from "react";
import { Event } from "cesium";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { createCesiumComponent, CesiumComponentRef } from "./component";
import { Provider } from "./context";

beforeEach(() => {
  console.warn = jest.fn();
});

describe("core/component", () => {
  it("should create and expose cesium element correctly on initialized", () => {
    const create = jest.fn(() => "foobar");
    const value = { hoge: 1 };

    const Component = createCesiumComponent<string, { test: number }>({
      name: "test",
      create,
    });

    const ref = createRef<CesiumComponentRef<string>>();

    render(
      <Provider value={value}>
        <Component test={1} ref={ref} />
      </Provider>,
    );

    expect(create).toBeCalledWith(value, { test: 1 }, null);
    expect(create).toBeCalledTimes(1);
    expect(ref.current?.cesiumElement).toBe("foobar");
  });

  it("should call destroy fn on unmounted", () => {
    const destroy = jest.fn();
    const value = { hoge: 1 };

    const Component = createCesiumComponent<string, { test: number }>({
      name: "test",
      create: () => "foobar",
      destroy,
    });

    render(
      <Provider value={value}>
        <Component test={1} />
      </Provider>,
    ).unmount();

    expect(destroy).toBeCalledWith("foobar", value, null, undefined);
    expect(destroy).toBeCalledTimes(1);
  });

  it("should set cesium events after created", () => {
    const cesiumElement = {
      hoge: new Event(),
    };

    const Component = createCesiumComponent<typeof cesiumElement, { bar?: () => void }>({
      name: "test",
      create: () => cesiumElement,
      cesiumEventProps: { bar: "hoge" },
    });

    render(<Component bar={() => {}} />);

    expect(cesiumElement.hoge.numberOfListeners).toBe(1);
  });

  it("should set cesium props after created", () => {
    const cesiumElement = {
      foo: 0,
    };

    const Component = createCesiumComponent<typeof cesiumElement, { foo?: number }>({
      name: "test",
      create: () => cesiumElement,
      cesiumProps: ["foo"],
      setCesiumPropsAfterCreate: true,
    });

    render(<Component foo={10} />);

    expect(cesiumElement.foo).toBe(10);
  });

  it("should update cesium props", () => {
    const cesiumElement = {
      foo: 0,
    };

    const Component = createCesiumComponent<typeof cesiumElement, { foo?: number }>({
      name: "test",
      create: () => cesiumElement,
      cesiumProps: ["foo"],
    });

    const { rerender } = render(<Component />);

    expect(cesiumElement.foo).toBe(0);

    rerender(<Component foo={1} />);

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
      { foo?: () => void; bar?: () => void; hoge?: () => void }
    >({
      name: "test",
      create: () => cesiumElement,
      cesiumEventProps: {
        foo: "foo",
        bar: "bar",
        hoge: "hoge",
      },
    });

    const { rerender } = render(<Component foo={() => {}} hoge={() => {}} />);

    expect(cesiumElement.foo.numberOfListeners).toBe(1);
    expect(cesiumElement.bar.numberOfListeners).toBe(0);
    expect(cesiumElement.hoge.numberOfListeners).toBe(1);

    rerender(<Component bar={() => {}} hoge={() => {}} />);

    expect(cesiumElement.foo.numberOfListeners).toBe(0);
    expect(cesiumElement.bar.numberOfListeners).toBe(1);
    expect(cesiumElement.hoge.numberOfListeners).toBe(1); // TODO
  });

  it("should remount when cesium read only props are updated", () => {
    const cesiumElement = {
      foo: 0,
    };

    const createFn = jest.fn((_ctx, props: { foo?: number }) => {
      if (typeof props.foo === "number") {
        cesiumElement.foo = props.foo;
      }
      return cesiumElement;
    });
    const destroyFn = jest.fn();

    const Component = createCesiumComponent<typeof cesiumElement, { foo?: number }>({
      name: "test",
      create: createFn,
      destroy: destroyFn,
      cesiumReadonlyProps: ["foo"],
    });

    const { rerender } = render(<Component foo={1} />);

    expect(createFn).toBeCalledTimes(1);
    expect(destroyFn).toBeCalledTimes(0);
    expect(cesiumElement.foo).toBe(1);

    rerender(<Component foo={2} />);

    expect(createFn).toBeCalledTimes(2);
    expect(destroyFn).toBeCalledTimes(1);
    expect(cesiumElement.foo).toBe(2);
  });

  it("should call update", () => {
    const updateFn = jest.fn();

    const Component = createCesiumComponent<"hoge", { foo?: number }>({
      name: "test",
      create: () => "hoge",
      update: updateFn,
    });

    const { rerender } = render(<Component />);

    expect(updateFn).toBeCalledTimes(0);

    rerender(<Component foo={1} />);

    expect(updateFn).toBeCalledTimes(1);
    expect(updateFn).toBeCalledWith("hoge", { foo: 1 }, {}, {});
  });

  it("should provide context", () => {
    const create1 = jest.fn(() => "test");
    const create2 = jest.fn(() => "test");

    const Component1 = createCesiumComponent<string, { children?: ReactNode }>({
      name: "test",
      create: create1,
      provide: (): any => ({ context: "b" }),
    });

    const Component2 = createCesiumComponent<string, unknown>({
      name: "test2",
      create: create2,
    });

    render(
      <Provider value={{ context: "a", context2: "foo" }}>
        <Component1>
          <Component2 />
        </Component1>
      </Provider>,
    );

    expect(create1).toBeCalledWith({ context: "a", context2: "foo" }, expect.anything(), null);
    expect(create2).toBeCalledWith({ context: "b", context2: "foo" }, expect.anything(), null);
  });

  it("should render container", () => {
    const createFn = jest.fn(() => "foobar");

    const Component = createCesiumComponent<string, { className?: string }>({
      name: "test",
      create: createFn,
      renderContainer: true,
      containerProps: ["className"],
    });

    render(
      <Provider value={{}}>
        <Component className="hoge" />
      </Provider>,
    );

    expect(createFn).toBeCalledWith(
      expect.anything(),
      expect.anything(),
      expect.any(HTMLDivElement),
    );
    const containers = screen.getAllByTestId("resium-container");
    expect(containers.length).toBe(1);
    expect(containers[0].getAttribute("class")).toBe("hoge");
  });

  it("should keep state", () => {
    const provideFn = jest.fn();
    const destroyFn = jest.fn();

    const state = {};

    const Component = createCesiumComponent<string, unknown>({
      name: "test",
      create: () => ["foobar", state],
      provide: provideFn,
      destroy: destroyFn,
    });

    render(
      <Provider value={{}}>
        <Component />
      </Provider>,
    ).unmount();

    expect(provideFn).toBeCalledWith(expect.anything(), expect.anything(), state);
    expect(destroyFn).toBeCalledWith(expect.anything(), expect.anything(), null, state);
  });

  it("should not render when noChildren is true", () => {
    const Component = createCesiumComponent<string, { children?: ReactNode }>({
      name: "test",
      noChildren: false,
    });

    const { rerender } = render(
      <Component>
        <p data-testid="hello">Hello!</p>
      </Component>,
    );

    expect(screen.queryByTestId("hello")).toBeInTheDocument();

    const Component2 = createCesiumComponent<string, { children?: ReactNode }>({
      name: "test",
      noChildren: true,
    });

    rerender(
      <Component2>
        <p data-testid="hello">Hello!</p>
      </Component2>,
    );

    expect(screen.queryByTestId("hello")).not.toBeInTheDocument();
  });
});
