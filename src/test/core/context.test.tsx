import React from "react";
import { mount } from "enzyme";

import { withContext } from "../../core/context";
import { Provider } from "../../core/context";

describe("core/context", () => {
  it("should inject context to cesium prop", () => {
    const Dummy: React.SFC<{ cesium: { dummy: string } }> = () => null;
    const WithContextDummy = withContext<{}, { dummy: string }>(Dummy);

    const value = { dummy: "test" };

    const wrapper = mount(
      <Provider value={value}>
        <WithContextDummy />
      </Provider>,
    );

    expect(wrapper.find(Dummy).prop("cesium")).toBe(value);
  });
});
