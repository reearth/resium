import React from "react";
import PropTypes from "prop-types";
import { Entity as CesiumEntity } from "cesium";

import viewerType from "./propTypes/viewer";

export default class Entity extends React.PureComponent {

  static propTypes = {
    description: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.object
  }

  static defaultProps = {

  }

  static contextTypes = {
    viewer: viewerType
  }

  componentDidMount() {
    const {
      id,
      name,
      position,
      description
    } = this.props;
    const { viewer } = this.context;
    this.entity = new CesiumEntity({
      id,
      name,
      position,
      description,
      point: {
        pixelSize: 10
      }
    });
    viewer.entities.add(this.entity);
  }

  componentDidUpdate(prevProps) {
    const e = this.entity;
    const p = this.props;
    if (process.env.NODE_ENV !== "production" && p.id !== prevProps.id) {
      console.warn("Cesium entity id prop is not changable.");
    }
    e.name = p.name;
    e.position = p.position;
    e.description = p.description;
  }

  componentWillUnmount() {
    const { viewer } = this.context;
    if (viewer && !viewer.isDestroyed()) {
      viewer.entities.remove(this.entity);
    }
    this.entity = null;
  }

  entity = null;

  render() {
    return null;
  }

}
