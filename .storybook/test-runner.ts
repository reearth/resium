import type { TestRunnerConfig } from "@storybook/test-runner";
import { getStoryContext } from "@storybook/test-runner";
import { toMatchImageSnapshot } from "jest-image-snapshot";

// A fixed viewport keeps the Cesium canvas (and thus the screenshot) a stable
// size across machines and runs.
const VIEWPORT = { width: 1024, height: 768 };

const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },

  async preVisit(page) {
    await page.setViewportSize(VIEWPORT);
  },

  async postVisit(page, context) {
    const storyContext = await getStoryContext(page, context);
    if (!storyContext.tags?.includes("vrt")) return;

    // The deterministic VRT viewer flips this once tiles are loaded and the
    // scene has rendered a few stable frames.
    await page.waitForFunction(() => window.__VRT_READY__ === true, undefined, {
      timeout: 60_000,
    });

    const canvas = page.locator("canvas").first();
    const image = await canvas.screenshot();

    expect(image).toMatchImageSnapshot({
      customSnapshotsDir: "vrt/__image_snapshots__",
      customDiffDir: "vrt/__diff_output__",
      customReceivedDir: "vrt/__received_output__",
      customSnapshotIdentifier: context.id,
      failureThreshold: 0.01,
      failureThresholdType: "percent",
    });
  },
};

export default config;

declare global {
  interface Window {
    __VRT_READY__?: boolean;
  }
}
