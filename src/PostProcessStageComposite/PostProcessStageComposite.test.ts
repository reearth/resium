import {
  PostProcessStage,
  PostProcessStageCollection,
  PostProcessStageComposite as CesiumPostProcessStageComposite,
} from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { describe, expect, it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import { removeCompositeWithoutDestroyingChildren } from "./PostProcessStageComposite";
import type { PostProcessStageCompositeProps, Target } from "./PostProcessStageComposite";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Target, PostProcessStageCompositeProps, {}, IgnoredProps>;
type IgnoredProps = "uniforms"; // uniforms is actually used

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});

const makeStage = (name: string) =>
  new PostProcessStage({
    fragmentShader: "void main(){ gl_FragColor = vec4(1.0); }",
    name,
  });

describe("removeCompositeWithoutDestroyingChildren", () => {
  it("does not destroy user-owned child stages on unmount (#602 class)", () => {
    const a = makeStage("childA");
    const b = makeStage("childB");
    const stages = [a, b];
    const composite = new CesiumPostProcessStageComposite({ stages, name: "comp" });
    const collection = new PostProcessStageCollection();
    collection.add(composite);

    removeCompositeWithoutDestroyingChildren(composite, collection as any);

    // The composite resium created is destroyed...
    expect(composite.isDestroyed()).toBe(true);
    // ...but the user-owned child stages survive.
    expect(a.isDestroyed()).toBe(false);
    expect(b.isDestroyed()).toBe(false);
    // The user's `stages` array is not mutated.
    expect(stages).toEqual([a, b]);

    a.destroy();
    b.destroy();
  });

  it("frees collection state so the same children can be re-added (StrictMode remount)", () => {
    const a = makeStage("childA");
    const b = makeStage("childB");
    const collection = new PostProcessStageCollection();

    const first = new CesiumPostProcessStageComposite({ stages: [a, b], name: "comp" });
    collection.add(first);
    removeCompositeWithoutDestroyingChildren(first, collection as any);

    // The child names must be freed from the collection's `_stageNames` map,
    // otherwise re-adding the same instances throws "already been added".
    const stageNames = (collection as any)._stageNames as Record<string, unknown>;
    expect(stageNames.childA).toBeUndefined();
    expect(stageNames.childB).toBeUndefined();
    expect(stageNames.comp).toBeUndefined();

    // Remount: a new composite wrapping the SAME child instances must add cleanly
    // (Cesium's add throws on duplicate names / already-registered stages).
    const second = new CesiumPostProcessStageComposite({ stages: [a, b], name: "comp" });
    expect(() => collection.add(second)).not.toThrow();
    expect(collection.contains(second)).toBe(true);

    removeCompositeWithoutDestroyingChildren(second, collection as any);
    a.destroy();
    b.destroy();
  });

  it("destroys the composite even when there is no collection", () => {
    const a = makeStage("childA");
    const composite = new CesiumPostProcessStageComposite({ stages: [a], name: "comp" });

    removeCompositeWithoutDestroyingChildren(composite, undefined);

    expect(composite.isDestroyed()).toBe(true);
    expect(a.isDestroyed()).toBe(false);
    a.destroy();
  });
});
