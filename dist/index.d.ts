import { Billboard as Billboard_2 } from 'cesium';
import { BillboardCollection as BillboardCollection_2 } from 'cesium';
import { BillboardGraphics as BillboardGraphics_2 } from 'cesium';
import { BoxGraphics as BoxGraphics_2 } from 'cesium';
import { Camera as Camera_2 } from 'cesium';
import { Cartesian2 } from 'cesium';
import { Cartesian3 } from 'cesium';
import { Cesium3DTileFeature } from 'cesium';
import { Cesium3DTileset as Cesium3DTileset_2 } from 'cesium';
import { Cesium3DTilesetGraphics as Cesium3DTilesetGraphics_2 } from 'cesium';
import { CesiumWidget as CesiumWidget_2 } from 'cesium';
import { ClassificationPrimitive as ClassificationPrimitive_2 } from 'cesium';
import { Clock as Clock_2 } from 'cesium';
import { ClockRange } from 'cesium';
import { ClockStep } from 'cesium';
import { CloudCollection as CloudCollection_2 } from 'cesium';
import type { Color } from 'cesium';
import { ComponentType } from 'react';
import type { Consumer as Consumer_2 } from 'react';
import type { Context as Context_2 } from 'react';
import { CorridorGraphics as CorridorGraphics_2 } from 'cesium';
import { CSSProperties } from 'react';
import { CumulusCloud as CumulusCloud_2 } from 'cesium';
import { CustomDataSource as CustomDataSource_2 } from 'cesium';
import { CylinderGraphics as CylinderGraphics_2 } from 'cesium';
import { CzmlDataSource as CzmlDataSource_2 } from 'cesium';
import { DataSource } from 'cesium';
import { DataSourceCollection } from 'cesium';
import { DistanceDisplayCondition } from 'cesium';
import type { EasingFunction } from 'cesium';
import { EllipseGraphics as EllipseGraphics_2 } from 'cesium';
import { EllipsoidGraphics as EllipsoidGraphics_2 } from 'cesium';
import { Entity as Entity_2 } from 'cesium';
import { EntityCollection } from 'cesium';
import { Event as Event_2 } from 'cesium';
import { FC } from 'react';
import { Fog as Fog_2 } from 'cesium';
import { ForwardRefExoticComponent } from 'react';
import { GeoJsonDataSource as GeoJsonDataSource_2 } from 'cesium';
import { Globe as Globe_2 } from 'cesium';
import { GroundPolylinePrimitive as GroundPolylinePrimitive_2 } from 'cesium';
import { GroundPrimitive as GroundPrimitive_2 } from 'cesium';
import type { HeadingPitchRange } from 'cesium';
import { HTMLAttributes } from 'react';
import { ImageryLayer as ImageryLayer_2 } from 'cesium';
import { ImageryLayerCollection as ImageryLayerCollection_2 } from 'cesium';
import { ImageryProvider } from 'cesium';
import { JulianDate } from 'cesium';
import { KeyboardEventModifier } from 'cesium';
import { KmlDataSource as KmlDataSource_2 } from 'cesium';
import { Label as Label_2 } from 'cesium';
import { LabelCollection as LabelCollection_2 } from 'cesium';
import { LabelGraphics as LabelGraphics_2 } from 'cesium';
import { Material } from 'cesium';
import type { Matrix4 } from 'cesium';
import { Model as Model_2 } from 'cesium';
import { ModelGraphics as ModelGraphics_2 } from 'cesium';
import { ModelMesh } from 'cesium';
import { ModelNode } from 'cesium';
import { Moon as Moon_2 } from 'cesium';
import { ParticleSystem as ParticleSystem_2 } from 'cesium';
import { PathGraphics as PathGraphics_2 } from 'cesium';
import { PlaneGraphics as PlaneGraphics_2 } from 'cesium';
import { PointGraphics as PointGraphics_2 } from 'cesium';
import { PointPrimitive as PointPrimitive_2 } from 'cesium';
import { PointPrimitiveCollection as PointPrimitiveCollection_2 } from 'cesium';
import { PolygonGraphics as PolygonGraphics_2 } from 'cesium';
import { Polyline as Polyline_2 } from 'cesium';
import { PolylineCollection as PolylineCollection_2 } from 'cesium';
import { PolylineGraphics as PolylineGraphics_2 } from 'cesium';
import { PolylineVolumeGraphics as PolylineVolumeGraphics_2 } from 'cesium';
import { PostProcessStage as PostProcessStage_2 } from 'cesium';
import { PostProcessStageCollection } from 'cesium';
import { PostProcessStageComposite as PostProcessStageComposite_2 } from 'cesium';
import { Primitive as Primitive_2 } from 'cesium';
import { PrimitiveCollection } from 'cesium';
import { PropsWithChildren } from 'react';
import { PropsWithoutRef } from 'react';
import type { Provider as Provider_2 } from 'react';
import { PureComponent } from 'react';
import { ReactNode } from 'react';
import type { Rectangle } from 'cesium';
import { RectangleGraphics as RectangleGraphics_2 } from 'cesium';
import { RefAttributes } from 'react';
import { RefObject } from 'react';
import { Scene as Scene_2 } from 'cesium';
import { SceneMode } from 'cesium';
import { ScreenSpaceCameraController as ScreenSpaceCameraController_2 } from 'cesium';
import { ScreenSpaceEventHandler as ScreenSpaceEventHandler_2 } from 'cesium';
import { ScreenSpaceEventType } from 'cesium';
import { ShadowMap as ShadowMap_2 } from 'cesium';
import { SkyAtmosphere as SkyAtmosphere_2 } from 'cesium';
import { SkyBox as SkyBox_2 } from 'cesium';
import { Sun as Sun_2 } from 'cesium';
import { TerrainProvider } from 'cesium';
import { TimeDynamicPointCloud as TimeDynamicPointCloud_2 } from 'cesium';
import { Viewer as Viewer_2 } from 'cesium';
import { WallGraphics as WallGraphics_2 } from 'cesium';

export declare const AmbientOcclusion: CesiumComponentType<PostProcessStage_2 | PostProcessStageComposite_2, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & Props_4 & {
    stages?: any[] | undefined;
}>;

export declare type ArrayKeys<K> = StringOnly<K extends readonly (infer E)[] ? E : K extends (infer E)[] ? E : K>;

export declare const Billboard: CesiumComponentType<Billboard_2, BillboardProps>;

declare type BillboardCesiumProps = PickCesiumProps<Billboard_2, typeof cesiumProps>;

export declare const BillboardCollection: CesiumComponentType<BillboardCollection_2, BillboardCollectionProps>;

declare type BillboardCollectionCesiumProps = PickCesiumProps<BillboardCollection_2, typeof cesiumProps_2>;

declare type BillboardCollectionOtherProps = {
    children?: ReactNode;
};

declare type BillboardCollectionProps = BillboardCollectionCesiumProps & BillboardCollectionOtherProps;

export declare const BillboardGraphics: CesiumComponentType<BillboardGraphics_2, BillboardGraphicsProps>;

declare type BillboardGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};

declare type BillboardGraphicsCesiumProps = PickCesiumProps<Merge<BillboardGraphics_2, BillboardGraphics_2.ConstructorOptions>, typeof cesiumProps_3>;

declare type BillboardGraphicsProps = BillboardGraphicsCesiumProps & BillboardGraphicsCesiumEvents;

declare type BillboardOtherProps = EventProps<{
    collection: BillboardCollection_2;
    id: string | undefined;
    primitive: Billboard_2;
}>;

declare type BillboardProps = BillboardCesiumProps & BillboardOtherProps;

export declare const BlackAndWhiteStage: CesiumComponentType<PostProcessStage_2 | PostProcessStageComposite_2, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & Props & {
    stages?: any[] | undefined;
}>;

export declare const Bloom: CesiumComponentType<PostProcessStage_2 | PostProcessStageComposite_2, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & Props_5 & {
    stages?: any[] | undefined;
}>;

export declare const BlurStage: CesiumComponentType<PostProcessStage_2 | PostProcessStageComposite_2, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & Props_6 & {
    stages?: any[] | undefined;
}>;

export declare const BoxGraphics: CesiumComponentType<BoxGraphics_2, BoxGraphicsProps>;

declare type BoxGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};

declare type BoxGraphicsCesiumProps = PickCesiumProps<Merge<BoxGraphics_2, BoxGraphics_2.ConstructorOptions>, typeof cesiumProps_4>;

declare type BoxGraphicsProps = BoxGraphicsCesiumProps & BoxGraphicsCesiumEvents;

export declare const BrightnessStage: CesiumComponentType<PostProcessStage_2 | PostProcessStageComposite_2, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & Props_2 & {
    stages?: any[] | undefined;
}>;

export declare type Callback<T = any> = (e: CesiumMovementEvent, source: T) => void;

export declare const Camera: CesiumComponentType<Camera_2, CameraProps>;

declare type CameraCesiumEvents = {
    onChange?: (areaPercentage: number) => void;
    onMoveEnd?: () => void;
    onMoveStart?: () => void;
};

declare type CameraCesiumProps = PickCesiumProps<Camera_2, typeof cesiumProps_5>;

export declare const CameraFlyHome: FC<CameraFlyHomeProps & CameraOperationProps>;

declare type CameraFlyHomeProps = {
    /** Duration of camera flight (second) */
    duration: number;
    /** If true, cancel camera flight if this component is unmounted. Default value is false. */
    cancelFlightOnUnmount?: boolean;
    /** If true, camera flight will be executed only once time. */
    once?: boolean;
};

export declare const CameraFlyTo: FC<Omit<{
    destination: Cartesian3 | Rectangle;
    orientation?: any;
    duration?: number | undefined;
    complete?: Camera_2.FlightCompleteCallback | undefined;
    cancel?: Camera_2.FlightCancelledCallback | undefined;
    endTransform?: Matrix4 | undefined;
    maximumHeight?: number | undefined;
    pitchAdjustHeight?: number | undefined;
    flyOverLongitude?: number | undefined;
    flyOverLongitudeWeight?: number | undefined;
    convert?: boolean | undefined;
    easingFunction?: EasingFunction.Callback | undefined;
}, "complete" | "cancel"> & {
    onComplete?: Options_2["complete"];
    onCancel?: Options_2["cancel"];
    /** If true, cancel camera flight if this component is unmounted. Default value is false. */
    cancelFlightOnUnmount?: boolean | undefined;
    /** If true, camera flight will be executed only once time. */
    once?: boolean | undefined;
} & CameraOperationProps>;

export declare const CameraFlyToBoundingSphere: FC<Omit<{
    duration?: number | undefined;
    offset?: HeadingPitchRange | undefined;
    complete?: Camera_2.FlightCompleteCallback | undefined;
    cancel?: Camera_2.FlightCancelledCallback | undefined;
    endTransform?: Matrix4 | undefined;
    maximumHeight?: number | undefined;
    pitchAdjustHeight?: number | undefined;
    flyOverLongitude?: number | undefined;
    flyOverLongitudeWeight?: number | undefined;
    easingFunction?: EasingFunction.Callback | undefined;
}, "complete" | "cancel"> & {
    boundingSphere: Parameters<Camera_2["flyToBoundingSphere"]>[0];
    onComplete?: Options_3["complete"];
    onCancel?: Options_3["cancel"];
    /** If true, cancel camera flight if this component is unmounted. Default value is false. */
    cancelFlightOnUnmount?: boolean | undefined;
    /** If true, camera flight will be executed only once time. */
    once?: boolean | undefined;
} & CameraOperationProps>;

export declare const CameraLookAt: FC<CameraLookAtProps & CameraOperationProps>;

declare type CameraLookAtProps = {
    target: Parameters<Camera_2["lookAt"]>[0];
    offset: Parameters<Camera_2["lookAt"]>[1];
};

export declare type CameraOperationProps = {
    cancelFlightOnUnmount?: boolean;
    once?: boolean;
};

declare type CameraProps = CameraCesiumProps & CameraCesiumEvents;

export declare const Cesium3DTileset: CesiumComponentType<Cesium3DTileset_2, Cesium3DTilesetProps>;

declare type Cesium3DTilesetCesiumEvents = {
    onAllTilesLoad?: () => void;
    onInitialTilesLoad?: () => void;
    onLoadProgress?: (numberOfPendingRequests: number, numberOfTilesProcessing: number) => void;
    onTileFailed?: (error: any) => void;
    onTileLoad?: (tile: Cesium3DTileset_2) => void;
    onTileUnload?: () => void;
    onTileVisible?: (tile: Cesium3DTileset_2) => void;
};

declare type Cesium3DTilesetCesiumProps = PickCesiumProps<Cesium3DTileset_2, typeof cesiumProps_6>;

declare type Cesium3DTilesetCesiumReadonlyProps = PickCesiumProps<Merge<Cesium3DTileset_2, ConstructorOptions<typeof Cesium3DTileset_2>>, typeof cesiumReadonlyProps, "url">;

export declare const Cesium3DTilesetGraphics: CesiumComponentType<Cesium3DTilesetGraphics_2, Cesium3DTilesetGraphicsProps>;

declare type Cesium3DTilesetGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};

declare type Cesium3DTilesetGraphicsCesiumProps = PickCesiumProps<Merge<Cesium3DTilesetGraphics_2, Cesium3DTilesetGraphics_2.ConstructorOptions>, typeof cesiumProps_7>;

declare type Cesium3DTilesetGraphicsProps = Cesium3DTilesetGraphicsCesiumProps & Cesium3DTilesetGraphicsCesiumEvents;

declare type Cesium3DTilesetOtherProps = EventProps<Cesium3DTileFeature> & {
    /** Calls when the tile set is completely loaded. */
    onReady?: (tileset: Cesium3DTileset_2) => void;
};

declare type Cesium3DTilesetProps = Cesium3DTilesetCesiumProps & Cesium3DTilesetCesiumReadonlyProps & Cesium3DTilesetCesiumEvents & Cesium3DTilesetOtherProps;

export declare type CesiumComponentOptions<Element, Props, State = any> = Options<Element, Props, State> & {
    renderContainer?: boolean;
    noChildren?: boolean;
    containerProps?: (keyof Props)[] | ((props: Props) => HTMLAttributes<HTMLDivElement>);
    defaultProps?: Partial<Props>;
};

export declare type CesiumComponentRef<Element> = {
    cesiumElement?: Element;
};

export declare type CesiumComponentType<Element, Props> = ForwardRefExoticComponent<PropsWithoutRef<Props> & RefAttributes<CesiumComponentRef<Element>>>;

export declare const CesiumContext: Context_2<any>;

declare type CesiumEventKeys<T> = {
    [K in keyof T]: T[K] extends Event_2 ? K : never;
}[keyof T];

export declare type CesiumHOCComponentType<E, P> = ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<CesiumInsideComponentType<E, P>>>;

export declare interface CesiumInsideComponentType<E, P = any> extends PureComponent<WithContextProps<P, any>> {
    cesiumElement: E;
}

export declare type CesiumMovementEvent = {
    position?: Cartesian2;
    startPosition?: Cartesian2;
    endPosition?: Cartesian2;
};

export declare type CesiumProp<C> = {
    cesium: C;
};

declare const cesiumProps: readonly ["alignedAxis", "color", "disableDepthTestDistance", "distanceDisplayCondition", "eyeOffset", "height", "heightReference", "horizontalOrigin", "image", "pixelOffset", "pixelOffsetScaleByDistance", "position", "rotation", "scale", "scaleByDistance", "show", "sizeInMeters", "translucencyByDistance", "verticalOrigin", "width"];

declare const cesiumProps_10: readonly ["canAnimate", "clockRange", "clockStep", "currentTime", "multiplier", "shouldAnimate", "startTime", "stopTime"];

declare const cesiumProps_11: readonly ["noiseDetail", "noiseOffset", "show", "debugBillboards", "debugEllipsoids"];

declare const cesiumProps_12: readonly ["positions", "width", "cornerType", "height", "heightReference", "extrudedHeight", "extrudedHeightReference", "show", "fill", "material", "outline", "outlineColor", "outlineWidth", "granularity", "shadows", "distanceDisplayCondition", "zIndex", "classificationType"];

declare const cesiumProps_13: readonly ["show", "position", "scale", "maximumSize", "slice", "brightness", "color"];

declare const cesiumProps_14: readonly ["clustering", "name", "show", "clock", "isLoading"];

declare const cesiumProps_15: readonly ["heightReference", "length", "topRadius", "bottomRadius", "show", "fill", "material", "outline", "outlineColor", "outlineWidth", "numberOfVerticalLines", "slices", "distanceDisplayCondition", "shadows"];

declare const cesiumProps_16: readonly ["clustering", "show"];

declare const cesiumProps_17: readonly ["semiMajorAxis", "semiMinorAxis", "height", "heightReference", "extrudedHeight", "show", "fill", "material", "outline", "outlineColor", "outlineWidth", "numberOfVerticalLines", "rotation", "stRotation", "granularity", "shadows", "distanceDisplayCondition", "zIndex", "classificationType", "extrudedHeightReference"];

declare const cesiumProps_18: readonly ["heightReference", "radii", "show", "fill", "innerRadii", "material", "maximumClock", "maximumCone", "minimumClock", "minimumCone", "outline", "outlineColor", "outlineWidth", "subdivisions", "stackPartitions", "slicePartitions", "shadows", "distanceDisplayCondition"];

declare const cesiumProps_19: readonly ["availability", "billboard", "box", "corridor", "cylinder", "description", "ellipse", "ellipsoid", "entityCollection", "label", "model", "name", "orientation", "path", "plane", "parent", "point", "polygon", "polyline", "polylineVolume", "position", "properties", "rectangle", "show", "tileset", "viewFrom", "wall"];

declare const cesiumProps_2: readonly ["blendOption", "debugShowBoundingVolume", "debugShowTextureAtlas", "modelMatrix", "show"];

declare const cesiumProps_20: readonly ["density", "enabled", "minimumBrightness", "screenSpaceErrorFactor", "renderable"];

declare const cesiumProps_21: readonly ["clustering", "name", "show"];

declare const cesiumProps_22: readonly ["atmosphereBrightnessShift", "atmosphereHueShift", "atmosphereSaturationShift", "backFaceCulling", "baseColor", "clippingPlanes", "depthTestAgainstTerrain", "enableLighting", "lightingFadeInDistance", "lightingFadeOutDistance", "material", "maximumScreenSpaceError", "nightFadeInDistance", "nightFadeOutDistance", "oceanNormalMapUrl", "shadows", "show", "showGroundAtmosphere", "showWaterEffect", "terrainProvider", "tileCacheSize", "loadingDescendantLimit", "preloadAncestors", "preloadSiblings", "fillHighlightColor", "dynamicAtmosphereLighting", "dynamicAtmosphereLightingFromSun", "showSkirts", "cartographicLimitRectangle", "translucency", "undergroundColor", "undergroundColorAlphaByDistance", "terrainExaggeration", "terrainExaggerationRelativeHeight", "lambertDiffuseMultiplier", "atmosphereLightIntensity", "atmosphereRayleighCoefficient", "atmosphereMieCoefficient", "atmosphereRayleighScaleHeight", "atmosphereMieScaleHeight", "atmosphereMieAnisotropy"];

declare const cesiumProps_23: readonly ["appearance", "classificationType", "debugShowBoundingVolume", "debugShowShadowVolume", "show"];

declare const cesiumProps_24: readonly ["appearance", "classificationType", "debugShowBoundingVolume", "debugShowShadowVolume", "show"];

declare const cesiumProps_25: readonly ["show", "destroyPrimitives"];

declare const cesiumProps_26: readonly ["alpha", "brightness", "contrast", "hue", "saturation", "gamma", "splitDirection", "minificationFilter", "magnificationFilter", "cutoutRectangle", "show", "nightAlpha", "dayAlpha", "colorToAlpha", "colorToAlphaThreshold"];

declare const cesiumProps_27: readonly ["clustering", "name", "show"];

declare const cesiumProps_28: readonly ["backgroundColor", "backgroundPadding", "disableDepthTestDistance", "distanceDisplayCondition", "eyeOffset", "fillColor", "font", "heightReference", "horizontalOrigin", "outlineColor", "outlineWidth", "pixelOffset", "pixelOffsetScaleByDistance", "position", "scale", "scaleByDistance", "show", "showBackground", "style", "text", "translucencyByDistance", "verticalOrigin"];

declare const cesiumProps_29: readonly ["blendOption", "debugShowBoundingVolume", "modelMatrix", "show"];

declare const cesiumProps_3: readonly ["image", "show", "scale", "horizontalOrigin", "verticalOrigin", "eyeOffset", "pixelOffset", "rotation", "alignedAxis", "width", "height", "color", "scaleByDistance", "translucencyByDistance", "pixelOffsetScaleByDistance", "imageSubRegion", "sizeInMeters", "heightReference", "distanceDisplayCondition", "disableDepthTestDistance"];

declare const cesiumProps_30: readonly ["text", "font", "style", "fillColor", "outlineColor", "outlineWidth", "show", "showBackground", "backgroundColor", "backgroundPadding", "scale", "horizontalOrigin", "verticalOrigin", "eyeOffset", "pixelOffset", "translucencyByDistance", "pixelOffsetScaleByDistance", "scaleByDistance", "heightReference", "distanceDisplayCondition", "disableDepthTestDistance"];

declare const cesiumProps_31: readonly ["basePath", "clampAnimations", "clippingPlanes", "color", "colorBlendAmount", "colorBlendMode", "debugShowBoundingVolume", "debugWireframe", "distanceDisplayCondition", "id", "imageBasedLighting", "lightColor", "maximumScale", "minimumPixelSize", "modelMatrix", "scale", "shadows", "show", "silhouetteColor", "silhouetteSize", "backFaceCulling", "splitDirection", "imageBasedLighting", "showCreditsOnScreen", "activeAnimations"];

declare const cesiumProps_32: readonly ["uri", "show", "scale", "minimumPixelSize", "maximumScale", "incrementallyLoadTextures", "runAnimations", "clampAnimations", "nodeTransformations", "shadows", "heightReference", "distanceDisplayCondition", "silhouetteColor", "silhouetteSize", "color", "colorBlendMode", "colorBlendAmount", "clippingPlanes", "imageBasedLightingFactor", "lightColor", "articulations"];

declare const cesiumProps_33: readonly ["onlySunLighting", "show", "textureUrl"];

declare const cesiumProps_34: readonly ["show", "emitter", "modelMatrix", "emitterModelMatrix", "emissionRate", "bursts", "loop", "startScale", "endScale", "startColor", "endColor", "image", "imageSize", "minimumImageSize", "maximumImageSize", "speed", "minimumSpeed", "maximumSpeed", "lifetime", "particleLife", "minimumParticleLife", "maximumParticleLife", "mass", "minimumMass", "maximumMass", "sizeInMeters"];

declare const cesiumProps_35: readonly ["leadTime", "trailTime", "show", "width", "material", "resolution", "distanceDisplayCondition"];

declare const cesiumProps_36: readonly ["plane", "dimensions", "show", "fill", "material", "outline", "outlineColor", "outlineWidth", "shadows", "distanceDisplayCondition"];

declare const cesiumProps_37: readonly ["color", "pixelSize", "outlineColor", "outlineWidth", "show", "scaleByDistance", "translucencyByDistance", "heightReference", "distanceDisplayCondition", "disableDepthTestDistance"];

declare const cesiumProps_38: readonly ["color", "disableDepthTestDistance", "distanceDisplayCondition", "id", "outlineColor", "outlineWidth", "pixelSize", "position", "scaleByDistance", "show", "translucencyByDistance"];

declare const cesiumProps_39: readonly ["blendOption", "debugShowBoundingVolume", "modelMatrix", "show"];

declare const cesiumProps_4: readonly ["heightReference", "dimensions", "show", "fill", "material", "outline", "outlineColor", "outlineWidth", "shadows", "distanceDisplayCondition"];

declare const cesiumProps_40: readonly ["arcType", "hierarchy", "height", "heightReference", "extrudedHeight", "extrudedHeightReference", "show", "fill", "material", "outline", "outlineColor", "outlineWidth", "stRotation", "granularity", "perPositionHeight", "closeTop", "closeBottom", "shadows", "distanceDisplayCondition", "zIndex", "classificationType", "textureCoordinates"];

declare const cesiumProps_41: readonly ["distanceDisplayCondition", "id", "loop", "material", "positions", "show", "width"];

declare const cesiumProps_42: readonly ["debugShowBoundingVolume", "length", "modelMatrix", "show"];

declare const cesiumProps_43: readonly ["arcType", "classificationType", "positions", "clampToGround", "width", "show", "material", "depthFailMaterial", "granularity", "shadows", "distanceDisplayCondition", "zIndex"];

declare const cesiumProps_44: readonly ["positions", "shape", "cornerType", "show", "fill", "material", "outline", "outlineColor", "outlineWidth", "granularity", "shadows", "distanceDisplayCondition"];

declare const cesiumProps_45: readonly ["enabled", "selected"];

declare const cesiumProps_46: readonly ["enabled", "selected"];

declare const cesiumProps_47: readonly ["appearance", "cull", "debugShowBoundingVolume", "depthFailAppearance", "modelMatrix", "shadows", "show"];

declare const cesiumProps_48: readonly ["classificationType", "coordinates", "height", "heightReference", "extrudedHeight", "extrudedHeightReference", "show", "fill", "material", "outline", "outlineColor", "outlineWidth", "rotation", "stRotation", "granularity", "shadows", "distanceDisplayCondition", "zIndex"];

declare const cesiumProps_49: readonly ["backgroundColor", "completeMorphOnUserInput", "debugCommandFilter", "debugShowCommands", "debugShowDepthFrustum", "debugShowFramesPerSecond", "debugShowFrustumPlanes", "debugShowFrustums", "eyeSeparation", "farToNearRatio", "focalLength", "fog", "gamma", "globe", "highDynamicRange", "invertClassification", "invertClassificationColor", "light", "logarithmicDepthBuffer", "logarithmicDepthFarToNearRatio", "maximumRenderTimeChange", "minimumDisableDepthTestDistance", "moon", "morphTime", "nearToFarDistance2D", "pickTranslucentDepth", "requestRenderMode", "rethrowRenderErrors", "shadowMap", "skyAtmosphere", "skyBox", "specularEnvironmentMaps", "sphericalHarmonicCoefficients", "sun", "sunBloom", "terrainProvider", "useDepthPicking", "useWebVR", "postProcessStages", "msaaSamples", "splitPosition", "debugCommandFilter"];

declare const cesiumProps_5: readonly ["position", "direction", "up", "right", "frustum", "defaultMoveAmount", "defaultLookAmount", "defaultRotateAmount", "defaultZoomAmount", "constrainedAxis", "maximumZoomFactor", "percentageChanged"];

declare const cesiumProps_50: readonly ["bounceAnimationTime", "enableCollisionDetection", "enableInputs", "enableLook", "enableRotate", "enableTilt", "enableTranslate", "enableZoom", "inertiaSpin", "inertiaTranslate", "inertiaZoom", "lookEventTypes", "maximumMovementRatio", "maximumZoomDistance", "minimumCollisionTerrainHeight", "minimumPickingTerrainHeight", "minimumTrackBallHeight", "minimumZoomDistance", "rotateEventTypes", "tiltEventTypes", "translateEventTypes", "zoomEventTypes"];

declare const cesiumProps_51: readonly ["darkness", "enabled", "maximumDistance", "normalOffset", "size", "softShadows", "fadingEnabled"];

declare const cesiumProps_52: readonly ["brightnessShift", "hueShift", "saturationShift", "show", "perFragmentAtmosphere", "atmosphereLightIntensity", "atmosphereRayleighCoefficient", "atmosphereMieCoefficient", "atmosphereRayleighScaleHeight", "atmosphereMieScaleHeight", "atmosphereMieAnisotropy"];

declare const cesiumProps_53: readonly ["sources", "show"];

declare const cesiumProps_54: readonly ["glowFactor", "show"];

declare const cesiumProps_55: readonly ["clippingPlanes", "maximumMemoryUsage", "modelMatrix", "shadows", "show", "style", "intervals"];

declare const cesiumProps_56: readonly ["terrainProvider", "terrainShadows", "clockTrackedDataSource", "targetFrameRate", "useDefaultRenderLoop", "resolutionScale", "allowDataSourcesToSuspendAnimation", "trackedEntity", "selectedEntity", "shadows", "useBrowserRecommendedResolution"];

declare const cesiumProps_57: readonly ["positions", "maximumHeights", "minimumHeights", "show", "fill", "material", "outline", "outlineColor", "outlineWidth", "granularity", "shadows", "distanceDisplayCondition"];

declare const cesiumProps_58: readonly ["enabled", "selected"];

declare const cesiumProps_6: readonly ["show", "modelMatrix", "shadows", "maximumScreenSpaceError", "maximumMemoryUsage", "cullRequestsWhileMoving", "cullRequestsWhileMovingMultiplier", "preloadWhenHidden", "preloadFlightDestinations", "preferLeaves", "progressiveResolutionHeightFraction", "foveatedScreenSpaceError", "foveatedConeSize", "foveatedMinimumScreenSpaceErrorRelaxation", "foveatedInterpolationCallback", "foveatedTimeDelay", "dynamicScreenSpaceError", "dynamicScreenSpaceErrorDensity", "dynamicScreenSpaceErrorFactor", "dynamicScreenSpaceErrorHeightFalloff", "skipLevelOfDetail", "baseScreenSpaceError", "skipScreenSpaceErrorFactor", "skipLevels", "immediatelyLoadDesiredLevelOfDetail", "loadSiblings", "clippingPlanes", "classificationType", "ellipsoid", "lightColor", "colorBlendAmount", "colorBlendMode", "debugFreezeFrame", "debugColorizeTiles", "debugWireframe", "debugShowBoundingVolume", "debugShowContentBoundingVolume", "debugShowViewerRequestVolume", "debugShowGeometricError", "debugShowRenderingStatistics", "debugShowMemoryUsage", "debugShowUrl", "style", "backFaceCulling", "vectorClassificationOnly", "vectorKeepDecodedPositions", "splitDirection", "customShader", "imageBasedLighting", "showCreditsOnScreen", "featureIdLabel", "instanceFeatureIdLabel", "imageBasedLighting"];

declare const cesiumProps_7: readonly ["show", "uri", "maximumScreenSpaceError"];

declare const cesiumProps_8: readonly ["resolutionScale", "useDefaultRenderLoop", "targetFrameRate", "useBrowserRecommendedResolution"];

declare const cesiumProps_9: readonly ["classificationType", "debugShowBoundingVolume", "debugShowShadowVolume", "show"];

declare type CesiumPureProps<T> = Exclude<StringOnly<keyof T>, FunctionKeys<T> | Exclude<ReadonlyKeys<T>, CesiumEventKeys<T>> | "prototype">;

declare const cesiumReadonlyProps: readonly ["url", "showOutline", "cullWithChildrenBounds", "debugHeatmapTilePropertyName", "enableDebugWireframe", "modelUpAxis", "modelForwardAxis", "projectTo2D"];

declare const cesiumReadonlyProps_10: readonly ["canvas", "camera", "ellipsoid", "clampToGround", "sourceUri", "credit", "screenOverlayContainer"];

declare const cesiumReadonlyProps_11: readonly ["allowPicking", "asynchronous", "credit", "dequantizeInShader", "gltf", "heightReference", "incrementallyLoadTextures", "scene", "url", "showOutline"];

declare const cesiumReadonlyProps_12: readonly ["ellipsoid"];

declare const cesiumReadonlyProps_13: readonly ["color", "imageSize", "speed", "scale", "particleLife", "mass"];

declare const cesiumReadonlyProps_14: readonly ["clearColor", "forcePowerOfTwo", "fragmentShader", "name", "pixelDatatype", "pixelFormat", "sampleMode", "scissorRectangle", "textureScale", "uniforms"];

declare const cesiumReadonlyProps_15: readonly ["inputPreviousStageTexture", "name", "stages", "uniforms"];

declare const cesiumReadonlyProps_16: readonly ["allowPicking", "asynchronous", "compressVertices", "geometryInstances", "interleave", "releaseGeometryInstances", "vertexCacheOptimize"];

declare const cesiumReadonlyProps_17: readonly ["lightCamera", "isPointLight", "pointLightRadius", "cascadesEnabled", "numberOfCascades"];

declare const cesiumReadonlyProps_18: readonly ["clock", "shading"];

declare const cesiumReadonlyProps_19: readonly ["animation", "baseLayerPicker", "fullscreenButton", "vrButton", "geocoder", "homeButton", "infoBox", "sceneModePicker", "selectionIndicator", "timeline", "navigationHelpButton", "navigationInstructionsInitiallyVisible", "scene3DOnly", "shouldAnimate", "clockViewModel", "selectedImageryProviderViewModel", "imageryProviderViewModels", "selectedTerrainProviderViewModel", "terrainProviderViewModels", "imageryProvider", "skyBox", "skyAtmosphere", "fullscreenElement", "showRenderLoopErrors", "automaticallyTrackDataSourceClocks", "contextOptions", "sceneMode", "mapProjection", "globe", "orderIndependentTranslucency", "creditContainer", "creditViewport", "dataSources", "mapMode2D", "projectionPicker", "requestRenderMode", "maximumRenderTimeChange", "depthPlaneEllipsoidOffset", "msaaSamples"];

declare const cesiumReadonlyProps_2: readonly ["clock", "imageryProvider", "terrainProvider", "skyBox", "skyAtmosphere", "sceneMode", "scene3DOnly", "orderIndependentTranslucency", "mapMode2D", "mapProjection", "globe", "showRenderLoopErrors", "contextOptions", "creditContainer", "creditViewport", "shadows", "terrainShadows", "requestRenderMode", "maximumRenderTimeChange", "msaaSamples"];

declare const cesiumReadonlyProps_3: readonly ["allowPicking", "asynchronous", "compressVertices", "geometryInstances", "interleave", "releaseGeometryInstances", "vertexCacheOptimize", "appearance"];

declare const cesiumReadonlyProps_4: readonly ["name", "sourceUri", "credit"];

declare const cesiumReadonlyProps_5: readonly ["id"];

declare const cesiumReadonlyProps_6: readonly ["clampToGround", "sourceUri", "credit", "markerSize", "markerSymbol", "markerColor", "stroke", "strokeWidth", "fill", "describe"];

declare const cesiumReadonlyProps_7: readonly ["allowPicking", "asynchronous", "geometryInstances", "interleave", "releaseGeometryInstances"];

declare const cesiumReadonlyProps_8: readonly ["allowPicking", "asynchronous", "compressVertices", "geometryInstances", "interleave", "releaseGeometryInstances", "vertexCacheOptimize"];

declare const cesiumReadonlyProps_9: readonly ["imageryProvider", "rectangle", "maximumAnisotropy", "minimumTerrainLevel", "maximumTerrainLevel"];

export declare const CesiumWidget: CesiumComponentType<CesiumWidget_2, CesiumWidgetProps>;

declare type CesiumWidgetCesiumProps = PickCesiumProps<CesiumWidget_2, typeof cesiumProps_8>;

declare type CesiumWidgetCesiumReadonlyProps = PickCesiumProps<Target, typeof cesiumReadonlyProps_2>;

declare type CesiumWidgetOtherProps = RootEventProps & {
    /** Applied to outer `div` element */
    className?: string;
    /** Applied to outer `div` element */
    id?: string;
    /** Applied to outer `div` element */
    style?: CSSProperties;
    /** Same as `style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}` if it is true. */
    full?: boolean;
    /** All props applied to outer `div` element */
    containerProps?: any;
    children?: ReactNode;
};

declare type CesiumWidgetProps = CesiumWidgetCesiumProps & CesiumWidgetCesiumReadonlyProps & CesiumWidgetOtherProps;

export declare const ClassificationPrimitive: CesiumComponentType<ClassificationPrimitive_2, ClassificationPrimitiveProps>;

declare type ClassificationPrimitiveCesiumProps = PickCesiumProps<Target_2, typeof cesiumProps_9>;

declare type ClassificationPrimitiveCesiumReadonlyProps = PickCesiumProps<Target_2, typeof cesiumReadonlyProps_3>;

declare type ClassificationPrimitiveOtherProps = EventProps<ClassificationPrimitive_2> & {
    /** Calls when [Primitive#readyPromise](https://cesium.com/docs/cesiumjs-ref-doc/ClassificationPrimitive.html#readyPromise) is fullfilled */
    onReady?: (primitive: ClassificationPrimitive_2) => void;
};

declare type ClassificationPrimitiveProps = ClassificationPrimitiveCesiumProps & ClassificationPrimitiveCesiumReadonlyProps & ClassificationPrimitiveOtherProps;

export declare const Clock: CesiumComponentType<Clock_2, ClockProps>;

declare type ClockCesiumEvents = {
    onStop?: (clock: Clock_2) => void;
    onTick?: (clock: Clock_2) => void;
};

declare type ClockCesiumProps = PickCesiumProps<Clock_2, typeof cesiumProps_10> & {
    canAnimate?: boolean;
    clockRange?: ClockRange;
    clockStep?: ClockStep;
    currentTime?: JulianDate;
    multiplier?: number;
    shouldAnimate?: boolean;
    startTime?: JulianDate;
    stopTime?: JulianDate;
};

declare type ClockProps = ClockCesiumProps & ClockCesiumEvents;

export declare const CloudCollection: CesiumComponentType<CloudCollection_2, CloudCollectionProps>;

declare type CloudCollectionCesiumProps = PickCesiumProps<CloudCollection_2, typeof cesiumProps_11>;

declare type CloudCollectionOtherProps = {
    children?: ReactNode;
};

declare type CloudCollectionProps = CloudCollectionCesiumProps & CloudCollectionOtherProps;

export declare type ConstructorOptions<T extends new (...args: any[]) => any> = NonNullable<ConstructorParameters<T>[0]>;

export declare type ConstructorOptions2<T extends new (...args: any[]) => any> = NonNullable<ConstructorParameters<T>[1]>;

export declare const Consumer: Consumer_2<any>;

export declare type Context = {
    viewer?: Viewer_2;
    cesiumWidget?: CesiumWidget_2;
    scene?: Scene_2;
    globe?: Globe_2;
    camera?: Camera_2;
    screenSpaceEventHandler?: ScreenSpaceEventHandler_2;
    entity?: Entity_2;
    dataSourceCollection?: DataSourceCollection;
    dataSource?: DataSource;
    entityCollection?: EntityCollection;
    imageryLayerCollection?: ImageryLayerCollection_2;
    primitiveCollection?: PrimitiveCollection;
    billboardCollection?: BillboardCollection_2;
    labelCollection?: LabelCollection_2;
    polylineCollection?: PolylineCollection_2;
    pointPrimitiveCollection?: PointPrimitiveCollection_2;
    cloudCollection?: CloudCollection_2;
    [eventManagerContextKey]?: EventManager;
};

declare type CorridorCesiumEvents = {
    onDefinitionChange?: () => void;
};

export declare const CorridorGraphics: CesiumComponentType<CorridorGraphics_2, CorridorGraphicsProps>;

declare type CorridorGraphicsCesiumProps = PickCesiumProps<Merge<CorridorGraphics_2, CorridorGraphics_2.ConstructorOptions>, typeof cesiumProps_12>;

declare type CorridorGraphicsProps = CorridorGraphicsCesiumProps & CorridorCesiumEvents;

export declare const createCameraOperation: <P>(name: string, cameraOperationStart: (camera: Camera_2, props: P, prevProps?: P | undefined) => void) => FC<P & CameraOperationProps>;

export declare const createCesiumComponent: <Element_1, Props, State = any>({ renderContainer, noChildren, containerProps, defaultProps, ...options }: CesiumComponentOptions<Element_1, Props, State>) => CesiumComponentType<Element_1, Props>;

export declare const createPostProcessStage: <UniformProps>(opts: {
    name: string;
    props: (keyof UniformProps)[];
    readonlyProps?: (keyof UniformProps)[] | undefined;
    noMount?: boolean | undefined;
    create(props: Readonly<UniformProps & {} & {
        enabled?: boolean | undefined;
        selected?: any[] | undefined;
    }>, postProcessStages: PostProcessStageCollection): PostProcessStage_2 | PostProcessStageComposite_2;
}) => CesiumComponentType<PostProcessStage_2 | PostProcessStageComposite_2, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & UniformProps & {
    stages?: any[] | undefined;
}>;

export declare const CumulusCloud: CesiumComponentType<CumulusCloud_2, CumulusCloudCesiumProps>;

declare type CumulusCloudCesiumProps = PickCesiumProps<CumulusCloud_2, typeof cesiumProps_13>;

export declare const CustomDataSource: CesiumComponentType<CustomDataSource_2, CustomDataSourceProps>;

declare type CustomDataSourceCesiumEvents = {
    onChange?: (customDataSource: CustomDataSource_2) => void;
    onError?: (customDataSource: CustomDataSource_2, error: any) => void;
    onLoading?: (customDataSource: CustomDataSource_2, isLoaded: boolean) => void;
};

declare type CustomDataSourceCesiumProps = PickCesiumProps<CustomDataSource_2, typeof cesiumProps_14>;

declare type CustomDataSourceOtherProps = EventProps<EventTarget_2> & {
    children?: ReactNode;
};

declare type CustomDataSourceProps = CustomDataSourceCesiumProps & CustomDataSourceCesiumEvents & CustomDataSourceOtherProps;

declare type CylinderCesiumEvents = {
    onDefinitionChange?: () => void;
};

export declare const CylinderGraphics: CesiumComponentType<CylinderGraphics_2, CylinderGraphicsProps>;

declare type CylinderGraphicsCesiumProps = PickCesiumProps<Merge<CylinderGraphics_2, CylinderGraphics_2.ConstructorOptions>, typeof cesiumProps_15>;

declare type CylinderGraphicsProps = CylinderGraphicsCesiumProps & CylinderCesiumEvents;

export declare const CzmlDataSource: CesiumComponentType<CzmlDataSource_2, CzmlDataSourceProps>;

declare type CzmlDataSourceCesiumEvents = {
    onChange?: (CzmlDataSource: CzmlDataSource_2) => void;
    onError?: (CzmlDataSource: CzmlDataSource_2, error: any) => void;
    onLoading?: (CzmlDataSource: CzmlDataSource_2, isLoaded: boolean) => void;
};

declare type CzmlDataSourceCesiumProps = PickCesiumProps<CzmlDataSource_2, typeof cesiumProps_16>;

declare type CzmlDataSourceCesiumReadonlyProps = PickCesiumProps<Target_3, typeof cesiumReadonlyProps_4>;

declare type CzmlDataSourceOtherProps = EventProps<EventTarget_3> & {
    /** Calls when the Promise for loading data is fullfilled. */
    onLoad?: (CzmlDataSouce: CzmlDataSource_2) => void;
    data?: Parameters<CzmlDataSource_2["load"]>[0];
};

declare type CzmlDataSourceProps = CzmlDataSourceCesiumProps & CzmlDataSourceCesiumReadonlyProps & CzmlDataSourceCesiumEvents & CzmlDataSourceOtherProps;

export declare const DepthOfFieldStage: CesiumComponentType<PostProcessStage_2 | PostProcessStageComposite_2, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & Props_7 & {
    stages?: any[] | undefined;
}>;

export declare type Destroyable = {
    isDestroyed(): boolean;
    destroy(): void;
};

export declare const EdgeDetectionStage: CesiumComponentType<PostProcessStage_2 | PostProcessStageComposite_2, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & Props_8 & {
    stages?: any[] | undefined;
}>;

export declare const EllipseGraphics: CesiumComponentType<EllipseGraphics_2, EllipseGraphicsProps>;

declare type EllipseGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};

declare type EllipseGraphicsCesiumProps = PickCesiumProps<Merge<EllipseGraphics_2, EllipseGraphics_2.ConstructorOptions>, typeof cesiumProps_17>;

declare type EllipseGraphicsProps = EllipseGraphicsCesiumProps & EllipseGraphicsCesiumEvents;

export declare const EllipsoidGraphics: CesiumComponentType<EllipsoidGraphics_2, EllipsoidGraphicsProps>;

declare type EllipsoidGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};

declare type EllipsoidGraphicsCesiumProps = PickCesiumProps<Target_4, typeof cesiumProps_18>;

declare type EllipsoidGraphicsProps = EllipsoidGraphicsCesiumProps & EllipsoidGraphicsCesiumEvents;

export declare const Entity: CesiumComponentType<Entity_2, EntityProps>;

declare type EntityCesiumEvents = {
    onDefinitionChange?: () => void;
};

declare type EntityCesiumProps = PickCesiumProps<Merge<Entity_2, Entity_2.ConstructorOptions>, typeof cesiumProps_19>;

declare type EntityCesiumReadonlyProps = PickCesiumProps<Entity_2, typeof cesiumReadonlyProps_5>;

export declare const EntityDescription: FC<EntityDescriptionProps>;

declare type EntityDescriptionProps = PropsWithChildren<{
    container?: Element;
    resizeInfoBox?: boolean;
}>;

declare type EntityOtherProps = EventProps<EventTarget_4> & {
    children?: ReactNode;
    /** If true, the entity will be selected. It works only inside Viewer not CesiumWidget. */
    selected?: boolean;
    /** If true, the entity will be tracked by the camera. It works only inside Viewer not CesiumWidget. */
    tracked?: boolean;
};

declare type EntityProps = EntityCesiumProps & EntityCesiumReadonlyProps & EntityCesiumEvents & EntityOtherProps;

export declare function entries<T>(obj: T): [keyof T, T[keyof T]][];

export declare type EventkeyMap<T, P> = {
    [K in keyof P]?: keyof T;
};

export declare class EventManager {
    private static eventTypeMap;
    private scene;
    private sshe;
    private events;
    private hovered;
    constructor(scene?: Scene_2);
    destroy(): void;
    isDestroyed(): boolean;
    on(element: any, type: EventType, cb: Callback): void;
    off(element: any, type: EventType): void;
    setEvents(element: any, props: any): void;
    clearEvents(element: any): void;
    commit(): void;
    getScreenSpaceEventHandler(): ScreenSpaceEventHandler_2;
    private getEventCallback;
    private onMouseMove;
    private eventCallback;
    private pick;
}

export declare const eventManagerContextKey = "__RESIUM_EVENT_MANAGER";

export declare const eventNames: EventType[];

export declare type EventProps<T> = {
    onClick?: (movement: CesiumMovementEvent, target: T) => void;
    onDoubleClick?: (movement: CesiumMovementEvent, target: T) => void;
    onMouseDown?: (movement: CesiumMovementEvent, target: T) => void;
    onMouseUp?: (movement: CesiumMovementEvent, target: T) => void;
    onMiddleClick?: (movement: CesiumMovementEvent, target: T) => void;
    onMiddleDown?: (movement: CesiumMovementEvent, target: T) => void;
    onMiddleUp?: (movement: CesiumMovementEvent, target: T) => void;
    onMouseMove?: (movement: CesiumMovementEvent, target: T) => void;
    onPinchEnd?: (movement: CesiumMovementEvent, target: T) => void;
    onPinchMove?: (movement: CesiumMovementEvent, target: T) => void;
    onPinchStart?: (movement: CesiumMovementEvent, target: T) => void;
    onRightClick?: (movement: CesiumMovementEvent, target: T) => void;
    onRightDown?: (movement: CesiumMovementEvent, target: T) => void;
    onRightUp?: (movement: CesiumMovementEvent, target: T) => void;
    onMouseEnter?: (movement: CesiumMovementEvent, target: T) => void;
    onMouseLeave?: (movement: CesiumMovementEvent, target: T) => void;
};

declare type EventTarget_2 = {
    id: Entity_2;
} & ({
    primitive: Primitive_2;
} | {
    primitive: Model_2;
    mesh: ModelMesh;
    node: ModelNode;
} | {
    collection: BillboardCollection_2;
    primitive: Billboard_2;
} | {
    collection: LabelCollection_2;
    primitive: Label_2;
} | {
    collection: PointPrimitiveCollection_2;
    primitive: PointPrimitive_2;
} | {
    collection: PolylineCollection_2;
    primitive: Polyline_2;
});

declare type EventTarget_3 = {
    id: Entity_2;
} & ({
    primitive: Primitive_2;
} | {
    primitive: Model_2;
    mesh: ModelMesh;
    node: ModelNode;
} | {
    collection: BillboardCollection_2;
    primitive: Billboard_2;
} | {
    collection: LabelCollection_2;
    primitive: Label_2;
} | {
    collection: PointPrimitiveCollection_2;
    primitive: PointPrimitive_2;
} | {
    collection: PolylineCollection_2;
    primitive: Polyline_2;
});

declare type EventTarget_4 = {
    id: Entity_2;
} & ({
    primitive: Primitive_2;
} | {
    primitive: Model_2;
    mesh: ModelMesh;
    node: ModelNode;
} | {
    collection: BillboardCollection_2;
    primitive: Billboard_2;
} | {
    collection: LabelCollection_2;
    primitive: Label_2;
} | {
    collection: PointPrimitiveCollection_2;
    primitive: PointPrimitive_2;
} | {
    collection: PolylineCollection_2;
    primitive: Polyline_2;
});

declare type EventTarget_5 = {
    id: Entity_2;
} & ({
    primitive: Primitive_2;
} | {
    primitive: Model_2;
    mesh: ModelMesh;
    node: ModelNode;
} | {
    collection: BillboardCollection_2;
    primitive: Billboard_2;
} | {
    collection: LabelCollection_2;
    primitive: Label_2;
} | {
    collection: PointPrimitiveCollection_2;
    primitive: PointPrimitive_2;
} | {
    collection: PolylineCollection_2;
    primitive: Polyline_2;
});

declare type EventTarget_6 = {
    id: Entity_2;
} & ({
    primitive: Primitive_2;
} | {
    primitive: Model_2;
    mesh: ModelMesh;
    node: ModelNode;
} | {
    collection: BillboardCollection_2;
    primitive: Billboard_2;
} | {
    collection: LabelCollection_2;
    primitive: Label_2;
} | {
    collection: PointPrimitiveCollection_2;
    primitive: PointPrimitive_2;
} | {
    collection: PolylineCollection_2;
    primitive: Polyline_2;
});

export declare type EventType = keyof RootEventProps;

export declare const Fog: CesiumComponentType<Fog_2, FogCesiumProps>;

declare type FogCesiumProps = PickCesiumProps<Fog_2, typeof cesiumProps_20>;

declare type FunctionKeys<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];

export declare const Fxaa: CesiumComponentType<PostProcessStage_2 | PostProcessStageComposite_2, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & {
    stages?: any[] | undefined;
}>;

export declare const GeoJsonDataSource: CesiumComponentType<GeoJsonDataSource_2, GeoJsonDataSourceProps>;

declare type GeoJsonDataSourceCesiumEvents = {
    onChange?: (GeoJsonDataSource: GeoJsonDataSource_2) => void;
    onError?: (GeoJsonDataSource: GeoJsonDataSource_2, error: any) => void;
    onLoading?: (GeoJsonDataSource: GeoJsonDataSource_2, isLoaded: boolean) => void;
};

declare type GeoJsonDataSourceCesiumProps = PickCesiumProps<GeoJsonDataSource_2, typeof cesiumProps_21>;

declare type GeoJsonDataSourceCesiumReadonlyProps = PickCesiumProps<Target_5, typeof cesiumReadonlyProps_6>;

declare type GeoJsonDataSourceOtherProps = EventProps<EventTarget_5> & {
    /** Calls when the Promise for loading data is fullfilled. */
    onLoad?: (GeoJsonDataSouce: GeoJsonDataSource_2) => void;
    data?: Parameters<InstanceType<typeof GeoJsonDataSource_2>["load"]>[0];
};

declare type GeoJsonDataSourceProps = GeoJsonDataSourceCesiumProps & GeoJsonDataSourceCesiumReadonlyProps & GeoJsonDataSourceCesiumEvents & GeoJsonDataSourceOtherProps;

export declare const Globe: CesiumComponentType<Globe_2, GlobeProps>;

declare type GlobeCesiumEvents = {
    onImageryLayersUpdate?: () => void;
    onTerrainProviderChange?: (terrainProvider: TerrainProvider) => void;
    onTileLoadProgress?: (currentLoadQueueLength: number) => void;
};

declare type GlobeCesiumProps = PickCesiumProps<Globe_2, typeof cesiumProps_22>;

declare type GlobeProps = GlobeCesiumProps & GlobeCesiumEvents;

export declare const GroundPolylinePrimitive: CesiumComponentType<GroundPolylinePrimitive_2, GroundPolylinePrimitiveProps>;

declare type GroundPolylinePrimitiveCesiumProps = PickCesiumProps<Target_6, typeof cesiumProps_23>;

declare type GroundPolylinePrimitiveCesiumReadonlyProps = PickCesiumProps<Target_6, typeof cesiumReadonlyProps_7>;

declare type GroundPolylinePrimitiveOtherProps = EventProps<{
    id: string;
    primitive: GroundPolylinePrimitive_2;
}> & {
    /** Calls when [Primitive#readyPromise](https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylinePrimitive.html#readyPromise) is fullfilled */
    onReady?: (primitive: GroundPolylinePrimitive_2) => void;
};

declare type GroundPolylinePrimitiveProps = GroundPolylinePrimitiveCesiumProps & GroundPolylinePrimitiveCesiumReadonlyProps & GroundPolylinePrimitiveOtherProps;

export declare const GroundPrimitive: CesiumComponentType<GroundPrimitive_2, GroundPrimitiveProps>;

declare type GroundPrimitiveCesiumProps = PickCesiumProps<Target_7, typeof cesiumProps_24>;

declare type GroundPrimitiveCesiumReadonlyProps = PickCesiumProps<Target_7, typeof cesiumReadonlyProps_8>;

export declare const GroundPrimitiveCollection: CesiumComponentType<PrimitiveCollection, GroundPrimitiveCollectionProps>;

declare type GroundPrimitiveCollectionCesiumProps = PickCesiumProps<PrimitiveCollection, typeof cesiumProps_25>;

declare type GroundPrimitiveCollectionOtherProps = {
    children?: ReactNode;
};

declare type GroundPrimitiveCollectionProps = GroundPrimitiveCollectionCesiumProps & GroundPrimitiveCollectionOtherProps;

declare type GroundPrimitiveOtherProps = EventProps<{
    id: string;
    primitive: GroundPrimitive_2;
}> & {
    /** Calls when [Primitive#readyPromise](https://cesium.com/docs/cesiumjs-ref-doc/GroundPrimitive.html#readyPromise) is fullfilled */
    onReady?: (primitive: GroundPrimitive_2) => void;
};

declare type GroundPrimitiveProps = GroundPrimitiveCesiumProps & GroundPrimitiveCesiumReadonlyProps & GroundPrimitiveOtherProps;

declare type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;

export declare const ImageryLayer: CesiumComponentType<ImageryLayer_2, ImageryLayerProps>;

declare type ImageryLayerCesiumProps = PickCesiumProps<Target_8, typeof cesiumProps_26>;

declare type ImageryLayerCesiumReadonlyProps = PickCesiumProps<Target_8, typeof cesiumReadonlyProps_9, "imageryProvider">;

export declare const ImageryLayerCollection: CesiumComponentType<ImageryLayerCollection_2, ImageryLayerCollectionCesiumEvents>;

declare type ImageryLayerCollectionCesiumEvents = {
    onLayerAdd?: (layer: ImageryLayer_2, index: number) => void;
    onLayerMove?: (layer: ImageryLayer_2, index: number) => void;
    onLayerRemove?: (layer: ImageryLayer_2, index: number) => void;
    onLayerShowOrHide?: (layer: ImageryLayer_2, index: number) => void;
};

declare type ImageryLayerProps = ImageryLayerCesiumProps & ImageryLayerCesiumReadonlyProps;

export declare function includes<T>(array: readonly T[] | null | undefined, value: T): boolean;

declare type InvalidProps<T extends string, K extends string, E extends {
    [e: string]: string;
} = {}> = Exclude<T, K | E[keyof E]> | Exclude<K, T | keyof E>;

export declare function isDestroyable(d: any): d is Destroyable;

export declare function isDestroyed(d: any): boolean;

export declare const KmlDataSource: CesiumComponentType<KmlDataSource_2, KmlDataSourceProps>;

declare type KmlDataSourceCesiumEvents = {
    onChange?: (kmlDataSource: KmlDataSource_2) => void;
    onError?: (kmlDataSource: KmlDataSource_2, error: any) => void;
    onLoading?: (kmlDataSource: KmlDataSource_2, isLoaded: boolean) => void;
    onRefresh?: (kmlDataSource: KmlDataSource_2, urlComponent: string) => void;
    onUnsupportedNode?: (kmlDataSource: KmlDataSource_2) => void;
};

declare type KmlDataSourceCesiumProps = PickCesiumProps<KmlDataSource_2, typeof cesiumProps_27>;

declare type KmlDataSourceCesiumReadonlyProps = PickCesiumProps<Target_9, typeof cesiumReadonlyProps_10>;

declare type KmlDataSourceOtherProps = EventProps<EventTarget_6> & {
    /** Calls when the Promise for loading data is fullfilled. */
    onLoad?: (kmlDataSouce: KmlDataSource_2) => void;
    data?: Parameters<InstanceType<typeof KmlDataSource_2>["load"]>[0];
};

declare type KmlDataSourceProps = KmlDataSourceCesiumProps & KmlDataSourceCesiumReadonlyProps & KmlDataSourceCesiumEvents & KmlDataSourceOtherProps;

export declare const Label: CesiumComponentType<Label_2, LabelProps>;

declare type LabelCesiumProps = PickCesiumProps<Label_2, typeof cesiumProps_28>;

export declare const LabelCollection: CesiumComponentType<LabelCollection_2, LabelCollectionProps>;

declare type LabelCollectionCesiumProps = PickCesiumProps<LabelCollection_2, typeof cesiumProps_29>;

declare type LabelCollectionOtherProps = {
    children?: ReactNode;
};

declare type LabelCollectionProps = LabelCollectionCesiumProps & LabelCollectionOtherProps;

export declare const LabelGraphics: CesiumComponentType<LabelGraphics_2, LabelGraphicsProps>;

declare type LabelGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};

declare type LabelGraphicsCesiumProps = PickCesiumProps<Merge<LabelGraphics_2, LabelGraphics_2.ConstructorOptions>, typeof cesiumProps_30>;

declare type LabelGraphicsProps = LabelGraphicsCesiumProps & LabelGraphicsCesiumEvents;

declare type LabelOtherProps = EventProps<{
    collection: LabelCollection_2;
    primitive: Label_2;
}>;

declare type LabelProps = LabelCesiumProps & LabelOtherProps;

export declare const LensFlareStage: CesiumComponentType<PostProcessStage_2 | PostProcessStageComposite_2, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & Props_3 & {
    stages?: any[] | undefined;
}>;

export declare type Merge<A, B> = Omit<A, keyof B> & B;

export declare type MethodOptions<T extends new (...args: any) => any & {
    [J in K]: (...args: any[]) => any;
}, K extends keyof T> = NonNullable<Parameters<InstanceType<T>[K]>[0]>;

export declare type MethodOptions2<T extends new (...args: any) => any & {
    [J in K]: (...args: any[]) => any;
}, K extends keyof T> = NonNullable<Parameters<InstanceType<T>[K]>[1]>;

declare type ModalOtherProps = EventProps<{
    id?: string;
    mesh: ModelMesh;
    node: ModelNode;
    primitive: Primitive_2;
}> & {
    /** Calls when the model is completely loaded. */
    onReady?: (model: Model_2) => void;
};

export declare const Model: CesiumComponentType<Model_2, ModelProps>;

declare type ModelCesiumProps = PickCesiumProps<Model_2, typeof cesiumProps_31>;

declare type ModelCesiumReadonlyProps = PickCesiumProps<Target_10, typeof cesiumReadonlyProps_11>;

export declare const ModelGraphics: CesiumComponentType<ModelGraphics_2, ModelGraphicsProps>;

declare type ModelGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};

declare type ModelGraphicsCesiumProps = PickCesiumProps<Target_11, typeof cesiumProps_32>;

declare type ModelGraphicsProps = ModelGraphicsCesiumProps & ModelGraphicsCesiumEvents;

declare type ModelProps = ModelCesiumProps & ModelCesiumReadonlyProps & ModalOtherProps;

export declare const Moon: CesiumComponentType<Moon_2, MoonProps>;

declare type MoonCesiumProps = PickCesiumProps<Moon_2, typeof cesiumProps_33>;

declare type MoonCesiumReadonlyProps = PickCesiumProps<Moon_2, typeof cesiumReadonlyProps_12>;

declare type MoonProps = MoonCesiumProps & MoonCesiumReadonlyProps;

export declare const NightVisionStage: CesiumComponentType<PostProcessStage_2 | PostProcessStageComposite_2, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & {
    stages?: any[] | undefined;
}>;

export declare type Options<Element, Props, State = any> = {
    name: string;
    create?: (ctx: Context, props: Props, wrapperRef: HTMLDivElement | null) => Element | [Element, State] | undefined;
    destroy?: (element: Element, ctx: Context, wrapperRef: HTMLDivElement | null, state?: State) => void;
    provide?: (element: Element, ctx: Context, state?: State) => Partial<Context>;
    update?: (element: Element, props: Props, prevProps: Props, context: Context) => void;
    cesiumProps?: readonly (keyof Props)[];
    cesiumReadonlyProps?: readonly (keyof Props)[];
    cesiumEventProps?: EventkeyMap<Element, Props>;
    otherProps?: readonly (keyof Props)[];
    setCesiumPropsAfterCreate?: boolean;
    useCommonEvent?: boolean;
    useRootEvent?: boolean;
};

declare type Options_2 = Parameters<Camera_2["flyTo"]>[0];

declare type Options_3 = StaticMethodOptions2<Camera_2, "flyToBoundingSphere">;

export declare const ParticleSystem: CesiumComponentType<ParticleSystem_2, ParticleSystemProps>;

declare type ParticleSystemCesiumEvents = {
    onComplete?: () => void;
    onUpdate?: ParticleSystem_2.updateCallback;
};

declare type ParticleSystemCesiumProps = PickCesiumProps<ParticleSystem_2, typeof cesiumProps_34>;

declare type ParticleSystemCesiumReadonlyProps = PickCesiumProps<Target_12, typeof cesiumReadonlyProps_13>;

declare type ParticleSystemProps = ParticleSystemCesiumProps & ParticleSystemCesiumReadonlyProps & ParticleSystemCesiumEvents;

export declare const PathGraphics: CesiumComponentType<PathGraphics_2, PathGraphicsProps>;

declare type PathGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};

declare type PathGraphicsCesiumProps = PickCesiumProps<Merge<PathGraphics_2, PathGraphics_2.ConstructorOptions>, typeof cesiumProps_35>;

declare type PathGraphicsProps = PathGraphicsCesiumProps & PathGraphicsCesiumEvents;

export declare function pick<T, K extends keyof T>(obj: T, keys?: K[]): Pick<T, K>;

export declare type PickCesiumProps<T, K extends readonly any[] | string, Required extends ArrayKeys<K> = never> = RemoveReadOnlyAndPartial<Pick<T, ArrayKeys<K>>, Required>;

export declare const PlaneGraphics: CesiumComponentType<PlaneGraphics_2, PlaneGraphicsProps>;

declare type PlaneGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};

declare type PlaneGraphicsCesiumProps = PickCesiumProps<Target_13, typeof cesiumProps_36>;

declare type PlaneGraphicsProps = PlaneGraphicsCesiumProps & PlaneGraphicsCesiumEvents;

export declare const PointGraphics: CesiumComponentType<PointGraphics_2, PointGraphicsProps>;

declare type PointGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};

declare type PointGraphicsCesiumProps = PickCesiumProps<Target_14, typeof cesiumProps_37>;

declare type PointGraphicsProps = PointGraphicsCesiumProps & PointGraphicsCesiumEvents;

export declare const PointPrimitive: CesiumComponentType<PointPrimitive_2, PointPrimitiveProps>;

declare type PointPrimitiveCesiumProps = PickCesiumProps<PointPrimitive_2, typeof cesiumProps_38>;

export declare const PointPrimitiveCollection: CesiumComponentType<PointPrimitiveCollection_2, PointPrimitiveCollectionProps>;

declare type PointPrimitiveCollectionCesiumProps = PickCesiumProps<PointPrimitiveCollection_2, typeof cesiumProps_39>;

declare type PointPrimitiveCollectionOtherProps = {
    children?: ReactNode;
};

declare type PointPrimitiveCollectionProps = PointPrimitiveCollectionCesiumProps & PointPrimitiveCollectionOtherProps;

declare type PointPrimitiveOtherProps = EventProps<{
    collection: PointPrimitiveCollection_2;
    id: string | undefined;
    primitive: PointPrimitive_2;
}>;

declare type PointPrimitiveProps = PointPrimitiveCesiumProps & PointPrimitiveOtherProps;

export declare const PolygonGraphics: CesiumComponentType<PolygonGraphics_2, PolygonGraphicsProps>;

declare type PolygonGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};

declare type PolygonGraphicsCesiumProps = PickCesiumProps<Target_15, typeof cesiumProps_40>;

declare type PolygonGraphicsProps = PolygonGraphicsCesiumProps & PolygonGraphicsCesiumEvents;

export declare const Polyline: CesiumComponentType<Polyline_2, PolylineProps>;

declare type PolylineCesiumProps = PickCesiumProps<Polyline_2, typeof cesiumProps_41> & {
    distanceDisplayCondition?: DistanceDisplayCondition;
    id?: any;
    loop?: boolean;
    material?: Material;
    positions?: Cartesian3[];
    show?: boolean;
    width?: number;
};

export declare const PolylineCollection: CesiumComponentType<PolylineCollection_2, PolylineCollectionProps>;

declare type PolylineCollectionCesiumProps = PickCesiumProps<PolylineCollection_2, typeof cesiumProps_42>;

declare type PolylineCollectionOtherProps = {
    children?: ReactNode;
};

declare type PolylineCollectionProps = PolylineCollectionCesiumProps & PolylineCollectionOtherProps;

export declare const PolylineGraphics: CesiumComponentType<PolylineGraphics_2, PolylineGraphicsProps>;

declare type PolylineGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};

declare type PolylineGraphicsCesiumProps = PickCesiumProps<Target_16, typeof cesiumProps_43>;

declare type PolylineGraphicsProps = PolylineGraphicsCesiumProps & PolylineGraphicsCesiumEvents;

declare type PolylineOtherProps = EventProps<{
    collection: PolylineCollection_2;
    id: string | undefined;
    primitive: Polyline_2;
}>;

declare type PolylineProps = PolylineCesiumProps & PolylineOtherProps;

export declare const PolylineVolumeGraphics: CesiumComponentType<PolylineVolumeGraphics_2, PolylineVolumeGraphicsProps>;

declare type PolylineVolumeGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};

declare type PolylineVolumeGraphicsCesiumProps = PickCesiumProps<Target_17, typeof cesiumProps_44>;

declare type PolylineVolumeGraphicsProps = PolylineVolumeGraphicsCesiumProps & PolylineVolumeGraphicsCesiumEvents;

export declare const PostProcessStage: CesiumComponentType<PostProcessStage_2, PostProcessStageProps_2>;

export declare type PostProcessStageCesiumProps = PickCesiumProps<PostProcessStage_2, typeof cesiumProps_58>;

declare type PostProcessStageCesiumProps_2 = PickCesiumProps<Target_18, typeof cesiumProps_45>;

declare type PostProcessStageCesiumReadonlyProps = PickCesiumProps<Target_18, typeof cesiumReadonlyProps_14, "fragmentShader">;

export declare const PostProcessStageComposite: CesiumComponentType<PostProcessStageComposite_2, PostProcessStageCompositeProps>;

declare type PostProcessStageCompositeCesiumProps = PickCesiumProps<Target_19, typeof cesiumProps_46>;

declare type PostProcessStageCompositeCesiumReadonlyProps = PickCesiumProps<Target_19, typeof cesiumReadonlyProps_15, "stages">;

declare type PostProcessStageCompositeProps = PostProcessStageCompositeCesiumProps & PostProcessStageCompositeCesiumReadonlyProps;

export declare type PostProcessStageProps = PostProcessStageCesiumProps;

declare type PostProcessStageProps_2 = PostProcessStageCesiumProps_2 & PostProcessStageCesiumReadonlyProps;

export declare const Primitive: CesiumComponentType<Primitive_2, PrimitiveProps>;

declare type PrimitiveCesiumProps = PickCesiumProps<Target_20, typeof cesiumProps_47>;

declare type PrimitiveCesiumReadonlyProps = PickCesiumProps<Target_20, typeof cesiumReadonlyProps_16>;

declare type PrimitiveProps = PrimitiveCesiumProps & PrimitiveCesiumReadonlyProps & PrimtiiveOtherProps;

declare type PrimtiiveOtherProps = EventProps<{
    id: string;
    primitive: Primitive_2;
}> & {
    /** Calls when [Primitive#readyPromise](https://cesium.com/docs/cesiumjs-ref-doc/Primitive.html#readyPromise) is fullfilled */
    onReady?: (primitive: Primitive_2) => void;
};

declare type Props = {
    gradations?: number;
};

declare type Props_2 = {
    brightness?: number;
};

declare type Props_3 = {
    dirtTexture?: any;
    starTexture?: any;
    intensity?: number;
    distortion?: number;
    ghostDispersal?: number;
    haloWidth?: number;
    earthRadius?: number;
};

declare type Props_4 = {
    intensity?: number;
    bias?: number;
    lengthCap?: number;
    stepSize?: number;
    frustumLength?: number;
    ambientOcclusionOnly?: boolean;
    delta?: number;
    sigma?: number;
};

declare type Props_5 = {
    contrast?: number;
    brightness?: number;
    glowOnly?: boolean;
    delta?: number;
    sigma?: number;
    stepSize?: number;
};

declare type Props_6 = {
    delta?: number;
    sigma?: number;
    stepSize?: number;
};

declare type Props_7 = {
    focalDistance?: number;
    delta?: number;
    sigma?: number;
    stepSize?: number;
};

declare type Props_8 = {
    color?: Color;
    length?: number;
};

declare type Props_9 = {
    color?: Color;
    length?: number;
};

export declare const Provider: Provider_2<any>;

declare type ReadonlyKeys<T> = {
    [P in keyof T]-?: IfEquals<{
        [Q in P]: T[P];
    }, {
        -readonly [Q in P]: T[P];
    }, never, P>;
}[keyof T];

export declare const RectangleGraphics: CesiumComponentType<RectangleGraphics_2, RectangleGraphicsProps>;

declare type RectangleGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};

declare type RectangleGraphicsCesiumProps = PickCesiumProps<Target_21, typeof cesiumProps_48>;

declare type RectangleGraphicsProps = RectangleGraphicsCesiumProps & RectangleGraphicsCesiumEvents;

declare type RemoveReadOnlyAndPartial<T, Required extends keyof T = never> = {
    -readonly [key in keyof Pick<T, Required>]: T[key];
} & {
    -readonly [key in keyof Omit<T, Required>]?: T[key];
};

export declare type RootEventProps = EventProps<RootEventTarget> & {
    onWheel?: (delta: number) => void;
};

export declare type RootEventTarget = Cesium3DTileFeature | {
    collection?: PrimitiveCollection | PointPrimitiveCollection_2 | LabelCollection_2 | BillboardCollection_2 | PolylineCollection_2;
    id?: Entity_2 | string;
    mesh?: ModelMesh;
    node?: ModelNode;
    primitive?: Primitive_2 | PointPrimitive_2 | Label_2 | Billboard_2 | Polyline_2 | TimeDynamicPointCloud_2 | GroundPolylinePrimitive_2 | GroundPrimitive_2;
};

export declare const Scene: CesiumComponentType<Scene_2, SceneProps>;

declare type SceneCesiumEvents = {
    onMorphComplete?: () => void;
    onMorphStart?: () => void;
    onPostRender?: () => void;
    onPreRender?: () => void;
    onPreUpdate?: () => void;
    onPostUpdate?: () => void;
    onRenderError?: () => void;
    onTerrainProviderChange?: () => void;
};

declare type SceneCesiumProps = PickCesiumProps<Scene_2, typeof cesiumProps_49>;

declare type SceneOtherProps = {
    children?: ReactNode;
    mode?: SceneMode;
    /** If this prop is set and when `mode` prop is changed, the scene morphs with this duration (seconds). */
    morphDuration?: number;
};

declare type SceneProps = SceneCesiumProps & SceneCesiumEvents & SceneOtherProps;

export declare const ScreenSpaceCameraController: CesiumComponentType<ScreenSpaceCameraController_2, ScreenSpaceCameraControllerCesiumProps>;

declare type ScreenSpaceCameraControllerCesiumProps = PickCesiumProps<ScreenSpaceCameraController_2, typeof cesiumProps_50>;

export declare const ScreenSpaceEvent: FC<ScreenSpaceEventProps>;

export declare const ScreenSpaceEventHandler: CesiumComponentType<ScreenSpaceEventHandler_2, ScreenSpaceEventHandlerProps>;

declare type ScreenSpaceEventHandlerProps = {
    /** If true, use the default ScreenSpaceEventHandler of the CesiumWidget instead of creating a new ScreenSpaceEventHandler object. This property cannot be changed after mounting. */
    useDefault?: boolean;
    children?: ReactNode;
};

declare type ScreenSpaceEventProps = {
    /** If empty, the event will be removed even if there is the default event. */
    action?: (e: {
        position: Cartesian2;
    } | {
        startPosition: Cartesian2;
        endPosition: Cartesian2;
    }) => void;
    modifier?: KeyboardEventModifier;
    type: ScreenSpaceEventType;
};

export declare const ShadowMap: CesiumComponentType<ShadowMap_2, ShadowMapProps>;

declare type ShadowMapCesiumProps = PickCesiumProps<Target_22, typeof cesiumProps_51>;

declare type ShadowMapCesiumReadonlyProps = PickCesiumProps<Target_22, typeof cesiumReadonlyProps_17>;

declare type ShadowMapProps = ShadowMapCesiumProps & ShadowMapCesiumReadonlyProps;

export declare function shallowEquals<T>(a1: T | null | undefined, a2: T | null | undefined): boolean;

export declare const SilhouetteStage: CesiumComponentType<PostProcessStage_2 | PostProcessStageComposite_2, {} & {
    enabled?: boolean | undefined;
    selected?: any[] | undefined;
} & Props_9 & {
    stages?: any[] | undefined;
}>;

export declare const SkyAtmosphere: CesiumComponentType<SkyAtmosphere_2, SkyAtmosphereCesiumProps>;

declare type SkyAtmosphereCesiumProps = PickCesiumProps<SkyAtmosphere_2, typeof cesiumProps_52>;

export declare const SkyBox: CesiumComponentType<SkyBox_2, SkyBoxCesiumProps>;

declare type SkyBoxCesiumProps = PickCesiumProps<Target_23, typeof cesiumProps_53>;

export declare type StaticMethodOptions<T extends {
    [J in K]: (...args: any[]) => any;
}, K extends keyof T> = NonNullable<Parameters<T[K]>[0]>;

export declare type StaticMethodOptions2<T extends {
    [J in K]: (...args: any[]) => any;
}, K extends keyof T> = NonNullable<Parameters<T[K]>[1]>;

declare type StringOnly<K> = K extends string ? K : never;

export declare const Sun: CesiumComponentType<Sun_2, SunCesiumProps>;

declare type SunCesiumProps = PickCesiumProps<Sun_2, typeof cesiumProps_54>;

declare type Target = Merge<CesiumWidget_2, ConstructorOptions2<typeof CesiumWidget_2>>;

declare type Target_10 = Merge<Merge<Model_2, ConstructorOptions<typeof Model_2>>, Parameters<typeof Model_2["fromGltf"]>[0]>;

declare type Target_11 = Merge<ModelGraphics_2, ModelGraphics_2.ConstructorOptions>;

declare type Target_12 = Merge<ParticleSystem_2, ConstructorOptions<typeof ParticleSystem_2>>;

declare type Target_13 = Merge<PlaneGraphics_2, PlaneGraphics_2.ConstructorOptions>;

declare type Target_14 = Merge<PointGraphics_2, PointGraphics_2.ConstructorOptions>;

declare type Target_15 = Merge<PolygonGraphics_2, PolygonGraphics_2.ConstructorOptions>;

declare type Target_16 = Merge<PolylineGraphics_2, PolylineGraphics_2.ConstructorOptions>;

declare type Target_17 = Merge<PolylineVolumeGraphics_2, PolylineVolumeGraphics_2.ConstructorOptions>;

declare type Target_18 = Merge<PostProcessStage_2, ConstructorOptions<typeof PostProcessStage_2>>;

declare type Target_19 = Merge<PostProcessStageComposite_2, ConstructorOptions<typeof PostProcessStageComposite_2>>;

declare type Target_2 = Merge<ClassificationPrimitive_2, ConstructorOptions<typeof ClassificationPrimitive_2>>;

declare type Target_20 = Merge<Primitive_2, ConstructorOptions<typeof Primitive_2>>;

declare type Target_21 = Merge<RectangleGraphics_2, RectangleGraphics_2.ConstructorOptions>;

declare type Target_22 = Merge<ShadowMap_2, ConstructorOptions<typeof ShadowMap_2>>;

declare type Target_23 = Merge<SkyBox_2, ConstructorOptions<typeof SkyBox_2>>;

declare type Target_24 = Merge<TimeDynamicPointCloud_2, ConstructorOptions<typeof TimeDynamicPointCloud_2>>;

declare type Target_25 = Merge<Viewer_2, Viewer_2.ConstructorOptions>;

declare type Target_26 = Merge<WallGraphics_2, WallGraphics_2.ConstructorOptions>;

declare type Target_3 = Merge<Merge<CzmlDataSource_2, CzmlDataSource_2.LoadOptions>, MethodOptions2<typeof CzmlDataSource_2, "load">>;

declare type Target_4 = Merge<EllipsoidGraphics_2, EllipsoidGraphics_2.ConstructorOptions>;

declare type Target_5 = Merge<Merge<GeoJsonDataSource_2, GeoJsonDataSource_2.LoadOptions>, MethodOptions2<typeof GeoJsonDataSource_2, "load">>;

declare type Target_6 = Merge<GroundPolylinePrimitive_2, ConstructorOptions<typeof GroundPolylinePrimitive_2>>;

declare type Target_7 = Merge<GroundPrimitive_2, ConstructorOptions<typeof GroundPrimitive_2>>;

declare type Target_8 = Merge<ImageryLayer_2, ConstructorOptions2<typeof ImageryLayer_2>>;

declare type Target_9 = Merge<Merge<KmlDataSource_2, KmlDataSource_2.LoadOptions>, MethodOptions2<typeof KmlDataSource_2, "load">>;

export declare const TimeDynamicPointCloud: CesiumComponentType<TimeDynamicPointCloud_2, TimeDynamicPointCloudProps>;

declare type TimeDynamicPointCloudCesiumEvents = {
    onFrameChange?: (pointCloud: TimeDynamicPointCloud_2) => void;
};

declare type TimeDynamicPointCloudCesiumProps = PickCesiumProps<Target_24, typeof cesiumProps_55, "intervals">;

declare type TimeDynamicPointCloudCesiumReadonlyProps = PickCesiumProps<Target_24, typeof cesiumReadonlyProps_18>;

declare type TimeDynamicPointCloudOtherProps = EventProps<{
    primitive?: TimeDynamicPointCloud_2;
}> & {
    /** Calls when the point cloud is completely loaded. */
    onReady?: (pointCloud: TimeDynamicPointCloud_2) => void;
};

declare type TimeDynamicPointCloudProps = TimeDynamicPointCloudCesiumProps & TimeDynamicPointCloudCesiumReadonlyProps & TimeDynamicPointCloudCesiumEvents & TimeDynamicPointCloudOtherProps;

export declare type UnionMerge<A, B> = Omit<A, keyof A & keyof B> & Omit<B, keyof A & keyof B> & {
    [K in keyof A & keyof B]: A[K] | B[K];
};

export declare type UnusedCesiumProps<T, K, E extends {
    [e: string]: string;
} = {}, I extends string = never> = Exclude<InvalidProps<CesiumPureProps<T>, ArrayKeys<keyof K>, E>, I>;

export declare const useCesium: () => Context_2;

export declare const useCesiumComponent: <Element_1, Props, State = any>({ name, create, destroy, provide, update, cesiumReadonlyProps, cesiumEventProps, otherProps, setCesiumPropsAfterCreate, useCommonEvent, useRootEvent, }: Options<Element_1, Props, State>, props: Props, ref: any) => [Partial<Context> | undefined, boolean, RefObject<HTMLDivElement>];

export declare type ValueOf<T> = T[keyof T];

export declare const Viewer: CesiumComponentType<Viewer_2, ViewerProps>;

declare type ViewerCesiumEvents = {
    onSelectedEntityChange?: () => void;
    onTrackedEntityChange?: () => void;
};

declare type ViewerCesiumProps = PickCesiumProps<Viewer_2, typeof cesiumProps_56>;

declare type ViewerCesiumReadonlyProps = Merge<PickCesiumProps<Target_25, typeof cesiumReadonlyProps_19>, {
    /** If false, the default imagery layer will be removed. */
    imageryProvider?: ImageryProvider | false;
}>;

declare type ViewerOtherProps = RootEventProps & {
    /** Applied to outer `div` element */
    className?: string;
    /** Applied to outer `div` element */
    id?: string;
    /** Applied to outer `div` element */
    style?: CSSProperties;
    /** Same as `style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}` if it is true. */
    full?: boolean;
    /** All props applied to outer `div` element */
    containerProps?: any;
    /** It is applied in order from the top to Viewer as `viewer.extend(XXX);` after the viewer is mounted. Nothing happens even it is updated by itself. */
    extend?: Viewer_2.ViewerMixin[] | Viewer_2.ViewerMixin;
    children?: ReactNode;
};

declare type ViewerProps = ViewerCesiumProps & ViewerCesiumReadonlyProps & ViewerCesiumEvents & ViewerOtherProps;

export declare const WallGraphics: CesiumComponentType<WallGraphics_2, WallGraphicsProps>;

declare type WallGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};

declare type WallGraphicsCesiumProps = PickCesiumProps<Target_26, typeof cesiumProps_57>;

declare type WallGraphicsProps = WallGraphicsCesiumProps & WallGraphicsCesiumEvents;

export declare const withCesium: <P, C>(Component: WithContextType<P, C>) => ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<WithContextType<P, C>>>;

export declare type WithContextProps<P, C> = P & CesiumProp<C>;

export declare type WithContextType<P, C> = ComponentType<WithContextProps<P, C>>;

export { }
