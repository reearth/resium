/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.143.0
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

import{a as u}from"./chunk-E7EKLP3B.js";import"./chunk-W5OEMTMB.js";import"./chunk-PYMQNHFO.js";import{a as f}from"./chunk-BKIYVF74.js";import"./chunk-LN2UT4R3.js";import"./chunk-P5EFSOUF.js";import"./chunk-G72JFEXW.js";import"./chunk-BDWA46XV.js";import"./chunk-5VFNV3LW.js";import"./chunk-SRA5MBUT.js";import"./chunk-5AAMOBJK.js";import"./chunk-4WQ4VT5S.js";import"./chunk-D3TVNJ6W.js";import"./chunk-3VUCSHGU.js";import"./chunk-LNJEJFV5.js";import"./chunk-BPABSUDY.js";import"./chunk-ATKJRN2G.js";import"./chunk-RDX4QSUS.js";import"./chunk-G3GDHHWO.js";import"./chunk-2AIOP76V.js";import"./chunk-IAE6APK2.js";import"./chunk-3E7FIXV7.js";import"./chunk-NZBME2JK.js";import"./chunk-6DLS2UKD.js";function a(c,d){return u.createMesh(c).then(function(e){let t=e.vertices.buffer,r=e.indices.buffer,s=e.westIndicesSouthToNorth.buffer,o=e.southIndicesEastToWest.buffer,i=e.eastIndicesNorthToSouth.buffer,n=e.northIndicesWestToEast.buffer;return d.push(t,r,s,o,i,n),{verticesBuffer:t,indicesBuffer:r,vertexCountWithoutSkirts:e.vertexCountWithoutSkirts,indexCountWithoutSkirts:e.indexCountWithoutSkirts,encoding:e.encoding,westIndicesBuffer:s,southIndicesBuffer:o,eastIndicesBuffer:i,northIndicesBuffer:n}})}var T=f(a);export{T as default};
