import React from "react";
import { mount } from "enzyme";

import { withContext } from "../../core/context";
import { Provider } from "../../core/context";

describe("core/context", () => {
  it("should inject context to cesium prop", () => {
    const Dummy: React.SFC<{ cesium: { dummy: string } }> = ({ cesium }) => (
      <div>{cesium.dummy}</div>
    );
    const WithContextDummy = withContext<{}, { dummy: string }>(Dummy);

    const wrapper = mount(
      <Provider value={{ dummy: "test" }}>
        <WithContextDummy />
      </Provider>,
    );
    expect(wrapper.find(Dummy).prop("cesium")).toEqual({ dummy: "test" });
  });
});
