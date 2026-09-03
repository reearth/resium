/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.145.0
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{a as f}from"./chunk-WSA4IOQR.js";import"./chunk-CXF7IXM3.js";import"./chunk-3UWTFT5C.js";import{a as u}from"./chunk-A7XN2WE4.js";import"./chunk-QZXBZP7L.js";import"./chunk-HXD4BXHU.js";import"./chunk-KRWMVIB7.js";import"./chunk-C2BJQ5BV.js";import"./chunk-RMA3XZED.js";import"./chunk-U6RTDYNE.js";import"./chunk-NVY6OTQX.js";import"./chunk-2X5O55FT.js";import"./chunk-GME3JRJ5.js";import"./chunk-H3LK4GAX.js";import"./chunk-NQ23OHF7.js";import"./chunk-YO6NOGYA.js";import"./chunk-6ZKGZZOJ.js";import"./chunk-7VKG2T2K.js";import"./chunk-PORF43EC.js";import"./chunk-LK26B6IJ.js";import"./chunk-2Z5ROPWA.js";import"./chunk-KGDHXBGK.js";import"./chunk-SLUQ566D.js";import"./chunk-K7WHNMF7.js";function h(c,d){let e=f.upsampleMesh(c),t=e.vertices.buffer,i=e.indices.buffer,s=e.westIndicesSouthToNorth.buffer,o=e.southIndicesEastToWest.buffer,r=e.eastIndicesNorthToSouth.buffer,n=e.northIndicesWestToEast.buffer;return d.push(t,i,s,o,r,n),{verticesBuffer:t,indicesBuffer:i,vertexCountWithoutSkirts:e.vertexCountWithoutSkirts,indexCountWithoutSkirts:e.indexCountWithoutSkirts,encoding:e.encoding,westIndicesBuffer:s,southIndicesBuffer:o,eastIndicesBuffer:r,northIndicesBuffer:n,minimumHeight:e.minimumHeight,maximumHeight:e.maximumHeight,boundingSphere:e.boundingSphere3D,orientedBoundingBox:e.orientedBoundingBox,horizonOcclusionPoint:e.horizonOcclusionPoint}}var I=u(h);export{I as default};
