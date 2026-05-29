import { PostProcessStageComposite as CesiumPostProcessStageComposite } from "cesium";

import type { PickCesiumProps, ConstructorOptions, Merge } from "../core";
import { createCesiumComponent } from "../core";

/*
@summary
`PostProcessStagComposite` can add a post processing stages to the scene.

Bult-in PostProcessStageComposite components are available with additional Cesium properties:

| Component | Property | Type |
|---|---|---|
| AmbientOcclusion | intensity | number |
| | bias | number |
| | lengthCap | number |
| | stepSize | number |
| | frustumLength | number |
| | ambientOcclusionOnly | boolean |
| | delta | number |
| | sigma | number |
| Bloom | contrast | number |
| | brightness | number |
| | glowOnly | boolean |
| | delta | number |
| | sigma | number |
| | stepSize | number |
| DepthOfFieldStage | focalDistance | number |
| | delta | number |
| | sigma | number |
| | stepSize | number |
| EdgeDetectionStage | color | [Color](https://cesium.com/docs/cesiumjs-ref-doc/Color.html) |
| | length | number ||
| NightVisionStage | - | - |
| SilhouetteStage | color | [Color](https://cesium.com/docs/cesiumjs-ref-doc/Color.html) |
| | length | number |

Note: `AmbientOcclusion` and `Bloom` components can not be used multi time for each components, as it refers to the single post process stage of the scene.

They can be imported and used normally:

```jsx
import { AmbientOcclusion, Bloom } from "resium";

<Viewer>
  <AmbientOcclusion />
  <Bloom />
</Viewer>
```
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

export type Target = Merge<
  CesiumPostProcessStageComposite,
  ConstructorOptions<typeof CesiumPostProcessStageComposite>
>;

export type PostProcessStageCompositeCesiumProps = PickCesiumProps<Target, typeof cesiumProps>;

export type PostProcessStageCompositeCesiumReadonlyProps = PickCesiumProps<
  Target,
  typeof cesiumReadonlyProps,
  "stages"
>;

export type PostProcessStageCompositeProps = PostProcessStageCompositeCesiumProps &
  PostProcessStageCompositeCesiumReadonlyProps;

const cesiumProps = ["enabled", "selected"] as const;

const cesiumReadonlyProps = ["inputPreviousStageTexture", "name", "stages", "uniforms"] as const;

type CompositeInternals = { _stages?: unknown[] };
type StageInternals = { name?: string; _textureCache?: unknown; _index?: unknown };
type CollectionInternals = {
  remove(stage: CesiumPostProcessStageComposite): boolean;
  _stageNames?: Record<string, unknown>;
};

/**
 * Removes a resium-owned `PostProcessStageComposite` from the scene's
 * `PostProcessStageCollection` and destroys it WITHOUT destroying the
 * user-supplied child `PostProcessStage` instances passed via the `stages` prop.
 *
 * resium creates and owns the composite, but it does NOT own the child stages.
 * Both `PostProcessStageCollection.remove(stage)` and
 * `PostProcessStageComposite.destroy()` unconditionally destroy every child
 * stage (Cesium offers no `destroy=false` flag). Under React StrictMode
 * (mount -> unmount -> remount), the throwaway first unmount would destroy the
 * user-owned stages, so the real remount reuses already-destroyed stages and
 * throws "This object was destroyed, i.e., destroy() was called." (same class
 * of bug as #602).
 *
 * The composite stores the user's stages in its internal `_stages` array, which
 * is the SAME array reference passed in props (`this._stages = options.stages`).
 * When the collection adds the composite, `add` walks into the children and
 * registers each one in the collection's `_stageNames` map and stamps
 * `child._textureCache`. We:
 *  1. snapshot the children and replace the composite's `_stages` with a fresh
 *     empty array (NOT emptying the user's array in place) so neither `remove`
 *     nor `destroy` cascades into the children;
 *  2. `remove` the (now child-less) composite, which frees the composite's own
 *     name and slot;
 *  3. reverse the per-child registration that `add` performed (delete the name
 *     entry and clear `_textureCache`/`_index`), leaving the user-owned stages
 *     intact and re-addable on the next mount.
 *
 * @internal exported for testing.
 */
export const removeCompositeWithoutDestroyingChildren = (
  element: CesiumPostProcessStageComposite,
  collection: CollectionInternals | undefined,
): void => {
  const internal = element as unknown as CompositeInternals;
  const children = Array.isArray(internal._stages) ? internal._stages.slice() : [];
  // Replace (do not mutate) the array: `_stages` aliases the user's `stages`
  // prop array, so emptying it in place would corrupt the caller's array.
  internal._stages = [];

  if (collection) {
    collection.remove(element);
    const stageNames = collection._stageNames;
    for (const child of children) {
      const c = child as StageInternals;
      if (stageNames && typeof c.name === "string") {
        Reflect.deleteProperty(stageNames, c.name);
      }
      c._textureCache = undefined;
      c._index = undefined;
    }
  }

  if (!element.isDestroyed()) {
    element.destroy();
  }
};

export const PostProcessStageComposite = createCesiumComponent<
  CesiumPostProcessStageComposite,
  PostProcessStageCompositeProps
>({
  name: "PostProcessStageComposite",
  create(context, props) {
    if (!context.scene) return;
    const element = new CesiumPostProcessStageComposite(props);
    if (typeof props.enabled === "boolean") {
      element.enabled = props.enabled;
    }
    if (props.selected) {
      element.selected = props.selected;
    }
    context.scene.postProcessStages.add(element);
    return element;
  },
  destroy(element, context) {
    const collection =
      context.scene && !context.scene.isDestroyed()
        ? (context.scene.postProcessStages as unknown as CollectionInternals)
        : undefined;
    removeCompositeWithoutDestroyingChildren(element, collection);
  },
  cesiumProps,
  cesiumReadonlyProps,
});

export default PostProcessStageComposite;
