import React from "react";

import { attachEvents, detachEvents, updateEvents, getEventProps } from "./utils/events";

export default class CesiumComponent extends React.PureComponent {

  componentDidMount() {
    if (this.onMount) {
      const { props } = this;
      const options = this.getProps().reduce((a, b) => ({
        ...a,
        [b]: props[b]
      }), {});

      const target = this.onMount(options, this.props);
      if (target) {
        this.target = target;
        attachEvents(target, getEventProps(this.getEvents(), this.props));
      }
    }
  }

  componentDidUpdate(prevProps) {
    const { target } = this;
    if (target) {
      const events = this.getEvents();
      updateEvents(
        target,
        getEventProps(events, prevProps),
        getEventProps(events, this.props)
      );
    }

    const { props } = this;
    this.getProps().forEach(p => {
      if (prevProps[p] !== props[p]) {
        target[p] = props[p];
      }
    });

    if (this.onUpdate) {
      this.onUpdate(target, props, prevProps);
    }
  }

  componentWillUnmount() {
    const { target } = this;
    if (target) {
      detachEvents(target, getEventProps(this.getEvents(), this.props));
    }

    if (this.onUnmount) {
      this.onUnmount(target, this.props);
    }

    this.target = null;
  }

  getEvents() {
    return this.constructor.cesiumEvents || [];
  }

  getProps() {
    return this.constructor.cesiumProps || [];
  }

  getTarget() {
    return this.target;
  }

  target = null

  render() {
    return null;
  }

}
