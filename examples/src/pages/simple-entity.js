import React from "react";

import { Cartesian3 } from "cesium";

import { Viewer, Entity } from "cesium-react";

const positions = [
  Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100),
  Cartesian3.fromDegrees(139.767052, 35.681167, 100),
];

export default class SimpleEntity extends React.PureComponent {
  state = {
    pos: 0,
  };

  changePosition(pos) {
    this.setState({ pos });
  }

  render() {
    const { pos } = this.state;
    return (
      <Viewer full>
        <Entity
          name="test"
          description="test"
          position={positions[pos]}
          point={{ pixelSize: 10 }}
        />
        <div
          style={{
            position: "absolute",
            left: "10px",
            top: "10px",
            zIndex: "100",
          }}>
          <button onClick={() => this.changePosition(0)}>New York</button>
          <button onClick={() => this.changePosition(1)}>Tokyo</button>
        </div>
      </Viewer>
    );
  }
}
