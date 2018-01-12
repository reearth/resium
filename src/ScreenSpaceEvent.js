import React from "react";
import PropTypes from "prop-types";

import { screenSpaceEventHandlerType } from "./types";

export default class ScreenSpaceEvent extends React.PureComponent {

  static propTypes = {
    action: PropTypes.func.isRequired,
    modifier: PropTypes.number,
    type: PropTypes.number.isRequired,
  }

  static contextTypes = {
    screenSpaceEventHandler: screenSpaceEventHandlerType
  }

  componentDidMount() {
    const { action, modifier, type } = this.props;
    const { screenSpaceEventHandler } = this.context;
    screenSpaceEventHandler.setInputAction(action, type, modifier);
  }

  componentDidUpdate(prevProps) {
    const { screenSpaceEventHandler } = this.context;
    screenSpaceEventHandler.removeInputAction(prevProps.type, prevProps.modifier);
    this.componentDidMount();
  }

  componentWillUnmount() {
    const { modifier, type } = this.props;
    const { screenSpaceEventHandler } = this.context;
    if (screenSpaceEventHandler && !screenSpaceEventHandler.isDestroyed()) {
      screenSpaceEventHandler.removeInputAction(type, modifier);
    }
  }

  render() {
    return null;
  }

}
