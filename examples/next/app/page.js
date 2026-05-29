"use client";

import dynamic from "next/dynamic";

// Cesium runs only in the browser, so disable SSR.
// `ssr: false` is only allowed inside a Client Component in the App Router.
const Cesium = dynamic(() => import("./Cesium"), { ssr: false });

export default function Page() {
  return <Cesium />;
}
