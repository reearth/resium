import React from "react";
import { Entity } from "cesium";
export interface Props {
    cesium: {
        entity: Entity;
    };
}
declare const _default: React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
} & React.RefAttributes<React.ComponentType<import("./core/context").WithContextProps<{
    children?: React.ReactNode;
}, {
    entity: Entity;
}>>>>;
export default _default;
