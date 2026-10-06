/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.146.0
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

import{a as D}from"./chunk-YYTML7GF.js";import{a as m}from"./chunk-J6FR5PFB.js";import{K as I,d as P,g as d,m as w,q as A}from"./chunk-GWE2HRAQ.js";var b=P(D(),1),r;function F(t,n){let o=t.num_points(),a=t.num_faces(),i=new r.DracoInt32Array,e=a*3,s=I.createTypedArray(o,e),u=0;for(let c=0;c<a;++c)n.GetFaceFromMesh(t,c,i),s[u+0]=i.GetValue(0),s[u+1]=i.GetValue(1),s[u+2]=i.GetValue(2),u+=3;return r.destroy(i),{typedArray:s,numberOfIndices:e}}function U(t,n,o,a,i){let e,s;a.quantizationBits<=8?(s=new r.DracoUInt8Array,e=new Uint8Array(i),n.GetAttributeUInt8ForAllPoints(t,o,s)):a.quantizationBits<=16?(s=new r.DracoUInt16Array,e=new Uint16Array(i),n.GetAttributeUInt16ForAllPoints(t,o,s)):(s=new r.DracoFloat32Array,e=new Float32Array(i),n.GetAttributeFloatForAllPoints(t,o,s));for(let u=0;u<i;++u)e[u]=s.GetValue(u);return r.destroy(s),e}function k(t,n,o,a){let i,e;switch(o.data_type()){case 1:case 11:e=new r.DracoInt8Array,i=new Int8Array(a),n.GetAttributeInt8ForAllPoints(t,o,e);break;case 2:e=new r.DracoUInt8Array,i=new Uint8Array(a),n.GetAttributeUInt8ForAllPoints(t,o,e);break;case 3:e=new r.DracoInt16Array,i=new Int16Array(a),n.GetAttributeInt16ForAllPoints(t,o,e);break;case 4:e=new r.DracoUInt16Array,i=new Uint16Array(a),n.GetAttributeUInt16ForAllPoints(t,o,e);break;case 5:case 7:e=new r.DracoInt32Array,i=new Int32Array(a),n.GetAttributeInt32ForAllPoints(t,o,e);break;case 6:case 8:e=new r.DracoUInt32Array,i=new Uint32Array(a),n.GetAttributeUInt32ForAllPoints(t,o,e);break;case 9:case 10:e=new r.DracoFloat32Array,i=new Float32Array(a),n.GetAttributeFloatForAllPoints(t,o,e);break}for(let s=0;s<a;++s)i[s]=e.GetValue(s);return r.destroy(e),i}function p(t,n,o){let a=t.num_points(),i=o.num_components(),e,s=new r.AttributeQuantizationTransform;if(s.InitFromAttribute(o)){let f=new Array(i);for(let y=0;y<i;++y)f[y]=s.min_value(y);e={quantizationBits:s.quantization_bits(),minValues:f,range:s.range(),octEncoded:!1}}r.destroy(s),s=new r.AttributeOctahedronTransform,s.InitFromAttribute(o)&&(e={quantizationBits:s.quantization_bits(),octEncoded:!0}),r.destroy(s);let u=a*i,c;d(e)?c=U(t,n,o,e,u):c=k(t,n,o,u);let l=w.fromTypedArray(c);return{array:c,data:{componentsPerAttribute:i,componentDatatype:l,byteOffset:o.byte_offset(),byteStride:w.getSizeInBytes(l)*i,normalized:o.normalized(),quantization:e}}}function O(t){let n=new r.Decoder;t.dequantizeInShader&&(n.SkipAttributeTransform(r.POSITION),n.SkipAttributeTransform(r.NORMAL));let o=new r.DecoderBuffer;if(o.Init(t.buffer,t.buffer.length),n.GetEncodedGeometryType(o)!==r.POINT_CLOUD)throw new A("Draco geometry type must be POINT_CLOUD.");let i=new r.PointCloud,e=n.DecodeBufferToPointCloud(o,i);if(!e.ok()||i.ptr===0)throw new A(`Error decoding draco point cloud: ${e.error_msg()}`);r.destroy(o);let s={},u=t.properties;for(let c in u)if(u.hasOwnProperty(c)){let l;if(c==="POSITION"||c==="NORMAL"){let f=n.GetAttributeId(i,r[c]);l=n.GetAttribute(i,f)}else{let f=u[c];l=n.GetAttributeByUniqueId(i,f)}s[c]=p(i,n,l)}return r.destroy(i),r.destroy(n),s}function g(t){let n=new r.Decoder;if(t.dequantizeInShader)for(let f=0;f<t.attributesToSkipTransform.length;++f)n.SkipAttributeTransform(r[t.attributesToSkipTransform[f]]);let o=t.bufferView,a=new r.DecoderBuffer;if(a.Init(t.array,o.byteLength),n.GetEncodedGeometryType(a)!==r.TRIANGULAR_MESH)throw new A("Unsupported draco mesh geometry type.");let e=new r.Mesh,s=n.DecodeBufferToMesh(a,e);if(!s.ok()||e.ptr===0)throw new A(`Error decoding draco mesh geometry: ${s.error_msg()}`);r.destroy(a);let u={},c=t.compressedAttributes;for(let f in c)if(c.hasOwnProperty(f)){let y=c[f],T=n.GetAttributeByUniqueId(e,y);u[f]=p(e,n,T)}let l={indexArray:F(e,n),attributeData:u};return r.destroy(e),r.destroy(n),l}async function z(t,n){return d(t.bufferView)?g(t):O(t)}async function G(t,n){let o=t.webAssemblyConfig;return d(o)&&d(o.wasmBinaryFile)?r=await(0,b.default)(o):r=await(0,b.default)(),!0}async function S(t,n){let o=t.webAssemblyConfig;return d(o)?G(t,n):z(t,n)}var C=m(S);export{C as default};
