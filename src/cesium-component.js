import React from "react";
import PropTypes from "prop-types";

import { attachEvents, detachEvents, updateEvents, getEventProps } from "./utils/events";

export default class CesiumComponent extends React.PureComponent {

  static propTypes = {
    onMount: PropTypes.func,
    onUnmount: PropTypes.func,
    onUpdate: PropTypes.func
  };

  componentWillMount() {
    if (this.createCesiumElement && !this.constructor.initCesiumComponentWhenComponentDidMount) {
      this.cesiumElement = this.createCesiumElement(this.getPropsForCesium());
      if (this.cesiumElement) {
        attachEvents(this.cesiumElement, getEventProps(this.getCesiumEvents(), this.props));
      }
    }
  }

  componentDidMount() {
    if (this.createCesiumElement && this.constructor.initCesiumComponentWhenComponentDidMount) {
      this.cesiumElement = this.createCesiumElement(this.getPropsForCesium());
      if (this.cesiumElement) {
        attachEvents(this.cesiumElement, getEventProps(this.getCesiumEvents(), this.props));
      }
    }

    if (this.mountCesiumElement) {
      this.mountCesiumElement(this.cesiumElement);
    }

    const { onMount } = this.props;
    if (onMount) {
      this.onMount(this.cesiumElement);
    }
  }

  componentDidUpdate(prevProps) {
    const { cesiumElement } = this;
    if (cesiumElement) {
      const events = this.getCesiumEvents();
      updateEvents(
        cesiumElement,
        getEventProps(events, prevProps),
        getEventProps(events, this.props)
      );
    }

    const { props } = this;
    this.getCesiumProps().filter(p => prevProps[p] !== props[p]).forEach(p => {
      cesiumElement[p] = props[p];
    });

    if (this.updateCesiumElement) {
      this.updateCesiumElement(cesiumElement, prevProps);
    }

    const { onUpdate } = this.props;
    if (onUpdate) {
      onUpdate(cesiumElement, prevProps);
    }
  }

  componentWillUnmount() {
    const { cesiumElement } = this;

    const { onUnmount } = this.props;
    if (onUnmount) {
      onUnmount(cesiumElement);
    }

    if (cesiumElement) {
      detachEvents(cesiumElement, getEventProps(this.getCesiumEvents(), this.props));
    }

    if (this.destroyCesiumElement) {
      this.destroyCesiumElement(cesiumElement);
    }

    this.cesiumElement = null;
  }

  getCesiumEvents() {
    return this.constructor.cesiumEvents || [];
  }

  getCesiumProps() {
    return this.constructor.cesiumProps || [];
  }

  getCesiumReadOnlyProps() {
    return this.constructor.cesiumReadOnlyProps || [];
  }

  getPropsForCesium() {
    return [
      ...this.getCesiumProps(),
      ...this.getCesiumReadOnlyProps()
      // eslint-disable-next-line react/destructuring-assignment
    ].reduce((a, b) => typeof this.props[b] === "undefined" ? a : ({
      ...a,
      // eslint-disable-next-line react/destructuring-assignment
      [b]: this.props[b]
    }), {});
  }

  cesiumElement = null

  render() {
    return null;
  }

}
