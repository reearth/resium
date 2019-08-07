import React from "react";
import { Color } from "cesium";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import Scene from "../Scene";
import SkyBox from "./SkyBox";

const SkyBoxWrapper = () => {
  const [shown, setShown] = React.useState(false);
  return (
    <>
      <SkyBox show={shown} />
      <button
        style={{ position: "absolute", top: "0", left: "0" }}
        onClick={() => setShown(s => !s)}>
        SkyBox is {shown ? "shown" : "hidden"}
      </button>
    </>
  );
};

storiesOf("SkyBox", module).add("Basic", () => (
  <Viewer full>
    <Scene backgroundColor={Color.CORNFLOWERBLUE} />
    <SkyBoxWrapper />
  </Viewer>
));
