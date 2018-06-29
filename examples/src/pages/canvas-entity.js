import React from "react";

import { Cartesian3 } from "cesium";

import { Viewer, Entity } from "cesium-react";

export default class CanvasEntity extends React.PureComponent {
  state = {
    progress: 0,
    image: null,
  };

  componentDidMount() {
    const { progress } = this.state;
    this.c1 = this.initCanvas();
    this.c2 = this.initCanvas();
    if (progress < 1) {
      this.i = setInterval(() => {
        this.updateProgress();
      }, 10);
    }
  }

  componentWillUnmount() {
    clearInterval(this.i);
  }

  updateProgress() {
    this.setState(({ progress, image }) => {
      const canvas = image === this.c1 ? this.c2 : this.c1;
      const newPrgoress = Math.min(progress + 0.01, 1);
      this.renderCanvas(canvas, newPrgoress);
      if (newPrgoress >= 1) {
        clearInterval(this.i);
      }
      return {
        progress: newPrgoress,
        image: canvas,
      };
    });
  }

  i = null;

  c1 = null;

  c2 = null;

  initCanvas() {
    const can = document.createElement("canvas");
    can.width = 100;
    can.height = 100;
    return can;
  }

  renderCanvas(can, p) {
    const c = can.getContext("2d");
    c.clearRect(0, 0, can.width, can.height);
    c.fillStyle = "rgba(100,0,0,0.8)";
    c.beginPath();
    c.arc(can.width / 2, can.height / 2, (p * can.width) / 2, 0, Math.PI * 2, false);
    c.fill();
  }

  render() {
    const { image } = this.state;
    return (
      <Viewer full>
        <Entity
          name="test"
          description="test"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          billboard={{ image }}
        />
      </Viewer>
    );
  }
}
