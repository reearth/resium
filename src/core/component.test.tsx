import { render, screen, waitFor } from "@testing-library/react";
import { Event } from "cesium";
import { createRef, ReactNode } from "react";
import { beforeEach, describe, expect, it, vi, vitest } from "vitest";

import { createCesiumComponent, CesiumComponentRef } from "./component";
import { Provider } from "./context";

beforeEach(() => {
  console.warn = vi.fn();
});

describe("core/component", () => {
  it("should create and expose cesium element correctly on initialized", async () => {
    const create = vi.fn(() => "foobar");
    const value = { hoge: 1 } as any;

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

    await waitFor(() => {
      expect(create).toBeCalledWith(value, { test: 1 }, null);
      expect(create).toBeCalledTimes(1);
      expect(ref.current?.cesiumElement).toBe("foobar");
    });
  });

  it("should create and expose cesium element correctly on initialized asynchronously", async () => {
    const create = vi.fn(() => Promise.resolve("foobar"));
    const value = { hoge: 1 } as any;

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

    await waitFor(() => {
      expect(ref.current?.cesiumElement).toBe("foobar");
    });

    expect(create).toBeCalledWith(value, { test: 1 }, null);
    expect(create).toBeCalledTimes(1);
  });

  it("should call destroy fn on unmounted", () => {
    const destroy = vi.fn();
    const value = { hoge: 1 } as any;

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

    waitFor(() => {
      expect(destroy).toBeCalledWith("foobar", value, null, undefined);
      expect(destroy).toBeCalledTimes(1);
    });
  });

  it("should set cesium events after created", async () => {
    const cesiumElement = {
      hoge: new Event(),
    };

    const Component = createCesiumComponent<typeof cesiumElement, { bar?: () => void }>({
      name: "test",
      create: () => cesiumElement,
      cesiumEventProps: { bar: "hoge" },
    });

    render(<Component bar={() => {}} />);

    await waitFor(() => {
      expect(cesiumElement.hoge.numberOfListeners).toBe(1);
    });
  });

  it("should set cesium props after created", async () => {
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

    await waitFor(() => {
      expect(cesiumElement.foo).toBe(10);
    });
  });

  it("should update cesium props", async () => {
    const cesiumElement = {
      foo: 0,
    };

    const Component = createCesiumComponent<typeof cesiumElement, { foo?: number }>({
      name: "test",
      create: () => cesiumElement,
      cesiumProps: ["foo"],
    });

    const { rerender } = render(<Component />);

    await waitFor(() => {
      expect(cesiumElement.foo).toBe(0);
    });

    rerender(<Component foo={1} />);

    await waitFor(() => {
      expect(cesiumElement.foo).toBe(1);
    });
  });

  it("should update cesium events", async () => {
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

    await waitFor(() => {
      expect(cesiumElement.foo.numberOfListeners).toBe(1);
      expect(cesiumElement.bar.numberOfListeners).toBe(0);
      expect(cesiumElement.hoge.numberOfListeners).toBe(1);
    });

    rerender(<Component bar={() => {}} hoge={() => {}} />);

    await waitFor(() => {
      expect(cesiumElement.foo.numberOfListeners).toBe(0);
      expect(cesiumElement.bar.numberOfListeners).toBe(1);
      expect(cesiumElement.hoge.numberOfListeners).toBe(1); // TODO
    });
  });

  it("should remount when cesium read only props are updated", async () => {
    const cesiumElement = {
      foo: 0,
    };

    const createFn = vi.fn((_ctx, props: { foo?: number }) => {
      if (typeof props.foo === "number") {
        cesiumElement.foo = props.foo;
      }
      return cesiumElement;
    });
    const destroyFn = vi.fn();

    const Component = createCesiumComponent<typeof cesiumElement, { foo?: number }>({
      name: "test",
      create: createFn,
      destroy: destroyFn,
      cesiumReadonlyProps: ["foo"],
    });

    const { rerender } = render(<Component foo={1} />);

    await waitFor(() => {
      expect(createFn).toBeCalledTimes(1);
      expect(destroyFn).toBeCalledTimes(0);
      expect(cesiumElement.foo).toBe(1);
    });

    rerender(<Component foo={2} />);

    waitFor(() => {
      expect(createFn).toBeCalledTimes(2);
      expect(destroyFn).toBeCalledTimes(1);
      expect(cesiumElement.foo).toBe(2);
    });
  });

  it("should call update", async () => {
    const updateFn = vi.fn();

    const Component = createCesiumComponent<{ hoge: "hoge" }, { foo?: number }>({
      name: "test",
      create: () => ({ hoge: "hoge" }),
      update: updateFn,
    });

    const { rerender } = render(<Component />);

    await waitFor(() => {
      expect(updateFn).toBeCalledTimes(0);
    });

    rerender(<Component foo={1} />);

    await waitFor(() => {
      expect(updateFn).toBeCalledTimes(1);
      expect(updateFn).toBeCalledWith({ hoge: "hoge", foo: 1 }, { foo: 1 }, {}, {});
    });
  });

  it("should provide context", async () => {
    const create1 = vi.fn(() => "test");
    const create2 = vi.fn(() => "test");

    const Component1 = createCesiumComponent<string, { children?: ReactNode }>({
      name: "test",
      create: create1,
      provide: (): any => ({ context: "b" }),
    });

    const Component2 = createCesiumComponent<string, {}>({
      name: "test2",
      create: create2,
    });

    render(
      <Provider value={{ context: "a", context2: "foo" } as any}>
        <Component1>
          <Component2 />
        </Component1>
      </Provider>,
    );

    await waitFor(() => {
      expect(create1).toBeCalledWith({ context: "a", context2: "foo" }, expect.anything(), null);
      expect(create2).toBeCalledWith({ context: "b", context2: "foo" }, expect.anything(), null);
    });
  });

  it("should invoke onUpdate event when being dirty", () => {
    const cesiumElement = {
      foo: 0,
    };
    const onUpdate = vitest.fn();

    const Component = createCesiumComponent<typeof cesiumElement, { foo?: number }>({
      name: "test",
      create: () => cesiumElement,
      cesiumProps: ["foo"],
    });

    const { rerender } = render(
      <Provider
        value={{
          __$internal: {
            onUpdate,
          },
        }}>
        <Component />
      </Provider>,
    );

    expect(cesiumElement.foo).toBe(0);
    expect(onUpdate).not.toBeCalled();

    rerender(
      <Provider
        value={{
          __$internal: {
            onUpdate,
          },
        }}>
        <Component foo={1} />
      </Provider>,
    );

    waitFor(() => {
      expect(cesiumElement.foo).toBe(1);
      expect(onUpdate).toBeCalledTimes(1);
    });
  });

  it("should render container", async () => {
    const createFn = vi.fn(() => "foobar");

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

    await waitFor(() => {
      expect(createFn).toBeCalledWith(
        expect.anything(),
        expect.anything(),
        expect.any(HTMLDivElement),
      );
      const containers = screen.getAllByTestId("resium-container");
      expect(containers.length).toBe(1);
      expect(containers[0].getAttribute("class")).toBe("hoge");
    });
  });

  it("should keep state", () => {
    const provideFn = vi.fn();
    const destroyFn = vi.fn();

    const state = {};

    const Component = createCesiumComponent<string, {}>({
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

    waitFor(() => {
      expect(provideFn).toBeCalledWith(
        expect.anything(),
        expect.anything(),
        expect.anything(),
        state,
      );
      expect(destroyFn).toBeCalledWith(expect.anything(), expect.anything(), null, state);
    });
  });

  it("should not render when noChildren is true", async () => {
    const Component = createCesiumComponent<string, { children?: ReactNode }>({
      name: "test",
      noChildren: false,
    });

    const { rerender } = render(
      <Component>
        <p data-testid="hello">Hello!</p>
      </Component>,
    );

    await waitFor(() => {
      expect(screen.getByTestId("hello")).toBeInTheDocument();
    });

    const Component2 = createCesiumComponent<string, { children?: ReactNode }>({
      name: "test",
      noChildren: true,
    });

    rerender(
      <Component2>
        <p data-testid="hello">Hello!</p>
      </Component2>,
    );

    await waitFor(() => {
      expect(screen.queryByTestId("hello")).not.toBeInTheDocument();
    });
  });
});
