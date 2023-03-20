!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let n;const s=new Uint8Array(16);function i(){if(!n&&(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(s)}const r=[];for(let t=0;t<256;++t)r.push((t+256).toString(16).slice(1));function o(t,e=0){return(r[t[e+0]]+r[t[e+1]]+r[t[e+2]]+r[t[e+3]]+"-"+r[t[e+4]]+r[t[e+5]]+"-"+r[t[e+6]]+r[t[e+7]]+"-"+r[t[e+8]]+r[t[e+9]]+"-"+r[t[e+10]]+r[t[e+11]]+r[t[e+12]]+r[t[e+13]]+r[t[e+14]]+r[t[e+15]]).toLowerCase()}var a=function(t,n,s){if(e.randomUUID&&!n&&!t)return e.randomUUID();const r=(t=t||{}).random||(t.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){s=s||0;for(let t=0;t<16;++t)n[s+t]=r[t];return n}return o(r)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var c,u,h,l=c={};function d(){throw new Error("setTimeout has not been defined")}function f(){throw new Error("clearTimeout has not been defined")}function p(t){if(u===setTimeout)return setTimeout(t,0);if((u===d||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}!function(){try{u="function"==typeof setTimeout?setTimeout:d}catch(t){u=d}try{h="function"==typeof clearTimeout?clearTimeout:f}catch(t){h=f}}();var g,m=[],y=!1,v=-1;function w(){y&&g&&(y=!1,g.length?m=g.concat(m):v=-1,m.length&&E())}function E(){if(!y){var t=p(w);y=!0;for(var e=m.length;e;){for(g=m,m=[];++v<e;)g&&g[v].run();v=-1,e=m.length}g=null,y=!1,function(t){if(h===clearTimeout)return clearTimeout(t);if((h===f||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}(t)}}function T(t,e){this.fun=t,this.array=e}function b(){}l.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new T(t,e)),1!==m.length||y||p(E)},T.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=b,l.addListener=b,l.once=b,l.off=b,l.removeListener=b,l.removeAllListeners=b,l.emit=b,l.prependListener=b,l.prependOnceListener=b,l.listeners=function(t){return[]},l.binding=function(t){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(t){throw new Error("process.chdir is not supported")},l.umask=function(){return 0};const I=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++s)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const i=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,h=(3&i)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(l=64)),s.push(n[u],n[h],n[l],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(I(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(r>>10)),e[s++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==r||null==o||null==a)throw new S;const c=i<<2|r>>4;if(s.push(c),64!==o){const t=r<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const A=function(t){return function(t){const e=I(t);return _.encodeByteArray(e,!0)}(t).replace(/\./g,"")},C=function(t){try{return _.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const D=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,N=()=>{try{return D()||(()=>{if(void 0===c||void 0===c.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&C(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},k=t=>{const e=(t=>{var e,n;return null===(n=null===(e=N())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),s]:[e.substring(0,n),s]},R=()=>{var t;return null===(t=N())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[A(JSON.stringify({alg:"none",type:"JWT"})),A(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){try{return"object"==typeof indexedDB}catch(t){return!1}}class M extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,M.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace(F,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new M(s,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const F=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(U(n)&&U(r)){if(!P(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function U(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(t){return t&&t._delegate?t._delegate:t}class q{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new L;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:j})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=j){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=j){return this.instances.has(t)}getOptions(t=j){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===j?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t=j){return this.component?this.component.multipleInstances?t:j:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class ${addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new K(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=[];var H,z;(z=H||(H={}))[z.DEBUG=0]="DEBUG",z[z.VERBOSE=1]="VERBOSE",z[z.INFO=2]="INFO",z[z.WARN=3]="WARN",z[z.ERROR=4]="ERROR",z[z.SILENT=5]="SILENT";const Q={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},W=H.INFO,X={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Y=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=X[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class J{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in H))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Q[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...t),this._logHandler(this,H.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...t),this._logHandler(this,H.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,H.INFO,...t),this._logHandler(this,H.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,H.WARN,...t),this._logHandler(this,H.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...t),this._logHandler(this,H.ERROR,...t)}constructor(t){this.name=t,this._logLevel=W,this._logHandler=Y,this._userLogHandler=null,G.push(this)}}const Z=(t,e)=>e.some((e=>t instanceof e));let tt,et;const nt=new WeakMap,st=new WeakMap,it=new WeakMap,rt=new WeakMap,ot=new WeakMap;let at={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return st.get(t);if("objectStoreNames"===e)return t.objectStoreNames||it.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ht(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function ct(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(et||(et=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(lt(this),e),ht(nt.get(this))}:function(...e){return ht(t.apply(lt(this),e))}:function(e,...n){const s=t.call(lt(this),e,...n);return it.set(s,e.sort?e.sort():[e]),ht(s)}}function ut(t){return"function"==typeof t?ct(t):(t instanceof IDBTransaction&&function(t){if(st.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),s()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));st.set(t,e)}(t),Z(t,tt||(tt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,at):t)}function ht(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(ht(t.result)),s()},r=()=>{n(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&nt.set(e,t)})).catch((()=>{})),ot.set(e,t),e}(t);if(rt.has(t))return rt.get(t);const e=ut(t);return e!==t&&(rt.set(t,e),ot.set(e,t)),e}const lt=t=>ot.get(t);function dt(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ht(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(ht(o.result),t.oldVersion,t.newVersion,ht(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const ft=["get","getKey","getAll","getAllKeys","count"],pt=["put","add","delete","clear"],gt=new Map;function mt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(gt.get(e))return gt.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=pt.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!i&&!ft.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let o=r.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&r.done]))[0]};return gt.set(e,r),r}at=(t=>({...t,get:(e,n,s)=>mt(e,n)||t.get(e,n,s),has:(e,n)=>!!mt(e,n)||t.has(e,n)}))(at);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const vt="@firebase/app",wt="0.9.4",Et=new J("@firebase/app"),Tt="[DEFAULT]",bt={[vt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},It=new Map,_t=new Map;function St(t,e){try{t.container.addComponent(e)}catch(n){Et.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function At(t){const e=t.name;if(_t.has(e))return Et.debug(`There were multiple attempts to register component ${e}.`),!1;_t.set(e,t);for(const e of It.values())St(e,t);return!0}function Ct(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dt=new V("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new q("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const s=Object.assign({name:Tt,automaticDataCollectionEnabled:!1},e),i=s.name;if("string"!=typeof i||!i)throw Dt.create("bad-app-name",{appName:String(i)});if(n||(n=R()),!n)throw Dt.create("no-options");const r=It.get(i);if(r){if(P(n,r.options)&&P(s,r.config))return r;throw Dt.create("duplicate-app",{appName:i})}const o=new $(i);for(const t of _t.values())o.addComponent(t);const a=new Nt(n,s,o);return It.set(i,a),a}function Rt(t=Tt){const e=It.get(t);if(!e&&t===Tt)return kt();if(!e)throw Dt.create("no-app",{appName:t});return e}function Lt(t,e,n){var s;let i=null!==(s=bt[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Et.warn(t.join(" "))}At(new q(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xt="firebase-heartbeat-database",Ot=1,Mt="firebase-heartbeat-store";let Vt=null;function Ft(){return Vt||(Vt=dt(xt,Ot,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Mt)}}).catch((t=>{throw Dt.create("idb-open",{originalErrorMessage:t.message})}))),Vt}async function Pt(t,e){try{const n=(await Ft()).transaction(Mt,"readwrite"),s=n.objectStore(Mt);return await s.put(e,Ut(t)),n.done}catch(t){if(t instanceof M)Et.warn(t.message);else{const e=Dt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Et.warn(e.message)}}}function Ut(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=1024;class qt{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=jt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=jt(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=Bt){const n=[];let s=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),$t(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$t(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=A(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Kt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function jt(){return(new Date).toISOString().substring(0,10)}class Kt{async runIndexedDBEnvironmentCheck(){return!!O()&&new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await Ft()).transaction(Mt).objectStore(Mt).get(Ut(t))}catch(t){if(t instanceof M)Et.warn(t.message);else{const e=Dt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Et.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Pt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Pt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function $t(t){return A(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gt;Gt="",At(new q("platform-logger",(t=>new yt(t)),"PRIVATE")),At(new q("heartbeat",(t=>new qt(t)),"PRIVATE")),Lt(vt,wt,Gt),Lt(vt,wt,"esm2017"),Lt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Lt("firebase","9.17.2","app");var Ht,zt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},Qt={},Wt=Wt||{},Xt=zt||self;function Yt(){}function Jt(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Zt(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var te="closure_uid_"+(1e9*Math.random()>>>0),ee=0;function ne(t,e,n){return t.call.apply(t.bind,arguments)}function se(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function ie(t,e,n){return(ie=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ne:se).apply(null,arguments)}function re(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function oe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function ae(){this.s=this.s,this.o=this.o}ae.prototype.s=!1,ae.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,te)&&t[te]||(t[te]=++ee))},ae.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ce=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ue(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function he(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(Jt(n)){const e=t.length||0,s=n.length||0;t.length=e+s;for(let i=0;i<s;i++)t[e+i]=n[i]}else t.push(n)}}function le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var de=function(){if(!Xt.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Xt.addEventListener("test",Yt,e),Xt.removeEventListener("test",Yt,e)}catch(t){}return t}();function fe(t){return/^[\s\xa0]*$/.test(t)}var pe=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ge(t,e){return t<e?-1:t>e?1:0}function me(){var t=Xt.navigator;return t&&(t=t.userAgent)?t:""}function ye(t){return-1!=me().indexOf(t)}function ve(t){return ve[" "](t),t}ve[" "]=Yt;var we,Ee,Te=ye("Opera"),be=ye("Trident")||ye("MSIE"),Ie=ye("Edge"),_e=Ie||be,Se=ye("Gecko")&&!(-1!=me().toLowerCase().indexOf("webkit")&&!ye("Edge"))&&!(ye("Trident")||ye("MSIE"))&&!ye("Edge"),Ae=-1!=me().toLowerCase().indexOf("webkit")&&!ye("Edge");function Ce(){var t=Xt.document;return t?t.documentMode:void 0}t:{var De="",Ne=(Ee=me(),Se?/rv:([^\);]+)(\)|;)/.exec(Ee):Ie?/Edge\/([\d\.]+)/.exec(Ee):be?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ee):Ae?/WebKit\/(\S+)/.exec(Ee):Te?/(?:Version)[ \/]?(\S+)/.exec(Ee):void 0);if(Ne&&(De=Ne?Ne[1]:""),be){var ke=Ce();if(null!=ke&&ke>parseFloat(De)){we=String(ke);break t}}we=De}var Re,Le={};function xe(){return function(t){var e=Le;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=pe(String(we)).split("."),n=pe("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=ge(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||ge(0==i[2].length,0==r[2].length)||ge(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(Xt.document&&be){var Oe=Ce();Re=Oe||(parseInt(we,10)||void 0)}else Re=void 0;var Me=Re;function Ve(t,e){if(le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Se){t:{try{ve(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Fe[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ve.X.h.call(this)}}oe(Ve,le);var Fe={2:"touch",3:"pen",4:"mouse"};Ve.prototype.h=function(){Ve.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pe="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function Be(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Ue,this.ba=this.ea=!1}function qe(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function je(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ke(t){const e={};for(const n in t)e[n]=t[n];return e}const $e="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ge(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<$e.length;e++)n=$e[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function He(t){this.src=t,this.g={},this.h=0}function ze(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=ce(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(qe(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Qe(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}He.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=Qe(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new Be(e,this.src,r,!!s,i)).ea=n,t.push(e)),e};var We="closure_lm_"+(1e6*Math.random()|0),Xe={};function Ye(t,e,n,s,i){if(s&&s.once)return Ze(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ye(t,e[r],n,s,i);return null}return n=an(n),t&&t[Pe]?t.N(e,n,Zt(s)?!!s.capture:!!s,i):Je(t,e,n,!1,s,i)}function Je(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Zt(i)?!!i.capture:!!i,a=rn(t);if(a||(t[We]=a=new He(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=sn;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)de||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(nn(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function Ze(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ze(t,e[r],n,s,i);return null}return n=an(n),t&&t[Pe]?t.O(e,n,Zt(s)?!!s.capture:!!s,i):Je(t,e,n,!0,s,i)}function tn(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)tn(t,e[r],n,s,i);else s=Zt(s)?!!s.capture:!!s,n=an(n),t&&t[Pe]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Qe(r=t.g[e],n,s,i))&&(qe(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=rn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Qe(e,n,s,i)),(n=-1<t?e[t]:null)&&en(n))}function en(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[Pe])ze(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(nn(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=rn(e))?(ze(n,t),0==n.h&&(n.src=null,e[We]=null)):qe(t)}}}function nn(t){return t in Xe?Xe[t]:Xe[t]="on"+t}function sn(t,e){if(t.ba)t=!0;else{e=new Ve(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&en(t),t=n.call(s,e)}return t}function rn(t){return(t=t[We])instanceof He?t:null}var on="__closure_events_fn_"+(1e9*Math.random()>>>0);function an(t){return"function"==typeof t?t:(t[on]||(t[on]=function(e){return t.handleEvent(e)}),t[on])}function cn(){ae.call(this),this.i=new He(this),this.P=this,this.I=null}function un(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new le(e,t);else if(e instanceof le)e.target=e.target||t;else{var i=e;Ge(e=new le(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=hn(o,s,!0,e)&&i}if(i=hn(o=e.g=t,s,!0,e)&&i,i=hn(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=hn(o=e.g=n[r],s,!1,e)&&i}function hn(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ze(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}oe(cn,ae),cn.prototype[Pe]=!0,cn.prototype.removeEventListener=function(t,e,n,s){tn(this,t,e,n,s)},cn.prototype.M=function(){if(cn.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)qe(n[s]);delete e.g[t],e.h--}}this.I=null},cn.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},cn.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var ln=Xt.JSON.stringify;function dn(){var t=wn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var fn,pn=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new gn),(t=>t.reset()));class gn{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function mn(t){Xt.setTimeout((()=>{throw t}),0)}function yn(t,e){fn||function(){var t=Xt.Promise.resolve(void 0);fn=function(){t.then(En)}}(),vn||(fn(),vn=!0),wn.add(t,e)}var vn=!1,wn=new class{add(t,e){const n=pn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function En(){for(var t;t=dn();){try{t.h.call(t.g)}catch(t){mn(t)}var e=pn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}vn=!1}function Tn(t,e){cn.call(this),this.h=t||1,this.g=e||Xt,this.j=ie(this.lb,this),this.l=Date.now()}function bn(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function In(t,e,n){if("function"==typeof t)n&&(t=ie(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ie(t.handleEvent,t)}return 2147483647<Number(e)?-1:Xt.setTimeout(t,e||0)}function _n(t){t.g=In((()=>{t.g=null,t.i&&(t.i=!1,_n(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}oe(Tn,cn),(Ht=Tn.prototype).ca=!1,Ht.R=null,Ht.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),un(this,"tick"),this.ca&&(bn(this),this.start()))}},Ht.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ht.M=function(){Tn.X.M.call(this),bn(this),delete this.g};class Sn extends ae{l(t){this.h=arguments,this.g?this.i=!0:_n(this)}M(){super.M(),this.g&&(Xt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function An(t){ae.call(this),this.h=t,this.g={}}oe(An,ae);var Cn=[];function Dn(t,e,n,s){Array.isArray(n)||(n&&(Cn[0]=n.toString()),n=Cn);for(var i=0;i<n.length;i++){var r=Ye(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Nn(t){je(t.g,(function(t,e){this.g.hasOwnProperty(e)&&en(t)}),t),t.g={}}function kn(){this.g=!0}function Rn(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return ln(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}An.prototype.M=function(){An.X.M.call(this),Nn(this)},An.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},kn.prototype.Aa=function(){this.g=!1},kn.prototype.info=function(){};var Ln={},xn=null;function On(){return xn=xn||new cn}function Mn(t){le.call(this,Ln.Pa,t)}function Vn(t){const e=On();un(e,new Mn(e))}function Fn(t,e){le.call(this,Ln.STAT_EVENT,t),this.stat=e}function Pn(t){const e=On();un(e,new Fn(e,t))}function Un(t,e){le.call(this,Ln.Qa,t),this.size=e}function Bn(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Xt.setTimeout((function(){t()}),e)}Ln.Pa="serverreachability",oe(Mn,le),Ln.STAT_EVENT="statevent",oe(Fn,le),Ln.Qa="timingevent",oe(Un,le);var qn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},jn={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Kn(){}function $n(t){return t.h||(t.h=t.i())}function Gn(){}Kn.prototype.h=null;var Hn,zn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Qn(){le.call(this,"d")}function Wn(){le.call(this,"c")}function Xn(){}function Yn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new An(this),this.O=Zn,t=_e?125:void 0,this.T=new Tn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Jn}function Jn(){this.i=null,this.g="",this.h=!1}oe(Qn,le),oe(Wn,le),oe(Xn,Kn),Xn.prototype.g=function(){return new XMLHttpRequest},Xn.prototype.i=function(){return{}},Hn=new Xn;var Zn=45e3,ts={},es={};function ns(t,e,n){t.K=1,t.v=Ts(ms(e)),t.s=n,t.P=!0,ss(t,null)}function ss(t,e){t.F=Date.now(),as(t),t.A=ms(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Os(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Jn,t.g=xi(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Sn(ie(t.La,t,t.g),t.N)),Dn(t.S,t.g,"readystatechange",t.ib),e=t.H?Ke(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Vn(),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function is(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function rs(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=os(t,n),s==es){4==e&&(t.o=4,Pn(14),i=!1),Rn(t.j,t.m,null,"[Incomplete Response]");break}if(s==ts){t.o=4,Pn(15),Rn(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Rn(t.j,t.m,s,null),ds(t,s)}is(t)&&s!=es&&s!=ts&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Pn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Si(e),e.K=!0,Pn(11))):(Rn(t.j,t.m,n,"[Invalid Chunked Response]"),ls(t),hs(t))}function os(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?es:(n=Number(e.substring(n,s)),isNaN(n)?ts:(s+=1)+n>e.length?es:(e=e.substr(s,n),t.C=s+n,e))}function as(t){t.V=Date.now()+t.O,cs(t,t.O)}function cs(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Bn(ie(t.gb,t),e)}function us(t){t.B&&(Xt.clearTimeout(t.B),t.B=null)}function hs(t){0==t.l.G||t.I||Di(t.l,t)}function ls(t){us(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,bn(t.T),Nn(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ds(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Bs(n.h,t)))if(!t.J&&Bs(n.h,t)&&3==n.G){try{var s=n.Fa.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ci(n),yi(n)}_i(n),Pn(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=Bn(ie(n.cb,n),6e3));if(1>=Us(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else ki(n,11)}else if((t.J||n.g==t)&&Ci(n),!fe(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(s=1.5*h,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(qs(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.za=t,Es(s.F,s.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((s=n).sa=Li(s,s.H?s.ka:null,s.V),o.J){js(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(us(a),as(a)),s.g=o}else Ii(s);0<n.i.length&&wi(n)}else"stop"!=u[0]&&"close"!=u[0]||ki(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ki(n,7):mi(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}Vn()}catch(t){}}function fs(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Jt(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(Jt(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}(t),s=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(Jt(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}(Ht=Yn.prototype).setTimeout=function(t){this.O=t},Ht.ib=function(t){t=t.target;const e=this.L;e&&3==hi(t)?e.l():this.La(t)},Ht.La=function(t){try{if(t==this.g)t:{const h=hi(this.g);var e=this.g.Ea();this.g.aa();if(!(3>h)&&(3!=h||_e||this.g&&(this.h.h||this.g.fa()||li(this.g)))){this.I||4!=h||7==e||Vn(),us(this);var n=this.g.aa();this.Y=n;e:if(is(this)){var s=li(this.g);t="";var i=s.length,r=4==hi(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ls(this),hs(this);var o="";break e}this.h.i=new Xt.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fe(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,Pn(12),ls(this),hs(this);break t}Rn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ds(this,n)}this.P?(rs(this,h,o),_e&&this.i&&3==h&&(Dn(this.S,this.T,"tick",this.hb),this.T.start())):(Rn(this.j,this.m,o,null),ds(this,o)),4==h&&ls(this),this.i&&!this.I&&(4==h?Di(this.l,this):(this.i=!1,as(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Pn(12)):(this.o=0,Pn(13)),ls(this),hs(this)}}}catch(t){}},Ht.hb=function(){if(this.g){var t=hi(this.g),e=this.g.fa();this.C<e.length&&(us(this),rs(this,t,e),this.i&&4!=t&&as(this))}},Ht.cancel=function(){this.I=!0,ls(this)},Ht.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Vn(),Pn(17)),ls(this),this.o=2,hs(this)):cs(this,this.V-t)};var ps=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof gs){this.h=void 0!==e?e:t.h,ys(this,t.j),this.s=t.s,this.g=t.g,vs(this,t.m),this.l=t.l,e=t.i;var n=new ks;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ws(this,n),this.o=t.o}else t&&(n=String(t).match(ps))?(this.h=!!e,ys(this,n[1]||"",!0),this.s=bs(n[2]||""),this.g=bs(n[3]||"",!0),vs(this,n[4]),this.l=bs(n[5]||"",!0),ws(this,n[6]||"",!0),this.o=bs(n[7]||"")):(this.h=!!e,this.i=new ks(null,this.h))}function ms(t){return new gs(t)}function ys(t,e,n){t.j=n?bs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function vs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ws(t,e,n){e instanceof ks?(t.i=e,function(t,e){e&&!t.j&&(Rs(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ls(this,e),Os(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Is(e,Ds)),t.i=new ks(e,t.h))}function Es(t,e,n){t.i.set(e,n)}function Ts(t){return Es(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Is(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,_s),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function _s(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}gs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Is(e,Ss,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Is(e,Ss,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Is(n,"/"==n.charAt(0)?Cs:As,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Is(n,Ns)),t.join("")};var Ss=/[#\/\?@]/g,As=/[#\?:]/g,Cs=/[#\?]/g,Ds=/[#\?@]/g,Ns=/#/g;function ks(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Rs(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ls(t,e){Rs(t),e=Ms(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function xs(t,e){return Rs(t),e=Ms(t,e),t.g.has(e)}function Os(t,e,n){Ls(t,e),0<n.length&&(t.i=null,t.g.set(Ms(t,e),ue(n)),t.h+=n.length)}function Ms(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Ht=ks.prototype).add=function(t,e){Rs(this),this.i=null,t=Ms(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Ht.forEach=function(t,e){Rs(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},Ht.oa=function(){Rs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let t=0;t<i.length;t++)n.push(e[s])}return n},Ht.W=function(t){Rs(this);let e=[];if("string"==typeof t)xs(this,t)&&(e=e.concat(this.g.get(Ms(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Ht.set=function(t,e){return Rs(this),this.i=null,xs(this,t=Ms(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Ht.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},Ht.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;""!==o[s]&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Vs(t){this.l=t||Fs,Xt.PerformanceNavigationTiming?t=0<(t=Xt.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Xt.g&&Xt.g.Ga&&Xt.g.Ga()&&Xt.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Fs=10;function Ps(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Us(t){return t.h?1:t.g?t.g.size:0}function Bs(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function qs(t,e){t.g?t.g.add(e):t.h=e}function js(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ks(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ue(t.i)}function $s(){}function Gs(){this.g=new $s}function Hs(t,e,n){const s=n||"";try{fs(t,(function(t,n){let i=t;Zt(t)&&(i=ln(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function zs(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function Qs(t){this.l=t.ac||null,this.j=t.jb||!1}function Ws(t,e){cn.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Xs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Vs.prototype.cancel=function(){if(this.i=Ks(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},$s.prototype.stringify=function(t){return Xt.JSON.stringify(t,void 0)},$s.prototype.parse=function(t){return Xt.JSON.parse(t,void 0)},oe(Qs,Kn),Qs.prototype.g=function(){return new Ws(this.l,this.j)},Qs.prototype.i=function(t){return function(){return t}}({}),oe(Ws,cn);var Xs=0;function Ys(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function Js(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Zs(t)}function Zs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Ht=Ws.prototype).open=function(t,e){if(this.readyState!=Xs)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Zs(this)},Ht.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Xt).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},Ht.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Js(this)),this.readyState=Xs},Ht.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Zs(this)),this.g&&(this.readyState=3,Zs(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==Xt.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ys(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},Ht.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Js(this):Zs(this),3==this.readyState&&Ys(this)}},Ht.Va=function(t){this.g&&(this.response=this.responseText=t,Js(this))},Ht.Ua=function(t){this.g&&(this.response=t,Js(this))},Ht.ga=function(){this.g&&Js(this)},Ht.setRequestHeader=function(t,e){this.v.append(t,e)},Ht.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Ht.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ws.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ti=Xt.JSON.parse;function ei(t){cn.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ni,this.K=this.L=!1}oe(ei,cn);var ni="",si=/^https?$/i,ii=["POST","PUT"];function ri(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,oi(t),ci(t)}function oi(t){t.D||(t.D=!0,un(t,"complete"),un(t,"error"))}function ai(t){if(t.h&&void 0!==Wt&&(!t.C[1]||4!=hi(t)||2!=t.aa()))if(t.v&&4==hi(t))In(t.Ha,0,t);else if(un(t,"readystatechange"),4==hi(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var i=String(t.H).match(ps)[1]||null;if(!i&&Xt.self&&Xt.self.location){var r=Xt.self.location.protocol;i=r.substr(0,r.length-1)}s=!si.test(i?i.toLowerCase():"")}n=s}if(n)un(t,"complete"),un(t,"success");else{t.m=6;try{var o=2<hi(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",oi(t)}}finally{ci(t)}}}function ci(t,e){if(t.g){ui(t);const n=t.g,s=t.C[0]?Yt:null;t.g=null,t.C=null,e||un(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function ui(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Xt.clearTimeout(t.A),t.A=null)}function hi(t){return t.g?t.g.readyState:0}function li(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ni:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function di(t){let e="";return je(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function fi(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=di(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Es(t,e,n))}function pi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function gi(t){this.Ca=0,this.i=[],this.j=new kn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=pi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=pi("baseRetryDelayMs",5e3,t),this.bb=pi("retryDelaySeedMs",1e4,t),this.$a=pi("forwardChannelMaxRetries",2,t),this.ta=pi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Vs(t&&t.concurrentRequestLimit),this.Fa=new Gs,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function mi(t){if(vi(t),3==t.G){var e=t.U++,n=ms(t.F);Es(n,"SID",t.I),Es(n,"RID",e),Es(n,"TYPE","terminate"),Ti(t,n),(e=new Yn(t,t.j,e,void 0)).K=2,e.v=Ts(ms(n)),n=!1,Xt.navigator&&Xt.navigator.sendBeacon&&(n=Xt.navigator.sendBeacon(e.v.toString(),"")),!n&&Xt.Image&&((new Image).src=e.v,n=!0),n||(e.g=xi(e.l,null),e.g.da(e.v)),e.F=Date.now(),as(e)}Ri(t)}function yi(t){t.g&&(Si(t),t.g.cancel(),t.g=null)}function vi(t){yi(t),t.u&&(Xt.clearTimeout(t.u),t.u=null),Ci(t),t.h.cancel(),t.m&&("number"==typeof t.m&&Xt.clearTimeout(t.m),t.m=null)}function wi(t){Ps(t.h)||t.m||(t.m=!0,yn(t.Ja,t),t.C=0)}function Ei(t,e){var n;n=e?e.m:t.U++;const s=ms(t.F);Es(s,"SID",t.I),Es(s,"RID",n),Es(s,"AID",t.T),Ti(t,s),t.o&&t.s&&fi(s,t.o,t.s),n=new Yn(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=bi(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),qs(t.h,n),ns(n,s,e)}function Ti(t,e){t.ia&&je(t.ia,(function(t,n){Es(e,n,t)})),t.l&&fs({},(function(t,n){Es(e,n,t)}))}function bi(t,e,n){n=Math.min(t.i.length,n);var s=t.l?ie(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{Hs(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function Ii(t){t.g||t.u||(t.Z=1,yn(t.Ia,t),t.A=0)}function _i(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=Bn(ie(t.Ia,t),Ni(t,t.A)),t.A++,!0)}function Si(t){null!=t.B&&(Xt.clearTimeout(t.B),t.B=null)}function Ai(t){t.g=new Yn(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=ms(t.sa);Es(e,"RID","rpc"),Es(e,"SID",t.I),Es(e,"CI",t.L?"0":"1"),Es(e,"AID",t.T),Es(e,"TYPE","xmlhttp"),Ti(t,e),t.o&&t.s&&fi(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ts(ms(e)),n.s=null,n.P=!0,ss(n,t)}function Ci(t){null!=t.v&&(Xt.clearTimeout(t.v),t.v=null)}function Di(t,e){var n=null;if(t.g==e){Ci(t),Si(t),t.g=null;var s=2}else{if(!Bs(t.h,e))return;n=e.D,js(t.h,e),s=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;un(s=On(),new Un(s,n)),wi(t)}else Ii(t);else if(3==(i=e.o)||0==i&&0<t.pa||!(1==s&&function(t,e){return!(Us(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=Bn(ie(t.Ja,t,e),Ni(t,t.C)),t.C++,0)))}(t,e)||2==s&&_i(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ki(t,5);break;case 4:ki(t,10);break;case 3:ki(t,6);break;default:ki(t,2)}}function Ni(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ki(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var s=ie(t.kb,t);n||(n=new gs("//www.google.com/images/cleardot.gif"),Xt.location&&"http"==Xt.location.protocol||ys(n,"https"),Ts(n)),function(t,e){const n=new kn;if(Xt.Image){const s=new Image;s.onload=re(zs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=re(zs,n,s,"TestLoadImage: error",!1,e),s.onabort=re(zs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=re(zs,n,s,"TestLoadImage: timeout",!1,e),Xt.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else Pn(2);t.G=0,t.l&&t.l.va(e),Ri(t),vi(t)}function Ri(t){if(t.G=0,t.la=[],t.l){const e=Ks(t.h);0==e.length&&0==t.i.length||(he(t.la,e),he(t.la,t.i),t.h.i.length=0,ue(t.i),t.i.length=0),t.l.ua()}}function Li(t,e,n){var s=n instanceof gs?ms(n):new gs(n,void 0);if(""!=s.g)e&&(s.g=e+"."+s.g),vs(s,s.m);else{var i=Xt.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new gs(null,void 0);s&&ys(r,s),e&&(r.g=e),i&&vs(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Es(s,n,e),Es(s,"VER",t.ma),Ti(t,s),s}function xi(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new ei(new Qs({jb:!0})):new ei(t.ra)).Ka(t.H),e}function Oi(){}function Mi(){if(be&&!(10<=Number(Me)))throw Error("Environmental error: no available transport.")}function Vi(t,e){cn.call(this),this.g=new gi(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!fe(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!fe(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Ui(this)}function Fi(t){Qn.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Pi(){Wn.call(this),this.status=1}function Ui(t){this.g=t}(Ht=ei.prototype).Ka=function(t){this.L=t},Ht.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Hn.g(),this.C=this.u?$n(this.u):$n(Hn),this.g.onreadystatechange=ie(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void ri(this,t)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=Xt.FormData&&t instanceof Xt.FormData,!(0<=ce(ii,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ui(this),0<this.B&&((this.K=function(t){return be&&xe()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ie(this.qa,this)):this.A=In(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){ri(this,t)}},Ht.qa=function(){void 0!==Wt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,un(this,"timeout"),this.abort(8))},Ht.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,un(this,"complete"),un(this,"abort"),ci(this))},Ht.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ci(this,!0)),ei.X.M.call(this)},Ht.Ha=function(){this.s||(this.F||this.v||this.l?ai(this):this.fb())},Ht.fb=function(){ai(this)},Ht.aa=function(){try{return 2<hi(this)?this.g.status:-1}catch(t){return-1}},Ht.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Ht.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ti(e)}},Ht.Ea=function(){return this.m},Ht.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ht=gi.prototype).ma=8,Ht.G=1,Ht.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Yn(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Ke(r),Ge(r,this.S)):r=this.S),null!==this.o||this.N||(i.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=bi(this,i,e),Es(n=ms(this.F),"RID",t),Es(n,"CVER",22),this.D&&Es(n,"X-HTTP-Session-Id",this.D),Ti(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(di(r)))+"&"+e:this.o&&fi(n,this.o,r)),qs(this.h,i),this.Ya&&Es(n,"TYPE","init"),this.O?(Es(n,"$req",e),Es(n,"SID","null"),i.Z=!0,ns(i,n,null)):ns(i,n,e),this.G=2}}else 3==this.G&&(t?Ei(this,t):0==this.i.length||Ps(this.h)||Ei(this))},Ht.Ia=function(){if(this.u=null,Ai(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Bn(ie(this.eb,this),t)}},Ht.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Pn(10),yi(this),Ai(this))},Ht.cb=function(){null!=this.v&&(this.v=null,yi(this),_i(this),Pn(19))},Ht.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Pn(2)):(this.j.info("Failed to ping google.com"),Pn(1))},(Ht=Oi.prototype).xa=function(){},Ht.wa=function(){},Ht.va=function(){},Ht.ua=function(){},Ht.Ra=function(){},Mi.prototype.g=function(t,e){return new Vi(t,e)},oe(Vi,cn),Vi.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Pn(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Li(t,null,t.V),wi(t)},Vi.prototype.close=function(){mi(this.g)},Vi.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=ln(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&wi(e)},Vi.prototype.M=function(){this.g.l=null,delete this.j,mi(this.g),delete this.g,Vi.X.M.call(this)},oe(Fi,Qn),oe(Pi,Wn),oe(Ui,Oi),Ui.prototype.xa=function(){un(this.g,"a")},Ui.prototype.wa=function(t){un(this.g,new Fi(t))},Ui.prototype.va=function(t){un(this.g,new Pi)},Ui.prototype.ua=function(){un(this.g,"b")},Mi.prototype.createWebChannel=Mi.prototype.g,Vi.prototype.send=Vi.prototype.u,Vi.prototype.open=Vi.prototype.m,Vi.prototype.close=Vi.prototype.close,qn.NO_ERROR=0,qn.TIMEOUT=8,qn.HTTP_ERROR=6,jn.COMPLETE="complete",Gn.EventType=zn,zn.OPEN="a",zn.CLOSE="b",zn.ERROR="c",zn.MESSAGE="d",cn.prototype.listen=cn.prototype.N,ei.prototype.listenOnce=ei.prototype.O,ei.prototype.getLastError=ei.prototype.Oa,ei.prototype.getLastErrorCode=ei.prototype.Ea,ei.prototype.getStatus=ei.prototype.aa,ei.prototype.getResponseJson=ei.prototype.Sa,ei.prototype.getResponseText=ei.prototype.fa,ei.prototype.send=ei.prototype.da,ei.prototype.setWithCredentials=ei.prototype.Ka;var Bi=Qt.createWebChannelTransport=function(){return new Mi},qi=Qt.getStatEventTarget=function(){return On()},ji=Qt.ErrorCode=qn,Ki=Qt.EventType=jn,$i=Qt.Event=Ln,Gi=Qt.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Hi=Qt.FetchXmlHttpFactory=Qs,zi=Qt.WebChannel=Gn,Qi=Qt.XhrIo=ei;const Wi="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}Xi.UNAUTHENTICATED=new Xi(null),Xi.GOOGLE_CREDENTIALS=new Xi("google-credentials-uid"),Xi.FIRST_PARTY=new Xi("first-party-uid"),Xi.MOCK_USER=new Xi("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Yi="9.17.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new J("@firebase/firestore");function Zi(){return Ji.logLevel}function tr(t,...e){if(Ji.logLevel<=H.DEBUG){const n=e.map(sr);Ji.debug(`Firestore (${Yi}): ${t}`,...n)}}function er(t,...e){if(Ji.logLevel<=H.ERROR){const n=e.map(sr);Ji.error(`Firestore (${Yi}): ${t}`,...n)}}function nr(t,...e){if(Ji.logLevel<=H.WARN){const n=e.map(sr);Ji.warn(`Firestore (${Yi}): ${t}`,...n)}}function sr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t="Unexpected state"){const e=`FIRESTORE (${Yi}) INTERNAL ASSERTION FAILED: `+t;throw er(e),new Error(e)}function rr(t,e){t||ir()}function or(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class cr extends M{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class lr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Xi.UNAUTHENTICATED)))}shutdown(){}}class dr{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class fr{start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new ur;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ur,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{tr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(tr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ur)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(tr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(rr("string"==typeof e.accessToken),new hr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return rr(null===t||"string"==typeof t),new Xi(t)}constructor(t){this.t=t,this.currentUser=Xi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class pr{I(){return this.g?this.g():(rr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s,this.type="FirstParty",this.user=Xi.FIRST_PARTY,this.p=new Map}}class gr{getToken(){return Promise.resolve(new pr(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Xi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s}}class mr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yr{start(t,e){const n=t=>{null!=t.error&&tr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,tr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{tr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?s(t):tr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(rr("string"==typeof t.token),this.A=t.token,new mr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=vr(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function Er(t,e){return t<e?-1:t>e?1:0}function Tr(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class br{static now(){return br.fromMillis(Date.now())}static fromDate(t){return br.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new br(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Er(this.nanoseconds,t.nanoseconds):Er(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new cr(ar.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new cr(ar.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new cr(ar.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new cr(ar.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{static fromTimestamp(t){return new Ir(t)}static min(){return new Ir(new br(0,0))}static max(){return new Ir(new br(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{get length(){return this.len}isEqual(t){return 0===_r.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof _r?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&ir(),void 0===n?n=t.length-e:n>t.length-e&&ir(),this.segments=t,this.offset=e,this.len=n}}class Sr extends _r{construct(t,e,n){return new Sr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new cr(ar.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Sr(e)}static emptyPath(){return new Sr([])}}const Ar=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Cr extends _r{construct(t,e,n){return new Cr(t,e,n)}static isValidIdentifier(t){return Ar.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Cr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Cr(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new cr(ar.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new cr(ar.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new cr(ar.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new cr(ar.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Cr(e)}static emptyPath(){return new Cr([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{static fromPath(t){return new Dr(Sr.fromString(t))}static fromName(t){return new Dr(Sr.fromString(t).popFirst(5))}static empty(){return new Dr(Sr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Sr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Sr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Dr(new Sr(t.slice()))}constructor(t){this.path=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}Nr.UNKNOWN_ID=-1;function kr(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Ir.fromTimestamp(1e9===s?new br(n+1,0):new br(n,s));return new Lr(i,Dr.empty(),e)}function Rr(t){return new Lr(t.readTime,t.key,-1)}class Lr{static min(){return new Lr(Ir.min(),Dr.empty(),-1)}static max(){return new Lr(Ir.max(),Dr.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function xr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Dr.comparator(t.documentKey,e.documentKey),0!==n?n:Er(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mr{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(t){if(t.code!==ar.FAILED_PRECONDITION||t.message!==Or)throw t;tr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ir(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Fr(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Fr?e:Fr.resolve(e)}catch(t){return Fr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Fr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Fr.reject(e)}static resolve(t){return new Fr(((e,n)=>{e(t)}))}static reject(t){return new Fr(((e,n)=>{n(t)}))}static waitFor(t){return new Fr(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Fr.resolve(!1);for(const n of t)e=e.next((t=>t?Fr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new Fr(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new Fr(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ur{ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}}Ur.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Br{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class qr{static empty(){return new qr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof qr&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $r(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t){return null==t}function Hr(t){return 0===t&&1/t==-1/0}function zr(t){return"number"==typeof t&&Number.isInteger(t)&&!Hr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wr{static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw t instanceof DOMException?new Qr("Invalid base64 string: "+t):t}}(t);return new Wr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Wr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Er(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}Wr.EMPTY_BYTE_STRING=new Wr("");const Xr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yr(t){if(rr(!!t),"string"==typeof t){let e=0;const n=Xr.exec(t);if(rr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Jr(t.seconds),nanos:Jr(t.nanos)}}function Jr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Zr(t){return"string"==typeof t?Wr.fromBase64String(t):Wr.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function eo(t){const e=t.mapValue.fields.__previous_value__;return to(e)?eo(e):e}function no(t){const e=Yr(t.mapValue.fields.__local_write_time__.timestampValue);return new br(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function io(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?to(t)?4:wo(t)?9007199254740991:10:ir()}function ro(t,e){if(t===e)return!0;const n=io(t);if(n!==io(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return no(t).isEqual(no(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Yr(t.timestampValue),s=Yr(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Zr(t.bytesValue).isEqual(Zr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Jr(t.geoPointValue.latitude)===Jr(e.geoPointValue.latitude)&&Jr(t.geoPointValue.longitude)===Jr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Jr(t.integerValue)===Jr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Jr(t.doubleValue),s=Jr(e.doubleValue);return n===s?Hr(n)===Hr(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Tr(t.arrayValue.values||[],e.arrayValue.values||[],ro);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(jr(n)!==jr(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!ro(n[t],s[t])))return!1;return!0}(t,e);default:return ir()}}function oo(t,e){return void 0!==(t.values||[]).find((t=>ro(t,e)))}function ao(t,e){if(t===e)return 0;const n=io(t),s=io(e);if(n!==s)return Er(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Er(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Jr(t.integerValue||t.doubleValue),s=Jr(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return co(t.timestampValue,e.timestampValue);case 4:return co(no(t),no(e));case 5:return Er(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Zr(t),s=Zr(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=Er(n[t],s[t]);if(0!==e)return e}return Er(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Er(Jr(t.latitude),Jr(e.latitude));return 0!==n?n:Er(Jr(t.longitude),Jr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=ao(n[t],s[t]);if(e)return e}return Er(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===so.mapValue&&e===so.mapValue)return 0;if(t===so.mapValue)return 1;if(e===so.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=Er(s[t],r[t]);if(0!==e)return e;const o=ao(n[s[t]],i[r[t]]);if(0!==o)return o}return Er(s.length,r.length)}(t.mapValue,e.mapValue);default:throw ir()}}function co(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Er(t,e);const n=Yr(t),s=Yr(e),i=Er(n.seconds,s.seconds);return 0!==i?i:Er(n.nanos,s.nanos)}function uo(t){return ho(t)}function ho(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Yr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Zr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Dr.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=ho(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${ho(t.fields[i])}`;return n+"}"}(t.mapValue):ir()}function lo(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fo(t){return!!t&&"integerValue"in t}function po(t){return!!t&&"arrayValue"in t}function go(t){return!!t&&"nullValue"in t}function mo(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yo(t){return!!t&&"mapValue"in t}function vo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Kr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=vo(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wo(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eo{constructor(t,e){this.position=t,this.inclusive=e}}function To(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?Dr.comparator(Dr.fromName(o.referenceValue),n.key):ao(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function bo(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ro(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{}class _o extends Io{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Lo(t,e,n):"array-contains"===e?new Vo(t,n):"in"===e?new Fo(t,n):"not-in"===e?new Po(t,n):"array-contains-any"===e?new Uo(t,n):new _o(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new xo(t,n):new Oo(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(ao(e,this.value)):null!==e&&io(this.value)===io(e)&&this.matchesComparison(ao(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ir()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class So extends Io{static create(t,e){return new So(t,e)}matches(t){return Ao(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ft||(this.ft=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.dt((t=>t.isInequality()));return null!==t?t.field:null}dt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}constructor(t,e){super(),this.filters=t,this.op=e,this.ft=null}}function Ao(t){return"and"===t.op}function Co(t){return Do(t)&&Ao(t)}function Do(t){for(const e of t.filters)if(e instanceof So)return!1;return!0}function No(t){if(t instanceof _o)return t.field.canonicalString()+t.op.toString()+uo(t.value);if(Co(t))return t.filters.map((t=>No(t))).join(",");{const e=t.filters.map((t=>No(t))).join(",");return`${t.op}(${e})`}}function ko(t,e){return t instanceof _o?function(t,e){return e instanceof _o&&t.op===e.op&&t.field.isEqual(e.field)&&ro(t.value,e.value)}(t,e):t instanceof So?function(t,e){return e instanceof So&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&ko(n,e.filters[s])),!0)}(t,e):void ir()}function Ro(t){return t instanceof _o?function(t){return`${t.field.canonicalString()} ${t.op} ${uo(t.value)}`}(t):t instanceof So?function(t){return t.op.toString()+" {"+t.getFilters().map(Ro).join(" ,")+"}"}(t):"Filter"}class Lo extends _o{matches(t){const e=Dr.comparator(t.key,this.key);return this.matchesComparison(e)}constructor(t,e,n){super(t,e,n),this.key=Dr.fromName(n.referenceValue)}}class xo extends _o{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=Mo("in",e)}}class Oo extends _o{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=Mo("not-in",e)}}function Mo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Dr.fromName(t.referenceValue)))}class Vo extends _o{matches(t){const e=t.data.field(this.field);return po(e)&&oo(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class Fo extends _o{matches(t){const e=t.data.field(this.field);return null!==e&&oo(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class Po extends _o{matches(t){if(oo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!oo(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class Uo extends _o{matches(t){const e=t.data.field(this.field);return!(!po(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>oo(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t,e="asc"){this.field=t,this.dir=e}}function qo(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{insert(t,e){return new jo(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,$o.BLACK,null,null))}remove(t){return new jo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,$o.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ko(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ko(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ko(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ko(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||$o.EMPTY}}class Ko{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class $o{copy(t,e,n,s,i){return new $o(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $o.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return $o.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,$o.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,$o.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ir();if(this.right.isRed())throw ir();const t=this.left.check();if(t!==this.right.check())throw ir();return t+(this.isRed()?0:1)}constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:$o.RED,this.left=null!=s?s:$o.EMPTY,this.right=null!=i?i:$o.EMPTY,this.size=this.left.size+1+this.right.size}}$o.EMPTY=null,$o.RED=!0,$o.BLACK=!1,$o.EMPTY=new class{get key(){throw ir()}get value(){throw ir()}get color(){throw ir()}get left(){throw ir()}get right(){throw ir()}copy(t,e,n,s,i){return this}insert(t,e,n){return new $o(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Go{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ho(this.data.getIterator())}getIteratorFrom(t){return new Ho(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Go))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Go(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new jo(this.comparator)}}class Ho{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zo{static empty(){return new zo([])}unionWith(t){let e=new Go(Cr.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new zo(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Tr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(Cr.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{static empty(){return new Qo({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!yo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=vo(e)}setAll(t){let e=Cr.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=vo(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());yo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ro(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];yo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Kr(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Qo(vo(this.value))}constructor(t){this.value=t}}function Wo(t){const e=[];return Kr(t.fields,((t,n)=>{const s=new Cr([t]);if(yo(n)){const t=Wo(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new zo(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Xo{static newInvalidDocument(t){return new Xo(t,0,Ir.min(),Ir.min(),Ir.min(),Qo.empty(),0)}static newFoundDocument(t,e,n,s){return new Xo(t,1,e,Ir.min(),n,s,0)}static newNoDocument(t,e){return new Xo(t,2,e,Ir.min(),Ir.min(),Qo.empty(),0)}static newUnknownDocument(t,e){return new Xo(t,3,e,Ir.min(),Ir.min(),Qo.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Ir.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Qo.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Qo.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ir.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Xo&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Xo(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,s,i,r,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=r,this.documentState=o}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this._t=null}}function Jo(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Yo(t,e,n,s,i,r,o)}function Zo(t){const e=or(t);if(null===e._t){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>No(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Gr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>uo(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>uo(t))).join(",")),e._t=t}return e._t}function ta(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qo(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ko(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bo(t.startAt,e.startAt)&&bo(t.endAt,e.endAt)}function ea(t){return Dr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class na{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.wt=null,this.gt=null,this.startAt,this.endAt}}function sa(t,e,n,s,i,r,o,a){return new na(t,e,n,s,i,r,o,a)}function ia(t){return new na(t)}function ra(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function oa(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function aa(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function ca(t){return null!==t.collectionGroup}function ua(t){const e=or(t);if(null===e.wt){e.wt=[];const t=aa(e),n=oa(e);if(null!==t&&null===n)t.isKeyField()||e.wt.push(new Bo(t)),e.wt.push(new Bo(Cr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.wt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Bo(Cr.keyField(),t))}}}return e.wt}function ha(t){const e=or(t);if(!e.gt)if("F"===e.limitType)e.gt=Jo(e.path,e.collectionGroup,ua(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of ua(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Bo(n.field,e))}const n=e.endAt?new Eo(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Eo(e.startAt.position,e.startAt.inclusive):null;e.gt=Jo(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.gt}function la(t,e){e.getFirstInequalityField(),aa(t);const n=t.filters.concat([e]);return new na(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function da(t,e,n){return new na(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fa(t,e){return ta(ha(t),ha(e))&&t.limitType===e.limitType}function pa(t){return`${Zo(ha(t))}|lt:${t.limitType}`}function ga(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Ro(t))).join(", ")}]`),Gr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>uo(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>uo(t))).join(",")),`Target(${e})`}(ha(t))}; limitType=${t.limitType})`}function ma(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Dr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of ua(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=To(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,ua(t),e))&&!(t.endAt&&!function(t,e,n){const s=To(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,ua(t),e))}(t,e)}function ya(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function va(t){return(e,n)=>{let s=!1;for(const i of ua(t)){const t=wa(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function wa(t,e,n){const s=t.field.isKeyField()?Dr.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?ao(s,i):ir()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ir()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hr(e)?"-0":e}}function Ta(t){return{integerValue:""+t}}function ba(t,e){return zr(e)?Ta(e):Ea(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(){this._=void 0}}function _a(t,e,n){return t instanceof Ca?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Da?Na(t,e):t instanceof ka?Ra(t,e):function(t,e){const n=Aa(t,e),s=xa(n)+xa(t.It);return fo(n)&&fo(t.It)?Ta(s):Ea(t.Tt,s)}(t,e)}function Sa(t,e,n){return t instanceof Da?Na(t,e):t instanceof ka?Ra(t,e):n}function Aa(t,e){var n;return t instanceof La?fo(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null}class Ca extends Ia{}class Da extends Ia{constructor(t){super(),this.elements=t}}function Na(t,e){const n=Oa(e);for(const e of t.elements)n.some((t=>ro(t,e)))||n.push(e);return{arrayValue:{values:n}}}class ka extends Ia{constructor(t){super(),this.elements=t}}function Ra(t,e){let n=Oa(e);for(const e of t.elements)n=n.filter((t=>!ro(t,e)));return{arrayValue:{values:n}}}class La extends Ia{constructor(t,e){super(),this.Tt=t,this.It=e}}function xa(t){return Jr(t.integerValue||t.doubleValue)}function Oa(t){return po(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t,e){this.field=t,this.transform=e}}class Va{constructor(t,e){this.version=t,this.transformResults=e}}class Fa{static none(){return new Fa}static exists(t){return new Fa(void 0,t)}static updateTime(t){return new Fa(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function Pa(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ua{}function Ba(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Xa(t.key,Fa.none()):new Ga(t.key,t.data,Fa.none());{const n=t.data,s=Qo.empty();let i=new Go(Cr.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new Ha(t.key,s,new zo(i.toArray()),Fa.none())}}function qa(t,e,n){t instanceof Ga?function(t,e,n){const s=t.value.clone(),i=Qa(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Ha?function(t,e,n){if(!Pa(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Qa(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(za(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ja(t,e,n,s){return t instanceof Ga?function(t,e,n,s){if(!Pa(t.precondition,e))return n;const i=t.value.clone(),r=Wa(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ha?function(t,e,n,s){if(!Pa(t.precondition,e))return n;const i=Wa(t.fieldTransforms,s,e),r=e.data;return r.setAll(za(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return Pa(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Ka(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=Aa(s.transform,t||null);null!=i&&(null===n&&(n=Qo.empty()),n.set(s.field,i))}return n||null}function $a(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Tr(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Da&&e instanceof Da||t instanceof ka&&e instanceof ka?Tr(t.elements,e.elements,ro):t instanceof La&&e instanceof La?ro(t.It,e.It):t instanceof Ca&&e instanceof Ca}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ga extends Ua{getFieldMask(){return null}constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class Ha extends Ua{getFieldMask(){return this.fieldMask}constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}}function za(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Qa(t,e,n){const s=new Map;rr(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Sa(o,a,n[i]))}return s}function Wa(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,_a(t,r,e))}return s}class Xa extends Ua{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Ya extends Ua{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Za,tc;function ec(t){switch(t){default:return ir();case ar.CANCELLED:case ar.UNKNOWN:case ar.DEADLINE_EXCEEDED:case ar.RESOURCE_EXHAUSTED:case ar.INTERNAL:case ar.UNAVAILABLE:case ar.UNAUTHENTICATED:return!1;case ar.INVALID_ARGUMENT:case ar.NOT_FOUND:case ar.ALREADY_EXISTS:case ar.PERMISSION_DENIED:case ar.FAILED_PRECONDITION:case ar.ABORTED:case ar.OUT_OF_RANGE:case ar.UNIMPLEMENTED:case ar.DATA_LOSS:return!0}}function nc(t){if(void 0===t)return er("GRPC error has no .code"),ar.UNKNOWN;switch(t){case Za.OK:return ar.OK;case Za.CANCELLED:return ar.CANCELLED;case Za.UNKNOWN:return ar.UNKNOWN;case Za.DEADLINE_EXCEEDED:return ar.DEADLINE_EXCEEDED;case Za.RESOURCE_EXHAUSTED:return ar.RESOURCE_EXHAUSTED;case Za.INTERNAL:return ar.INTERNAL;case Za.UNAVAILABLE:return ar.UNAVAILABLE;case Za.UNAUTHENTICATED:return ar.UNAUTHENTICATED;case Za.INVALID_ARGUMENT:return ar.INVALID_ARGUMENT;case Za.NOT_FOUND:return ar.NOT_FOUND;case Za.ALREADY_EXISTS:return ar.ALREADY_EXISTS;case Za.PERMISSION_DENIED:return ar.PERMISSION_DENIED;case Za.FAILED_PRECONDITION:return ar.FAILED_PRECONDITION;case Za.ABORTED:return ar.ABORTED;case Za.OUT_OF_RANGE:return ar.OUT_OF_RANGE;case Za.UNIMPLEMENTED:return ar.UNIMPLEMENTED;case Za.DATA_LOSS:return ar.DATA_LOSS;default:return ir()}}(tc=Za||(Za={}))[tc.OK=0]="OK",tc[tc.CANCELLED=1]="CANCELLED",tc[tc.UNKNOWN=2]="UNKNOWN",tc[tc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tc[tc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tc[tc.NOT_FOUND=5]="NOT_FOUND",tc[tc.ALREADY_EXISTS=6]="ALREADY_EXISTS",tc[tc.PERMISSION_DENIED=7]="PERMISSION_DENIED",tc[tc.UNAUTHENTICATED=16]="UNAUTHENTICATED",tc[tc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tc[tc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tc[tc.ABORTED=10]="ABORTED",tc[tc.OUT_OF_RANGE=11]="OUT_OF_RANGE",tc[tc.UNIMPLEMENTED=12]="UNIMPLEMENTED",tc[tc.INTERNAL=13]="INTERNAL",tc[tc.UNAVAILABLE=14]="UNAVAILABLE",tc[tc.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sc{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Kr(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return $r(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new jo(Dr.comparator);function rc(){return ic}const oc=new jo(Dr.comparator);function ac(...t){let e=oc;for(const n of t)e=e.insert(n.key,n);return e}function cc(t){let e=oc;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function uc(){return lc()}function hc(){return lc()}function lc(){return new sc((t=>t.toString()),((t,e)=>t.isEqual(e)))}const dc=new jo(Dr.comparator),fc=new Go(Dr.comparator);function pc(...t){let e=fc;for(const n of t)e=e.add(n);return e}const gc=new Go(Er);function mc(){return gc}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,vc.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new yc(Ir.min(),s,mc(),rc(),pc())}constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}}class vc{static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new vc(n,e,pc(),pc(),pc())}constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,e,n,s){this.Et=t,this.removedTargetIds=e,this.key=n,this.At=s}}class Ec{constructor(t,e){this.targetId=t,this.Rt=e}}class Tc{constructor(t,e,n=Wr.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class bc{get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return 0!==this.bt}get Ct(){return this.St}xt(t){t.approximateByteSize()>0&&(this.St=!0,this.Pt=t)}Nt(){let t=pc(),e=pc(),n=pc();return this.vt.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:ir()}})),new vc(this.Pt,this.Vt,t,e,n)}kt(){this.St=!1,this.vt=Sc()}Ot(t,e){this.St=!0,this.vt=this.vt.insert(t,e)}Mt(t){this.St=!0,this.vt=this.vt.remove(t)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}constructor(){this.bt=0,this.vt=Sc(),this.Pt=Wr.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}}class Ic{Qt(t){for(const e of t.Et)t.At&&t.At.isFoundDocument()?this.jt(e,t.At):this.zt(e,t.key,t.At);for(const e of t.removedTargetIds)this.zt(e,t.key,t.At)}Wt(t){this.forEachTarget(t,(e=>{const n=this.Ht(e);switch(t.state){case 0:this.Jt(e)&&n.xt(t.resumeToken);break;case 1:n.$t(),n.Dt||n.kt(),n.xt(t.resumeToken);break;case 2:n.$t(),n.Dt||this.removeTarget(e);break;case 3:this.Jt(e)&&(n.Bt(),n.xt(t.resumeToken));break;case 4:this.Jt(e)&&(this.Yt(e),n.xt(t.resumeToken));break;default:ir()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qt.forEach(((t,n)=>{this.Jt(n)&&e(n)}))}Zt(t){const e=t.targetId,n=t.Rt.count,s=this.Xt(e);if(s){const t=s.target;if(ea(t))if(0===n){const n=new Dr(t.path);this.zt(e,n,Xo.newNoDocument(n,Ir.min()))}else rr(1===n);else this.te(e)!==n&&(this.Yt(e),this.Gt=this.Gt.add(e))}}ee(t){const e=new Map;this.qt.forEach(((n,s)=>{const i=this.Xt(s);if(i){if(n.current&&ea(i.target)){const e=new Dr(i.target.path);null!==this.Ut.get(e)||this.ne(s,e)||this.zt(s,e,Xo.newNoDocument(e,t))}n.Ct&&(e.set(s,n.Nt()),n.kt())}}));let n=pc();this.Kt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const s=new yc(t,e,this.Gt,this.Ut,n);return this.Ut=rc(),this.Kt=_c(),this.Gt=new Go(Er),s}jt(t,e){if(!this.Jt(t))return;const n=this.ne(t,e.key)?2:0;this.Ht(t).Ot(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.Kt=this.Kt.insert(e.key,this.se(e.key).add(t))}zt(t,e,n){if(!this.Jt(t))return;const s=this.Ht(t);this.ne(t,e)?s.Ot(e,1):s.Mt(e),this.Kt=this.Kt.insert(e,this.se(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.qt.delete(t)}te(t){const e=this.Ht(t).Nt();return this.Lt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ft(t){this.Ht(t).Ft()}Ht(t){let e=this.qt.get(t);return e||(e=new bc,this.qt.set(t,e)),e}se(t){let e=this.Kt.get(t);return e||(e=new Go(Er),this.Kt=this.Kt.insert(t,e)),e}Jt(t){const e=null!==this.Xt(t);return e||tr("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.qt.get(t);return e&&e.Dt?null:this.Lt.ie(t)}Yt(t){this.qt.set(t,new bc),this.Lt.getRemoteKeysForTarget(t).forEach((e=>{this.zt(t,e,null)}))}ne(t,e){return this.Lt.getRemoteKeysForTarget(t).has(e)}constructor(t){this.Lt=t,this.qt=new Map,this.Ut=rc(),this.Kt=_c(),this.Gt=new Go(Er)}}function _c(){return new jo(Dr.comparator)}function Sc(){return new jo(Dr.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac={asc:"ASCENDING",desc:"DESCENDING"},Cc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Dc={and:"AND",or:"OR"};class Nc{constructor(t,e){this.databaseId=t,this.yt=e}}function kc(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rc(t,e){return t.yt?e.toBase64():e.toUint8Array()}function Lc(t,e){return kc(t,e.toTimestamp())}function xc(t){return rr(!!t),Ir.fromTimestamp(function(t){const e=Yr(t);return new br(e.seconds,e.nanos)}(t))}function Oc(t,e){return function(t){return new Sr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Mc(t){const e=Sr.fromString(t);return rr(eu(e)),e}function Vc(t,e){return Oc(t.databaseId,e.path)}function Fc(t,e){const n=Mc(e);if(n.get(1)!==t.databaseId.projectId)throw new cr(ar.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new cr(ar.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Dr(qc(n))}function Pc(t,e){return Oc(t.databaseId,e)}function Uc(t){const e=Mc(t);return 4===e.length?Sr.emptyPath():qc(e)}function Bc(t){return new Sr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qc(t){return rr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function jc(t,e,n){return{name:Vc(t,e),fields:n.value.mapValue.fields}}function Kc(t,e){let n;if(e instanceof Ga)n={update:jc(t,e.key,e.value)};else if(e instanceof Xa)n={delete:Vc(t,e.key)};else if(e instanceof Ha)n={update:jc(t,e.key,e.data),updateMask:tu(e.fieldMask)};else{if(!(e instanceof Ya))return ir();n={verify:Vc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Ca)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Da)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ka)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof La)return{fieldPath:e.field.canonicalString(),increment:n.It};throw ir()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Lc(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:ir()}(t,e.precondition)),n}function $c(t,e){return{documents:[Pc(t,e.path)]}}function Gc(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Pc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Pc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0!==t.length)return Zc(So.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Yc(t.field),direction:Qc(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.yt||Gr(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Hc(t){let e=Uc(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){rr(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=zc(t);return e instanceof So&&Co(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Bo(Jc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Gr(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Eo(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Eo(n,e)}(n.endAt)),sa(e,i,o,r,a,"F",c,u)}function zc(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Jc(t.unaryFilter.field);return _o.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Jc(t.unaryFilter.field);return _o.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Jc(t.unaryFilter.field);return _o.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Jc(t.unaryFilter.field);return _o.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ir()}}(t):void 0!==t.fieldFilter?function(t){return _o.create(Jc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ir()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return So.create(t.compositeFilter.filters.map((t=>zc(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return ir()}}(t.compositeFilter.op))}(t):ir()}function Qc(t){return Ac[t]}function Wc(t){return Cc[t]}function Xc(t){return Dc[t]}function Yc(t){return{fieldPath:t.canonicalString()}}function Jc(t){return Cr.fromServerFormat(t.fieldPath)}function Zc(t){return t instanceof _o?function(t){if("=="===t.op){if(mo(t.value))return{unaryFilter:{field:Yc(t.field),op:"IS_NAN"}};if(go(t.value))return{unaryFilter:{field:Yc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(mo(t.value))return{unaryFilter:{field:Yc(t.field),op:"IS_NOT_NAN"}};if(go(t.value))return{unaryFilter:{field:Yc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yc(t.field),op:Wc(t.op),value:t.value}}}(t):t instanceof So?function(t){const e=t.getFilters().map((t=>Zc(t)));return 1===e.length?e[0]:{compositeFilter:{op:Xc(t.op),filters:e}}}(t):ir()}function tu(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function eu(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],su=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],iu=su;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ru{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&qa(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ja(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ja(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=hc();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=Ba(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(Ir.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),pc())}isEqual(t){return this.batchId===t.batchId&&Tr(this.mutations,t.mutations,((t,e)=>$a(t,e)))&&Tr(this.baseMutations,t.baseMutations,((t,e)=>$a(t,e)))}constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}}class ou{static from(t,e,n){rr(t.mutations.length===n.length);let s=dc;const i=t.mutations;for(let t=0;t<i.length;t++)s=s.insert(i[t].key,n[t].version);return new ou(t,e,n,s)}constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{withSequenceNumber(t){return new cu(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new cu(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new cu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}constructor(t,e,n,s,i=Ir.min(),r=Ir.min(),o=Wr.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t){this.oe=t}}function hu(t){const e=Hc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?da(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{ae(t,e){this.he(t,e),e.le()}he(t,e){if("nullValue"in t)this.fe(e,5);else if("booleanValue"in t)this.fe(e,10),e.de(t.booleanValue?1:0);else if("integerValue"in t)this.fe(e,15),e.de(Jr(t.integerValue));else if("doubleValue"in t){const n=Jr(t.doubleValue);isNaN(n)?this.fe(e,13):(this.fe(e,15),Hr(n)?e.de(0):e.de(n))}else if("timestampValue"in t){const n=t.timestampValue;this.fe(e,20),"string"==typeof n?e._e(n):(e._e(`${n.seconds||""}`),e.de(n.nanos||0))}else if("stringValue"in t)this.we(t.stringValue,e),this.me(e);else if("bytesValue"in t)this.fe(e,30),e.ge(Zr(t.bytesValue)),this.me(e);else if("referenceValue"in t)this.ye(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.fe(e,45),e.de(n.latitude||0),e.de(n.longitude||0)}else"mapValue"in t?wo(t)?this.fe(e,Number.MAX_SAFE_INTEGER):(this.pe(t.mapValue,e),this.me(e)):"arrayValue"in t?(this.Ie(t.arrayValue,e),this.me(e)):ir()}we(t,e){this.fe(e,25),this.Te(t,e)}Te(t,e){e._e(t)}pe(t,e){const n=t.fields||{};this.fe(e,55);for(const t of Object.keys(n))this.we(t,e),this.he(n[t],e)}Ie(t,e){const n=t.values||[];this.fe(e,50);for(const t of n)this.he(t,e)}ye(t,e){this.fe(e,37),Dr.fromName(t).path.forEach((t=>{this.fe(e,60),this.Te(t,e)}))}fe(t,e){t.de(e)}me(t){t.de(2)}constructor(){}}lu.Ee=new lu;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class du{addToCollectionParentIndex(t,e){return this.Ze.add(e),Fr.resolve()}getCollectionParents(t,e){return Fr.resolve(this.Ze.getEntries(e))}addFieldIndex(t,e){return Fr.resolve()}deleteFieldIndex(t,e){return Fr.resolve()}getDocumentsMatchingTarget(t,e){return Fr.resolve(null)}getIndexType(t,e){return Fr.resolve(0)}getFieldIndexes(t,e){return Fr.resolve([])}getNextCollectionGroupToUpdate(t){return Fr.resolve(null)}getMinOffset(t,e){return Fr.resolve(Lr.min())}getMinOffsetFromCollectionGroup(t,e){return Fr.resolve(Lr.min())}updateCollectionGroup(t,e,n){return Fr.resolve()}updateIndexEntries(t,e){return Fr.resolve()}constructor(){this.Ze=new fu}}class fu{add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Go(Sr.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Go(Sr.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class pu{static withCacheSize(t){return new pu(t,pu.DEFAULT_COLLECTION_PERCENTILE,pu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pu.DEFAULT_COLLECTION_PERCENTILE=10,pu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pu.DEFAULT=new pu(41943040,pu.DEFAULT_COLLECTION_PERCENTILE,pu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pu.DISABLED=new pu(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gu{next(){return this.Pn+=2,this.Pn}static Vn(){return new gu(0)}static Sn(){return new gu(-1)}constructor(t){this.Pn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mu{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Xo.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Fr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new sc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yu{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&ja(n.mutation,t,zo.empty(),br.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,pc()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=pc()){const s=uc();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=ac();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=uc();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,pc())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=rc();const r=lc(),o=lc();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Ha)?i=i.insert(e.key,e):void 0!==o?(r.set(e.key,o.mutation.getFieldMask()),ja(o.mutation,e,o.mutation.getFieldMask(),br.now())):r.set(e.key,zo.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new yu(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=lc();let s=new jo(((t,e)=>t-e)),i=pc();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||zo.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||pc()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=hc();c.forEach((t=>{if(!i.has(t)){const s=Ba(e.get(t),n.get(t));null!==s&&u.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Fr.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Dr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ca(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):Fr.resolve(uc());let o=-1,a=i;return r.next((e=>Fr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Fr.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,pc()))).next((t=>({batchId:o,changes:cc(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Dr(e)).next((t=>{let e=ac();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=ac();return this.indexManager.getCollectionParents(t,s).next((r=>Fr.forEach(r,(r=>{const o=function(t,e){return new na(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s)))).next((t=>{s.forEach(((e,n)=>{const s=n.getKey();null===t.get(s)&&(t=t.insert(s,Xo.newInvalidDocument(s)))}));let n=ac();return t.forEach(((t,i)=>{const r=s.get(t);void 0!==r&&ja(r.mutation,i,zo.empty(),br.now()),ma(e,i)&&(n=n.insert(t,i))})),n}))}constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{getBundleMetadata(t,e){return Fr.resolve(this.es.get(e))}saveBundleMetadata(t,e){var n;return this.es.set(e.id,{id:(n=e).id,version:n.version,createTime:xc(n.createTime)}),Fr.resolve()}getNamedQuery(t,e){return Fr.resolve(this.ns.get(e))}saveNamedQuery(t,e){return this.ns.set(e.name,function(t){return{name:t.name,query:hu(t.bundledQuery),readTime:xc(t.readTime)}}(e)),Fr.resolve()}constructor(t){this.Tt=t,this.es=new Map,this.ns=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{getOverlay(t,e){return Fr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=uc();return Fr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ce(t,e,s)})),Fr.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.ss.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.ss.delete(n)),Fr.resolve()}getOverlaysForCollection(t,e,n){const s=uc(),i=e.length+1,r=new Dr(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Fr.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new jo(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=uc(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=uc(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return Fr.resolve(o)}ce(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.ss.get(s.largestBatchId).delete(n.key);this.ss.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new au(e,n));let i=this.ss.get(e);void 0===i&&(i=pc(),this.ss.set(e,i)),this.ss.set(e,i.add(n.key))}constructor(){this.overlays=new jo(Dr.comparator),this.ss=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{isEmpty(){return this.rs.isEmpty()}addReference(t,e){const n=new bu(t,e);this.rs=this.rs.add(n),this.us=this.us.add(n)}hs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.ls(new bu(t,e))}fs(t,e){t.forEach((t=>this.removeReference(t,e)))}ds(t){const e=new Dr(new Sr([])),n=new bu(e,t),s=new bu(e,t+1),i=[];return this.us.forEachInRange([n,s],(t=>{this.ls(t),i.push(t.key)})),i}_s(){this.rs.forEach((t=>this.ls(t)))}ls(t){this.rs=this.rs.delete(t),this.us=this.us.delete(t)}ws(t){const e=new Dr(new Sr([])),n=new bu(e,t),s=new bu(e,t+1);let i=pc();return this.us.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new bu(t,0),n=this.rs.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.rs=new Go(bu.os),this.us=new Go(bu.cs)}}class bu{static os(t,e){return Dr.comparator(t.key,e.key)||Er(t.gs,e.gs)}static cs(t,e){return Er(t.gs,e.gs)||Dr.comparator(t.key,e.key)}constructor(t,e){this.key=t,this.gs=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{checkEmpty(t){return Fr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new ru(i,e,n,s);this.mutationQueue.push(r);for(const e of s)this.ps=this.ps.add(new bu(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Fr.resolve(r)}lookupMutationBatch(t,e){return Fr.resolve(this.Is(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Ts(n),i=s<0?0:s;return Fr.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Fr.resolve(0===this.mutationQueue.length?-1:this.ys-1)}getAllMutationBatches(t){return Fr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new bu(e,0),s=new bu(e,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([n,s],(t=>{const e=this.Is(t.gs);i.push(e)})),Fr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Go(Er);return e.forEach((t=>{const e=new bu(t,0),s=new bu(t,Number.POSITIVE_INFINITY);this.ps.forEachInRange([e,s],(t=>{n=n.add(t.gs)}))})),Fr.resolve(this.Es(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;Dr.isDocumentKey(i)||(i=i.child(""));const r=new bu(new Dr(i),0);let o=new Go(Er);return this.ps.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.gs)),!0)}),r),Fr.resolve(this.Es(o))}Es(t){const e=[];return t.forEach((t=>{const n=this.Is(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){rr(0===this.As(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ps;return Fr.forEach(e.mutations,(s=>{const i=new bu(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.ps=n}))}bn(t){}containsKey(t,e){const n=new bu(e,0),s=this.ps.firstAfterOrEqual(n);return Fr.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,Fr.resolve()}As(t,e){return this.Ts(t)}Ts(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Is(t){const e=this.Ts(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ys=1,this.ps=new Go(bu.os)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Rs(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Fr.resolve(n?n.document.mutableCopy():Xo.newInvalidDocument(e))}getEntries(t,e){let n=rc();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Xo.newInvalidDocument(t))})),Fr.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=rc();const r=e.path,o=new Dr(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||xr(Rr(o),n)<=0||(s.has(o.key)||ma(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Fr.resolve(i)}getAllFromCollectionGroup(t,e,n,s){ir()}bs(t,e){return Fr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Su(this)}getSize(t){return Fr.resolve(this.size)}constructor(t){this.Rs=t,this.docs=new jo(Dr.comparator),this.size=0}}class Su extends mu{applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Xn.addEntry(t,s)):this.Xn.removeEntry(n)})),Fr.waitFor(e)}getFromCache(t,e){return this.Xn.getEntry(t,e)}getAllFromCache(t,e){return this.Xn.getEntries(t,e)}constructor(t){super(),this.Xn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{forEachTarget(t,e){return this.vs.forEach(((t,n)=>e(n))),Fr.resolve()}getLastRemoteSnapshotVersion(t){return Fr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Fr.resolve(this.Ps)}allocateTargetId(t){return this.highestTargetId=this.Ss.next(),Fr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ps&&(this.Ps=e),Fr.resolve()}xn(t){this.vs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ss=new gu(e),this.highestTargetId=e),t.sequenceNumber>this.Ps&&(this.Ps=t.sequenceNumber)}addTargetData(t,e){return this.xn(e),this.targetCount+=1,Fr.resolve()}updateTargetData(t,e){return this.xn(e),Fr.resolve()}removeTargetData(t,e){return this.vs.delete(e.target),this.Vs.ds(e.targetId),this.targetCount-=1,Fr.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.vs.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.vs.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Fr.waitFor(i).next((()=>s))}getTargetCount(t){return Fr.resolve(this.targetCount)}getTargetData(t,e){const n=this.vs.get(e)||null;return Fr.resolve(n)}addMatchingKeys(t,e,n){return this.Vs.hs(e,n),Fr.resolve()}removeMatchingKeys(t,e,n){this.Vs.fs(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Fr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Vs.ds(e),Fr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Vs.ws(e);return Fr.resolve(n)}containsKey(t,e){return Fr.resolve(this.Vs.containsKey(e))}constructor(t){this.persistence=t,this.vs=new sc((t=>Zo(t)),ta),this.lastRemoteSnapshotVersion=Ir.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new Tu,this.targetCount=0,this.Ss=gu.Vn()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Eu,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ds[t.toKey()];return n||(n=new Iu(e,this.referenceDelegate),this.Ds[t.toKey()]=n),n}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(t,e,n){tr("MemoryPersistence","Starting transaction:",t);const s=new Du(this.Cs.next());return this.referenceDelegate.Ms(),n(s).next((t=>this.referenceDelegate.Fs(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}$s(t,e){return Fr.or(Object.values(this.Ds).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.Ds={},this.overlays={},this.Cs=new Ur(0),this.xs=!1,this.xs=!0,this.referenceDelegate=t(this),this.Ns=new Au(this),this.indexManager=new du,this.remoteDocumentCache=function(t){return new _u(t)}((t=>this.referenceDelegate.ks(t))),this.Tt=new uu(e),this.Os=new wu(this.Tt)}}class Du extends Mr{constructor(t){super(),this.currentSequenceNumber=t}}class Nu{static qs(t){return new Nu(t)}get Us(){if(this.Ls)return this.Ls;throw ir()}addReference(t,e,n){return this.Bs.addReference(n,e),this.Us.delete(n.toString()),Fr.resolve()}removeReference(t,e,n){return this.Bs.removeReference(n,e),this.Us.add(n.toString()),Fr.resolve()}markPotentiallyOrphaned(t,e){return this.Us.add(e.toString()),Fr.resolve()}removeTarget(t,e){this.Bs.ds(e.targetId).forEach((t=>this.Us.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Us.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ms(){this.Ls=new Set}Fs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Fr.forEach(this.Us,(n=>{const s=Dr.fromPath(n);return this.Ks(t,s).next((t=>{t||e.removeEntry(s,Ir.min())}))})).next((()=>(this.Ls=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ks(t,e).next((t=>{t?this.Us.delete(e.toString()):this.Us.add(e.toString())}))}ks(t){return 0}Ks(t,e){return Fr.or([()=>Fr.resolve(this.Bs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.$s(t,e)])}constructor(t){this.persistence=t,this.Bs=new Tu,this.Ls=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ku{static Ni(t,e){let n=pc(),s=pc();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new ku(t,e.fromCache,n,s)}constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Ci=n,this.xi=s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{initialize(t,e){this.Oi=t,this.indexManager=e,this.ki=!0}getDocumentsMatchingQuery(t,e,n,s){return this.Mi(t,e).next((i=>i||this.Fi(t,e,s,n))).next((n=>n||this.$i(t,e)))}Mi(t,e){if(ra(e))return Fr.resolve(null);let n=ha(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=da(e,null,"F"),n=ha(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const i=pc(...s);return this.Oi.getDocuments(t,i).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.Bi(e,s);return this.Li(e,r,i,n.readTime)?this.Mi(t,da(e,null,"F")):this.qi(t,r,e,n)}))))})))))}Fi(t,e,n,s){return ra(e)||s.isEqual(Ir.min())?this.$i(t,e):this.Oi.getDocuments(t,n).next((i=>{const r=this.Bi(e,i);return this.Li(e,r,n,s)?this.$i(t,e):(Zi()<=H.DEBUG&&tr("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ga(e)),this.qi(t,r,e,kr(s,-1)))}))}Bi(t,e){let n=new Go(va(t));return e.forEach(((e,s)=>{ma(t,s)&&(n=n.add(s))})),n}Li(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}$i(t,e){return Zi()<=H.DEBUG&&tr("QueryEngine","Using full collection scan to execute query:",ga(e)),this.Oi.getDocumentsMatchingQuery(t,e,Lr.min())}qi(t,e,n,s){return this.Oi.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.ki=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new vu(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ki)))}constructor(t,e,n,s){this.persistence=t,this.Ui=e,this.Tt=s,this.Ki=new jo(Er),this.Gi=new sc((t=>Zo(t)),ta),this.Qi=new Map,this.ji=t.getRemoteDocumentCache(),this.Ns=t.getTargetCache(),this.Os=t.getBundleCache(),this.zi(n)}}function xu(t,e,n,s){return new Lu(t,e,n,s)}async function Ou(t,e){const n=or(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.zi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=pc();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Wi:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function Mu(t){const e=or(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ns.getLastRemoteSnapshotVersion(t)))}function Vu(t,e,n){let s=pc(),i=pc();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=rc();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(Ir.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):tr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{Hi:s,Ji:i}}))}function Fu(t,e){const n=or(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Pu(t,e){const n=or(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Ns.getTargetData(t,e).next((i=>i?(s=i,Fr.resolve(s)):n.Ns.allocateTargetId(t).next((i=>(s=new cu(e,i,0,t.currentSequenceNumber),n.Ns.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Ki.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(t.targetId,t),n.Gi.set(e,t.targetId)),t}))}async function Uu(t,e,n){const s=or(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Pr(t))throw t;tr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function Bu(t,e,n){const s=or(t);let i=Ir.min(),r=pc();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=or(t),i=s.Gi.get(n);return void 0!==i?Fr.resolve(s.Ki.get(i)):s.Ns.getTargetData(e,n)}(s,t,ha(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Ui.getDocumentsMatchingQuery(t,e,n?i:Ir.min(),n?r:pc()))).next((t=>(qu(s,ya(e),t),{documents:t,Yi:r})))))}function qu(t,e,n){let s=t.Qi.get(e)||Ir.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Qi.set(e,s)}class ju{sr(t){this.activeTargetIds=this.activeTargetIds.add(t)}ir(t){this.activeTargetIds=this.activeTargetIds.delete(t)}nr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=mc()}}class Ku{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Ur.sr(t),this.Kr[t]||"not-current"}updateQueryState(t,e,n){this.Kr[t]=e}removeLocalQueryTarget(t){this.Ur.ir(t)}isLocalQueryTarget(t){return this.Ur.activeTargetIds.has(t)}clearQueryState(t){delete this.Kr[t]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(t){return this.Ur.activeTargetIds.has(t)}start(){return this.Ur=new ju,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Ur=new ju,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{Gr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{Gr(t){this.Hr.push(t)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){tr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Hr)t(0)}Wr(){tr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Hr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{Xr(t){this.eo=t}no(t){this.so=t}onMessage(t){this.io=t}close(){this.Zr()}send(t){this.Yr(t)}ro(){this.eo()}oo(t){this.so(t)}uo(t){this.io(t)}constructor(t){this.Yr=t.Yr,this.Zr=t.Zr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends class{get ho(){return!1}lo(t,e,n,s,i){const r=this.fo(t,e);tr("RestConnection","Sending: ",r,n);const o={};return this._o(o,s,i),this.wo(t,r,o,n).then((t=>(tr("RestConnection","Received: ",t),t)),(e=>{throw nr("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}mo(t,e,n,s,i,r){return this.lo(t,e,n,s,i)}_o(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Yi,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}fo(t,e){const n=Hu[t];return`${this.co}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.co=e+"://"+t.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{wo(t,e,n,s){return new Promise(((i,r)=>{const o=new Qi;o.setWithCredentials(!0),o.listenOnce(Ki.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case ji.NO_ERROR:const e=o.getResponseJson();tr("Connection","XHR received:",JSON.stringify(e)),i(e);break;case ji.TIMEOUT:tr("Connection",'RPC "'+t+'" timed out'),r(new cr(ar.DEADLINE_EXCEEDED,"Request time out"));break;case ji.HTTP_ERROR:const n=o.getStatus();if(tr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ar).indexOf(e)>=0?e:ar.UNKNOWN}(e.status);r(new cr(t,e.message))}else r(new cr(ar.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new cr(ar.UNAVAILABLE,"Connection failed."));break;default:ir()}}finally{tr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}yo(t,e,n){const s=[this.co,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Bi(),r=qi(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Hi({})),this._o(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=s.join("");tr("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let u=!1,h=!1;const l=new zu({Yr:t=>{h?tr("Connection","Not sending because WebChannel is closed:",t):(u||(tr("Connection","Opening WebChannel transport."),c.open(),u=!0),tr("Connection","WebChannel sending:",t),c.send(t))},Zr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,zi.EventType.OPEN,(()=>{h||tr("Connection","WebChannel transport opened.")})),d(c,zi.EventType.CLOSE,(()=>{h||(h=!0,tr("Connection","WebChannel transport closed"),l.oo())})),d(c,zi.EventType.ERROR,(t=>{h||(h=!0,nr("Connection","WebChannel transport errored:",t),l.oo(new cr(ar.UNAVAILABLE,"The operation could not be completed")))})),d(c,zi.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];rr(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){tr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Za[t];if(void 0!==e)return nc(e)}(t),n=i.message;void 0===e&&(e=ar.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,l.oo(new cr(e,n)),c.close()}else tr("Connection","WebChannel received:",n),l.uo(n)}})),d(r,$i.STAT_EVENT,(t=>{t.stat===Gi.PROXY?tr("Connection","Detected buffering proxy"):t.stat===Gi.NOPROXY&&tr("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.ro()}),0),l}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t){return new Nc(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{reset(){this.Eo=0}bo(){this.Eo=this.To}vo(t){this.cancel();const e=Math.floor(this.Eo+this.Po()),n=Math.max(0,Date.now()-this.Ro),s=Math.max(0,e-n);s>0&&tr("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Eo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,s,(()=>(this.Ro=Date.now(),t()))),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){null!==this.Ao&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){null!==this.Ao&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}constructor(t,e,n=1e3,s=1.5,i=6e4){this.Ys=t,this.timerId=e,this.po=n,this.Io=s,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{Oo(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&null===this.xo&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,(()=>this.Lo())))}qo(t){this.Uo(),this.stream.send(t)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(t,e){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,4!==t?this.ko.reset():e&&e.code===ar.RESOURCE_EXHAUSTED?(er(e.toString()),er("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):e&&e.code===ar.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Go(),this.stream.close(),this.stream=null),this.state=t,await this.listener.no(e)}Go(){}auth(){this.state=1;const t=this.Qo(this.Co),e=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Co===e&&this.jo(t,n)}),(e=>{t((()=>{const t=new cr(ar.UNKNOWN,"Fetching auth token failed: "+e.message);return this.zo(t)}))}))}jo(t,e){const n=this.Qo(this.Co);this.stream=this.Wo(t,e),this.stream.Xr((()=>{n((()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,(()=>(this.Mo()&&(this.state=3),Promise.resolve()))),this.listener.Xr())))})),this.stream.no((t=>{n((()=>this.zo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Fo(){this.state=5,this.ko.vo((async()=>{this.state=0,this.start()}))}zo(t){return tr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Qo(t){return e=>{this.Ys.enqueueAndForget((()=>this.Co===t?e():(tr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,s,i,r,o,a){this.Ys=t,this.So=n,this.Do=s,this.connection=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Yu(t,e)}}class Zu extends Ju{Wo(t,e){return this.connection.yo("Listen",t,e)}onMessage(t){this.ko.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ir()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.yt?(rr(void 0===e||"string"==typeof e),Wr.fromBase64String(e||"")):(rr(void 0===e||e instanceof Uint8Array),Wr.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?ar.UNKNOWN:nc(t.code);return new cr(e,t.message||"")}(o);n=new Tc(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Fc(t,s.document.name),r=xc(s.document.updateTime),o=s.document.createTime?xc(s.document.createTime):Ir.min(),a=new Qo({mapValue:{fields:s.document.fields}}),c=Xo.newFoundDocument(i,r,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new wc(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Fc(t,s.document),r=s.readTime?xc(s.readTime):Ir.min(),o=Xo.newNoDocument(i,r),a=s.removedTargetIds||[];n=new wc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Fc(t,s.document),r=s.removedTargetIds||[];n=new wc([],r,i,null)}else{if(!("filter"in e))return ir();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new Ja(s),r=t.targetId;n=new Ec(r,i)}}return n}(this.Tt,t),n=function(t){if(!("targetChange"in t))return Ir.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ir.min():e.readTime?xc(e.readTime):Ir.min()}(t);return this.listener.Ho(e,n)}Jo(t){const e={};e.database=Bc(this.Tt),e.addTarget=function(t,e){let n;const s=e.target;return n=ea(s)?{documents:$c(t,s)}:{query:Gc(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Rc(t,e.resumeToken):e.snapshotVersion.compareTo(Ir.min())>0&&(n.readTime=kc(t,e.snapshotVersion.toTimestamp())),n}(this.Tt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ir()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.Tt,t);n&&(e.labels=n),this.qo(e)}Yo(t){const e={};e.database=Bc(this.Tt),e.removeTarget=t,this.qo(e)}constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.Tt=i}}class th extends Ju{get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(t,e){return this.connection.yo("Write",t,e)}onMessage(t){if(rr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Zo){this.ko.reset();const e=function(t,e){return t&&t.length>0?(rr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?xc(t.updateTime):xc(e);return n.isEqual(Ir.min())&&(n=xc(e)),new Va(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=xc(t.commitTime);return this.listener.eu(n,e)}return rr(!t.writeResults||0===t.writeResults.length),this.Zo=!0,this.listener.nu()}su(){const t={};t.database=Bc(this.Tt),this.qo(t)}tu(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Kc(this.Tt,t)))};this.qo(e)}constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.Tt=i,this.Zo=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh extends class{}{ru(){if(this.iu)throw new cr(ar.FAILED_PRECONDITION,"The client has already been terminated.")}lo(t,e,n){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.lo(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ar.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new cr(ar.UNKNOWN,t.toString())}))}mo(t,e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.mo(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ar.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new cr(ar.UNKNOWN,t.toString())}))}terminate(){this.iu=!0}constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.Tt=s,this.iu=!1}}class nh{au(){0===this.ou&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve()))))}fu(t){"Online"===this.state?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.hu("Offline")))}set(t){this.du(),this.ou=0,"Online"===t&&(this.cu=!1),this.hu(t)}hu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}lu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(er(e),this.cu=!1):tr("OnlineStateTracker",e)}du(){null!==this.uu&&(this.uu.cancel(),this.uu=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr((t=>{n.enqueueAndForget((async()=>{dh(this)&&(tr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=or(t);e.mu.add(4),await rh(e),e.pu.set("Unknown"),e.mu.delete(4),await ih(e)}(this))}))})),this.pu=new nh(n,s)}}async function ih(t){if(dh(t))for(const e of t.gu)await e(!0)}async function rh(t){for(const e of t.gu)await e(!1)}function oh(t,e){const n=or(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),lh(n)?hh(n):kh(n).Mo()&&ch(n,e))}function ah(t,e){const n=or(t),s=kh(n);n.wu.delete(e),s.Mo()&&uh(n,e),0===n.wu.size&&(s.Mo()?s.Bo():dh(n)&&n.pu.set("Unknown"))}function ch(t,e){t.Iu.Ft(e.targetId),kh(t).Jo(e)}function uh(t,e){t.Iu.Ft(e),kh(t).Yo(e)}function hh(t){t.Iu=new Ic({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),kh(t).start(),t.pu.au()}function lh(t){return dh(t)&&!kh(t).Oo()&&t.wu.size>0}function dh(t){return 0===or(t).mu.size}function fh(t){t.Iu=void 0}async function ph(t){t.wu.forEach(((e,n)=>{ch(t,e)}))}async function gh(t,e){fh(t),lh(t)?(t.pu.fu(e),hh(t)):t.pu.set("Unknown")}async function mh(t,e,n){if(t.pu.set("Online"),e instanceof Tc&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.wu.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.wu.delete(s),t.Iu.removeTarget(s))}(t,e)}catch(n){tr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await yh(t,n)}else if(e instanceof wc?t.Iu.Qt(e):e instanceof Ec?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(Ir.min()))try{const e=await Mu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Iu.ee(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.wu.get(s);i&&t.wu.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.wu.get(e);if(!n)return;t.wu.set(e,n.withResumeToken(Wr.EMPTY_BYTE_STRING,n.snapshotVersion)),uh(t,e);const s=new cu(n.target,e,1,n.sequenceNumber);ch(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){tr("RemoteStore","Failed to raise snapshot:",e),await yh(t,e)}}async function yh(t,e,n){if(!Pr(e))throw e;t.mu.add(1),await rh(t),t.pu.set("Offline"),n||(n=()=>Mu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{tr("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await ih(t)}))}function vh(t,e){return e().catch((n=>yh(t,n,e)))}async function wh(t){const e=or(t),n=Rh(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;Eh(e);)try{const t=await Fu(e.localStore,s);if(null===t){0===e._u.length&&n.Bo();break}s=t.batchId,Th(e,t)}catch(t){await yh(e,t)}bh(e)&&Ih(e)}function Eh(t){return dh(t)&&t._u.length<10}function Th(t,e){t._u.push(e);const n=Rh(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function bh(t){return dh(t)&&!Rh(t).Oo()&&t._u.length>0}function Ih(t){Rh(t).start()}async function _h(t){Rh(t).su()}async function Sh(t){const e=Rh(t);for(const n of t._u)e.tu(n.mutations)}async function Ah(t,e,n){const s=t._u.shift(),i=ou.from(s,e,n);await vh(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await wh(t)}async function Ch(t,e){e&&Rh(t).Xo&&await async function(t,e){if(ec(n=e.code)&&n!==ar.ABORTED){const n=t._u.shift();Rh(t).$o(),await vh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await wh(t)}var n}(t,e),bh(t)&&Ih(t)}async function Dh(t,e){const n=or(t);n.asyncQueue.verifyOperationInProgress(),tr("RemoteStore","RemoteStore received new credentials");const s=dh(n);n.mu.add(3),await rh(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await ih(n)}async function Nh(t,e){const n=or(t);e?(n.mu.delete(2),await ih(n)):e||(n.mu.add(2),await rh(n),n.pu.set("Unknown"))}function kh(t){return t.Tu||(t.Tu=function(t,e,n){const s=or(t);return s.ru(),new Zu(e,s.connection,s.authCredentials,s.appCheckCredentials,s.Tt,n)}(t.datastore,t.asyncQueue,{Xr:ph.bind(null,t),no:gh.bind(null,t),Ho:mh.bind(null,t)}),t.gu.push((async e=>{e?(t.Tu.$o(),lh(t)?hh(t):t.pu.set("Unknown")):(await t.Tu.stop(),fh(t))}))),t.Tu}function Rh(t){return t.Eu||(t.Eu=function(t,e,n){const s=or(t);return s.ru(),new th(e,s.connection,s.authCredentials,s.appCheckCredentials,s.Tt,n)}(t.datastore,t.asyncQueue,{Xr:_h.bind(null,t),no:Ch.bind(null,t),nu:Sh.bind(null,t),eu:Ah.bind(null,t)}),t.gu.push((async e=>{e?(t.Eu.$o(),await wh(t)):(await t.Eu.stop(),t._u.length>0&&(tr("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))}))),t.Eu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Lh{static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new Lh(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new cr(ar.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function xh(t,e){if(er("AsyncQueue",`${e}: ${t}`),Pr(t))return new cr(ar.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{static emptySet(t){return new Oh(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Oh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Oh;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}constructor(t){this.comparator=t?(e,n)=>t(e,n)||Dr.comparator(e.key,n.key):(t,e)=>Dr.comparator(t.key,e.key),this.keyedMap=ac(),this.sortedSet=new jo(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{track(t){const e=t.doc.key,n=this.Au.get(e);n?0!==t.type&&3===n.type?this.Au=this.Au.insert(e,t):3===t.type&&1!==n.type?this.Au=this.Au.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Au=this.Au.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Au=this.Au.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Au=this.Au.remove(e):1===t.type&&2===n.type?this.Au=this.Au.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Au=this.Au.insert(e,{type:2,doc:t.doc}):ir():this.Au=this.Au.insert(e,t)}Ru(){const t=[];return this.Au.inorderTraversal(((e,n)=>{t.push(n)})),t}constructor(){this.Au=new jo(Dr.comparator)}}class Vh{static fromInitialDocuments(t,e,n,s,i){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new Vh(t,e,Oh.emptySet(e),r,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&fa(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}constructor(t,e,n,s,i,r,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.bu=void 0,this.listeners=[]}}class Ph{constructor(){this.queries=new sc((t=>pa(t)),fa),this.onlineState="Unknown",this.vu=new Set}}async function Uh(t,e){const n=or(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Fh),i)try{r.bu=await n.onListen(s)}catch(t){const n=xh(t,`Initialization of query '${ga(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&Kh(n)}async function Bh(t,e){const n=or(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function qh(t,e){const n=or(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.Vu(t)&&(s=!0);i.bu=t}}s&&Kh(n)}function jh(t,e,n){const s=or(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function Kh(t){t.vu.forEach((t=>{t.next()}))}class $h{Vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Vh(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Du?this.xu(t)&&(this.Su.next(t),e=!0):this.Nu(t,this.onlineState)&&(this.ku(t),e=!0),this.Cu=t,e}onError(t){this.Su.error(t)}Pu(t){this.onlineState=t;let e=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,t)&&(this.ku(this.Cu),e=!0),e}Nu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Ou||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}xu(t){if(t.docChanges.length>0)return!0;const e=this.Cu&&this.Cu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}ku(t){t=Vh.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Du=!0,this.Su.next(t)}constructor(t,e,n){this.query=t,this.Su=e,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gh{constructor(t){this.key=t}}class Hh{constructor(t){this.key=t}}class zh{get Wu(){return this.Ku}Hu(t,e){const n=e?e.Ju:new Mh,s=e?e.zu:this.zu;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),h=ma(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Yu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.ju(h,a)>0||c&&this.ju(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(r=r.add(h),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{zu:r,Ju:n,Li:o,mutatedKeys:i}}Yu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.zu;this.zu=t.zu,this.mutatedKeys=t.mutatedKeys;const i=t.Ju.Ru();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ir()}};return n(t)-n(e)}(t.type,e.type)||this.ju(t.doc,e.doc))),this.Zu(n);const r=e?this.Xu():[],o=0===this.Qu.size&&this.current?1:0,a=o!==this.Gu;return this.Gu=o,0!==i.length||a?{snapshot:new Vh(this.query,t.zu,s,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),tc:r}:{tc:r}}Pu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Mh,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(t){return!this.Ku.has(t)&&!!this.zu.has(t)&&!this.zu.get(t).hasLocalMutations}Zu(t){t&&(t.addedDocuments.forEach((t=>this.Ku=this.Ku.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Ku=this.Ku.delete(t))),this.current=t.current)}Xu(){if(!this.current)return[];const t=this.Qu;this.Qu=pc(),this.zu.forEach((t=>{this.ec(t.key)&&(this.Qu=this.Qu.add(t.key))}));const e=[];return t.forEach((t=>{this.Qu.has(t)||e.push(new Hh(t))})),this.Qu.forEach((n=>{t.has(n)||e.push(new Gh(n))})),e}nc(t){this.Ku=t.Yi,this.Qu=pc();const e=this.Hu(t.documents);return this.applyChanges(e,!0)}sc(){return Vh.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,0===this.Gu,this.hasCachedResults)}constructor(t,e){this.query=t,this.Ku=e,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=pc(),this.mutatedKeys=pc(),this.ju=va(t),this.zu=new Oh(this.ju)}}class Qh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Wh{constructor(t){this.key=t,this.ic=!1}}class Xh{get isPrimaryClient(){return!0===this.wc}constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.rc={},this.oc=new sc((t=>pa(t)),fa),this.uc=new Map,this.cc=new Set,this.ac=new jo(Dr.comparator),this.hc=new Map,this.lc=new Tu,this.fc={},this.dc=new Map,this._c=gu.Sn(),this.onlineState="Unknown",this.wc=void 0}}async function Yh(t,e){const n=gl(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const t=await Pu(n.localStore,ha(e));n.isPrimaryClient&&oh(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await Jh(n,e,s,"current"===r,t.resumeToken)}return i}async function Jh(t,e,n,s,i){t.mc=(e,n,s)=>async function(t,e,n,s){let i=e.view.Hu(n);i.Li&&(i=await Bu(t.localStore,e.query,!1).then((({documents:t})=>e.view.Hu(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return ul(t,e.targetId,o.tc),o.snapshot}(t,e,n,s);const r=await Bu(t.localStore,e,!0),o=new zh(e,r.Yi),a=o.Hu(r.documents),c=vc.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);ul(t,n,u.tc);const h=new Qh(e,n,o);return t.oc.set(e,h),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),u.snapshot}async function Zh(t,e){const n=or(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter((t=>!fa(t,e)))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Uu(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),ah(n.remoteStore,s.targetId),al(n,s.targetId)})).catch(Vr)):(al(n,s.targetId),await Uu(n.localStore,s.targetId,!0))}async function tl(t,e){const n=or(t);try{const t=await function(t,e){const n=or(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const o=[];e.targetChanges.forEach(((r,a)=>{const c=i.get(a);if(!c)return;o.push(n.Ns.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Ns.addMatchingKeys(t,r.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Wr.EMPTY_BYTE_STRING,Ir.min()).withLastLimboFreeSnapshotVersion(Ir.min()):r.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(r.resumeToken,s)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,r)&&o.push(n.Ns.updateTargetData(t,u))}));let a=rc(),c=pc();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(Vu(t,r,e.documentUpdates).next((t=>{a=t.Hi,c=t.Ji}))),!s.isEqual(Ir.min())){const e=n.Ns.getLastRemoteSnapshotVersion(t).next((e=>n.Ns.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Fr.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ki=i,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.hc.get(e);s&&(rr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.ic=!0:t.modifiedDocuments.size>0?rr(s.ic):t.removedDocuments.size>0&&(rr(s.ic),s.ic=!1))})),await dl(n,t,e)}catch(t){await Vr(t)}}function el(t,e,n){const s=or(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.oc.forEach(((n,s)=>{const i=s.view.Pu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=or(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Pu(e)&&(s=!0)})),s&&Kh(n)}(s.eventManager,e),t.length&&s.rc.Ho(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function nl(t,e,n){const s=or(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let t=new jo(Dr.comparator);t=t.insert(r,Xo.newNoDocument(r,Ir.min()));const n=pc().add(r),i=new yc(Ir.min(),new Map,new Go(Er),t,n);await tl(s,i),s.ac=s.ac.remove(r),s.hc.delete(e),ll(s)}else await Uu(s.localStore,e,!1).then((()=>al(s,e,n))).catch(Vr)}async function sl(t,e){const n=or(t),s=e.batch.batchId;try{const t=await function(t,e){const n=or(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=Fr.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);rr(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=pc();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(n.localStore,e);ol(n,s,null),rl(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await dl(n,t)}catch(t){await Vr(t)}}async function il(t,e,n){const s=or(t);try{const t=await function(t,e){const n=or(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(rr(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);ol(s,e,n),rl(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await dl(s,t)}catch(n){await Vr(n)}}function rl(t,e){(t.dc.get(e)||[]).forEach((t=>{t.resolve()})),t.dc.delete(e)}function ol(t,e,n){const s=or(t);let i=s.fc[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function al(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach((e=>{t.lc.containsKey(e)||cl(t,e)}))}function cl(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);null!==n&&(ah(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),ll(t))}function ul(t,e,n){for(const s of n)s instanceof Gh?(t.lc.addReference(s.key,e),hl(t,s)):s instanceof Hh?(tr("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||cl(t,s.key)):ir()}function hl(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(tr("SyncEngine","New document in limbo: "+n),t.cc.add(s),ll(t))}function ll(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new Dr(Sr.fromString(e)),s=t._c.next();t.hc.set(s,new Wh(n)),t.ac=t.ac.insert(n,s),oh(t.remoteStore,new cu(ha(ia(n.path)),s,2,Ur.at))}}async function dl(t,e,n){const s=or(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach(((t,a)=>{o.push(s.mc(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=ku.Ni(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.rc.Ho(i),await async function(t,e){const n=or(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Fr.forEach(e,(e=>Fr.forEach(e.Ci,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Fr.forEach(e.xi,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Pr(t))throw t;tr("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Ki.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.Ki=n.Ki.insert(e,i)}}}(s.localStore,r))}async function fl(t,e){const n=or(t);if(!n.currentUser.isEqual(e)){tr("SyncEngine","User change. New user:",e.toKey());const t=await Ou(n.localStore,e);n.currentUser=e,function(t,e){t.dc.forEach((t=>{t.forEach((t=>{t.reject(new cr(ar.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.dc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await dl(n,t.Wi)}}function pl(t,e){const n=or(t),s=n.hc.get(e);if(s&&s.ic)return pc().add(s.key);{let t=pc();const s=n.uc.get(e);if(!s)return t;for(const e of s){const s=n.oc.get(e);t=t.unionWith(s.view.Wu)}return t}}function gl(t){const e=or(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nl.bind(null,e),e.rc.Ho=qh.bind(null,e.eventManager),e.rc.gc=jh.bind(null,e.eventManager),e}function ml(t){const e=or(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sl.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=il.bind(null,e),e}class yl{async initialize(t){this.Tt=Xu(t.databaseInfo.databaseId),this.sharedClientState=this.Ic(t),this.persistence=this.Tc(t),await this.persistence.start(),this.localStore=this.Ec(t),this.gcScheduler=this.Ac(t,this.localStore),this.indexBackfillerScheduler=this.Rc(t,this.localStore)}Ac(t,e){return null}Rc(t,e){return null}Ec(t){return xu(this.persistence,new Ru,t.initialUser,this.Tt)}Tc(t){return new Cu(Nu.qs,this.Tt)}Ic(t){return new Ku}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class vl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>el(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=fl.bind(null,this.syncEngine),await Nh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ph}createDatastore(t){const e=Xu(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Qu(s));var s;return function(t,e,n,s){return new eh(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){var e,n,s,i,r;return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>el(this.syncEngine,t,0),r=Gu.C()?new Gu:new $u,new sh(e,n,s,i,r)}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Xh(t,e,n,s,i,r);return o&&(a.wc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=or(t);tr("RemoteStore","RemoteStore shutting down."),e.mu.add(5),await rh(e),e.yu.shutdown(),e.pu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wl{next(t){this.observer.next&&this.vc(this.observer.next,t)}error(t){this.observer.error?this.vc(this.observer.error,t):er("Uncaught Error in snapshot listener:",t.toString())}Pc(){this.muted=!0}vc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class El{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new cr(ar.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=xh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Xi.UNAUTHENTICATED,this.clientId=wr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{tr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(tr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function Tl(t,e){t.asyncQueue.verifyOperationInProgress(),tr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Ou(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function bl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Il(t);tr("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>Dh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Dh(e.remoteStore,n))),t.onlineComponents=e}async function Il(t){return t.offlineComponents||(tr("FirestoreClient","Using default OfflineComponentProvider"),await Tl(t,new yl)),t.offlineComponents}async function _l(t){return t.onlineComponents||(tr("FirestoreClient","Using default OnlineComponentProvider"),await bl(t,new vl)),t.onlineComponents}function Sl(t){return _l(t).then((t=>t.syncEngine))}async function Al(t){const e=await _l(t),n=e.eventManager;return n.onListen=Yh.bind(null,e.syncEngine),n.onUnlisten=Zh.bind(null,e.syncEngine),n}function Cl(t,e,n={}){const s=new ur;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new wl({next:n=>{e.enqueueAndForget((()=>Bh(t,o))),n.fromCache&&"server"===s.source?i.reject(new cr(ar.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new $h(n,r,{includeMetadataChanges:!0,Ou:!0});return Uh(t,o)}(await Al(t),t.asyncQueue,e,n,s))),s.promise}const Dl=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t,e,n){if(!n)throw new cr(ar.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kl(t){if(!Dr.isDocumentKey(t))throw new cr(ar.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Rl(t){if(Dr.isDocumentKey(t))throw new cr(ar.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ll(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ir()}function xl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new cr(ar.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ll(t);throw new cr(ar.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ol{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new cr(ar.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new cr(ar.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new cr(ar.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{get app(){if(!this._app)throw new cr(ar.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new cr(ar.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ol(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new lr;switch(t.type){case"gapi":const e=t.client;return new gr(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new cr(ar.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Dl.get(t);e&&(tr("ComponentProvider","Removing Datastore"),Dl.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ol({}),this._settingsFrozen=!1}}function Vl(t,e,n,s={}){var i;const r=(t=xl(t,Ml))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&nr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=Xi.MOCK_USER;else{e=x(s.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new cr(ar.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Xi(r)}t._authCredentials=new dr(new hr(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ul(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Fl(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class Pl{withConverter(t){return new Pl(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class Ul extends Pl{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Fl(this.firestore,null,new Dr(t))}withConverter(t){return new Ul(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,ia(n)),this._path=n,this.type="collection"}}function Bl(t,e,...n){if(t=B(t),1===arguments.length&&(e=wr.R()),Nl("doc","path",e),t instanceof Ml){const s=Sr.fromString(e,...n);return kl(s),new Fl(t,null,new Dr(s))}{if(!(t instanceof Fl||t instanceof Ul))throw new cr(ar.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Sr.fromString(e,...n));return kl(s),new Fl(t.firestore,t instanceof Ul?t.converter:null,new Dr(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ql{get isShuttingDown(){return this.Kc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Jc(),this.Yc(t)}enterRestrictedMode(t){if(!this.Kc){this.Kc=!0,this.zc=t||!1;const e=Wu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Hc)}}enqueue(t){if(this.Jc(),this.Kc)return new Promise((()=>{}));const e=new ur;return this.Yc((()=>this.Kc&&this.zc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Uc.push(t),this.Zc())))}async Zc(){if(0!==this.Uc.length){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(t){if(!Pr(t))throw t;tr("AsyncQueue","Operation failed with retryable error: "+t)}this.Uc.length>0&&this.ko.vo((()=>this.Zc()))}}Yc(t){const e=this.qc.then((()=>(this.jc=!0,t().catch((t=>{this.Qc=t,this.jc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t);throw er("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.jc=!1,t))))));return this.qc=e,e}enqueueAfterDelay(t,e,n){this.Jc(),this.Wc.indexOf(t)>-1&&(e=0);const s=Lh.createAndSchedule(this,t,e,n,(t=>this.Xc(t)));return this.Gc.push(s),s}Jc(){this.Qc&&ir()}verifyOperationInProgress(){}async ta(){let t;do{t=this.qc,await t}while(t!==this.qc)}ea(t){for(const e of this.Gc)if(e.timerId===t)return!0;return!1}na(t){return this.ta().then((()=>{this.Gc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Gc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ta()}))}sa(t){this.Wc.push(t)}Xc(t){const e=this.Gc.indexOf(t);this.Gc.splice(e,1)}constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Yu(this,"async_queue_retry"),this.Hc=()=>{const t=Wu();t&&tr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ko.Vo()};const t=Wu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Hc)}}class jl extends Ml{_terminate(){return this._firestoreClient||Gl(this),this._firestoreClient.terminate()}constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new ql,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}}function Kl(t,e){const n="string"==typeof t?t:e||"(default)",s=Ct("object"==typeof t?t:Rt(),"firestore").getImmediate({identifier:n});if(!s._initialized){const t=k("firestore");t&&Vl(s,...t)}return s}function $l(t){return t._firestoreClient||Gl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Gl(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Br(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new El(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hl{static fromBase64String(t){try{return new Hl(Wr.fromBase64String(t))}catch(t){throw new cr(ar.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Hl(Wr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new cr(ar.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Cr(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ql{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Er(this._lat,t._lat)||Er(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new cr(ar.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new cr(ar.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=/^__.*__$/;class Yl{toMutation(t,e){return null!==this.fieldMask?new Ha(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ga(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}class Jl{toMutation(t,e){return new Ha(t,this.data,this.fieldMask,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function Zl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ir()}}class td{get path(){return this.settings.path}get ra(){return this.settings.ra}oa(t){return new td(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.oa({path:n,ca:!1});return s.aa(t),s}ha(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.oa({path:n,ca:!1});return s.ia(),s}la(t){return this.oa({path:void 0,ca:!0})}fa(t){return md(t,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}ia(){if(this.path)for(let t=0;t<this.path.length;t++)this.aa(this.path.get(t))}aa(t){if(0===t.length)throw this.fa("Document fields must not be empty");if(Zl(this.ra)&&Xl.test(t))throw this.fa('Document fields cannot begin and end with "__"')}constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.Tt=n,this.ignoreUndefinedProperties=s,void 0===i&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=r||[]}}class ed{wa(t,e,n,s=!1){return new td({ra:t,methodName:e,_a:n,path:Cr.emptyPath(),ca:!1,da:s},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.Tt=n||Xu(t)}}function nd(t){const e=t._freezeSettings(),n=Xu(t._databaseId);return new ed(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sd(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);dd("Data must be an object, but it was:",o,s);const a=hd(s,o);let c,u;if(r.merge)c=new zo(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=fd(e,s,n);if(!o.contains(i))throw new cr(ar.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);yd(t,i)||t.push(i)}c=new zo(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Yl(new Qo(a),c,u)}class id extends Ql{_toFieldTransform(t){if(2!==t.ra)throw 1===t.ra?t.fa(`${this._methodName}() can only appear at the top level of your update data`):t.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof id}}class rd extends Ql{_toFieldTransform(t){return new Ma(t.path,new Ca)}isEqual(t){return t instanceof rd}}function od(t,e,n,s){const i=t.wa(1,e,n);dd("Data must be an object, but it was:",i,s);const r=[],o=Qo.empty();Kr(s,((t,s)=>{const a=gd(e,t,n);s=B(s);const c=i.ha(a);if(s instanceof id)r.push(a);else{const t=ud(s,c);null!=t&&(r.push(a),o.set(a,t))}}));const a=new zo(r);return new Jl(o,a,i.fieldTransforms)}function ad(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[fd(e,s,n)],c=[i];if(r.length%2!=0)throw new cr(ar.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<r.length;t+=2)a.push(fd(e,r[t])),c.push(r[t+1]);const u=[],h=Qo.empty();for(let t=a.length-1;t>=0;--t)if(!yd(u,a[t])){const e=a[t];let n=c[t];n=B(n);const s=o.ha(e);if(n instanceof id)u.push(e);else{const t=ud(n,s);null!=t&&(u.push(e),h.set(e,t))}}const l=new zo(u);return new Jl(h,l,o.fieldTransforms)}function cd(t,e,n,s=!1){return ud(n,t.wa(s?4:3,e))}function ud(t,e){if(ld(t=B(t)))return dd("Unsupported field value:",e,t),hd(t,e);if(t instanceof Ql)return function(t,e){if(!Zl(e.ra))throw e.fa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.fa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&4!==e.ra)throw e.fa("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=ud(i,e.la(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=B(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ba(e.Tt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=br.fromDate(t);return{timestampValue:kc(e.Tt,n)}}if(t instanceof br){const n=new br(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:kc(e.Tt,n)}}if(t instanceof Wl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Hl)return{bytesValue:Rc(e.Tt,t._byteString)};if(t instanceof Fl){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Oc(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.fa(`Unsupported field value: ${Ll(t)}`)}(t,e)}function hd(t,e){const n={};return $r(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kr(t,((t,s)=>{const i=ud(s,e.ua(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function ld(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof br||t instanceof Wl||t instanceof Hl||t instanceof Fl||t instanceof Ql)}function dd(t,e,n){if(!ld(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=Ll(n);throw"an object"===s?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function fd(t,e,n){if((e=B(e))instanceof zl)return e._internalPath;if("string"==typeof e)return gd(t,e);throw md("Field path arguments must be of type string or ",t,!1,void 0,n)}const pd=new RegExp("[~\\*/\\[\\]]");function gd(t,e,n){if(e.search(pd)>=0)throw md(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zl(...e.split("."))._internalPath}catch(s){throw md(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function md(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new cr(ar.INVALID_ARGUMENT,a+t+c)}function yd(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{get id(){return this._key.path.lastSegment()}get ref(){return new Fl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new wd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ed("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}}class wd extends vd{data(){return super.data()}}function Ed(t,e){return"string"==typeof e?gd(t,e):e instanceof zl?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new cr(ar.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bd{}class Id extends bd{}class _d extends Id{static _create(t,e,n){return new _d(t,e,n)}_apply(t){const e=this._parse(t);return Nd(t._query,e),new Pl(t.firestore,t.converter,la(t._query,e))}_parse(t){const e=nd(t.firestore),n=function(t,e,n,s,i,r,o){let a;if(i.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new cr(ar.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){Dd(o,r);const e=[];for(const n of o)e.push(Cd(s,t,n));a={arrayValue:{values:e}}}else a=Cd(s,t,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||Dd(o,r),a=cd(n,"where",o,"in"===r||"not-in"===r);return _o.create(i,r,a)}(t._query,0,e,t.firestore._databaseId,this._field,this._op,this._value);return n}constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}}class Sd extends bd{static _create(t,e){return new Sd(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:So.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const s=e.getFlattenedFilters();for(const t of s)Nd(n,t),n=la(n,t)}(t._query,e),new Pl(t.firestore,t.converter,la(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}constructor(t,e){super(),this.type=t,this._queryConstraints=e}}class Ad extends Id{static _create(t,e){return new Ad(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new cr(ar.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new cr(ar.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const s=new Bo(e,n);return function(t,e){if(null===oa(t)){const n=aa(t);null!==n&&kd(t,n,e.field)}}(t,s),s}(t._query,this._field,this._direction);return new Pl(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new na(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}}function Cd(t,e,n){if("string"==typeof(n=B(n))){if(""===n)throw new cr(ar.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ca(e)&&-1!==n.indexOf("/"))throw new cr(ar.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Sr.fromString(n));if(!Dr.isDocumentKey(s))throw new cr(ar.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return lo(t,new Dr(s))}if(n instanceof Fl)return lo(t,n._key);throw new cr(ar.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ll(n)}.`)}function Dd(t,e){if(!Array.isArray(t)||0===t.length)throw new cr(ar.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Nd(t,e){if(e.isInequality()){const n=aa(t),s=e.field;if(null!==n&&!n.isEqual(s))throw new cr(ar.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${s.toString()}'`);const i=oa(t);null!==i&&kd(t,s,i)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new cr(ar.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new cr(ar.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function kd(t,e,n){if(!n.isEqual(e))throw new cr(ar.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Rd{convertValue(t,e="none"){switch(io(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Jr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Zr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ir()}}convertObject(t,e){const n={};return Kr(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new Wl(Jr(t.latitude),Jr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=eo(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(no(t));default:return null}}convertTimestamp(t){const e=Yr(t);return new br(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Sr.fromString(t);rr(eu(n));const s=new qr(n.get(1),n.get(3)),i=new Dr(n.popFirst(5));return s.isEqual(e)||er(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xd{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class Od extends vd{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Md(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ed("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}}class Md extends Od{data(t={}){return super.data(t)}}class Vd{get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Md(this._firestore,this._userDataWriter,n.key,n,new xd(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new cr(ar.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const s=new Md(t._firestore,t._userDataWriter,n.doc.key,n.doc,new xd(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new Md(t._firestore,t._userDataWriter,e.doc.key,e.doc,new xd(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:Fd(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new xd(s.hasPendingWrites,s.fromCache),this.query=n}}function Fd(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ir()}}class Pd extends Rd{convertBytes(t){return new Hl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Fl(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function Ud(t,e){return function(t,e){const n=new ur;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const s=ml(t);try{const t=await function(t,e){const n=or(t),s=br.now(),i=e.reduce(((t,e)=>t.add(e.key)),pc());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=rc(),c=pc();return n.ji.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{r=i;const o=[];for(const t of e){const e=Ka(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new Ha(t.key,e,Wo(e.value.mapValue),Fa.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:cc(r)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.fc[t.currentUser.toKey()];s||(s=new jo(Er)),s=s.insert(e,n),t.fc[t.currentUser.toKey()]=s}(s,t.batchId,n),await dl(s,t.changes),await wh(s.remoteStore)}catch(t){const e=xh(t,"Failed to persist write");n.reject(e)}}(await Sl(t),e,n))),n.promise}($l(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bd{set(t,e,n){this._verifyNotCommitted();const s=qd(t,this._firestore),i=Ld(s.converter,e,n),r=sd(this._dataReader,"WriteBatch.set",s._key,i,null!==s.converter,n);return this._mutations.push(r.toMutation(s._key,Fa.none())),this}update(t,e,n,...s){this._verifyNotCommitted();const i=qd(t,this._firestore);let r;return r="string"==typeof(e=B(e))||e instanceof zl?ad(this._dataReader,"WriteBatch.update",i._key,e,n,s):od(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(r.toMutation(i._key,Fa.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=qd(t,this._firestore);return this._mutations=this._mutations.concat(new Xa(e._key,Fa.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new cr(ar.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=nd(t)}}function qd(t,e){if((t=B(t)).firestore!==e)throw new cr(ar.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Yi=t}("9.17.2"),At(new q("firestore",((t,{instanceIdentifier:n,options:s})=>{const i=t.getProvider("app").getImmediate(),r=new jl(new fr(t.getProvider("auth-internal")),new yr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new cr(ar.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qr(t.options.projectId,e)}(i,n),i);return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r}),"PUBLIC").setMultipleInstances(!0)),Lt(Wi,"3.8.4",t),Lt(Wi,"3.8.4","esm2017")}();const jd={apiKey:"AIzaSyCZbaq5RCfCwW1P86NAPLWmreI4uB-dEAs",authDomain:"todo-8834c.firebaseapp.com",projectId:"todo-8834c",storageBucket:"todo-8834c.appspot.com",messagingSenderId:"66462566758",appId:"1:66462566758:web:efe606b69c5b408f12a0a7"};const Kd=document.querySelector(".js-input"),$d=document.querySelector(".js-btn"),Gd=document.querySelector(".js-clear-btn"),Hd={todosIds:[],todosById:{},addTodo:function({title:t}){const e={title:t,done:!1,id:a()};return this.todosIds.push(e.id),this.todosById[e.id]=e,e},setTodos:function(t){this.todosIds=[],this.todosById={},t.forEach((t=>{this.todosIds.push(t.id),this.todosById[t.id]=t}))},getTodos:function(){return{todosById:this.todosById,todosIds:this.todosIds}},toggleTodo:function(t){this.todosById[t].done=!this.todosById[t].done},getTodo:function(t){return this.todosById[t]},deleteTodo:function(t){delete this.todosById[t],this.todosIds=this.todosIds.filter((e=>e!==t))}},zd=function(t,e,n){const s=document.querySelector(t),i=document.querySelector(".menu__todo-count");return{node:s,renderTodos:function({todosIds:t,todosById:e}){t.forEach((t=>{this.addTodo(e[t])}))},clearTodos:function(){this.node.innerHTML=""},clearTodo:function(t){document.getElementById(`${t}`).remove()},addTodo:function(t){const s=document.createElement("div"),i=document.createElement("input"),r=document.createElement("label"),o=document.createElement("button"),a=document.createElement("span"),c=document.createElement("p");i.setAttribute("type","checkbox"),i.setAttribute("id",t.id),i.setAttribute("class","output__checkbox"),i.onclick=()=>{e(t.id),r.classList.toggle("task-done")},t.done&&(i.setAttribute("checked",!0),r.classList.add("task-done")),a.setAttribute("class","output__checkbox_viewed"),c.setAttribute("class","output__text"),c.innerText=t.title,r.classList.add("output__label"),r.append(i,a,c),o.classList.add("delete-todo-btn"),o.onclick=()=>{n(t.id)},s.setAttribute("id",t.id),s.setAttribute("class","output__todo"),s.append(r,o),this.node.append(s)},countTodos:function({todosIds:t}){const e=t.length;i.innerHTML=1===e?`\n        ${e} Todo\n      `:`\n        ${e} Todos\n      `}}}(".js-output",(function(t){Hd.toggleTodo(t),Qd.update(Hd.getTodo(t))}),(function(t){Qd.deleteTodoStorage(Hd.getTodo(t)),Hd.deleteTodo(t),zd.clearTodo(t),zd.countTodos(Hd.getTodos())})),Qd={key:"todos",db:Kl(kt(jd)),pull:async function(){const t=function(t,e,...n){let s=[];e instanceof bd&&s.push(e),s=s.concat(n),function(t){const e=t.filter((t=>t instanceof Sd)).length,n=t.filter((t=>t instanceof _d)).length;if(e>1||e>0&&n>0)throw new cr(ar.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const e of s)t=e._apply(t);return t}(function(t,e,...n){if(t=B(t),Nl("collection","path",e),t instanceof Ml){const s=Sr.fromString(e,...n);return Rl(s),new Ul(t,null,s)}{if(!(t instanceof Fl||t instanceof Ul))throw new cr(ar.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Sr.fromString(e,...n));return Rl(s),new Ul(t.firestore,null,s)}}(this.db,this.key),function(t,e="asc"){const n=e,s=Ed("orderBy",t);return Ad._create(s,n)}("createdAt")),e=await function(t){t=xl(t,Pl);const e=xl(t.firestore,jl),n=$l(e),s=new Pd(e);return Td(t._query),Cl(n,t._query).then((n=>new Vd(e,s,t,n)))}(t),n=[];return e.forEach((t=>{n.push({id:t.id,title:t.data().title,done:t.data().done})})),n},push:async function(t){try{await function(t,e,n){t=xl(t,Fl);const s=xl(t.firestore,jl),i=Ld(t.converter,e,n);return Ud(s,[sd(nd(s),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Fa.none())])}(Bl(this.db,this.key,t.id),{title:t.title,done:t.done,createdAt:new rd("serverTimestamp")})}catch(t){console.error("Error adding document: ",t)}},delete:async function({todosIds:t}){const e=($l(n=xl(n=this.db,jl)),new Bd(n,(t=>Ud(n,t))));
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var n;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */t.forEach((t=>{const n=Bl(this.db,this.key,t);e.delete(n)})),await e.commit()},deleteTodoStorage:async function(t){const e=Bl(this.db,this.key,t.id);var n;await(n=e,Ud(xl(n.firestore,jl),[new Xa(n._key,Fa.none())]))},update:async function(t){const e=Bl(this.db,this.key,t.id);await function(t,e,n,...s){t=xl(t,Fl);const i=xl(t.firestore,jl),r=nd(i);let o;return o="string"==typeof(e=B(e))||e instanceof zl?ad(r,"updateDoc",t._key,e,n,s):od(r,"updateDoc",t._key,e),Ud(i,[o.toMutation(t._key,Fa.exists(!0))])}(e,{done:t.done})}};Qd.pull().then((t=>{Hd.setTodos(t),zd.renderTodos(Hd.getTodos()),zd.countTodos(Hd.getTodos())})),$d.addEventListener("click",(t=>{t.preventDefault(),Kd.focus();const e=Kd.value;if(e){const t=Hd.addTodo({title:e});zd.addTodo(t),zd.countTodos(Hd.getTodos()),Qd.push(t),Kd.value=""}else alert("Enter your Todo")})),Gd.addEventListener("click",(()=>{Qd.delete(Hd.getTodos()),Hd.setTodos([]),zd.clearTodos(),zd.countTodos(Hd.getTodos())}))}();