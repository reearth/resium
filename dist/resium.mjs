import k, { createContext as ge, useContext as Ce, useRef as P, useEffect as L, useState as he, useCallback as J, useLayoutEffect as ve, useImperativeHandle as Pe, forwardRef as ye, useMemo as Se } from "react";
import { ScreenSpaceEventType as l, ScreenSpaceEventHandler as pe, Event as ne, BillboardCollection as we, BillboardGraphics as Ee, BoxGraphics as De, Cesium3DTileset as be, Cesium3DTilesetGraphics as Me, CesiumWidget as $e, ClassificationPrimitive as Re, CloudCollection as ke, CorridorGraphics as Te, CustomDataSource as Le, CylinderGraphics as Be, CzmlDataSource as Ge, EllipseGraphics as Oe, EllipsoidGraphics as Ae, Entity as Fe, Fog as re, GeoJsonDataSource as Ie, GroundPolylinePrimitive as Ve, GroundPrimitive as _e, ImageryLayer as Ue, KmlDataSource as We, LabelCollection as He, LabelGraphics as ze, Model as se, ModelGraphics as Ne, Moon as ae, ParticleSystem as Ke, PathGraphics as je, PlaneGraphics as qe, PointGraphics as Ze, PointPrimitiveCollection as Je, PolygonGraphics as Qe, PolylineCollection as Xe, PolylineGraphics as Ye, PolylineVolumeGraphics as xe, PostProcessStage as ei, PostProcessStageLibrary as M, PostProcessStageComposite as ii, Primitive as oi, RectangleGraphics as ti, SceneMode as Q, Sun as ce, TimeDynamicPointCloud as ni, Viewer as ri, WallGraphics as si } from "cesium";
import { createPortal as ai } from "react-dom";
const x = ge({}), { Provider: Lt, Consumer: ci } = x, W = () => Ce(x) || {}, H = (i, e) => {
  const o = (t) => {
    const n = W(), c = P(), d = P(!1);
    return L(() => () => {
      n.camera && t.cancelFlightOnUnmount && n.camera.cancelFlight();
    }, [n.camera, t.cancelFlightOnUnmount]), L(() => {
      n.camera && n.scene && !n.scene.isDestroyed() && (!t.once || !d.current) && (n.camera.cancelFlight(), e(n.camera, t, c.current), d.current = !0), c.current = t;
    }), null;
  };
  return o.displayName = i, o;
};
function li(i, e) {
  return e ? X(i).reduce((o, [t, n]) => (V(e, t) && (o[t] = n), o), {}) : {};
}
function X(i) {
  return Object.keys(i).map((e) => [e, i[e]]);
}
function V(i, e) {
  return !!i && i.indexOf(e) !== -1;
}
function di(i, e) {
  return !!i && !!e && [...Object.keys(i), ...Object.keys(e)].every((o) => i[o] === e[o]);
}
function ui(i) {
  return i && typeof i.isDestroyed == "function" && typeof i.destroy == "function";
}
function mi(i) {
  return ui(i) && i.isDestroyed();
}
const T = "__RESIUM_EVENT_MANAGER", Y = [
  "onClick",
  "onDoubleClick",
  "onMouseDown",
  "onMouseUp",
  "onMiddleClick",
  "onMiddleDown",
  "onMiddleUp",
  "onMouseMove",
  "onPinchEnd",
  "onPinchMove",
  "onPinchStart",
  "onRightClick",
  "onRightDown",
  "onRightUp",
  "onWheel",
  "onMouseEnter",
  "onMouseLeave"
], fe = class {
  constructor(i) {
    this.events = {
      onClick: /* @__PURE__ */ new Map(),
      onDoubleClick: /* @__PURE__ */ new Map(),
      onMouseDown: /* @__PURE__ */ new Map(),
      onMouseUp: /* @__PURE__ */ new Map(),
      onMiddleClick: /* @__PURE__ */ new Map(),
      onMiddleDown: /* @__PURE__ */ new Map(),
      onMiddleUp: /* @__PURE__ */ new Map(),
      onMouseMove: /* @__PURE__ */ new Map(),
      onPinchEnd: /* @__PURE__ */ new Map(),
      onPinchMove: /* @__PURE__ */ new Map(),
      onPinchStart: /* @__PURE__ */ new Map(),
      onRightClick: /* @__PURE__ */ new Map(),
      onRightDown: /* @__PURE__ */ new Map(),
      onRightUp: /* @__PURE__ */ new Map(),
      onWheel: /* @__PURE__ */ new Map(),
      onMouseEnter: /* @__PURE__ */ new Map(),
      onMouseLeave: /* @__PURE__ */ new Map()
    }, this.hovered = void 0, this.onMouseMove = (e) => {
      var t, n, c, d, m, a;
      const o = this.pick(e.endPosition);
      this.hovered !== o && (this.hovered && ((t = this.getEventCallback("onMouseLeave", this.hovered)) == null || t(e, this.hovered), (n = this.getEventCallback("onMouseLeave", null)) == null || n(e, this.hovered)), o && ((c = this.getEventCallback("onMouseEnter", o)) == null || c(e, o), (d = this.getEventCallback("onMouseEnter", null)) == null || d(e, o))), o && ((m = this.getEventCallback("onMouseMove", o)) == null || m(e, o)), (a = this.getEventCallback("onMouseMove", null)) == null || a(e, o), this.hovered = o;
    }, this.eventCallback = (e) => (o) => {
      var n, c;
      const t = this.pick(o == null ? void 0 : o.position);
      t && ((n = this.getEventCallback(e, t)) == null || n(o, t)), (c = this.getEventCallback(e, null)) == null || c(o, t);
    }, this.scene = i, this.sshe = new pe(i == null ? void 0 : i.canvas);
  }
  destroy() {
    this.hovered = void 0, this.sshe.isDestroyed() || this.sshe.destroy();
  }
  isDestroyed() {
    return this.sshe.isDestroyed();
  }
  on(i, e, o) {
    i && e === "onWheel" || this.events[e].set(i, o);
  }
  off(i, e) {
    this.events[e].delete(i), this.hovered === i && (this.hovered = void 0);
  }
  setEvents(i, e) {
    X(e).forEach(([o, t]) => {
      const n = o;
      V(Y, n) && (t ? this.on(i, n, t) : this.off(i, n));
    }), this.commit();
  }
  clearEvents(i) {
    this.hovered = void 0, Y.forEach((e) => {
      this.off(i, e);
    }), this.commit();
  }
  commit() {
    const i = this.sshe, e = this.sshe.isDestroyed();
    e || (this.events.onMouseEnter.size === 0 && this.events.onMouseLeave.size === 0 && this.events.onMouseMove.size === 0 ? this.sshe.removeInputAction(l.MOUSE_MOVE) : this.sshe.getInputAction(l.MOUSE_MOVE) || this.sshe.setInputAction(this.onMouseMove, l.MOUSE_MOVE)), X(this.events).forEach(([o, t]) => {
      if (o === "onMouseEnter" || o === "onMouseLeave" || o === "onMouseMove")
        return;
      const n = fe.eventTypeMap[o];
      e || (t.size === 0 ? i.removeInputAction(n) : i.getInputAction(n) || i.setInputAction(this.eventCallback(o), n));
    });
  }
  getScreenSpaceEventHandler() {
    return this.sshe;
  }
  getEventCallback(i, e) {
    var o, t;
    return e === null ? this.events[i].get(null) : this.events[i].get(e.id) || this.events[i].get((t = (o = e.id) == null ? void 0 : o.entityCollection) == null ? void 0 : t.owner) || this.events[i].get(e.primitive) || this.events[i].get(e.tileset);
  }
  pick(i) {
    var e;
    if (!!i)
      return (e = this.scene) == null ? void 0 : e.pick(i);
  }
};
let ee = fe;
ee.eventTypeMap = {
  onClick: l.LEFT_CLICK,
  onDoubleClick: l.LEFT_DOUBLE_CLICK,
  onMouseDown: l.LEFT_DOWN,
  onMouseUp: l.LEFT_UP,
  onMiddleClick: l.MIDDLE_CLICK,
  onMiddleDown: l.MIDDLE_DOWN,
  onMiddleUp: l.MIDDLE_UP,
  onMouseMove: l.MOUSE_MOVE,
  onPinchEnd: l.PINCH_END,
  onPinchMove: l.PINCH_MOVE,
  onPinchStart: l.PINCH_START,
  onRightClick: l.RIGHT_CLICK,
  onRightDown: l.RIGHT_DOWN,
  onRightUp: l.RIGHT_UP,
  onWheel: l.WHEEL,
  onMouseEnter: l.MOUSE_MOVE,
  onMouseLeave: l.MOUSE_MOVE
};
const hi = ({
  name: i,
  create: e,
  destroy: o,
  provide: t,
  update: n,
  cesiumReadonlyProps: c,
  cesiumEventProps: d,
  otherProps: m,
  setCesiumPropsAfterCreate: a,
  useCommonEvent: h,
  useRootEvent: p
}, g, S) => {
  const s = P(), C = W(), R = P(t ? {} : void 0), B = P({}), w = P(g), E = P({}), [z, ie] = he(!1), _ = P(!1), N = P(null), U = P(), K = C == null ? void 0 : C[T], j = J(
    (y) => {
      var A;
      if (!s.current)
        return;
      const D = s.current, b = Object.keys(y), G = Object.keys(d || []), $ = b.concat(
        Object.keys(E.current).filter((u) => !b.includes(u))
      ).filter((u) => E.current[u] !== y[u]).map((u) => [u, E.current[u], y[u]]), f = [];
      for (const [u, q, F] of $)
        if (c != null && c.includes(u))
          f.push(u);
        else if (V(G, u)) {
          const Z = d == null ? void 0 : d[u], I = D[Z];
          I instanceof ne && (typeof q > "u" ? (I.addEventListener(F), B.current[Z] = F) : typeof F > "u" ? (I.removeEventListener(q), delete B.current[Z]) : (I.removeEventListener(q), I.addEventListener(F)));
        } else
          u !== "children" && !Y.includes(u) && !(m != null && m.includes(u)) && (D[u] = F);
      const O = p ? (A = R.current) == null ? void 0 : A[T] : K;
      h && O && s.current && O.setEvents(p ? null : s.current, y), n && _.current && n(s.current, y, E.current, C), E.current = y, w.current = y, _.current && f.length > 0 && (process.env.NODE_ENV !== "production" && console.warn(
        `Warning: <${i}> is recreated because following read-only props have been updated: ${f.join(
          ", "
        )}`
      ), te(), oe());
    },
    []
  ), oe = J(() => {
    var b;
    const y = e == null ? void 0 : e(C, w.current, N.current);
    if (Array.isArray(y) ? (s.current = y[0], U.current = y[1]) : s.current = y, a)
      j(w.current);
    else {
      if (s.current && d) {
        const G = s.current;
        for (const $ of Object.keys(w.current)) {
          const f = d[$];
          if (f) {
            const O = w.current[$], A = G[f];
            O && A instanceof ne && A.addEventListener(O);
          }
        }
      }
      E.current = w.current;
    }
    t && s.current && (R.current = { ...C, ...t(s.current, C, U.current) });
    const D = p ? (b = R.current) == null ? void 0 : b[T] : K;
    h && D && s.current && D.setEvents(p ? null : s.current, w.current);
  }, []), te = J(() => {
    var D, b;
    s.current && o && o(s.current, C, N.current, U.current);
    const y = p ? (D = R.current) == null ? void 0 : D[T] : K;
    if (h && y && s.current && y.clearEvents(p ? null : s.current), s.current && !mi(s.current)) {
      const G = Object.keys(B.current);
      for (const $ of G) {
        const f = s.current[$];
        (b = f == null ? void 0 : f.removeEventListener) == null || b.call(f, B.current[$]);
      }
    }
    B.current = {}, R.current = void 0, U.current = void 0, s.current = void 0, ie(!1), _.current = !1;
  }, []);
  return ve(() => (oe(), () => te()), []), L(() => {
    z ? di(g, E.current) || j(g) : (E.current = g, w.current = g, ie(!0), _.current = !0);
  }, [z, g, j]), Pe(S, () => ({
    cesiumElement: s.current
  })), [R.current, z, N];
}, r = ({
  renderContainer: i,
  noChildren: e,
  containerProps: o,
  defaultProps: t,
  ...n
}) => {
  const c = (d, m) => {
    const a = {
      ...t,
      ...d
    }, [h, p, g] = hi(
      n,
      a,
      m
    );
    if (e)
      return null;
    const S = p && "children" in a ? a.children : null, s = i ? /* @__PURE__ */ k.createElement("div", {
      "data-testid": "resium-container",
      ref: g,
      ...typeof o == "function" ? o(a) : li(a, o)
    }, S) : S ? /* @__PURE__ */ k.createElement(k.Fragment, null, S) : null;
    return h ? /* @__PURE__ */ k.createElement(x.Provider, {
      value: h
    }, s) : s;
  };
  return c.displayName = n.name, ye(c);
}, yi = ["enabled", "selected"], v = (i) => r({
  name: i.name,
  create(e, o) {
    if (!e.scene)
      return;
    const t = i.create(o, e.scene.postProcessStages);
    return typeof o.enabled == "boolean" && (t.enabled = o.enabled), o.selected && "selected" in t && (t.selected = o.selected), i.props.forEach((n) => {
      !V(i.readonlyProps, n) && typeof o[n] < "u" && (t.uniforms[n] = o[n]);
    }), !i.noMount && e.scene && !e.scene.isDestroyed() && e.scene.postProcessStages.add(t), t;
  },
  destroy(e, o) {
    i.noMount ? e.enabled = !1 : (o.scene && !o.scene.isDestroyed() && o.scene.postProcessStages.remove(e), e.isDestroyed() || e.destroy());
  },
  update(e, o, t) {
    i.props.forEach((n) => {
      !V(i.readonlyProps, n) && o[n] !== t[n] && (e.uniforms[n] = o[n]);
    });
  },
  cesiumProps: yi,
  cesiumReadonlyProps: i.readonlyProps,
  defaultProps: {
    enabled: !0
  }
}), Bt = (i) => ye((e, o) => /* @__PURE__ */ k.createElement(ci, null, (t) => /* @__PURE__ */ k.createElement(i, {
  ...e,
  ref: o,
  cesium: t
}))), pi = [
  "alignedAxis",
  "color",
  "disableDepthTestDistance",
  "distanceDisplayCondition",
  "eyeOffset",
  "height",
  "heightReference",
  "horizontalOrigin",
  "image",
  "pixelOffset",
  "pixelOffsetScaleByDistance",
  "position",
  "rotation",
  "scale",
  "scaleByDistance",
  "show",
  "sizeInMeters",
  "translucencyByDistance",
  "verticalOrigin",
  "width"
], Gt = r({
  name: "Billboard",
  create(i, e) {
    var o;
    return (o = i.billboardCollection) == null ? void 0 : o.add(e);
  },
  destroy(i, e) {
    e.billboardCollection && !e.billboardCollection.isDestroyed() && e.billboardCollection.remove(i);
  },
  cesiumProps: pi,
  useCommonEvent: !0
}), fi = [
  "blendOption",
  "debugShowBoundingVolume",
  "debugShowTextureAtlas",
  "modelMatrix",
  "show"
], Ot = r({
  name: "BillboardCollection",
  create(i, e) {
    if (!i.primitiveCollection)
      return;
    const o = new we({
      modelMatrix: e.modelMatrix,
      debugShowBoundingVolume: e.debugShowBoundingVolume,
      scene: i.scene,
      blendOption: e.blendOption
    });
    return i.primitiveCollection.add(o), o;
  },
  destroy(i, e) {
    e.primitiveCollection && !e.primitiveCollection.isDestroyed() && e.primitiveCollection.remove(i), i.isDestroyed() || i.destroy();
  },
  provide(i) {
    return {
      billboardCollection: i
    };
  },
  cesiumProps: fi
}), gi = [
  "image",
  "show",
  "scale",
  "horizontalOrigin",
  "verticalOrigin",
  "eyeOffset",
  "pixelOffset",
  "rotation",
  "alignedAxis",
  "width",
  "height",
  "color",
  "scaleByDistance",
  "translucencyByDistance",
  "pixelOffsetScaleByDistance",
  "imageSubRegion",
  "sizeInMeters",
  "heightReference",
  "distanceDisplayCondition",
  "disableDepthTestDistance"
], Ci = {
  onDefinitionChange: "definitionChanged"
}, At = r({
  name: "BillboardGraphics",
  create(i, e) {
    if (!i.entity)
      return;
    const o = new Ee(e);
    return i.entity.billboard = o, o;
  },
  destroy(i, e) {
    e.entity && (e.entity.billboard = void 0);
  },
  cesiumProps: gi,
  cesiumEventProps: Ci
}), vi = [
  "heightReference",
  "dimensions",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "shadows",
  "distanceDisplayCondition"
], Pi = {
  onDefinitionChange: "definitionChanged"
}, Ft = r({
  name: "BoxGraphics",
  create(i, e) {
    if (!i.entity)
      return;
    const o = new De(e);
    return i.entity.box = o, o;
  },
  destroy(i, e) {
    e.entity && (e.entity.box = void 0);
  },
  cesiumProps: vi,
  cesiumEventProps: Pi
}), Si = [
  "position",
  "direction",
  "up",
  "right",
  "frustum",
  "defaultMoveAmount",
  "defaultLookAmount",
  "defaultRotateAmount",
  "defaultZoomAmount",
  "constrainedAxis",
  "maximumZoomFactor",
  "percentageChanged"
], wi = {
  onChange: "changed",
  onMoveEnd: "moveEnd",
  onMoveStart: "moveStart"
}, It = r({
  name: "Camera",
  create: (i) => {
    var e;
    return (e = i.scene) == null ? void 0 : e.camera;
  },
  cesiumProps: Si,
  cesiumEventProps: wi,
  setCesiumPropsAfterCreate: !0
}), Vt = H(
  "CameraFlyHome",
  (i, { duration: e }) => {
    i.flyHome(e);
  }
), _t = H(
  "CameraFlyTo",
  (i, { onComplete: e, onCancel: o, ...t }) => {
    i.flyTo({ ...t, complete: e, cancel: o });
  }
), Ut = H(
  "CameraLookAt",
  (i, { target: e, offset: o }) => {
    i.lookAt(e, o);
  }
), Wt = H(
  "CameraFlyToBoundingSphere",
  (i, { boundingSphere: e, onComplete: o, onCancel: t, ...n }) => {
    i.flyToBoundingSphere(e, {
      ...n,
      complete: o,
      cancel: t
    });
  }
), Ei = [
  "show",
  "modelMatrix",
  "shadows",
  "maximumScreenSpaceError",
  "maximumMemoryUsage",
  "cullRequestsWhileMoving",
  "cullRequestsWhileMovingMultiplier",
  "preloadWhenHidden",
  "preloadFlightDestinations",
  "preferLeaves",
  "progressiveResolutionHeightFraction",
  "foveatedScreenSpaceError",
  "foveatedConeSize",
  "foveatedMinimumScreenSpaceErrorRelaxation",
  "foveatedInterpolationCallback",
  "foveatedTimeDelay",
  "dynamicScreenSpaceError",
  "dynamicScreenSpaceErrorDensity",
  "dynamicScreenSpaceErrorFactor",
  "dynamicScreenSpaceErrorHeightFalloff",
  "skipLevelOfDetail",
  "baseScreenSpaceError",
  "skipScreenSpaceErrorFactor",
  "skipLevels",
  "immediatelyLoadDesiredLevelOfDetail",
  "loadSiblings",
  "clippingPlanes",
  "classificationType",
  "ellipsoid",
  "lightColor",
  "colorBlendAmount",
  "colorBlendMode",
  "debugFreezeFrame",
  "debugColorizeTiles",
  "debugWireframe",
  "debugShowBoundingVolume",
  "debugShowContentBoundingVolume",
  "debugShowViewerRequestVolume",
  "debugShowGeometricError",
  "debugShowRenderingStatistics",
  "debugShowMemoryUsage",
  "debugShowUrl",
  "style",
  "backFaceCulling",
  "vectorClassificationOnly",
  "vectorKeepDecodedPositions",
  "splitDirection",
  "customShader",
  "imageBasedLighting",
  "showCreditsOnScreen",
  "featureIdLabel",
  "instanceFeatureIdLabel",
  "imageBasedLighting"
], Di = [
  "url",
  "showOutline",
  "cullWithChildrenBounds",
  "debugHeatmapTilePropertyName",
  "enableDebugWireframe",
  "modelUpAxis",
  "modelForwardAxis",
  "projectTo2D"
], bi = {
  onAllTilesLoad: "allTilesLoaded",
  onInitialTilesLoad: "initialTilesLoaded",
  onLoadProgress: "loadProgress",
  onTileFailed: "tileFailed",
  onTileLoad: "tileLoad",
  onTileUnload: "tileUnload",
  onTileVisible: "tileVisible"
}, Mi = ["onReady"], Ht = r({
  name: "Cesium3DTileset",
  create(i, e) {
    if (!i.primitiveCollection)
      return;
    const o = new be(e);
    return e.colorBlendAmount && (o.colorBlendAmount = e.colorBlendAmount), e.colorBlendMode && (o.colorBlendMode = e.colorBlendMode), e.style && (o.style = e.style), e.onReady && o.readyPromise.then(e.onReady), i.primitiveCollection.add(o), o;
  },
  destroy(i, e) {
    e.primitiveCollection && !e.primitiveCollection.isDestroyed() && e.primitiveCollection.remove(i), i.isDestroyed() || i.destroy();
  },
  cesiumProps: Ei,
  cesiumReadonlyProps: Di,
  cesiumEventProps: bi,
  otherProps: Mi,
  useCommonEvent: !0
}), $i = ["show", "uri", "maximumScreenSpaceError"], Ri = {
  onDefinitionChange: "definitionChanged"
}, zt = r({
  name: "Cesium3DTilesetGraphics",
  create(i, e) {
    if (!i.entity)
      return;
    const o = new Me(e);
    return i.entity.tileset = o, o;
  },
  destroy(i, e) {
    e.entity && (e.entity.tileset = void 0);
  },
  cesiumProps: $i,
  cesiumEventProps: Ri
}), ki = [
  "resolutionScale",
  "useDefaultRenderLoop",
  "targetFrameRate",
  "useBrowserRecommendedResolution"
], Ti = [
  "clock",
  "imageryProvider",
  "terrainProvider",
  "skyBox",
  "skyAtmosphere",
  "sceneMode",
  "scene3DOnly",
  "orderIndependentTranslucency",
  "mapMode2D",
  "mapProjection",
  "globe",
  "showRenderLoopErrors",
  "contextOptions",
  "creditContainer",
  "creditViewport",
  "shadows",
  "terrainShadows",
  "requestRenderMode",
  "maximumRenderTimeChange",
  "msaaSamples"
], Li = ["className", "id", "style", "full", "containerProps"], Nt = r({
  name: "CesiumWidget",
  create(i, e, o) {
    if (!o)
      return;
    const t = new $e(o, e);
    if (!t)
      return;
    typeof e.resolutionScale == "number" && (t.resolutionScale = e.resolutionScale);
    const n = new ee(t.scene);
    return [t, n];
  },
  destroy(i, e, o, t) {
    t && !t.isDestroyed() && t.destroy(), i.isDestroyed() || i.destroy();
  },
  provide(i, e, o) {
    return {
      cesiumWidget: i,
      scene: i.scene,
      camera: i.scene.camera,
      imageryLayerCollection: i.scene.globe.imageryLayers,
      primitiveCollection: i.scene.primitives,
      globe: i.scene.globe,
      [T]: o
    };
  },
  containerProps: ({ id: i, className: e, style: o, full: t, containerProps: n }) => ({
    className: e,
    id: i,
    style: {
      ...t ? {
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        top: "0"
      } : {},
      ...o
    },
    ...n
  }),
  cesiumProps: ki,
  cesiumReadonlyProps: Ti,
  otherProps: Li,
  renderContainer: !0,
  useCommonEvent: !0,
  useRootEvent: !0
}), Bi = [
  "classificationType",
  "debugShowBoundingVolume",
  "debugShowShadowVolume",
  "show"
], Gi = [
  "allowPicking",
  "asynchronous",
  "compressVertices",
  "geometryInstances",
  "interleave",
  "releaseGeometryInstances",
  "vertexCacheOptimize",
  "appearance"
], Oi = ["onReady"], Kt = r({
  name: "ClassificationPrimitive",
  create(i, e) {
    if (!i.primitiveCollection)
      return;
    const o = new Re(e);
    return e.onReady && o.readyPromise.then(e.onReady), i.primitiveCollection.add(o), o;
  },
  destroy(i, e) {
    e.primitiveCollection && !e.primitiveCollection.isDestroyed() && e.primitiveCollection.remove(i), i.isDestroyed() || i.destroy();
  },
  cesiumProps: Bi,
  cesiumReadonlyProps: Gi,
  otherProps: Oi,
  useCommonEvent: !0
}), Ai = {
  onStop: "onStop",
  onTick: "onTick"
}, Fi = [
  "canAnimate",
  "clockRange",
  "clockStep",
  "currentTime",
  "multiplier",
  "shouldAnimate",
  "startTime",
  "stopTime"
], jt = r({
  name: "Clock",
  create: (i) => {
    var e;
    return (e = i.cesiumWidget) == null ? void 0 : e.clock;
  },
  cesiumProps: Fi,
  cesiumEventProps: Ai,
  setCesiumPropsAfterCreate: !0
}), Ii = [
  "noiseDetail",
  "noiseOffset",
  "show",
  "debugBillboards",
  "debugEllipsoids"
], qt = r({
  name: "CloudCollection",
  create: (i) => {
    if (!i.primitiveCollection)
      return;
    const e = new ke();
    return i.primitiveCollection.add(e), e;
  },
  destroy(i, e) {
    e.primitiveCollection && !e.primitiveCollection.isDestroyed() && e.primitiveCollection.remove(i), i.isDestroyed() || i.destroy();
  },
  provide: (i) => ({
    cloudCollection: i
  }),
  cesiumProps: Ii,
  setCesiumPropsAfterCreate: !0
}), Vi = [
  "positions",
  "width",
  "cornerType",
  "height",
  "heightReference",
  "extrudedHeight",
  "extrudedHeightReference",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "granularity",
  "shadows",
  "distanceDisplayCondition",
  "zIndex",
  "classificationType"
], _i = {
  onDefinitionChange: "definitionChanged"
}, Zt = r({
  name: "CorridorGraphics",
  create(i, e) {
    if (!i.entity)
      return;
    const o = new Te(e);
    return e.classificationType && (o.classificationType = e.classificationType), i.entity.corridor = o, o;
  },
  destroy(i, e) {
    e.entity && (e.entity.corridor = void 0);
  },
  cesiumProps: Vi,
  cesiumEventProps: _i
}), Ui = [
  "show",
  "position",
  "scale",
  "maximumSize",
  "slice",
  "brightness",
  "color"
], Jt = r({
  name: "CumulusCloud",
  create: (i, e) => {
    var o;
    return (o = i.cloudCollection) == null ? void 0 : o.add(e);
  },
  destroy(i, e) {
    e.cloudCollection && !e.cloudCollection.isDestroyed() && e.cloudCollection.remove(i);
  },
  cesiumProps: Ui
}), Wi = ["clustering", "name", "show", "clock", "isLoading"], Hi = {
  onChange: "changedEvent",
  onError: "errorEvent",
  onLoading: "loadingEvent"
}, Qt = r({
  name: "CustomDataSource",
  create(i, e) {
    if (!i.dataSourceCollection)
      return;
    const o = new Le(e.name);
    return e.clustering && (o.clustering = e.clustering), typeof e.show == "boolean" && (o.show = e.show), typeof e.clock < "u" && (o.clock = e.clock), i.dataSourceCollection.add(o), o;
  },
  destroy(i, e) {
    e.dataSourceCollection && !e.dataSourceCollection.isDestroyed() && e.dataSourceCollection.remove(i);
  },
  provide(i) {
    return {
      entityCollection: i.entities,
      dataSource: i
    };
  },
  cesiumProps: Wi,
  cesiumEventProps: Hi,
  useCommonEvent: !0
}), zi = [
  "heightReference",
  "length",
  "topRadius",
  "bottomRadius",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "numberOfVerticalLines",
  "slices",
  "distanceDisplayCondition",
  "shadows"
], Ni = {
  onDefinitionChange: "definitionChanged"
}, Xt = r({
  name: "CylinderGraphics",
  create(i, e) {
    if (!i.entity)
      return;
    const o = new Be(e);
    return i.entity.cylinder = o, o;
  },
  destroy(i, e) {
    e.entity && (e.entity.cylinder = void 0);
  },
  cesiumProps: zi,
  cesiumEventProps: Ni
}), Ki = ["clustering", "show"], ji = ["name", "sourceUri", "credit"], qi = {
  onChange: "changedEvent",
  onError: "errorEvent",
  onLoading: "loadingEvent"
}, Zi = ["onLoad", "data"], le = (i, { data: e, onLoad: o, ...t }) => {
  !e || i.load(e, t).then((n) => {
    o && o(n);
  });
}, Yt = r({
  name: "CzmlDataSource",
  create(i, e) {
    if (!i.dataSourceCollection)
      return;
    const o = new Ge(e.name);
    return e.clustering && (o.clustering = e.clustering), typeof e.show == "boolean" && (o.show = e.show), i.dataSourceCollection.add(o), e.data && le(o, e), o;
  },
  update(i, e, o) {
    e.data ? o.show !== e.show && (i.show = typeof e.show == "boolean" ? e.show : !0) : i.show = !1, e.data && (o.data !== e.data || o.sourceUri !== e.sourceUri || o.credit !== e.credit) && le(i, e);
  },
  destroy(i, e) {
    e.dataSourceCollection && !e.dataSourceCollection.isDestroyed() && e.dataSourceCollection.remove(i);
  },
  provide(i) {
    return {
      dataSource: i
    };
  },
  cesiumProps: Ki,
  cesiumReadonlyProps: ji,
  cesiumEventProps: qi,
  otherProps: Zi,
  useCommonEvent: !0
}), Ji = [
  "semiMajorAxis",
  "semiMinorAxis",
  "height",
  "heightReference",
  "extrudedHeight",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "numberOfVerticalLines",
  "rotation",
  "stRotation",
  "granularity",
  "shadows",
  "distanceDisplayCondition",
  "zIndex",
  "classificationType",
  "extrudedHeightReference"
], Qi = {
  onDefinitionChange: "definitionChanged"
}, xt = r({
  name: "EllipseGraphics",
  create(i, e) {
    if (!i.entity)
      return;
    const o = new Oe(e);
    return i.entity.ellipse = o, o;
  },
  destroy(i, e) {
    e.entity && (e.entity.ellipse = void 0);
  },
  cesiumProps: Ji,
  cesiumEventProps: Qi
}), Xi = [
  "heightReference",
  "radii",
  "show",
  "fill",
  "innerRadii",
  "material",
  "maximumClock",
  "maximumCone",
  "minimumClock",
  "minimumCone",
  "outline",
  "outlineColor",
  "outlineWidth",
  "subdivisions",
  "stackPartitions",
  "slicePartitions",
  "shadows",
  "distanceDisplayCondition"
], Yi = {
  onDefinitionChange: "definitionChanged"
}, en = r({
  name: "EllipsoidGraphics",
  create(i, e) {
    if (!i.entity)
      return;
    const o = new Ae(e);
    return i.entity.ellipsoid = o, o;
  },
  destroy(i, e) {
    e.entity && (e.entity.ellipsoid = void 0);
  },
  cesiumProps: Xi,
  cesiumEventProps: Yi
}), xi = [
  "availability",
  "billboard",
  "box",
  "corridor",
  "cylinder",
  "description",
  "ellipse",
  "ellipsoid",
  "entityCollection",
  "label",
  "model",
  "name",
  "orientation",
  "path",
  "plane",
  "parent",
  "point",
  "polygon",
  "polyline",
  "polylineVolume",
  "position",
  "properties",
  "rectangle",
  "show",
  "tileset",
  "viewFrom",
  "wall"
], eo = ["id"], io = {
  onDefinitionChange: "definitionChanged"
}, oo = ["selected", "tracked"], on = r({
  name: "Entity",
  create(i, e) {
    if (!i.entityCollection)
      return;
    const o = new Fe(e);
    return i.viewer && e.selected && (i.viewer.selectedEntity = o), i.viewer && e.tracked && (i.viewer.trackedEntity = o), i.entityCollection.add(o), o;
  },
  destroy(i, e) {
    e.entityCollection && e.entityCollection.remove(i);
  },
  update(i, e, o, t) {
    t.viewer && (e.selected !== o.selected && (e.selected ? t.viewer.selectedEntity = i : t.viewer.selectedEntity === i && (t.viewer.selectedEntity = void 0)), e.tracked !== o.tracked && (e.tracked ? t.viewer.trackedEntity = i : t.viewer.trackedEntity === i && (t.viewer.trackedEntity = void 0)));
  },
  provide(i) {
    return {
      entity: i
    };
  },
  cesiumProps: xi,
  cesiumReadonlyProps: eo,
  cesiumEventProps: io,
  otherProps: oo,
  useCommonEvent: !0
}), tn = ({
  children: i,
  container: e,
  resizeInfoBox: o = !0
}) => {
  const { viewer: t, entity: n } = W(), [c, d] = he(!1), m = Se(
    () => {
      var a;
      return e != null ? e : (a = t == null ? void 0 : t.infoBox.frame.contentDocument) == null ? void 0 : a.createElement("div");
    },
    [e, t == null ? void 0 : t.infoBox.frame.contentDocument]
  );
  return L(() => {
    if (!t || !n)
      return;
    const a = (h) => {
      d(!!h && h.id === n.id);
    };
    return t.selectedEntityChanged.addEventListener(a), () => {
      t.selectedEntityChanged.removeEventListener(a);
    };
  }, [n, t]), L(() => {
    var g, S;
    if (e || !m || !t)
      return;
    const a = (g = t.infoBox) == null ? void 0 : g.frame, h = (S = a == null ? void 0 : a.contentDocument) == null ? void 0 : S.querySelector(".cesium-infoBox-description");
    if (!a || !h)
      return;
    let p;
    if (c) {
      if (o) {
        const s = h.getBoundingClientRect().height;
        a.style.height = s + "px", p = window.setTimeout(() => {
          var C;
          h.appendChild(m), (C = t.infoBox.container.querySelector(".cesium-infoBox.cesium-infoBox-bodyless")) == null || C.classList.remove("cesium-infoBox-bodyless"), a.style.height = h.getBoundingClientRect().height + "px";
        }, 10);
      }
    } else
      m.parentElement === h && h.removeChild(m);
    return p ? () => clearTimeout(p) : void 0;
  }, [m, e, o, c, t]), m ? ai(!e || c ? i : null, m) : null;
}, to = [
  "density",
  "enabled",
  "minimumBrightness",
  "screenSpaceErrorFactor",
  "renderable"
], nn = r({
  name: "Fog",
  create(i) {
    if (!i.scene)
      return;
    const e = new re();
    return i.scene.fog = e, e;
  },
  destroy(i, e) {
    e.scene && !e.scene.isDestroyed() && (e.scene.fog = new re());
  },
  cesiumProps: to,
  setCesiumPropsAfterCreate: !0
}), no = ["clustering", "name", "show"], ro = [
  "clampToGround",
  "sourceUri",
  "credit",
  "markerSize",
  "markerSymbol",
  "markerColor",
  "stroke",
  "strokeWidth",
  "fill",
  "describe"
], so = {
  onChange: "changedEvent",
  onError: "errorEvent",
  onLoading: "loadingEvent"
}, ao = ["onLoad", "data"], de = (i, { data: e, onLoad: o, ...t }) => {
  !e || i.load(e, t).then((n) => {
    o && o(n);
  });
}, rn = r({
  name: "GeoJsonDataSource",
  create(i, e) {
    if (!i.dataSourceCollection)
      return;
    const o = new Ie(e.name);
    return e.clustering && (o.clustering = e.clustering), typeof e.show == "boolean" && (o.show = e.show), i.dataSourceCollection.add(o), e.data && de(o, e), o;
  },
  update(i, e, o) {
    e.data ? o.show !== e.show && (i.show = typeof e.show == "boolean" ? e.show : !0) : i.show = !1, e.data && (o.data !== e.data || o.clampToGround !== e.clampToGround || o.sourceUri !== e.sourceUri || o.credit !== e.credit || o.markerSize !== e.markerSize || o.markerSymbol !== e.markerSymbol || o.markerColor !== e.markerColor || o.stroke !== e.stroke || o.strokeWidth !== e.strokeWidth || o.fill !== e.fill) && de(i, e);
  },
  destroy(i, e) {
    e.dataSourceCollection && !e.dataSourceCollection.isDestroyed() && e.dataSourceCollection.remove(i);
  },
  provide(i) {
    return {
      dataSource: i
    };
  },
  cesiumProps: no,
  cesiumReadonlyProps: ro,
  cesiumEventProps: so,
  otherProps: ao,
  useCommonEvent: !0
}), co = {
  onImageryLayersUpdate: "imageryLayersUpdatedEvent",
  onTerrainProviderChange: "terrainProviderChanged",
  onTileLoadProgress: "tileLoadProgressEvent"
}, lo = [
  "atmosphereBrightnessShift",
  "atmosphereHueShift",
  "atmosphereSaturationShift",
  "backFaceCulling",
  "baseColor",
  "clippingPlanes",
  "depthTestAgainstTerrain",
  "enableLighting",
  "lightingFadeInDistance",
  "lightingFadeOutDistance",
  "material",
  "maximumScreenSpaceError",
  "nightFadeInDistance",
  "nightFadeOutDistance",
  "oceanNormalMapUrl",
  "shadows",
  "show",
  "showGroundAtmosphere",
  "showWaterEffect",
  "terrainProvider",
  "tileCacheSize",
  "loadingDescendantLimit",
  "preloadAncestors",
  "preloadSiblings",
  "fillHighlightColor",
  "dynamicAtmosphereLighting",
  "dynamicAtmosphereLightingFromSun",
  "showSkirts",
  "cartographicLimitRectangle",
  "translucency",
  "undergroundColor",
  "undergroundColorAlphaByDistance",
  "terrainExaggeration",
  "terrainExaggerationRelativeHeight",
  "lambertDiffuseMultiplier",
  "atmosphereLightIntensity",
  "atmosphereRayleighCoefficient",
  "atmosphereMieCoefficient",
  "atmosphereRayleighScaleHeight",
  "atmosphereMieScaleHeight",
  "atmosphereMieAnisotropy"
], sn = r({
  name: "Globe",
  create: (i) => {
    var e;
    return (e = i.scene) == null ? void 0 : e.globe;
  },
  cesiumProps: lo,
  cesiumEventProps: co,
  setCesiumPropsAfterCreate: !0
}), uo = [
  "appearance",
  "classificationType",
  "debugShowBoundingVolume",
  "debugShowShadowVolume",
  "show"
], mo = [
  "allowPicking",
  "asynchronous",
  "geometryInstances",
  "interleave",
  "releaseGeometryInstances"
], ho = ["onReady"], an = r({
  name: "GroundPolylinePrimitive",
  create(i, e) {
    if (!i.primitiveCollection)
      return;
    const o = new Ve(e);
    return e.onReady && o.readyPromise.then(e.onReady), i.primitiveCollection.add(o), o;
  },
  destroy(i, e) {
    e.primitiveCollection && !e.primitiveCollection.isDestroyed() && e.primitiveCollection.remove(i), i.isDestroyed() || i.destroy();
  },
  cesiumProps: uo,
  cesiumReadonlyProps: mo,
  otherProps: ho,
  useCommonEvent: !0
}), yo = [
  "appearance",
  "classificationType",
  "debugShowBoundingVolume",
  "debugShowShadowVolume",
  "show"
], po = [
  "allowPicking",
  "asynchronous",
  "compressVertices",
  "geometryInstances",
  "interleave",
  "releaseGeometryInstances",
  "vertexCacheOptimize"
], fo = ["onReady"], cn = r({
  name: "GroundPrimitive",
  create(i, e) {
    if (!i.primitiveCollection)
      return;
    const o = new _e(e);
    return e.onReady && o.readyPromise.then(e.onReady), i.primitiveCollection.add(o), o;
  },
  destroy(i, e) {
    e.primitiveCollection && !e.primitiveCollection.isDestroyed() && e.primitiveCollection.remove(i), i.isDestroyed() || i.destroy();
  },
  cesiumProps: yo,
  cesiumReadonlyProps: po,
  otherProps: fo,
  useCommonEvent: !0
}), go = ["show", "destroyPrimitives"], ln = r({
  name: "GroundPrimitiveCollection",
  create: (i) => {
    var e;
    return (e = i.scene) == null ? void 0 : e.groundPrimitives;
  },
  provide: (i) => ({
    primitiveCollection: i
  }),
  cesiumProps: go,
  setCesiumPropsAfterCreate: !0
}), Co = [
  "alpha",
  "brightness",
  "contrast",
  "hue",
  "saturation",
  "gamma",
  "splitDirection",
  "minificationFilter",
  "magnificationFilter",
  "cutoutRectangle",
  "show",
  "nightAlpha",
  "dayAlpha",
  "colorToAlpha",
  "colorToAlphaThreshold"
], vo = [
  "imageryProvider",
  "rectangle",
  "maximumAnisotropy",
  "minimumTerrainLevel",
  "maximumTerrainLevel"
], dn = r({
  name: "ImageryLayer",
  create(i, e) {
    if (!i.imageryLayerCollection)
      return;
    const o = new Ue(e.imageryProvider, e);
    return i.imageryLayerCollection.add(o), o;
  },
  destroy(i, e) {
    e.imageryLayerCollection && e.imageryLayerCollection.remove(i);
  },
  cesiumProps: Co,
  cesiumReadonlyProps: vo
}), Po = {
  onLayerAdd: "layerAdded",
  onLayerMove: "layerMoved",
  onLayerRemove: "layerRemoved",
  onLayerShowOrHide: "layerShownOrHidden"
}, un = r({
  name: "ImageryLayerCollection",
  create: (i) => {
    var e;
    return (e = i.globe) == null ? void 0 : e.imageryLayers;
  },
  cesiumEventProps: Po
}), So = ["clustering", "name", "show"], wo = [
  "canvas",
  "camera",
  "ellipsoid",
  "clampToGround",
  "sourceUri",
  "credit",
  "screenOverlayContainer"
], Eo = {
  onChange: "changedEvent",
  onError: "errorEvent",
  onLoading: "loadingEvent",
  onRefresh: "refreshEvent",
  onUnsupportedNode: "unsupportedNodeEvent"
}, Do = ["onLoad", "data"], ue = (i, { data: e, onLoad: o, ...t }) => {
  !e || i.load(e, t).then((n) => {
    o && o(n);
  });
}, mn = r({
  name: "KmlDataSource",
  create(i, e) {
    if (!i.scene || !i.dataSourceCollection || !i.scene)
      return;
    const o = new We({
      camera: e.camera || i.scene.camera,
      canvas: e.canvas || i.scene.canvas,
      ellipsoid: e.ellipsoid,
      credit: e.credit
    });
    return e.clustering && (o.clustering = e.clustering), typeof e.show == "boolean" && (o.show = e.show), typeof e.name < "u" && (o.name = e.name), i.dataSourceCollection.add(o), e.data && ue(o, e), o;
  },
  update(i, e, o) {
    e.data ? o.show !== e.show && (i.show = typeof e.show == "boolean" ? e.show : !0) : i.show = !1, e.data && (o.data !== e.data || o.clampToGround !== e.clampToGround || o.ellipsoid !== e.ellipsoid || o.sourceUri !== e.sourceUri || o.credit !== e.credit) && ue(i, e);
  },
  destroy(i, e) {
    e.dataSourceCollection && !e.dataSourceCollection.isDestroyed() && e.dataSourceCollection.remove(i);
  },
  provide(i) {
    return {
      dataSource: i
    };
  },
  cesiumProps: So,
  cesiumReadonlyProps: wo,
  cesiumEventProps: Eo,
  otherProps: Do,
  useCommonEvent: !0
}), bo = [
  "backgroundColor",
  "backgroundPadding",
  "disableDepthTestDistance",
  "distanceDisplayCondition",
  "eyeOffset",
  "fillColor",
  "font",
  "heightReference",
  "horizontalOrigin",
  "outlineColor",
  "outlineWidth",
  "pixelOffset",
  "pixelOffsetScaleByDistance",
  "position",
  "scale",
  "scaleByDistance",
  "show",
  "showBackground",
  "style",
  "text",
  "translucencyByDistance",
  "verticalOrigin"
], hn = r({
  name: "Label",
  create: (i, e) => {
    var o;
    return (o = i.labelCollection) == null ? void 0 : o.add(e);
  },
  destroy(i, e) {
    e.labelCollection && !e.labelCollection.isDestroyed() && e.labelCollection.remove(i);
  },
  cesiumProps: bo,
  useCommonEvent: !0
}), Mo = ["blendOption", "debugShowBoundingVolume", "modelMatrix", "show"], yn = r({
  name: "LabelCollection",
  create(i, e) {
    if (!i.scene || !i.primitiveCollection)
      return;
    const o = new He({
      scene: i.scene,
      modelMatrix: e.modelMatrix,
      blendOption: e.blendOption,
      debugShowBoundingVolume: e.debugShowBoundingVolume
    });
    return i.primitiveCollection.add(o), o;
  },
  destroy(i, e) {
    e.primitiveCollection && !e.primitiveCollection.isDestroyed() && e.primitiveCollection.remove(i), i.isDestroyed() || i.destroy();
  },
  provide(i) {
    return {
      labelCollection: i
    };
  },
  cesiumProps: Mo
}), $o = [
  "text",
  "font",
  "style",
  "fillColor",
  "outlineColor",
  "outlineWidth",
  "show",
  "showBackground",
  "backgroundColor",
  "backgroundPadding",
  "scale",
  "horizontalOrigin",
  "verticalOrigin",
  "eyeOffset",
  "pixelOffset",
  "translucencyByDistance",
  "pixelOffsetScaleByDistance",
  "scaleByDistance",
  "heightReference",
  "distanceDisplayCondition",
  "disableDepthTestDistance"
], Ro = {
  onDefinitionChange: "definitionChanged"
}, pn = r({
  name: "LabelGraphics",
  create(i, e) {
    if (!i.entity)
      return;
    const o = new ze(e);
    return i.entity.label = o, o;
  },
  destroy(i, e) {
    e.entity && (e.entity.label = void 0);
  },
  cesiumProps: $o,
  cesiumEventProps: Ro
}), ko = [
  "basePath",
  "clampAnimations",
  "clippingPlanes",
  "color",
  "colorBlendAmount",
  "colorBlendMode",
  "debugShowBoundingVolume",
  "debugWireframe",
  "distanceDisplayCondition",
  "id",
  "imageBasedLighting",
  "lightColor",
  "maximumScale",
  "minimumPixelSize",
  "modelMatrix",
  "scale",
  "shadows",
  "show",
  "silhouetteColor",
  "silhouetteSize",
  "backFaceCulling",
  "splitDirection",
  "imageBasedLighting",
  "showCreditsOnScreen",
  "activeAnimations"
], To = [
  "allowPicking",
  "asynchronous",
  "credit",
  "dequantizeInShader",
  "gltf",
  "heightReference",
  "incrementallyLoadTextures",
  "scene",
  "url",
  "showOutline"
], Lo = ["onReady"], fn = r({
  name: "Model",
  create(i, { url: e, scene: o, ...t }) {
    if (!i.scene || !i.primitiveCollection)
      return;
    const n = e ? se.fromGltf({ ...t, scene: o || i.scene, url: e }) : new se({ ...t, scene: o || i.scene });
    return t.onReady && n.readyPromise.then(t.onReady), i.primitiveCollection.add(n), n;
  },
  destroy(i, e) {
    e.primitiveCollection && !e.primitiveCollection.isDestroyed() && e.primitiveCollection.remove(i), i.isDestroyed() || i.destroy();
  },
  cesiumProps: ko,
  cesiumReadonlyProps: To,
  otherProps: Lo,
  useCommonEvent: !0
}), Bo = [
  "uri",
  "show",
  "scale",
  "minimumPixelSize",
  "maximumScale",
  "incrementallyLoadTextures",
  "runAnimations",
  "clampAnimations",
  "nodeTransformations",
  "shadows",
  "heightReference",
  "distanceDisplayCondition",
  "silhouetteColor",
  "silhouetteSize",
  "color",
  "colorBlendMode",
  "colorBlendAmount",
  "clippingPlanes",
  "imageBasedLightingFactor",
  "lightColor",
  "articulations"
], Go = {
  onDefinitionChange: "definitionChanged"
}, gn = r({
  name: "ModelGraphics",
  create(i, e) {
    if (!i.entity)
      return;
    const o = new Ne(e);
    return i.entity.model = o, o;
  },
  destroy(i, e) {
    e.entity && (e.entity.model = void 0);
  },
  cesiumProps: Bo,
  cesiumEventProps: Go
}), Oo = ["onlySunLighting", "show", "textureUrl"], Ao = ["ellipsoid"], Cn = r({
  name: "Moon",
  create(i, e) {
    if (!i.scene)
      return;
    const o = new ae(e);
    return i.scene.moon = o, o;
  },
  destroy(i, e) {
    e.scene && !e.scene.isDestroyed() && (e.scene.moon = new ae());
  },
  cesiumProps: Oo,
  cesiumReadonlyProps: Ao
}), Fo = [
  "show",
  "emitter",
  "modelMatrix",
  "emitterModelMatrix",
  "emissionRate",
  "bursts",
  "loop",
  "startScale",
  "endScale",
  "startColor",
  "endColor",
  "image",
  "imageSize",
  "minimumImageSize",
  "maximumImageSize",
  "speed",
  "minimumSpeed",
  "maximumSpeed",
  "lifetime",
  "particleLife",
  "minimumParticleLife",
  "maximumParticleLife",
  "mass",
  "minimumMass",
  "maximumMass",
  "sizeInMeters"
], Io = {
  onComplete: "complete",
  onUpdate: "updateCallback"
}, vn = r({
  name: "ParticleSystem",
  create(i, e) {
    if (!i.primitiveCollection)
      return;
    const o = new Ke({ ...e, updateCallback: e.onUpdate });
    return i.primitiveCollection.add(o), o;
  },
  update(i, e, o) {
    e.onUpdate !== o.onUpdate && (i.updateCallback = e.onUpdate);
  },
  destroy(i, e) {
    e.primitiveCollection && !e.primitiveCollection.isDestroyed() && e.primitiveCollection.remove(i);
  },
  cesiumProps: Fo,
  cesiumEventProps: Io
}), Vo = [
  "leadTime",
  "trailTime",
  "show",
  "width",
  "material",
  "resolution",
  "distanceDisplayCondition"
], _o = {
  onDefinitionChange: "definitionChanged"
}, Pn = r({
  name: "PathGraphics",
  create(i, e) {
    if (!i.entity)
      return;
    const o = new je(e);
    return i.entity.path = o, o;
  },
  destroy(i, e) {
    e.entity && (e.entity.path = void 0);
  },
  cesiumProps: Vo,
  cesiumEventProps: _o
}), Uo = [
  "plane",
  "dimensions",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "shadows",
  "distanceDisplayCondition"
], Wo = {
  onDefinitionChange: "definitionChanged"
}, Sn = r({
  name: "PlaneGraphics",
  create(i, e) {
    if (!i.entity)
      return;
    const o = new qe(e);
    return i.entity.plane = o, o;
  },
  destroy(i, e) {
    e.entity && (e.entity.plane = void 0);
  },
  cesiumProps: Uo,
  cesiumEventProps: Wo
}), Ho = [
  "color",
  "pixelSize",
  "outlineColor",
  "outlineWidth",
  "show",
  "scaleByDistance",
  "translucencyByDistance",
  "heightReference",
  "distanceDisplayCondition",
  "disableDepthTestDistance"
], zo = {
  onDefinitionChange: "definitionChanged"
}, wn = r({
  name: "PointGraphics",
  create(i, e) {
    if (!i.entity)
      return;
    const o = new Ze(e);
    return i.entity.point = o, o;
  },
  destroy(i, e) {
    e.entity && (e.entity.point = void 0);
  },
  cesiumProps: Ho,
  cesiumEventProps: zo
}), No = [
  "color",
  "disableDepthTestDistance",
  "distanceDisplayCondition",
  "id",
  "outlineColor",
  "outlineWidth",
  "pixelSize",
  "position",
  "scaleByDistance",
  "show",
  "translucencyByDistance"
], En = r({
  name: "PointPrimitive",
  create: (i, e) => {
    var o;
    return (o = i.pointPrimitiveCollection) == null ? void 0 : o.add(e);
  },
  destroy(i, e) {
    e.pointPrimitiveCollection && !e.pointPrimitiveCollection.isDestroyed() && e.pointPrimitiveCollection.remove(i);
  },
  cesiumProps: No,
  useCommonEvent: !0
}), Ko = ["blendOption", "debugShowBoundingVolume", "modelMatrix", "show"], Dn = r({
  name: "PointPrimitveCollection",
  create(i, e) {
    if (!i.primitiveCollection)
      return;
    const o = new Je(e);
    return i.primitiveCollection.add(o), o;
  },
  destroy(i, e) {
    e.primitiveCollection && !e.primitiveCollection.isDestroyed() && e.primitiveCollection.remove(i), i.isDestroyed() || i.destroy();
  },
  provide(i) {
    return {
      pointPrimitiveCollection: i
    };
  },
  cesiumProps: Ko
}), jo = [
  "arcType",
  "hierarchy",
  "height",
  "heightReference",
  "extrudedHeight",
  "extrudedHeightReference",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "stRotation",
  "granularity",
  "perPositionHeight",
  "closeTop",
  "closeBottom",
  "shadows",
  "distanceDisplayCondition",
  "zIndex",
  "classificationType",
  "textureCoordinates"
], qo = {
  onDefinitionChange: "definitionChanged"
}, bn = r({
  name: "PolygonGraphics",
  create(i, e) {
    if (!i.entity)
      return;
    const o = new Qe(e);
    return i.entity.polygon = o, o;
  },
  destroy(i, e) {
    e.entity && (e.entity.polygon = void 0);
  },
  cesiumProps: jo,
  cesiumEventProps: qo
}), Zo = [
  "distanceDisplayCondition",
  "id",
  "loop",
  "material",
  "positions",
  "show",
  "width"
], Mn = r({
  name: "Polyline",
  create: (i, e) => {
    var o;
    return (o = i.polylineCollection) == null ? void 0 : o.add(e);
  },
  destroy(i, e) {
    e.polylineCollection && !e.polylineCollection.isDestroyed() && e.polylineCollection.remove(i);
  },
  cesiumProps: Zo,
  useCommonEvent: !0
}), Jo = ["debugShowBoundingVolume", "length", "modelMatrix", "show"], $n = r(
  {
    name: "PolylineCollection",
    create(i, e) {
      if (!i.primitiveCollection)
        return;
      const o = new Xe({
        modelMatrix: e.modelMatrix,
        debugShowBoundingVolume: e.debugShowBoundingVolume,
        length: e.length,
        scene: i.scene
      });
      return i.primitiveCollection.add(o), o;
    },
    destroy(i, e) {
      e.primitiveCollection && !e.primitiveCollection.isDestroyed() && e.primitiveCollection.remove(i), i.isDestroyed() || i.destroy();
    },
    provide(i) {
      return {
        polylineCollection: i
      };
    },
    cesiumProps: Jo
  }
), Qo = [
  "arcType",
  "classificationType",
  "positions",
  "clampToGround",
  "width",
  "show",
  "material",
  "depthFailMaterial",
  "granularity",
  "shadows",
  "distanceDisplayCondition",
  "zIndex"
], Xo = {
  onDefinitionChange: "definitionChanged"
}, Rn = r({
  name: "PolylineGraphics",
  create(i, e) {
    if (!i.entity)
      return;
    const o = new Ye(e);
    return i.entity.polyline = o, o;
  },
  destroy(i, e) {
    e.entity && (e.entity.polyline = void 0);
  },
  cesiumProps: Qo,
  cesiumEventProps: Xo
}), Yo = [
  "positions",
  "shape",
  "cornerType",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "granularity",
  "shadows",
  "distanceDisplayCondition"
], xo = {
  onDefinitionChange: "definitionChanged"
}, kn = r({
  name: "PolylineVolumeGraphics",
  create(i, e) {
    if (!i.entity)
      return;
    const o = new xe(e);
    return i.entity.polylineVolume = o, o;
  },
  destroy(i, e) {
    e.entity && (e.entity.polylineVolume = void 0);
  },
  cesiumProps: Yo,
  cesiumEventProps: xo
}), et = ["enabled", "selected"], it = [
  "clearColor",
  "forcePowerOfTwo",
  "fragmentShader",
  "name",
  "pixelDatatype",
  "pixelFormat",
  "sampleMode",
  "scissorRectangle",
  "textureScale",
  "uniforms"
], Tn = r({
  name: "PostProcessStage",
  create(i, e) {
    if (!i.scene)
      return;
    const o = new ei(e);
    return typeof e.enabled == "boolean" && (o.enabled = e.enabled), e.selected && (o.selected = e.selected), i.scene.postProcessStages.add(o), o;
  },
  destroy(i, e) {
    e.scene && !e.scene.isDestroyed() && e.scene.postProcessStages.remove(i), i.isDestroyed() || i.destroy();
  },
  cesiumProps: et,
  cesiumReadonlyProps: it
}), Ln = v({
  name: "BlackAndWhiteStage",
  props: ["gradations"],
  create: () => M.createBlackAndWhiteStage()
}), Bn = v({
  name: "BrightnessStage",
  props: ["brightness"],
  create: () => M.createBrightnessStage()
}), Gn = v({
  name: "LensFlareStage",
  props: [
    "dirtTexture",
    "starTexture",
    "intensity",
    "distortion",
    "ghostDispersal",
    "haloWidth",
    "earthRadius"
  ],
  create: () => M.createLensFlareStage()
}), On = v({
  name: "Fxaa",
  create: (i, e) => e.fxaa,
  props: []
}), An = v({
  name: "NightVisionStage",
  props: [],
  create: () => M.createNightVisionStage()
}), ot = ["enabled", "selected"], tt = ["inputPreviousStageTexture", "name", "stages", "uniforms"], Fn = r({
  name: "PostProcessStageComposite",
  create(i, e) {
    if (!i.scene)
      return;
    const o = new ii(e);
    return typeof e.enabled == "boolean" && (o.enabled = e.enabled), e.selected && (o.selected = e.selected), i.scene.postProcessStages.add(o), o;
  },
  destroy(i, e) {
    e.scene && !e.scene.isDestroyed() && e.scene.postProcessStages.remove(i), i.isDestroyed() || i.destroy();
  },
  cesiumProps: ot,
  cesiumReadonlyProps: tt
}), In = v({
  name: "AmbientOcclusion",
  create: (i, e) => e.ambientOcclusion,
  props: [
    "ambientOcclusionOnly",
    "bias",
    "delta",
    "frustumLength",
    "intensity",
    "lengthCap",
    "sigma",
    "stepSize"
  ],
  noMount: !0
}), Vn = v({
  name: "Bloom",
  create: (i, e) => e.bloom,
  props: ["brightness", "contrast", "delta", "glowOnly", "sigma", "stepSize"],
  noMount: !0
}), _n = v({
  name: "BlurStage",
  props: ["delta", "sigma", "stepSize"],
  create: () => M.createBlurStage()
}), Un = v({
  name: "DepthOfFieldStage",
  props: ["delta", "focalDistance", "sigma", "stepSize"],
  create: () => M.createDepthOfFieldStage()
}), Wn = v({
  name: "EdgeDetectionStage",
  props: ["color", "length"],
  create: () => M.createEdgeDetectionStage()
}), Hn = v({
  name: "SilhouetteStage",
  props: ["color", "length"],
  create: () => M.createSilhouetteStage()
}), nt = [
  "appearance",
  "cull",
  "debugShowBoundingVolume",
  "depthFailAppearance",
  "modelMatrix",
  "shadows",
  "show"
], rt = [
  "allowPicking",
  "asynchronous",
  "compressVertices",
  "geometryInstances",
  "interleave",
  "releaseGeometryInstances",
  "vertexCacheOptimize"
], st = ["onReady"], zn = r({
  name: "Primitive",
  create(i, e) {
    if (!i.primitiveCollection)
      return;
    const o = new oi(e);
    return e.onReady && o.readyPromise.then(e.onReady), i.primitiveCollection.add(o), o;
  },
  destroy(i, e) {
    e.primitiveCollection && !e.primitiveCollection.isDestroyed() && e.primitiveCollection.remove(i), i.isDestroyed() || i.destroy();
  },
  cesiumProps: nt,
  cesiumReadonlyProps: rt,
  otherProps: st,
  useCommonEvent: !0
}), at = [
  "classificationType",
  "coordinates",
  "height",
  "heightReference",
  "extrudedHeight",
  "extrudedHeightReference",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "rotation",
  "stRotation",
  "granularity",
  "shadows",
  "distanceDisplayCondition",
  "zIndex"
], ct = {
  onDefinitionChange: "definitionChanged"
}, Nn = r({
  name: "RectangleGraphics",
  create(i, e) {
    if (!i.entity)
      return;
    const o = new ti(e);
    return i.entity.rectangle = o, o;
  },
  destroy(i, e) {
    e.entity && (e.entity.rectangle = void 0);
  },
  cesiumProps: at,
  cesiumEventProps: ct
}), lt = [
  "backgroundColor",
  "completeMorphOnUserInput",
  "debugCommandFilter",
  "debugShowCommands",
  "debugShowDepthFrustum",
  "debugShowFramesPerSecond",
  "debugShowFrustumPlanes",
  "debugShowFrustums",
  "eyeSeparation",
  "farToNearRatio",
  "focalLength",
  "fog",
  "gamma",
  "globe",
  "highDynamicRange",
  "invertClassification",
  "invertClassificationColor",
  "light",
  "logarithmicDepthBuffer",
  "logarithmicDepthFarToNearRatio",
  "maximumRenderTimeChange",
  "minimumDisableDepthTestDistance",
  "moon",
  "morphTime",
  "nearToFarDistance2D",
  "pickTranslucentDepth",
  "requestRenderMode",
  "rethrowRenderErrors",
  "shadowMap",
  "skyAtmosphere",
  "skyBox",
  "specularEnvironmentMaps",
  "sphericalHarmonicCoefficients",
  "sun",
  "sunBloom",
  "terrainProvider",
  "useDepthPicking",
  "useWebVR",
  "postProcessStages",
  "msaaSamples",
  "splitPosition",
  "debugCommandFilter"
], dt = {
  onMorphComplete: "morphComplete",
  onMorphStart: "morphStart",
  onPostRender: "postRender",
  onPreRender: "preRender",
  onPreUpdate: "preUpdate",
  onPostUpdate: "postUpdate",
  onRenderError: "renderError",
  onTerrainProviderChange: "terrainProviderChanged"
}, ut = ["mode", "morphDuration"], me = (i, e, o) => {
  switch (e) {
    case Q.SCENE2D:
      i.morphTo2D(o);
      break;
    case Q.COLUMBUS_VIEW:
      i.morphToColumbusView(o);
      break;
    case Q.SCENE3D:
      i.morphTo3D(o);
      break;
  }
}, Kn = r({
  name: "Scene",
  create(i, e) {
    return i.scene && e.mode && me(i.scene, e.mode, e.morphDuration), i.scene;
  },
  update(i, e, o) {
    e.mode !== o.mode && e.mode && me(i, e.mode, e.morphDuration);
  },
  cesiumProps: lt,
  cesiumEventProps: dt,
  otherProps: ut,
  setCesiumPropsAfterCreate: !0
}), mt = [
  "bounceAnimationTime",
  "enableCollisionDetection",
  "enableInputs",
  "enableLook",
  "enableRotate",
  "enableTilt",
  "enableTranslate",
  "enableZoom",
  "inertiaSpin",
  "inertiaTranslate",
  "inertiaZoom",
  "lookEventTypes",
  "maximumMovementRatio",
  "maximumZoomDistance",
  "minimumCollisionTerrainHeight",
  "minimumPickingTerrainHeight",
  "minimumTrackBallHeight",
  "minimumZoomDistance",
  "rotateEventTypes",
  "tiltEventTypes",
  "translateEventTypes",
  "zoomEventTypes"
], jn = r({
  name: "ScreenSpaceCameraController",
  create: (i) => {
    var e;
    return (e = i.scene) == null ? void 0 : e.screenSpaceCameraController;
  },
  cesiumProps: mt,
  setCesiumPropsAfterCreate: !0
}), qn = ({ action: i, modifier: e, type: o }) => {
  const t = W();
  return L(() => {
    if (!(!t.screenSpaceEventHandler || t.screenSpaceEventHandler.isDestroyed())) {
      if (i)
        return t.screenSpaceEventHandler.setInputAction(i, o, e), () => {
          !t.screenSpaceEventHandler || t.screenSpaceEventHandler.isDestroyed() || t.screenSpaceEventHandler.removeInputAction(o, e);
        };
      t.screenSpaceEventHandler.removeInputAction(o, e);
    }
  }, [i, t.screenSpaceEventHandler, e, o]), null;
}, Zn = r({
  name: "ScreenSpaceEventHandler",
  create(i, e) {
    var o;
    return e.useDefault ? (o = i.cesiumWidget) == null ? void 0 : o.screenSpaceEventHandler : i.scene ? new pe(i.scene.canvas) : void 0;
  },
  destroy(i) {
    i.isDestroyed() || i.destroy();
  },
  provide(i) {
    return {
      screenSpaceEventHandler: i
    };
  }
}), ht = [
  "darkness",
  "enabled",
  "maximumDistance",
  "normalOffset",
  "size",
  "softShadows",
  "fadingEnabled"
], yt = [
  "lightCamera",
  "isPointLight",
  "pointLightRadius",
  "cascadesEnabled",
  "numberOfCascades"
], Jn = r({
  name: "ShadowMap",
  create: (i) => {
    var e;
    return (e = i.scene) == null ? void 0 : e.shadowMap;
  },
  cesiumProps: ht,
  cesiumReadonlyProps: yt
}), pt = [
  "brightnessShift",
  "hueShift",
  "saturationShift",
  "show",
  "perFragmentAtmosphere",
  "atmosphereLightIntensity",
  "atmosphereRayleighCoefficient",
  "atmosphereMieCoefficient",
  "atmosphereRayleighScaleHeight",
  "atmosphereMieScaleHeight",
  "atmosphereMieAnisotropy"
], Qn = r({
  name: "SkyAtmosphere",
  create: (i) => {
    var e;
    return (e = i.scene) == null ? void 0 : e.skyAtmosphere;
  },
  cesiumProps: pt,
  setCesiumPropsAfterCreate: !0
}), ft = ["sources", "show"], Xn = r({
  name: "SkyBox",
  create: (i) => {
    var e;
    return (e = i.scene) == null ? void 0 : e.skyBox;
  },
  cesiumProps: ft,
  setCesiumPropsAfterCreate: !0
}), gt = ["glowFactor", "show"], Yn = r({
  name: "Sun",
  create(i) {
    if (!i.scene)
      return;
    const e = new ce();
    return i.scene.sun = e, e;
  },
  destroy(i, e) {
    e.scene && !e.scene.isDestroyed() && (e.scene.sun = new ce());
  },
  cesiumProps: gt,
  setCesiumPropsAfterCreate: !0
}), Ct = [
  "clippingPlanes",
  "maximumMemoryUsage",
  "modelMatrix",
  "shadows",
  "show",
  "style",
  "intervals"
], vt = ["clock", "shading"], Pt = ["onReady"], St = {
  onFrameChange: "frameChanged"
}, xn = r({
  name: "TimeDynamicPointCloud",
  create(i, e) {
    var t, n;
    if (!i.cesiumWidget || !i.primitiveCollection || !((t = i.cesiumWidget) != null && t.clock))
      return;
    const o = new ni({
      ...e,
      clock: (n = e.clock) != null ? n : i.cesiumWidget.clock
    });
    return e.onReady && o.readyPromise.then(e.onReady), i.primitiveCollection.add(o), o;
  },
  destroy(i, e) {
    e.primitiveCollection && !e.primitiveCollection.isDestroyed() && e.primitiveCollection.remove(i), i.isDestroyed() || i.destroy();
  },
  cesiumProps: Ct,
  cesiumReadonlyProps: vt,
  cesiumEventProps: St,
  otherProps: Pt,
  useCommonEvent: !0
}), wt = [
  "terrainProvider",
  "terrainShadows",
  "clockTrackedDataSource",
  "targetFrameRate",
  "useDefaultRenderLoop",
  "resolutionScale",
  "allowDataSourcesToSuspendAnimation",
  "trackedEntity",
  "selectedEntity",
  "shadows",
  "useBrowserRecommendedResolution"
], Et = [
  "animation",
  "baseLayerPicker",
  "fullscreenButton",
  "vrButton",
  "geocoder",
  "homeButton",
  "infoBox",
  "sceneModePicker",
  "selectionIndicator",
  "timeline",
  "navigationHelpButton",
  "navigationInstructionsInitiallyVisible",
  "scene3DOnly",
  "shouldAnimate",
  "clockViewModel",
  "selectedImageryProviderViewModel",
  "imageryProviderViewModels",
  "selectedTerrainProviderViewModel",
  "terrainProviderViewModels",
  "imageryProvider",
  "skyBox",
  "skyAtmosphere",
  "fullscreenElement",
  "showRenderLoopErrors",
  "automaticallyTrackDataSourceClocks",
  "contextOptions",
  "sceneMode",
  "mapProjection",
  "globe",
  "orderIndependentTranslucency",
  "creditContainer",
  "creditViewport",
  "dataSources",
  "mapMode2D",
  "projectionPicker",
  "requestRenderMode",
  "maximumRenderTimeChange",
  "depthPlaneEllipsoidOffset",
  "msaaSamples"
], Dt = {
  onSelectedEntityChange: "selectedEntityChanged",
  onTrackedEntityChange: "trackedEntityChanged"
}, bt = ["className", "id", "style", "full", "containerProps", "extend"], er = r({
  name: "Viewer",
  create(i, { imageryProvider: e, ...o }, t) {
    if (!t)
      return;
    const n = new ri(t, {
      ...o,
      imageryProvider: e === !1 ? void 0 : e
    });
    if (!n)
      return;
    e === !1 && n.imageryLayers.removeAll(), n && o.extend && (Array.isArray(o.extend) ? o.extend.forEach((d) => {
      n.extend(d, {});
    }) : n.extend(o.extend, {}));
    const c = new ee(n.scene);
    return [n, c];
  },
  destroy(i, e, o, t) {
    t && !t.isDestroyed() && t.destroy(), i.isDestroyed() || i.destroy();
  },
  provide(i, e, o) {
    return {
      viewer: i,
      cesiumWidget: i.cesiumWidget,
      dataSourceCollection: i.dataSources,
      entityCollection: i.entities,
      scene: i.scene,
      camera: i.scene.camera,
      imageryLayerCollection: i.scene.globe.imageryLayers,
      primitiveCollection: i.scene.primitives,
      globe: i.scene.globe,
      [T]: o
    };
  },
  containerProps: ({ id: i, className: e, style: o, full: t, containerProps: n }) => ({
    className: e,
    id: i,
    style: {
      ...t ? {
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        top: "0"
      } : {},
      ...o
    },
    ...n
  }),
  cesiumProps: wt,
  cesiumReadonlyProps: Et,
  cesiumEventProps: Dt,
  otherProps: bt,
  renderContainer: !0,
  useCommonEvent: !0,
  useRootEvent: !0
}), Mt = [
  "positions",
  "maximumHeights",
  "minimumHeights",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "granularity",
  "shadows",
  "distanceDisplayCondition"
], $t = {
  onDefinitionChange: "definitionChanged"
}, ir = r({
  name: "WallGraphics",
  create(i, e) {
    if (!i.entity)
      return;
    const o = new si(e);
    return i.entity.wall = o, o;
  },
  destroy(i, e) {
    e.entity && (e.entity.wall = void 0);
  },
  cesiumProps: Mt,
  cesiumEventProps: $t
});
export {
  In as AmbientOcclusion,
  Gt as Billboard,
  Ot as BillboardCollection,
  At as BillboardGraphics,
  Ln as BlackAndWhiteStage,
  Vn as Bloom,
  _n as BlurStage,
  Ft as BoxGraphics,
  Bn as BrightnessStage,
  It as Camera,
  Vt as CameraFlyHome,
  _t as CameraFlyTo,
  Wt as CameraFlyToBoundingSphere,
  Ut as CameraLookAt,
  Ht as Cesium3DTileset,
  zt as Cesium3DTilesetGraphics,
  x as CesiumContext,
  Nt as CesiumWidget,
  Kt as ClassificationPrimitive,
  jt as Clock,
  qt as CloudCollection,
  ci as Consumer,
  Zt as CorridorGraphics,
  Jt as CumulusCloud,
  Qt as CustomDataSource,
  Xt as CylinderGraphics,
  Yt as CzmlDataSource,
  Un as DepthOfFieldStage,
  Wn as EdgeDetectionStage,
  xt as EllipseGraphics,
  en as EllipsoidGraphics,
  on as Entity,
  tn as EntityDescription,
  ee as EventManager,
  nn as Fog,
  On as Fxaa,
  rn as GeoJsonDataSource,
  sn as Globe,
  an as GroundPolylinePrimitive,
  cn as GroundPrimitive,
  ln as GroundPrimitiveCollection,
  dn as ImageryLayer,
  un as ImageryLayerCollection,
  mn as KmlDataSource,
  hn as Label,
  yn as LabelCollection,
  pn as LabelGraphics,
  Gn as LensFlareStage,
  fn as Model,
  gn as ModelGraphics,
  Cn as Moon,
  An as NightVisionStage,
  vn as ParticleSystem,
  Pn as PathGraphics,
  Sn as PlaneGraphics,
  wn as PointGraphics,
  En as PointPrimitive,
  Dn as PointPrimitiveCollection,
  bn as PolygonGraphics,
  Mn as Polyline,
  $n as PolylineCollection,
  Rn as PolylineGraphics,
  kn as PolylineVolumeGraphics,
  Tn as PostProcessStage,
  Fn as PostProcessStageComposite,
  zn as Primitive,
  Lt as Provider,
  Nn as RectangleGraphics,
  Kn as Scene,
  jn as ScreenSpaceCameraController,
  qn as ScreenSpaceEvent,
  Zn as ScreenSpaceEventHandler,
  Jn as ShadowMap,
  Hn as SilhouetteStage,
  Qn as SkyAtmosphere,
  Xn as SkyBox,
  Yn as Sun,
  xn as TimeDynamicPointCloud,
  er as Viewer,
  ir as WallGraphics,
  H as createCameraOperation,
  r as createCesiumComponent,
  v as createPostProcessStage,
  X as entries,
  T as eventManagerContextKey,
  Y as eventNames,
  V as includes,
  ui as isDestroyable,
  mi as isDestroyed,
  li as pick,
  di as shallowEquals,
  W as useCesium,
  hi as useCesiumComponent,
  Bt as withCesium
};
