import React from "react";
import { ConstantProperty } from "cesium";
// tslint:disable-next-line:no-var-requires
const { renderToStaticMarkup } = require("react-dom/server.browser");
// WORKAROUND: import { renderToStaticMarkup } from "react-dom/server.browser";

import { withCesium } from "./core/context";
import { Entity } from "cesium";

/*
@summary
`EntityDescription` provides a way to render description of the entity with React.

Its children will be rendered with `ReactDOM.renderToStaticMarkup` as HTML string of the description.

Note: This component depends on `react-dom/server.browser` module.
*/

/*
@scope
EntityDescription is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export interface Props {
  cesium: { entity?: Entity };
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
        renderToStaticMarkup(props.children as React.ReactElement<any>),
      );
    }
  }
}

export default withCesium<{ children?: React.ReactNode }, { entity?: Entity }>(EntityDescription);
