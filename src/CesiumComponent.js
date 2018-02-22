import React from "react";
import PropTypes from "prop-types";

import { attachEvents, detachEvents, updateEvents, getEventProps } from "./utils/events";

export default class CesiumComponent extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any,
    onMount: PropTypes.func,
    onUnmount: PropTypes.func,
    onUpdate: PropTypes.func,
  };

  componentWillMount() {
    if (!this.constructor.initCesiumComponentWhenComponentDidMount) {
      this._create();
    }
  }

  componentDidMount() {
    if (this.constructor.initCesiumComponentWhenComponentDidMount) {
      this._create();
    }
    this._mount();
  }

  componentDidUpdate(prevProps) {
    const { cesiumElement } = this;
    if (cesiumElement) {
      const events = this.getCesiumEvents();
      updateEvents(
        cesiumElement,
        getEventProps(events, prevProps),
        getEventProps(events, this.props),
      );
    }

    const { props } = this;

    if (this.getCesiumReadOnlyProps().some(p => prevProps[p] !== props[p])) {
      this._remount();
      return;
    }

    this.getCesiumProps()
      .filter(p => prevProps[p] !== props[p])
      .forEach(p => {
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
    this._unmount();
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
      ...this.getCesiumReadOnlyProps(),
      // eslint-disable-next-line react/destructuring-assignment
    ].reduce(
      (a, b) =>
        typeof this.props[b] === "undefined"
          ? a
          : {
              ...a,
              // eslint-disable-next-line react/destructuring-assignment
              [b]: this.props[b],
            },
      {},
    );
  }

  _create() {
    if (!this.createCesiumElement) return;
    this.cesiumElement = this.createCesiumElement(this.getPropsForCesium());

    if (this.constructor.setCesiumOptionsAfterCreate && this.cesiumElement) {
      // eslint-disable-next-line react/destructuring-assignment
      this.getCesiumProps()
        .filter(p => typeof this.props[p] !== "undefined")
        .forEach(p => {
          // eslint-disable-next-line react/destructuring-assignment
          this.cesiumElement[p] = this.props[p];
        });
    }

    if (this.cesiumElement) {
      attachEvents(this.cesiumElement, getEventProps(this.getCesiumEvents(), this.props));
    }
  }

  _mount() {
    if (this.mountCesiumElement) {
      this.mountCesiumElement(this.cesiumElement);
    }

    const { onMount } = this.props;
    if (onMount) {
      onMount(this.cesiumElement);
    }

    this._mounted = true;
    this.forceUpdate();
  }

  _unmount() {
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

  _remount() {
    this._unmount();
    this._create();
    this._mount();
  }

  cesiumElement = null;

  _mounted = false;

  render() {
    const { children } = this.props;
    return this._mounted && typeof children !== "undefined" && !this.constructor.cesiumNoRender
      ? children
      : null;
  }
}
