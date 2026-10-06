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

import{Fa as a}from"./chunk-GWE2HRAQ.js";function i(n){async function t({data:s}){let o=[],r={id:s.id,result:void 0,error:void 0};self.CESIUM_BASE_URL=s.baseUrl;try{let e=await n(s.parameters,o);r.result=e}catch(e){e instanceof Error?r.error={name:e.name,message:e.message,stack:e.stack}:r.error=e}s.canTransferArrayBuffer||(o.length=0);try{postMessage(r,o)}catch(e){r.result=void 0,r.error=`postMessage failed with error: ${a(e)}
  with responseMessage: ${JSON.stringify(r)}`,postMessage(r)}}function f(s){postMessage({id:s.data?.id,error:`postMessage failed with error: ${JSON.stringify(s)}`})}return self.onmessage=t,self.onmessageerror=f,self}var l=i;export{l as a};
