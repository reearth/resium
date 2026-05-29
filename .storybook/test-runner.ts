import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

import type { TestRunnerConfig } from "@storybook/test-runner";
import { getStoryContext } from "@storybook/test-runner";

// A fixed viewport keeps the Cesium canvas (and thus the screenshot) a stable
// size across machines and runs.
const VIEWPORT = { width: 1024, height: 768 };

// reg-suit's `actualDir`: the screenshots captured here become the "actual"
// images that reg-suit compares against the base commit's snapshot and then
// publishes to GitHub Releases. Comparison and history are reg-suit's job now;
// this hook only produces the raw PNGs.
const SCREENSHOT_DIR = "__screenshots__";

const config: TestRunnerConfig = {
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

    await mkdir(SCREENSHOT_DIR, { recursive: true });
    await writeFile(join(SCREENSHOT_DIR, `${context.id}.png`), image);
  },
};

export default config;

declare global {
  interface Window {
    __VRT_READY__?: boolean;
  }
}
