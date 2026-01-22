/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.137.0
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

import{a as f}from"./chunk-LZFRP67X.js";import"./chunk-XGRCBY5T.js";import"./chunk-33IJ66H2.js";import{a as u}from"./chunk-ITDFUUP5.js";import"./chunk-VSMOUEKV.js";import"./chunk-AZKYNZOH.js";import"./chunk-DAX2P4DI.js";import"./chunk-SI3KZUTO.js";import"./chunk-QM7HI6IF.js";import"./chunk-SPC72PTY.js";import"./chunk-HVWI7BO6.js";import"./chunk-KSX6TRAS.js";import"./chunk-BNHFHP3L.js";import"./chunk-4UHVCH4T.js";import"./chunk-4NDD6KRQ.js";import"./chunk-5ELDAYCN.js";import"./chunk-N6BI774S.js";import"./chunk-TI35VBH7.js";import"./chunk-6WLI3422.js";import"./chunk-ICY67TC6.js";import"./chunk-G2EMNOST.js";import"./chunk-4VFKVGYI.js";import"./chunk-3WJNS2B6.js";import"./chunk-XCN226AA.js";function h(c,d){let e=f.upsampleMesh(c),t=e.vertices.buffer,i=e.indices.buffer,s=e.westIndicesSouthToNorth.buffer,o=e.southIndicesEastToWest.buffer,r=e.eastIndicesNorthToSouth.buffer,n=e.northIndicesWestToEast.buffer;return d.push(t,i,s,o,r,n),{verticesBuffer:t,indicesBuffer:i,vertexCountWithoutSkirts:e.vertexCountWithoutSkirts,indexCountWithoutSkirts:e.indexCountWithoutSkirts,encoding:e.encoding,westIndicesBuffer:s,southIndicesBuffer:o,eastIndicesBuffer:r,northIndicesBuffer:n,minimumHeight:e.minimumHeight,maximumHeight:e.maximumHeight,boundingSphere:e.boundingSphere3D,orientedBoundingBox:e.orientedBoundingBox,horizonOcclusionPoint:e.horizonOcclusionPoint}}var I=u(h);export{I as default};
