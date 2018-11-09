import React from "react";
import ReactDOMServer from "react-dom/server";
import { ConstantProperty } from "cesium";

import { withContext } from "./core/context";
import { Entity } from "cesium";

export interface Props {
  cesium: { entity: Entity };
}

class EntityDescription extends React.PureComponent<Props> {
  public constructor(props: Readonly<Props> & { children?: React.ReactNode }) {
    super(props);
    this.update(props);
  }

  public componentDidMount() {
    this.update();
  }

  public componentDidUpdate(prevProps: Readonly<Props> & { children?: React.ReactNode }) {
    if (this.props.children !== prevProps.children) {
      this.update();
    }
  }

  public render() {
    return null;
  }

  private update(props: Readonly<Props> & { children?: React.ReactNode } = this.props) {
    if (props.cesium && props.cesium.entity && props.children) {
      props.cesium.entity.description = new ConstantProperty(
        ReactDOMServer.renderToStaticMarkup(props.children as React.ReactElement<any>),
      );
    }
  }
}

export default withContext<{}, { entity: Entity }>(EntityDescription);
