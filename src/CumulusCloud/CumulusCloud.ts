import { CumulusCloud as CesiumCumulusCloud } from "cesium";

import { createCesiumComponent, PickCesiumProps } from "../core";

/*
@summary
`CumulusCloud` is a Cloud primitive in the `CloudCollection`.
*/

/*
@scope
Only inside [CloudCollection](/components/CloudCollection) component.
A CumulusCloud object will be attached to the parent CloudCollection.
*/

export type CumulusCloudCesiumProps = PickCesiumProps<CesiumCumulusCloud, typeof cesiumProps>;

export type CumulusCloudProps = CumulusCloudCesiumProps;

const cesiumProps = [
  "show",
  "position",
  "scale",
  "maximumSize",
  "slice",
  "brightness",
  "color",
] as const;

const CumulusCloud = createCesiumComponent<CesiumCumulusCloud, CumulusCloudProps>({
  name: "CumulusCloud",
  create: (context, props) => context.cloudCollection?.add(props),
  destroy(element, context) {
    if (context.cloudCollection && !context.cloudCollection.isDestroyed()) {
      context.cloudCollection.remove(element);
    }
  },
  cesiumProps,
});

export default CumulusCloud;
