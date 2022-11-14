"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_EvenHeader_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/EvenHeader/Index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/EvenHeader/Index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    username: ""
  },
  data: function data() {
    return {
      myModal: null,
      actual_liters: 0,
      invalid_actual_liters: false,
      fuelOTP: localStorage.getItem("fuelOTP"),
      tempOTP: "",
      invalid_tempOTP: ""
    };
  },
  methods: {
    openConfirmation: function openConfirmation() {
      if (localStorage.getItem("fuelOTP") === null) {
        this.invalid_tempOTP = "";
        this.tempOTP = "";
        this.actual_liters = this.TravelData.data[0].liters;
        this.myModal = new window.bootstrap.Modal(document.getElementById('myModal'));
        this.myModal.show();
      } else {
        this.invalid_actual_liters = false;
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        if (localStorage.getItem("fuelOTP_date") < date) {
          this.fuelOTP = null;
          localStorage.removeItem('fuelOTP');
          localStorage.removeItem('fuelOTP_date');
          localStorage.removeItem('fuelOTP_date');
          this.openConfirmation();
        } else {
          this.actual_liters = this.TravelData.data[0].liters;
          this.myModal = new window.bootstrap.Modal(document.getElementById('myModal'));
          this.myModal.show();
        }
      }
    },
    confirm: function confirm() {
      var _this = this;

      var vm = this;

      if (localStorage.getItem("fuelOTP") === null) {
        if (this.tempOTP.trim() == "") {
          this.invalid_tempOTP = "Gasoline OTP is required to continue!";
        } else {
          axios.get('/travelTicket/OTP/' + this.TravelData.data[0].gasoline_id + '/' + this.tempOTP).then(function (response) {
            if (response.data != null) {
              if (response.data == "success") {
                var today = new Date();
                var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                vm.fuelOTP = vm.tempOTP;
                localStorage.setItem("fuelOTP", vm.tempOTP);
                localStorage.setItem("fuelOTP_date", date);
                localStorage.setItem("gasoline_id", vm.TravelData.data[0].gasoline_id);
                _this.actual_liters = _this.TravelData.data[0].liters;
              } else {
                _this.invalid_tempOTP = "You have entered an incorrect OTP!";
              }
            }
          });
        }
      } else if (localStorage.getItem("gasoline_id") == this.TravelData.data[0].gasoline_id) {
        if (this.actual_liters > this.TravelData.data[0].liters) {
          this.invalid_actual_liters = true;
        } else {
          this.invalid_actual_liters = false;
          axios.patch('/travelTicket/' + this.TravelData.data[0].id + '/' + this.actual_liters).then(function (response) {
            if (response.data != null) {
              if (response.data == "success") {
                vm.$inertia.reload({
                  only: ['TravelData']
                });
                setTimeout(function () {
                  vm.myModal.hide();
                }, 1500);
              } else {
                //vm.saveMessage = response.data;
                alert(response.data);
              }
            }
          });
        }
      } else {
        alert("Mismatch Gasoline Station! \nPLease Double check Gas Station in the ticket.");
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/EvenHeader/Index.vue?vue&type=template&id=76f25cda":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/EvenHeader/Index.vue?vue&type=template&id=76f25cda ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return null;
}

/***/ }),

/***/ "./resources/js/Pages/EvenHeader/Index.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/EvenHeader/Index.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_76f25cda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=76f25cda */ "./resources/js/Pages/EvenHeader/Index.vue?vue&type=template&id=76f25cda");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/EvenHeader/Index.vue?vue&type=script&lang=js");
/* harmony import */ var D_Personal_files_Sideline_TabulatorMain_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Personal_files_Sideline_TabulatorMain_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_76f25cda__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/EvenHeader/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/EvenHeader/Index.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/EvenHeader/Index.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/EvenHeader/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/EvenHeader/Index.vue?vue&type=template&id=76f25cda":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/EvenHeader/Index.vue?vue&type=template&id=76f25cda ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_76f25cda__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_76f25cda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=76f25cda */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/EvenHeader/Index.vue?vue&type=template&id=76f25cda");


/***/ })

}]);