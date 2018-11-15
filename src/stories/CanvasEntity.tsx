import React from "react";

import Entity, { EntityProps } from "../Entity";

interface State {
  progress: number;
  image?: HTMLCanvasElement;
}

export default class CanvasEntity extends React.PureComponent<EntityProps, State> {
  public state: State = {
    progress: 0,
  };

  private i?: number;
  private c1?: HTMLCanvasElement;
  private c2?: HTMLCanvasElement;

  public componentDidMount() {
    const { progress } = this.state;
    this.c1 = this.initCanvas();
    this.c2 = this.initCanvas();
    if (progress < 1) {
      this.i = window.setInterval(() => {
        this.updateProgress();
      }, 10);
    }
  }

  public componentWillUnmount() {
    window.clearInterval(this.i);
  }

  public render() {
    const { image } = this.state;
    return <Entity {...this.props} billboard={{ image }} />;
  }

  private updateProgress() {
    this.setState(s => {
      const canvas = s.image === this.c1 ? this.c2 : this.c1;
      if (!canvas) {
        return {
          progress: s.progress,
          image: undefined,
        };
      }
      const newPrgoress = Math.min(s.progress + 0.01, 1);
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

  private initCanvas() {
    const can = document.createElement("canvas");
    can.width = 100;
    can.height = 100;
    return can;
  }

  private renderCanvas(can: HTMLCanvasElement, p: number) {
    const c = can.getContext("2d");
    if (!c) {
      return;
    }
    c.clearRect(0, 0, can.width, can.height);
    c.fillStyle = "rgba(100,0,0,0.8)";
    c.beginPath();
    c.arc(can.width / 2, can.height / 2, (p * can.width) / 2, 0, Math.PI * 2, false);
    c.fill();
  }
}
