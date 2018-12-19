import React from "react";
import Cesium from "cesium";

import { withCesium } from "./core/context";

// @noCesiumElement

/*
@summary
`ScreenSpaceEvent` is an event callback for mouse or touch interactions.

See also: [ScreenSpaceEventHandler#setInputAction](https://cesiumjs.org/Cesium/Build/Documentation/ScreenSpaceEventHandler.html?classFilter=screenspa#setInputAction)
*/

/*
@scope
Only inside [ScreenSpaceEventHandler](/components/ScreenSpaceEventHandler).
*/

export interface ScreenSpaceEventProps {
  // If empty, the event will be removed even if there is the default event.
  action?: (e: { position: Cesium.Cartesian2 }) => void;
  // @type Cesium.KeyboardEventModifier
  modifier?: number;
  // @type Cesium.ScreenSpaceEventType
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
