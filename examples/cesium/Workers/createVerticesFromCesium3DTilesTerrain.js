/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.142.0
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

import{a as u}from"./chunk-55KTRCCC.js";import"./chunk-WC7WZIXH.js";import"./chunk-R5DFAOJG.js";import{a as f}from"./chunk-FCRW2AGG.js";import"./chunk-RI3TXBVT.js";import"./chunk-GS4ZGDWD.js";import"./chunk-FYQCPFNB.js";import"./chunk-C4NHPSO2.js";import"./chunk-WTIPXHS3.js";import"./chunk-H6AHPUMX.js";import"./chunk-FMWRN5G2.js";import"./chunk-RU2T2U4O.js";import"./chunk-XEBZTQHW.js";import"./chunk-6LZUEMFX.js";import"./chunk-AZCCS55A.js";import"./chunk-V74K6IQF.js";import"./chunk-5HZ2G332.js";import"./chunk-LKQXJXNV.js";import"./chunk-VXS2FTO4.js";import"./chunk-ZQTDDQLY.js";import"./chunk-U4VWQPTS.js";import"./chunk-GZABERXA.js";import"./chunk-WM6AKY6B.js";import"./chunk-6K4BWAPV.js";function a(c,d){return u.createMesh(c).then(function(e){let t=e.vertices.buffer,r=e.indices.buffer,s=e.westIndicesSouthToNorth.buffer,o=e.southIndicesEastToWest.buffer,i=e.eastIndicesNorthToSouth.buffer,n=e.northIndicesWestToEast.buffer;return d.push(t,r,s,o,i,n),{verticesBuffer:t,indicesBuffer:r,vertexCountWithoutSkirts:e.vertexCountWithoutSkirts,indexCountWithoutSkirts:e.indexCountWithoutSkirts,encoding:e.encoding,westIndicesBuffer:s,southIndicesBuffer:o,eastIndicesBuffer:i,northIndicesBuffer:n}})}var T=f(a);export{T as default};
