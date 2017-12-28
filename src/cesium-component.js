import React from "react";
import PropTypes from "prop-types";

import { attachEvents, detachEvents, updateEvents, getEventProps } from "./utils/events";

export default class CesiumComponent extends React.PureComponent {

  static propTypes = {
    onMount: PropTypes.func,
    onUnmount: PropTypes.func,
    onUpdate: PropTypes.func
  };

  componentDidMount() {
    let target;
    if (this.onMount) {
      const { props } = this;
      const options = this.getProps().reduce((a, b) => typeof props[b] === "undefined" ? a : ({
        ...a,
        [b]: props[b]
      }), {});

      target = this.onMount(options, this.props, this.context);
      if (target) {
        this.target = target;
        attachEvents(target, getEventProps(this.getEvents(), this.props));
      }
    }

    const { onMount } = this.props;
    if (onMount) {
      onMount(target);
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
      this.onUpdate(target, props, prevProps, this.context);
    }

    const { onUpdate } = this.props;
    if (onUpdate) {
      onUpdate(target);
    }
  }

  componentWillUnmount() {
    const { target } = this;

    const { onUnmount } = this.props;
    if (onUnmount) {
      onUnmount(target);
    }

    if (target) {
      detachEvents(target, getEventProps(this.getEvents(), this.props));
    }

    if (this.onUnmount) {
      this.onUnmount(target, this.props, this.context);
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
