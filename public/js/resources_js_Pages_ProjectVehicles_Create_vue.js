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
        external_borrow_flag: false,
        rental_flag: false,
        municipality_id: 0,
        barangay_id: 0,
        project_id: this.project.id,
        id: null
      }],
      vehicles: [],
      municipalities: [],
      barangayGroups: [[]],
      testValue: "",
      pageTitle: "",
      loading: false,
      disableVehicle: false,
      backToMyUrl: "/projects-vehicle/" + this.project.id + "/vehicles"
    };
  },
  mounted: function mounted() {
    this.loadVehicles();
    this.loadMunicipality();

    if (this.editData !== undefined) {
      this.loading = true;
      this.pageTitle = "Edit";
      this.vehiclesGroup[0].vehicle_id = this.editData.vehicle_id;
      this.vehiclesGroup[0].date_from = this.editData.date_from;
      this.vehiclesGroup[0].date_to = this.editData.date_to;
      this.vehiclesGroup[0].purpose = this.editData.purpose;
      this.vehiclesGroup[0].project_id = this.editData.project_id;
      this.vehiclesGroup[0].external_borrow_flag = this.editData.external_borrow_flag;
      this.vehiclesGroup[0].rental_flag = this.editData.rental_flag;
      this.vehiclesGroup[0].municipality_id = this.editData.municipality_id;
      this.loadBarangays(this.editData.municipality_id, 0);
      this.vehiclesGroup[0].barangay_id = this.editData.barangay_id;
      this.loa;
      this.vehiclesGroup[0].id = this.editData.id;
      this.disableVehicle = true;
    } else {
      this.pageTitle = "Add";
      this.disableVehicle = false;
    }
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
        external_borrow_flag: false,
        rental_flag: false,
        municipality_id: 0,
        barangay_id: 0,
        project_id: this.project.id,
        id: null
      }));
      this.barangayGroups.push([]);
    },
    removeNode: function removeNode(index) {
      this.vehiclesGroup.splice(index, 1);
      this.barangayGroups.splice(index, 1);
    },
    clearAdditionalDetails: function clearAdditionalDetails(index) {
      if (this.vehiclesGroup[index]['external_borrow_flag'] === false) {
        this.vehiclesGroup[index]['rental_flag'] = false;
        this.vehiclesGroup[index]['municipality_id'] = "";
        this.vehiclesGroup[index]['barangay_id'] = "";
        this.barangayGroups.splice(index, 1);
      } else if (this.vehiclesGroup[index]['external_borrow_flag'] === true && this.editData !== undefined) {
        this.vehiclesGroup[index]['rental_flag'] = this.editData.rental_flag;
        this.vehiclesGroup[index]['municipality_id'] = this.editData.municipality_id;
        this.vehiclesGroup[index]['barangay_id'] = this.editData.barangay_id;
        this.loadBarangays(this.editData.municipality_id, index);
      }
    },
    loadVehicles: function loadVehicles() {
      var _this2 = this;

      axios.get('/projects-vehicle/vehicles').then(function (response) {
        var data = [];
        response.data.forEach(function (element) {
          if (_this2.editData !== undefined) {
            data.push(element);
          } else if (element.condition.condition == "Good Condition") {
            data.push(element);
          }
        });
        _this2.vehicles = data;
      });
    },
    loadMunicipality: function loadMunicipality() {
      var _this3 = this;

      axios.post('/municipalities').then(function (response) {
        _this3.municipalities = response.data;
      });
    },
    loadBarangays: function loadBarangays(citymunCode, index) {
      var _this4 = this;

      axios.post('/barangays', {
        citymunCode: citymunCode
      }).then(function (response) {
        console.log(response.data);
        _this4.barangayGroups[index] = response.data;
      });
    },
    backToMain: function backToMain() {
      this.$inertia.get("/projects-vehicle/" + this.project.id + "/vehicles");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=template&id=4ff94874&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=template&id=4ff94874&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-4ff94874"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

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
  "class": "col-md-12 p-20 bgc-white"
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

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("+ Add Vehicle ");

var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    "class": "bi bi-truck-front-fill",
    viewBox: "0 0 16 16"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "fill-rule": "evenodd",
    d: "M3.5 0A2.5 2.5 0 0 0 1 2.5v9c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2v-9A2.5 2.5 0 0 0 12.5 0h-9ZM3 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.9c0 .625-.562 1.092-1.17.994C10.925 7.747 9.208 7.5 8 7.5c-1.208 0-2.925.247-3.83.394A1.008 1.008 0 0 1 3 6.9V3Zm1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Z"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_10 = [_hoisted_8, _hoisted_9];
var _hoisted_11 = {
  "class": "col-12 bgc-white p-10 bd",
  style: {
    "margin-top": "10px"
  }
};
var _hoisted_12 = {
  "class": "row"
};
var _hoisted_13 = {
  "class": "col-6"
};

var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Vehicle Selection", -1
  /* HOISTED */
  );
});

var _hoisted_15 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_16 = {
  "class": "col-3"
};

var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Period From", -1
  /* HOISTED */
  );
});

var _hoisted_18 = ["onUpdate:modelValue"];
var _hoisted_19 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_20 = {
  key: 1,
  "class": "fs-6 c-red-500"
};
var _hoisted_21 = {
  "class": "col-3"
};
var _hoisted_22 = {
  "class": "peers fxw-nw jc-sb ai-c"
};

var _hoisted_23 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Period To ", -1
  /* HOISTED */
  );
});

var _hoisted_24 = ["onClick"];

var _hoisted_25 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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
});

var _hoisted_26 = [_hoisted_25];
var _hoisted_27 = ["onUpdate:modelValue"];
var _hoisted_28 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_29 = {
  key: 1,
  "class": "fs-6 c-red-500"
};
var _hoisted_30 = {
  "class": "row",
  style: {
    "margin-top": "5px"
  }
};
var _hoisted_31 = {
  "class": "col-12 border-top border-bottom",
  style: {
    "padding-top": "5px",
    "padding-bottom": "6px"
  }
};
var _hoisted_32 = {
  "class": "row"
};
var _hoisted_33 = {
  "class": "col-3"
};
var _hoisted_34 = {
  "class": "form-check form-check-inline"
};
var _hoisted_35 = ["for"];
var _hoisted_36 = {
  "class": "form-check form-check-inline"
};

var _hoisted_37 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-check-label"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_38 = ["id", "onChange", "onUpdate:modelValue", "checked"];
var _hoisted_39 = {
  "class": "form-check form-check-inline"
};
var _hoisted_40 = ["for"];
var _hoisted_41 = {
  "class": "form-check form-check-inline"
};

var _hoisted_42 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-check-label",
    "for": "rental_checkbox"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_43 = ["id", "onUpdate:modelValue", "disabled", "checked"];
var _hoisted_44 = {
  "class": "col-6"
};

var _hoisted_45 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Municipality Selection", -1
  /* HOISTED */
  );
});

var _hoisted_46 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_47 = {
  "class": "col-3"
};

var _hoisted_48 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Barangay Selection", -1
  /* HOISTED */
  );
});

var _hoisted_49 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_50 = {
  "class": "row"
};
var _hoisted_51 = {
  "class": "col-12"
};

var _hoisted_52 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "Purpose", -1
  /* HOISTED */
  );
});

var _hoisted_53 = ["onUpdate:modelValue"];
var _hoisted_54 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_55 = {
  "class": "row"
};
var _hoisted_56 = {
  "class": "col-12"
};
var _hoisted_57 = ["disabled"];
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
    "class": "btn btn-sm btn-outline-success pull-right"
  }, _hoisted_10)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.submit();
    }, ["prevent"])),
    id: "mainForm"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.vehiclesGroup, function (vehicle, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "row",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select2, {
      modelValue: vehicle.vehicle_id,
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return vehicle.vehicle_id = $event;
      },
      options: $data.vehicles,
      disabled: $data.disableVehicle
    }, null, 8
    /* PROPS */
    , ["modelValue", "onUpdate:modelValue", "options", "disabled"]), $data.form.errors['vehiclesGroup.' + index + '.vehicle_id'] || $data.form.errors['vehiclesGroup.' + index + '.vehicle_idX'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.vehicle_id'] || $data.form.errors['vehiclesGroup.' + index + '.vehicle_idX']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"fs-6 c-red-500\" v-if=\"form.errors['vehiclesGroup.'+index+'.vehicle_idX']\">{{ form.errors[\"vehiclesGroup.\"+index+\".vehicle_idX\"]}}</div> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "date",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return vehicle.date_from = $event;
      },
      "class": "form-control",
      autocomplete: "chrome-off"
    }, null, 8
    /* PROPS */
    , _hoisted_18), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, vehicle.date_from]]), $data.form.errors['vehiclesGroup.' + index + '.date_from'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.date_from']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.form.errors['vehiclesGroup.' + index + '.date_fromX'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.date_fromX']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, $props.editData === undefined && $data.vehiclesGroup.length !== 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 0,
      onClick: function onClick($event) {
        return $options.removeNode(index);
      },
      style: {
        "margin-top": "-10px"
      }
    }, _hoisted_26, 8
    /* PROPS */
    , _hoisted_24)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "date",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return vehicle.date_to = $event;
      },
      "class": "form-control",
      autocomplete: "chrome-off"
    }, null, 8
    /* PROPS */
    , _hoisted_27), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, vehicle.date_to]]), $data.form.errors['vehiclesGroup.' + index + '.date_to'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.date_to']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.form.errors['vehiclesGroup.' + index + '.date_toX'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.date_toX']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "form-check-label",
      "for": 'borrow_checkbox' + index
    }, "Check if vehicle is for borrow: ", 8
    /* PROPS */
    , _hoisted_35)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": "form-check-input",
      type: "checkbox",
      id: 'borrow_checkbox' + index,
      onChange: function onChange($event) {
        return $options.clearAdditionalDetails(index);
      },
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return vehicle.external_borrow_flag = $event;
      },
      checked: vehicle.external_borrow_flag
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_38), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, vehicle.external_borrow_flag]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "form-check-label",
      "for": 'rental_checkbox' + index
    }, "Check if borrow includes rental:", 8
    /* PROPS */
    , _hoisted_40)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": "form-check-input",
      type: "checkbox",
      id: 'rental_checkbox' + index,
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return vehicle.rental_flag = $event;
      },
      disabled: !vehicle.external_borrow_flag,
      checked: vehicle.rental_flag
    }, null, 8
    /* PROPS */
    , _hoisted_43), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, vehicle.rental_flag]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select2, {
      modelValue: vehicle.municipality_id,
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return vehicle.municipality_id = $event;
      },
      options: $data.municipalities,
      disabled: !vehicle.external_borrow_flag,
      onSelect: function onSelect($event) {
        return $options.loadBarangays(vehicle.municipality_id, index);
      }
    }, null, 8
    /* PROPS */
    , ["modelValue", "onUpdate:modelValue", "options", "disabled", "onSelect"]), $data.form.errors['vehiclesGroup.' + index + '.municipality_id'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.municipality_id']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select2, {
      modelValue: vehicle.barangay_id,
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return vehicle.barangay_id = $event;
      },
      options: $data.barangayGroups[index],
      disabled: !vehicle.external_borrow_flag
    }, null, 8
    /* PROPS */
    , ["modelValue", "onUpdate:modelValue", "options", "disabled"]), $data.form.errors['vehiclesGroup.' + index + '.barangay_id'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.barangay_id']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [_hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return vehicle.purpose = $event;
      },
      "class": "form-control",
      autocomplete: "chrome-off"
    }, null, 8
    /* PROPS */
    , _hoisted_53), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, vehicle.purpose]]), $data.form.errors['vehiclesGroup.' + index + '.purpose'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.purpose']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary pull-right mt-3",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.submit();
    }),
    disabled: $data.form.processing
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pageTitle == "Add" ? "Save/Create" : "Save Changes"), 9
  /* TEXT, PROPS */
  , _hoisted_57)])])], 32
  /* HYDRATE_EVENTS */
  )])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=style&index=0&id=4ff94874&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=style&index=0&id=4ff94874&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.form-check >.form-check-input[data-v-4ff94874]{\r\n        float: right;\r\n        margin-right: 0px;\r\n        margin-left: 5px;\n}\n.form-check[data-v-4ff94874]{\r\n        padding-left: 0px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=style&index=0&id=4ff94874&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=style&index=0&id=4ff94874&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_style_index_0_id_4ff94874_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=style&index=0&id=4ff94874&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=style&index=0&id=4ff94874&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_style_index_0_id_4ff94874_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_style_index_0_id_4ff94874_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _Create_vue_vue_type_template_id_4ff94874_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=4ff94874&scoped=true */ "./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=template&id=4ff94874&scoped=true");
/* harmony import */ var _Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js */ "./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=script&lang=js");
/* harmony import */ var _Create_vue_vue_type_style_index_0_id_4ff94874_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&id=4ff94874&scoped=true&lang=css */ "./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=style&index=0&id=4ff94874&scoped=true&lang=css");
<<<<<<< HEAD
/* harmony import */ var F_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");
=======
/* harmony import */ var C_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");
>>>>>>> 84b9962a2bb3c570483d9a8e24bc76c42b3d4867




;


<<<<<<< HEAD
const __exports__ = /*#__PURE__*/(0,F_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_4ff94874_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-4ff94874"],['__file',"resources/js/Pages/ProjectVehicles/Create.vue"]])
=======
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_4ff94874_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-4ff94874"],['__file',"resources/js/Pages/ProjectVehicles/Create.vue"]])
>>>>>>> 84b9962a2bb3c570483d9a8e24bc76c42b3d4867
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

/***/ "./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=template&id=4ff94874&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=template&id=4ff94874&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_4ff94874_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_4ff94874_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=4ff94874&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=template&id=4ff94874&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=style&index=0&id=4ff94874&scoped=true&lang=css":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=style&index=0&id=4ff94874&scoped=true&lang=css ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_style_index_0_id_4ff94874_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=style&index=0&id=4ff94874&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ProjectVehicles/Create.vue?vue&type=style&index=0&id=4ff94874&scoped=true&lang=css");


/***/ })

}]);