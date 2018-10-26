import React from "react";
import PropTypes from "prop-types";

import { screenSpaceEventHandlerType } from "./core/types";

export default class ScreenSpaceEvent extends React.PureComponent {
  static propTypes = {
    action: PropTypes.func,
    modifier: PropTypes.number,
    type: PropTypes.number.isRequired,
  };

  static contextTypes = {
    screenSpaceEventHandler: screenSpaceEventHandlerType,
  };

  componentDidMount() {
    const { action, modifier, type } = this.props;
    const { screenSpaceEventHandler } = this.context;
    if (action) {
      screenSpaceEventHandler.setInputAction(action, type, modifier);
    } else {
      // just remove default events
      screenSpaceEventHandler.removeInputAction(type, modifier);
    }
  }

  componentDidUpdate(prevProps) {
    const { screenSpaceEventHandler } = this.context;
    screenSpaceEventHandler.removeInputAction(prevProps.type, prevProps.modifier);
    this.componentDidMount();
  }

  componentWillUnmount() {
    const { action, modifier, type } = this.props;
    const { screenSpaceEventHandler } = this.context;
    if (screenSpaceEventHandler && !screenSpaceEventHandler.isDestroyed() && action) {
      screenSpaceEventHandler.removeInputAction(type, modifier);
    }
  }

  render() {
    return null;
  }
}
