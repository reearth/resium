import React from "react";

import { attachEvents, detachEvents, updateEvents, getEventProps } from "./utils/events";

export default class CesiumComponent extends React.PureComponent {

  componentDidMount() {
    if (this.onMount) {
      this.onMount(target, this.props);
    }

    const target = this.getTarget();
    if (target) {
      attachEvents(target, getEventProps(this.getEvents(), this.props));
    }
  }

  componentDidUpdate(prevProps) {
    const target = this.getTarget();
    if (target) {
      const events = this.getEvents();
      updateEvents(
        target,
        getEventProps(events, prevProps),
        getEventProps(events, this.props)
      );
    }

    if (this.onUpdate) {
      this.onUpdate(target, this.props, prevProps);
    }
  }

  componentWillUnmount() {
    const target = this.getTarget();
    if (target) {
      detachEvents(target, getEventProps(this.getEvents(), this.props));
    }

    if (this.onUnmount) {
      this.onUnmount(target, this.props);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getEvents() {
    return [];
  }

  // eslint-disable-next-line class-methods-use-this
  getTarget() {
    return null;
  }

  render() {
    return null;
  }

}
