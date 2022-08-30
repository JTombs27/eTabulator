"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Travels_Hooks_CustomDebounce_js"],{

/***/ "./resources/js/Pages/Travels/Hooks/CustomDebounce.js":
/*!************************************************************!*\
  !*** ./resources/js/Pages/Travels/Hooks/CustomDebounce.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDebouncedRef": () => (/* binding */ useDebouncedRef)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function useDebouncedRef(value) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var timeout;
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.customRef)(function (track, trigger) {
    return {
      get: function get() {
        track();
        return value;
      },
      set: function set(newValue) {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          value = newValue;
          trigger();
        }, delay);
      }
    };
  });
}

/***/ })

}]);