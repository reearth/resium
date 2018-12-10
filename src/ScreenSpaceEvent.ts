import React from "react";
import Cesium from "cesium";

import { withCesium } from "./core/context";

export interface ScreenSpaceEventProps {
  action?: (e: { position: Cesium.Cartesian2 }) => void;
  modifier?: number;
  type: number;
}

interface ScreenSpaceEventContext {
  screenSpaceEventHandler?: Cesium.ScreenSpaceEventHandler;
}

class ScreenSpaceEvent extends React.PureComponent<
  ScreenSpaceEventProps & { cesium: ScreenSpaceEventContext }
> {
  public componentDidMount() {
    this.setEvent();
  }

  public componentDidUpdate(prevProps: ScreenSpaceEventProps) {
    if (
      prevProps.type !== this.props.type ||
      prevProps.modifier !== this.props.modifier ||
      prevProps.action !== this.props.action
    ) {
      const { screenSpaceEventHandler } = this.props.cesium;
      if (screenSpaceEventHandler) {
        screenSpaceEventHandler.removeInputAction(prevProps.type, prevProps.modifier);
      }
      this.setEvent();
    }
  }

  public componentWillUnmount() {
    const {
      action,
      cesium: { screenSpaceEventHandler },
      modifier,
      type,
    } = this.props;
    if (screenSpaceEventHandler && !screenSpaceEventHandler.isDestroyed() && action) {
      screenSpaceEventHandler.removeInputAction(type, modifier);
    }
  }

  public render() {
    return null;
  }

  private setEvent() {
    const {
      action,
      cesium: { screenSpaceEventHandler },
      modifier,
      type,
    } = this.props;
    if (!screenSpaceEventHandler) {
      return;
    }
    if (action) {
      screenSpaceEventHandler.setInputAction(action as () => void, type, modifier);
    } else {
      // just remove default events
      screenSpaceEventHandler.removeInputAction(type, modifier);
    }
  }
}

export default withCesium<ScreenSpaceEventProps, ScreenSpaceEventContext>(ScreenSpaceEvent);
