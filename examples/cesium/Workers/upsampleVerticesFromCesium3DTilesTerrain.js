/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.140.0
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

import{a as f}from"./chunk-BYLCY7GP.js";import"./chunk-2MJIIVP4.js";import"./chunk-E3JOOS3S.js";import{a as u}from"./chunk-XFIQ5DEQ.js";import"./chunk-TJ4XLGBQ.js";import"./chunk-FC4ZZ65J.js";import"./chunk-SQMIIXB7.js";import"./chunk-IX4VMHEV.js";import"./chunk-7TVGLKQF.js";import"./chunk-CTHM3W6I.js";import"./chunk-5TJMAQVL.js";import"./chunk-W37FE5GR.js";import"./chunk-2TE5NTVD.js";import"./chunk-CUUSNIVQ.js";import"./chunk-BXMEEOCS.js";import"./chunk-23ZQ2IVV.js";import"./chunk-XUSCFAVF.js";import"./chunk-BTSYJ5XU.js";import"./chunk-EDVBB7SS.js";import"./chunk-FFBVWF2L.js";import"./chunk-QKUIYMGC.js";import"./chunk-WBOV35NL.js";import"./chunk-TNSUQXWK.js";import"./chunk-ILRYTWTP.js";function h(c,d){let e=f.upsampleMesh(c),t=e.vertices.buffer,i=e.indices.buffer,s=e.westIndicesSouthToNorth.buffer,o=e.southIndicesEastToWest.buffer,r=e.eastIndicesNorthToSouth.buffer,n=e.northIndicesWestToEast.buffer;return d.push(t,i,s,o,r,n),{verticesBuffer:t,indicesBuffer:i,vertexCountWithoutSkirts:e.vertexCountWithoutSkirts,indexCountWithoutSkirts:e.indexCountWithoutSkirts,encoding:e.encoding,westIndicesBuffer:s,southIndicesBuffer:o,eastIndicesBuffer:r,northIndicesBuffer:n,minimumHeight:e.minimumHeight,maximumHeight:e.maximumHeight,boundingSphere:e.boundingSphere3D,orientedBoundingBox:e.orientedBoundingBox,horizonOcclusionPoint:e.horizonOcclusionPoint}}var I=u(h);export{I as default};
