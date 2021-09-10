import React, { FC } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { withCesium } from "./withCesium";
import { Provider } from "./context";

describe("core/context", () => {
  it("should inject context to cesium prop", () => {
    const Dummy: FC<{ cesium: { dummy: string } }> = ({ cesium }) => <p>{cesium.dummy}</p>;
    const WithCesiumDummy = withCesium<Record<string, unknown>, { dummy: string }>(Dummy);

    const value = { dummy: "test" };

    render(
      <Provider value={value}>
        <WithCesiumDummy />
      </Provider>,
    );

    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
