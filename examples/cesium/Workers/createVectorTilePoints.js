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

import{a as x}from"./chunk-J6FR5PFB.js";import{j as r,l,s as w,u,v as m,z as a}from"./chunk-GWE2HRAQ.js";var p=32767,F=new u,L=new l,b=new a,y=new m,i={min:void 0,max:void 0};function V(t){t=new Float64Array(t);let o=0;i.min=t[o++],i.max=t[o++],a.unpack(t,o,b),o+=a.packedLength,m.unpack(t,o,y)}function z(t,o){let e=new Uint16Array(t.positions);V(t.packedBuffer);let c=b,C=y,A=i.min,M=i.max,n=e.length/3,g=e.subarray(0,n),d=e.subarray(n,2*n),f=e.subarray(2*n,3*n);w.zigZagDeltaDecode(g,d,f);let h=new Float64Array(e.length);for(let s=0;s<n;++s){let P=g[s],k=d[s],E=f[s],H=r.lerp(c.west,c.east,P/p),R=r.lerp(c.south,c.north,k/p),T=r.lerp(A,M,E/p),v=u.fromRadians(H,R,T,F),D=C.cartographicToCartesian(v,L);l.pack(D,h,s*3)}return o.push(h.buffer),{positions:h.buffer}}var U=x(z);export{U as default};
