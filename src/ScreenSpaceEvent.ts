import React from "react";

import { screenSpaceEventHandlerType } from "./core/types";

export interface ScreenSpaceEventProps {
  action: () => void;
  modifier?: number;
  type: number;
}

export default class ScreenSpaceEvent extends React.PureComponent<ScreenSpaceEventProps> {
  public static contextTypes = {
    screenSpaceEventHandler: screenSpaceEventHandlerType,
  };

  public componentDidMount() {
    const { action, modifier, type } = this.props;
    const { screenSpaceEventHandler } = this.context;
    if (action) {
      screenSpaceEventHandler.setInputAction(action, type, modifier);
    } else {
      // just remove default events
      screenSpaceEventHandler.removeInputAction(type, modifier);
    }
  }

  public componentDidUpdate(prevProps: ScreenSpaceEventProps) {
    const { screenSpaceEventHandler } = this.context;
    screenSpaceEventHandler.removeInputAction(prevProps.type, prevProps.modifier);
    this.componentDidMount();
  }

  public componentWillUnmount() {
    const { action, modifier, type } = this.props;
    const { screenSpaceEventHandler } = this.context;
    if (screenSpaceEventHandler && !screenSpaceEventHandler.isDestroyed() && action) {
      screenSpaceEventHandler.removeInputAction(type, modifier);
    }
  }

  public render() {
    return null;
  }
}
