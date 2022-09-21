<<<<<<< HEAD
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if ({"resources_js_Pages_Charges_Create_vue":1,"resources_js_Pages_Charges_Index_vue":1,"resources_js_Pages_Charts_LineChart_vue":1,"resources_js_Pages_Charts_PieChart_vue":1,"resources_js_Pages_Charts_SomeChart_vue":1,"resources_js_Pages_Charts_TotalUsers_vue":1,"resources_js_Pages_Drivers_Create_vue":1,"resources_js_Pages_Drivers_Index_vue":1,"resources_js_Pages_Employee_Create_vue":1,"resources_js_Pages_Employee_Index_vue":1,"resources_js_Pages_Gasolines_Create_vue":1,"resources_js_Pages_Gasolines_Index_vue":1,"resources_js_Pages_Home_vue":1,"resources_js_Pages_LogTimeArrival_Create_vue":1,"resources_js_Pages_LogTimeArrival_Index_vue":1,"resources_js_Pages_OfficeVehicles_Create_vue":1,"resources_js_Pages_OfficeVehicles_Edit_vue":1,"resources_js_Pages_OfficeVehicles_Index_vue":1,"resources_js_Pages_Posts_Index_vue":1,"resources_js_Pages_Prices_Create_vue":1,"resources_js_Pages_Prices_Index_vue":1,"resources_js_Pages_ProjectVehicles_Create_vue":1,"resources_js_Pages_ProjectVehicles_Index_vue":1,"resources_js_Pages_Projects_Create_vue":1,"resources_js_Pages_Projects_Index_vue":1,"resources_js_Pages_Reports_Index_vue":1,"resources_js_Pages_SoaTravels_Details_vue":1,"resources_js_Pages_SoaTravels_Index_vue":1,"resources_js_Pages_SoaTravels_Show_vue":1,"resources_js_Pages_TravelValidations_Index_vue":1,"resources_js_Pages_Travels_AjaxScript_js":1,"resources_js_Pages_Travels_Create_vue":1,"resources_js_Pages_Travels_Index_vue":1,"resources_js_Pages_Travels_Invoice_js":1,"resources_js_Pages_Travels_Invoice_vue":1,"resources_js_Pages_Users_ChangePassword_vue":1,"resources_js_Pages_Users_Create_vue":1,"resources_js_Pages_Users_Index_vue":1,"resources_js_Pages_Users_Settings_vue":1,"resources_js_Pages_VehicleStatus_index_vue":1,"resources_js_Pages_VehicleStatus_Create_vue":1,"resources_js_Pages_VehicleStatus_status_vue":1,"resources_js_Pages_Vehicles_Create_vue":1,"resources_js_Pages_Vehicles_Index_vue":1}[chunkId]) return "js/" + chunkId + ".js";
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/manifest": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(!/^(\/js\/manifest|css\/app)$/.test(chunkId)) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	
/******/ })()
;
=======
(()=>{"use strict";var e,s,r,t,j={},o={};function n(e){var s=o[e];if(void 0!==s)return s.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return j[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=j,e=[],n.O=(s,r,t,j)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){for(var[r,t,j]=e[u],i=!0,a=0;a<r.length;a++)(!1&j||o>=j)&&Object.keys(n.O).every((e=>n.O[e](r[a])))?r.splice(a--,1):(i=!1,j<o&&(o=j));if(i){e.splice(u--,1);var l=t();void 0!==l&&(s=l)}}return s}j=j||0;for(var u=e.length;u>0&&e[u-1][2]>j;u--)e[u]=e[u-1];e[u]=[r,t,j]},n.n=e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return n.d(s,{a:s}),s},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var j=Object.create(null);n.r(j);var o={};s=s||[null,r({}),r([]),r(r)];for(var i=2&t&&e;"object"==typeof i&&!~s.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((s=>o[s]=()=>e[s]));return o.default=()=>e,n.d(j,o),j},n.d=(e,s)=>{for(var r in s)n.o(s,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:s[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((s,r)=>(n.f[r](e,s),s)),[])),n.u=e=>418===e?"js/418.js":160===e?"js/160.js":827===e?"js/827.js":661===e?"js/661.js":168===e?"js/168.js":57===e?"js/57.js":701===e?"js/701.js":18===e?"js/18.js":333===e?"js/333.js":324===e?"js/324.js":2===e?"js/2.js":353===e?"js/353.js":77===e?"js/77.js":935===e?"js/935.js":723===e?"js/723.js":677===e?"js/677.js":543===e?"js/543.js":608===e?"js/608.js":751===e?"js/751.js":432===e?"js/432.js":444===e?"js/444.js":72===e?"js/72.js":120===e?"js/120.js":740===e?"js/740.js":44===e?"js/44.js":156===e?"js/156.js":438===e?"js/438.js":729===e?"js/729.js":829===e?"js/829.js":8===e?"js/8.js":485===e?"js/485.js":140===e?"js/140.js":692===e?"js/692.js":390===e?"js/390.js":49===e?"js/49.js":609===e?"js/609.js":939===e?"js/939.js":405===e?"js/405.js":668===e?"js/668.js":944===e?"js/944.js":895===e?"js/895.js":926===e?"js/926.js":821===e?"js/821.js":985===e?"js/985.js":void 0,n.miniCssF=e=>"css/app.css",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),t={},n.l=(e,s,r,j)=>{if(t[e])t[e].push(s);else{var o,i;if(void 0!==r)for(var a=document.getElementsByTagName("script"),l=0;l<a.length;l++){var u=a[l];if(u.getAttribute("src")==e){o=u;break}}o||(i=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.src=e),t[e]=[s];var f=(s,r)=>{o.onerror=o.onload=null,clearTimeout(d);var j=t[e];if(delete t[e],o.parentNode&&o.parentNode.removeChild(o),j&&j.forEach((e=>e(r))),s)return s(r)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),i&&document.head.appendChild(o)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.p="/",(()=>{var e={929:0,170:0};n.f.j=(s,r)=>{var t=n.o(e,s)?e[s]:void 0;if(0!==t)if(t)r.push(t[2]);else if(/^(170|929)$/.test(s))e[s]=0;else{var j=new Promise(((r,j)=>t=e[s]=[r,j]));r.push(t[2]=j);var o=n.p+n.u(s),i=new Error;n.l(o,(r=>{if(n.o(e,s)&&(0!==(t=e[s])&&(e[s]=void 0),t)){var j=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+s+" failed.\n("+j+": "+o+")",i.name="ChunkLoadError",i.type=j,i.request=o,t[1](i)}}),"chunk-"+s,s)}},n.O.j=s=>0===e[s];var s=(s,r)=>{var t,j,[o,i,a]=r,l=0;if(o.some((s=>0!==e[s]))){for(t in i)n.o(i,t)&&(n.m[t]=i[t]);if(a)var u=a(n)}for(s&&s(r);l<o.length;l++)j=o[l],n.o(e,j)&&e[j]&&e[j][0](),e[j]=0;return n.O(u)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(s.bind(null,0)),r.push=s.bind(null,r.push.bind(r))})()})();
>>>>>>> 635beaa6231a59bac6b863cc746b4b464bbe6b9f
