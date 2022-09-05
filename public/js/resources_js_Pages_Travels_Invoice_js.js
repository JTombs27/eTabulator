"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Travels_Invoice_js"],{

/***/ "./resources/js/Pages/Travels/Invoice.js":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Travels/Invoice.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentStatus": () => (/* binding */ currentStatus),
/* harmony export */   "useCheck": () => (/* binding */ useCheck)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var currentStatus = {
  onProgress: false,
  status: "",
  message: ""
};
function useCheck() {
  var invoiceNumber = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  var id = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);

  function checkInvoice() {
    currentStatus.message = "Checking invoice number";
    validateInvoice(); // console.log(temporyInvoice)
  }

  (0,vue__WEBPACK_IMPORTED_MODULE_1__.watchEffect)(function () {
    if (invoiceNumber.value != null && currentStatus.onProgress) {
      checkInvoice();
    }
  });

  function validateInvoice() {
    axios.post('/travels/checkInvoice', {
      id: id.value,
      invoice_no: invoiceNumber.value
    }).then(function (response) {
      if (invoiceNumber) {
        if (response.data) {
          currentStatus.message = 'Valid';
          currentStatus["class"] = 'text-success';
        } else {
          currentStatus.message = 'Invoice # already exist';
          currentStatus["class"] = 'text-danger';
        }
      } else {
        currentStatus.message = '';
        currentStatus["class"] = '';
      }

      currentStatus.onProgress = false; // temporyInvoice.value = null;
    });
  }

  var invoiceStatus = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(currentStatus);
  return {
    invoiceNumber: invoiceNumber,
    checkInvoice: checkInvoice,
    invoiceStatus: invoiceStatus,
    id: id
  };
}

/***/ })

}]);