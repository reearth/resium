import React from "react";

import { Cartesian3, BillboardGraphics } from "cesium";

import { Viewer, Entity } from "cesium-react";

export default class CanvasEntity extends React.PureComponent {

  state = {
    p: 0
  };

  componentDidMount() {
    const { p } = this.state;
    if (p < 1) {
      this.i = setInterval(() => {
        this.updateProgress();
      }, 10);
    }
  }

  componentDidUpdate() {
    const { p } = this.state;
    this.updateImage();
    if (p > 1) {
      clearInterval(this.i);
    }
  }

  componentWillUnmount() {
    clearInterval(this.i);
  }

  updateProgress() {
    this.setState(({ p }) => ({
      p: p + 0.01
    }));
  }

  e = null;

  i = null;

  c1 = null;

  c2 = null;

  initCanvas() {
    const can = document.createElement("canvas");
    can.width = 300;
    can.height = 300;
    return can;
  }

  updateImage() {
    if (!this.e) return;
    if (!this.c1) {
      this.c1 = this.initCanvas();
    }
    if (!this.c2) {
      this.c2 = this.initCanvas();
    }

    const { p } = this.state;
    const can = !this.e.billboard || this.e.billboard.image._value !== this.c1 ? this.c1 : this.c2;
    const c = can.getContext("2d");

    c.clearRect(0, 0, can.width, can.height);

    c.fillStyle = "rgba(100,0,0,0.8)";
    c.beginPath();
    c.arc(can.width / 2, can.height / 2, p * can.width / 2, 0, Math.PI * 2, false);
    c.fill();

    this.e.billboard = new BillboardGraphics({
      image: can
    });
  }

  render() {
    return (
      <Viewer full>
        <Entity
          name="test"
          description="test"
          onMount={e => { this.e = e; this.updateImage(); }}
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)} />
      </Viewer>
    );
  }

}
