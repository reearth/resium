import type { Controller } from "cesium";

import type { ResiumContext } from "./context";

/*
Helpers for the composable `Controller` framework added in Cesium 1.144.

`CesiumWidget.addController` is a thin wrapper around
`Scene.controllerHost.registerController(controller, widget.container)`, and
`Viewer.addController` just delegates to its inner widget. We go through
`controllerHost` directly instead so that `priority` can be forwarded — the
`add`/`remove` shorthands do not accept it.

`context.cesiumWidget` is provided by both the Viewer and CesiumWidget root
components, so a single lookup covers either root.
*/

// Cesium types `container` as `Element`, but `registerController` requires an
// `HTMLElement`. Both roots build their container as a `div`, so widening here
// is safe and keeps the cast in one place.
const containerOf = (context: ResiumContext): HTMLElement | undefined =>
  context.cesiumWidget?.container as HTMLElement | undefined;

/**
 * Registers a Cesium `Controller` with the scene hosting `context`.
 *
 * @param priority Precedence relative to already-registered controllers. `0`
 * applies before every other controller; omitting it makes this controller the
 * highest priority, so its updates land on top of the others.
 * @returns `true` if the controller was registered.
 */
export const registerController = (
  context: ResiumContext,
  controller: Controller,
  priority?: number,
): boolean => {
  const widget = context.cesiumWidget;
  const container = containerOf(context);
  if (!widget || !container) return false;
  widget.scene.controllerHost.registerController(controller, container, priority);
  return true;
};

/**
 * Unregisters a Cesium `Controller` previously registered via
 * {@link registerController}. Safe to call after the widget has been destroyed.
 */
export const unregisterController = (context: ResiumContext, controller: Controller): void => {
  const widget = context.cesiumWidget;
  const container = containerOf(context);
  if (!widget || !container || widget.isDestroyed()) return;
  widget.scene.controllerHost.unregisterController(controller, container);
};
