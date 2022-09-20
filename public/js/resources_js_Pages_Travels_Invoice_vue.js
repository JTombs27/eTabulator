"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Travels_Invoice_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Travels/Invoice.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Travels/Invoice.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Shared/Modal.vue */ "./resources/js/Shared/Modal.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    item: {
      type: Object,
      "default": function _default() {}
    }
  },
  components: {
    Modal: _Shared_Modal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      form: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        invoice: null,
        actual_liter: null,
        id: null,
        date_fueled: null
      }),
      invoice_loader: false,
      invoiceMessage: "",
      invoiceMessageClass: "",
      loader: false,
      showInvoice: false
    };
  },
  mounted: function mounted() {
    this.form.id = this.item.id;
    this.form.actual_liter = this.item.actual_liters;
    this.form.date_fueled = this.item.date_fueled;
    this.invoice();
  },
  methods: {
    invoice: function invoice() {
      this.invoiceMessageClass = '';
      this.invoiceMessage = '';

      if (this.item) {
        this.showInvoice = true;
        this.form.id = this.item.id;
        this.form.invoice = this.item.invoice;
      } else {
        this.showInvoice = false;
        this.form.id = null;
        this.form.invoice = null;
        this.$emit('closeModal');
      }
    },
    checkInvoice: function checkInvoice() {
      this.form.clearErrors();
      this.invoice_loader = true;
      this.invoiceMessage = "Checking invoice number";
      this.invoiceMessageClass = '';
      this.validateInvoice();
    },
    validateInvoice: _.debounce(function () {
      var _this = this;

      axios.post('/travels/checkInvoice', {
        id: this.form.id,
        invoice_no: this.form.invoice
      }).then(function (response) {
        if (_this.form.invoice) {
          if (response.data) {
            _this.invoiceMessage = 'Valid';
            _this.invoiceMessageClass = 'text-success';
          } else {
            _this.invoiceMessage = 'Invoice # already exist';
            _this.invoiceMessageClass = 'text-danger';
          }
        } else {
          _this.invoiceMessage = '';
          _this.invoiceMessageClass = '';
        }

        _this.invoice_loader = false;
      }); // this.showSaveButton = true
    }, 500),
    saveInvoice: function saveInvoice() {
      var _this2 = this;

      this.form.post('/travels/updateInvoice', {
        onStart: function onStart() {
          _this2.invoiceMessageClass = '';
        },
        onSuccess: function onSuccess(e) {
          _this2.showInvoice = false;
          $("#modal").hide();
          $('body').removeClass('modal-open');
          $('body').css("overflow", "scroll");
          $('.modal-backdrop').remove();

          _this2.$emit('closeModal', "save");
        },
        onFinish: function onFinish(e) {
          _this2.invoice_loader = false;
        }
      });
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Travels/Invoice.vue?vue&type=template&id=2a796d04":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Travels/Invoice.vue?vue&type=template&id=2a796d04 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mb-3"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "invoice",
  "class": "form-label"
}, "Invoice #", -1
/* HOISTED */
);

var _hoisted_3 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_4 = {
  key: 0,
  "class": "spinner-border spinner-border-sm",
  role: "status",
  "aria-hidden": "true"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "invoice",
  "class": "form-label"
}, "Actual Liters", -1
/* HOISTED */
);

var _hoisted_6 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_7 = {
  key: 0
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "invoice",
  "class": "form-label"
}, "Date Fueled", -1
/* HOISTED */
);

var _hoisted_9 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_10 = {
  key: 1,
  "class": "ml-2"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "spinner-border spinner-border-sm",
  role: "status",
  "aria-hidden": "true"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Submitting... ");

var _hoisted_13 = [_hoisted_11, _hoisted_12];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Modal");

  return $data.showInvoice ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Modal, {
    key: 0,
    onCloseModal: _cache[5] || (_cache[5] = function ($event) {
      return $options.invoice();
    }),
    showSaveButton: true,
    onSaveModal: _cache[6] || (_cache[6] = function ($event) {
      return $options.saveInvoice();
    }),
    modalTitle: 'Invoice'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.saveInvoice();
        }, ["prevent"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control",
        id: "invoice",
        autocomplete: "off",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.form.invoice = $event;
        }),
        onKeyup: _cache[1] || (_cache[1] = function ($event) {
          return $options.checkInvoice();
        })
      }, null, 544
      /* HYDRATE_EVENTS, NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.invoice]]), $data.form.errors.invoice ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.invoice), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [$data.invoice_loader ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["ml-2", $data.invoiceMessageClass])
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.invoiceMessage), 3
      /* TEXT, CLASS */
      )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control",
        id: "actual",
        autocomplete: "off",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.form.actual_liter = $event;
        })
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.actual_liter]]), $data.form.errors.actual_liter ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.actual_liter), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _ctx.$page.props.auth.user.role == 'gasoline-station' || _ctx.$page.props.auth.user.role == 'Admin' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "date",
        "class": "form-control",
        id: "date_fueled",
        autocomplete: "off",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.form.date_fueled = $event;
        })
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.date_fueled]]), $data.form.errors.date_fueled ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.date_fueled), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.form.processing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_10, _hoisted_13)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32
      /* HYDRATE_EVENTS */
      )];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./resources/js/Pages/Travels/Invoice.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Travels/Invoice.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Invoice_vue_vue_type_template_id_2a796d04__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invoice.vue?vue&type=template&id=2a796d04 */ "./resources/js/Pages/Travels/Invoice.vue?vue&type=template&id=2a796d04");
/* harmony import */ var _Invoice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Invoice.vue?vue&type=script&lang=js */ "./resources/js/Pages/Travels/Invoice.vue?vue&type=script&lang=js");
<<<<<<< HEAD
/* harmony import */ var D_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");
=======
/* harmony import */ var C_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");
>>>>>>> 37ceb0c5f7d68735912fe39bb3d4a9771fa36893




;
<<<<<<< HEAD
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Invoice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Invoice_vue_vue_type_template_id_2a796d04__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Travels/Invoice.vue"]])
=======
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Invoice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Invoice_vue_vue_type_template_id_2a796d04__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Travels/Invoice.vue"]])
>>>>>>> 37ceb0c5f7d68735912fe39bb3d4a9771fa36893
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Travels/Invoice.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Travels/Invoice.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Invoice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Invoice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Invoice.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Travels/Invoice.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Travels/Invoice.vue?vue&type=template&id=2a796d04":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Travels/Invoice.vue?vue&type=template&id=2a796d04 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Invoice_vue_vue_type_template_id_2a796d04__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Invoice_vue_vue_type_template_id_2a796d04__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Invoice.vue?vue&type=template&id=2a796d04 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Travels/Invoice.vue?vue&type=template&id=2a796d04");


/***/ })

}]);