import { render, screen } from "@testing-library/react";
import { FC } from "react";
import { describe, expect, it } from "vitest";

import { Provider } from "./context";
import { withCesium } from "./withCesium";

describe("core/context", () => {
  it("should inject context to cesium prop", () => {
    const Dummy: FC<{ cesium: { dummy: string } }> = ({ cesium }) => <p>{cesium.dummy}</p>;
    const WithCesiumDummy = withCesium<Record<string, unknown>, { dummy: string }>(Dummy);

    const value = { dummy: "test" } as any;

    render(
      <Provider value={value}>
        <WithCesiumDummy />
      </Provider>,
    );

    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
