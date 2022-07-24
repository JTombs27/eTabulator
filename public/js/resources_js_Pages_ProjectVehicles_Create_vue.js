"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_ProjectVehicles_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    editData: Object,
    project: Object
  },
  data: function data() {
    return {
      form: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)(),
      vehiclesGroup: [{
        vehicle_id: "",
        date_from: "",
        date_to: "",
        purpose: "",
        project_id: this.project.id,
        id: null
      }],
      vehicles: [],
      testValue: "",
      pageTitle: "",
      loading: false,
      disableVehicle: false,
      backToMyUrl: "/projects-vehicle/" + this.project.id + "/vehicles"
    };
  },
  mounted: function mounted() {
    if (this.editData !== undefined) {
      this.loading = true;
      this.pageTitle = "Edit";
      this.vehiclesGroup[0].vehicle_id = this.editData.vehicle_id;
      this.vehiclesGroup[0].date_from = this.editData.date_from;
      this.vehiclesGroup[0].date_to = this.editData.date_to;
      this.vehiclesGroup[0].purpose = this.editData.purpose;
      this.vehiclesGroup[0].project_id = this.editData.project_id;
      this.vehiclesGroup[0].id = this.editData.id;
      this.disableVehicle = true;
    } else {
      this.pageTitle = "Add";
      this.disableVehicle = false;
    }

    this.loadVehicles();
  },
  methods: {
    submit: function submit() {
      var _this = this;

      if (this.editData !== undefined) {
        this.form.project_id = this.editData.project_id;
        this.form.transform(function (data) {
          return {
            data: data,
            vehiclesGroup: _this.vehiclesGroup
          };
        });
        this.form.post("/projects-vehicle/" + this.project.id + "/update/" + this.editData.id, this.form);
      } else {
        this.form.project_id = this.project.id;
        this.form.transform(function (data) {
          return {
            data: data,
            vehiclesGroup: _this.vehiclesGroup
          };
        });
        this.form.post("/projects-vehicle/" + this.project.id + "/store", this.form);
      }
    },
    addNew: function addNew() {
      this.vehiclesGroup.push((0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
        vehicle_id: "",
        date_from: "",
        date_to: "",
        purpose: "",
        project_id: this.project.id,
        id: null
      }));
    },
    removeNode: function removeNode(index) {
      this.vehiclesGroup.splice(index, 1);
    },
    loadVehicles: function loadVehicles() {
      var _this2 = this;

      axios.get('/projects-vehicle/vehicles').then(function (response) {
        _this2.vehicles = response.data;
      });
    },
    backToMain: function backToMain() {
      this.$inertia.get("/projects-vehicle/" + this.project.id + "/vehicles");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=template&id=4ff94874":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=template&id=4ff94874 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row gap-20 masonry pos-r"
};
var _hoisted_2 = {
  "class": "peers fxw-nw jc-sb ai-c"
};
var _hoisted_3 = {
  "class": "col-12"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Project Description: ");

var _hoisted_5 = {
  "class": "col-md-12 p-20 bd"
};
var _hoisted_6 = {
  "class": "row"
};
var _hoisted_7 = {
  "class": "col-12",
  style: {
    "margin-top": "-15px"
  }
};
var _hoisted_8 = {
  "class": "col-12 bgc-white p-10 bd",
  style: {
    "margin-top": "10px"
  }
};
var _hoisted_9 = {
  "class": "row"
};
var _hoisted_10 = {
  "class": "col-6"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Vehicle Selection", -1
/* HOISTED */
);

var _hoisted_12 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_13 = {
  "class": "col-3"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Period From", -1
/* HOISTED */
);

var _hoisted_15 = ["onUpdate:modelValue"];
var _hoisted_16 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_17 = {
  key: 1,
  "class": "fs-6 c-red-500"
};
var _hoisted_18 = {
  "class": "col-3"
};
var _hoisted_19 = {
  "class": "peers fxw-nw jc-sb ai-c"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Period To ", -1
/* HOISTED */
);

var _hoisted_21 = ["onClick"];

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  style: {
    "font-size": "18px",
    "font-weight": "bolder",
    "color": "red"
  },
  fill: "currentColor",
  "class": "bi bi-x-lg",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
})], -1
/* HOISTED */
);

var _hoisted_23 = [_hoisted_22];
var _hoisted_24 = ["onUpdate:modelValue"];
var _hoisted_25 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_26 = {
  key: 1,
  "class": "fs-6 c-red-500"
};
var _hoisted_27 = {
  "class": "row"
};
var _hoisted_28 = {
  "class": "col-12"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Purpose", -1
/* HOISTED */
);

var _hoisted_30 = ["onUpdate:modelValue"];
var _hoisted_31 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_32 = {
  "class": "row"
};
var _hoisted_33 = {
  "class": "col-12"
};
var _hoisted_34 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_back_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("back-button");

  var _component_Select2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Select2");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pageTitle) + " Vehicle ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_back_button, {
    href: $data.backToMyUrl
  }, null, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.project.description), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [$props.editData === undefined ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    type: "button",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.addNew();
    }),
    "class": "btn btn-sm btn-secondary pull-right"
  }, "+")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.submit();
    }, ["prevent"])),
    id: "mainForm"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.vehiclesGroup, function (vehicle, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "row",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select2, {
      modelValue: vehicle.vehicle_id,
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return vehicle.vehicle_id = $event;
      },
      options: $data.vehicles,
      disabled: $data.disableVehicle
    }, null, 8
    /* PROPS */
    , ["modelValue", "onUpdate:modelValue", "options", "disabled"]), $data.form.errors['vehiclesGroup.' + index + '.vehicle_id'] || $data.form.errors['vehiclesGroup.' + index + '.vehicle_idX'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.vehicle_id'] || $data.form.errors['vehiclesGroup.' + index + '.vehicle_idX']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"fs-6 c-red-500\" v-if=\"form.errors['vehiclesGroup.'+index+'.vehicle_idX']\">{{ form.errors[\"vehiclesGroup.\"+index+\".vehicle_idX\"]}}</div> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "date",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return vehicle.date_from = $event;
      },
      "class": "form-control",
      autocomplete: "chrome-off"
    }, null, 8
    /* PROPS */
    , _hoisted_15), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, vehicle.date_from]]), $data.form.errors['vehiclesGroup.' + index + '.date_from'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.date_from']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.form.errors['vehiclesGroup.' + index + '.date_fromX'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.date_fromX']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, $props.editData === undefined && $data.vehiclesGroup.length !== 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 0,
      onClick: function onClick($event) {
        return $options.removeNode(index);
      },
      style: {
        "margin-top": "-10px"
      }
    }, _hoisted_23, 8
    /* PROPS */
    , _hoisted_21)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "date",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return vehicle.date_to = $event;
      },
      "class": "form-control",
      autocomplete: "chrome-off"
    }, null, 8
    /* PROPS */
    , _hoisted_24), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, vehicle.date_to]]), $data.form.errors['vehiclesGroup.' + index + '.date_to'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.date_to']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.form.errors['vehiclesGroup.' + index + '.date_toX'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.date_toX']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return vehicle.purpose = $event;
      },
      "class": "form-control",
      autocomplete: "chrome-off"
    }, null, 8
    /* PROPS */
    , _hoisted_30), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, vehicle.purpose]]), $data.form.errors['vehiclesGroup.' + index + '.purpose'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.purpose']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary pull-right mt-3",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.submit();
    }),
    disabled: $data.form.processing
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pageTitle == "Add" ? "Save/Create" : "Save Changes"), 9
  /* TEXT, PROPS */
  , _hoisted_34)])])], 32
  /* HYDRATE_EVENTS */
  )])]);
}

/***/ }),

/***/ "./resources/js/Pages/ProjectVehicles/Create.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/ProjectVehicles/Create.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_4ff94874__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=4ff94874 */ "./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=template&id=4ff94874");
/* harmony import */ var _Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js */ "./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=script&lang=js");
<<<<<<< HEAD
/* harmony import */ var F_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");
=======
/* harmony import */ var C_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");
>>>>>>> 3286ecb68e619522c564c02a1bd3b2334ef069c6




;
<<<<<<< HEAD
const __exports__ = /*#__PURE__*/(0,F_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_4ff94874__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/ProjectVehicles/Create.vue"]])
=======
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_4ff94874__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/ProjectVehicles/Create.vue"]])
>>>>>>> 3286ecb68e619522c564c02a1bd3b2334ef069c6
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=template&id=4ff94874":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=template&id=4ff94874 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_4ff94874__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_4ff94874__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=4ff94874 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=template&id=4ff94874");


/***/ })

}]);