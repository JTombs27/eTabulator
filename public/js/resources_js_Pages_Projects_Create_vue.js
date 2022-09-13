"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Projects_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Projects/Create.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Projects/Create.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    editData: Object,
    project: Object,
    can: Object
  },
  data: function data() {
    return {
      form: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
        description: "",
        municipality_code: "",
        barangay_code: "",
        id: null
      }),
      vehiclesGroup: [],
      vehicles: [],
      pageTitle: "Add",
      municipalities: [],
      barangayGroups: []
    };
  },
  mounted: function mounted() {
    if (this.editData !== undefined) {
      this.pageTitle = "Edit";
      this.form.description = this.editData.description;
      this.form.id = this.editData.id;
      this.form.municipality_code = this.editData.municipality_code;
      this.form.barangay_code = this.editData.barangay_code;
      this.vehiclesGroup = this.editData.project_vehicles;
      this.loadBarangays(this.editData.municipality_code);
    } else {
      this.pageTitle = "Add";
    }

    this.loadVehicles();
    this.loadMunicipality();
  },
  methods: {
    addNew: function addNew() {
      this.vehiclesGroup.push((0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
        vehicle_id: "",
        date_from: "",
        date_to: "",
        purpose: "",
        project_id: "",
        id: null
      }));
    },
    removeNode: function removeNode(index) {
      this.vehiclesGroup.splice(index, 1);
    },
    submit: function submit() {
      var _this = this;

      if (this.editData !== undefined) {
        this.form.transform(function (data) {
          return {
            data: data,
            vehiclesGroup: _this.vehiclesGroup
          };
        });
        this.form.post('/projects/update-project', this.form);
      } else {
        this.form.transform(function (data) {
          return {
            data: data,
            vehiclesGroup: _this.vehiclesGroup
          };
        });
        this.form.post('/projects/create-project', this.form);
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
    loadBarangays: function loadBarangays(citymunCode) {
      var _this4 = this;

      axios.post('/barangays', {
        citymunCode: citymunCode
      }).then(function (response) {
        _this4.barangayGroups = response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Projects/Create.vue?vue&type=template&id=fc517d90":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Projects/Create.vue?vue&type=template&id=fc517d90 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "col-md-12 p-20 bgc-white bd"
};
var _hoisted_4 = {
  key: 0,
  "class": "col-12 border-bottom"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-12 c-info"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-info-square text-info",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, " Ledger of vehicle assigned in this project.")])], -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "table table-bordered bg-white",
  style: {
    "margin-top": "5px"
  }
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "30%"
  }
}, "Vehicle/Plate Number"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "50%"
  }
}, "Purpose"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "20%"
  }
}, "Period Duration From:To")], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "col-12"
};
var _hoisted_9 = {
  "class": "peers fxw-nw jc-sb ai-c"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "exampleInputEmail1",
  "class": "form-label"
}, "Project Description", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("+ Add Vehicle ");

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_13 = [_hoisted_11, _hoisted_12];
var _hoisted_14 = {
  "class": "col-12",
  style: {
    "margin-top": "5px"
  }
};
var _hoisted_15 = {
  "class": "form-text text-danger"
};
var _hoisted_16 = {
  "class": "col-12 mb-1"
};
var _hoisted_17 = {
  "class": "row"
};
var _hoisted_18 = {
  "class": "col-7"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Municipality Selection", -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "col-5"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Barangay Selection", -1
/* HOISTED */
);

var _hoisted_22 = {
  key: 1,
  "class": "col-12"
};
var _hoisted_23 = {
  "class": "col-12 bgc-white p-10 border-top",
  style: {
    "margin-top": "10px"
  }
};
var _hoisted_24 = {
  "class": "row"
};
var _hoisted_25 = {
  "class": "col-6"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Vehicle Selection", -1
/* HOISTED */
);

var _hoisted_27 = {
  key: 0,
  "class": "form-text text-danger"
};
var _hoisted_28 = {
  "class": "col-3"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Period From", -1
/* HOISTED */
);

var _hoisted_30 = ["onUpdate:modelValue"];
var _hoisted_31 = {
  key: 0,
  "class": "form-text text-danger"
};
var _hoisted_32 = {
  key: 1,
  "class": "form-text text-danger"
};
var _hoisted_33 = {
  "class": "col-3"
};
var _hoisted_34 = {
  "class": "peers fxw-nw jc-sb ai-c"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Period To ", -1
/* HOISTED */
);

var _hoisted_36 = ["onClick"];

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_38 = [_hoisted_37];
var _hoisted_39 = ["onUpdate:modelValue", "disabled"];
var _hoisted_40 = {
  key: 0,
  "class": "form-text text-danger"
};
var _hoisted_41 = {
  key: 1,
  "class": "form-text text-danger"
};
var _hoisted_42 = {
  "class": "row"
};
var _hoisted_43 = {
  "class": "col-12"
};

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Purpose", -1
/* HOISTED */
);

var _hoisted_45 = ["onUpdate:modelValue"];
var _hoisted_46 = {
  key: 0,
  "class": "form-text text-danger"
};
var _hoisted_47 = {
  "class": "row"
};
var _hoisted_48 = {
  "class": "col-12"
};
var _hoisted_49 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_back_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("back-button");

  var _component_Select2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Select2");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pageTitle) + " Project ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_back_button, {
    href: '/projects'
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.submit();
    }, ["prevent"])),
    id: "mainForm"
  }, [$props.editData !== undefined && $data.vehiclesGroup.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.vehiclesGroup, function (vehicle, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(vehicle.vehicles.PLATENO), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(vehicle.purpose), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(vehicle.date_from + ' To ' + vehicle.date_to), 1
    /* TEXT */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, $props.editData === undefined ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    type: "button",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.addNew();
    }),
    "class": "btn btn-sm btn-outline-primary"
  }, _hoisted_13)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.description = $event;
    }),
    id: "description"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.description]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors["data.description"]), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select2, {
    modelValue: $data.form.municipality_code,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.municipality_code = $event;
    }),
    options: $data.municipalities,
    onSelect: _cache[3] || (_cache[3] = function ($event) {
      return $options.loadBarangays($data.form.municipality_code);
    })
  }, null, 8
  /* PROPS */
  , ["modelValue", "options"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select2, {
    modelValue: $data.form.barangay_code,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form.barangay_code = $event;
    }),
    options: $data.barangayGroups
  }, null, 8
  /* PROPS */
  , ["modelValue", "options"])])])]), $props.editData === undefined ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_22, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.vehiclesGroup, function (vehicle, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "row",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select2, {
      modelValue: vehicle.vehicle_id,
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return vehicle.vehicle_id = $event;
      },
      options: $data.vehicles
    }, null, 8
    /* PROPS */
    , ["modelValue", "onUpdate:modelValue", "options"]), $data.form.errors['vehiclesGroup.' + index + '.vehicle_id'] || $data.form.errors['vehiclesGroup.' + index + '.vehicle_idX'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.vehicle_id'] || $data.form.errors['vehiclesGroup.' + index + '.vehicle_idX']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"fs-6 c-red-500\" v-if=\"form.errors['vehiclesGroup.'+index+'.vehicle_idX']\">{{ form.errors[\"vehiclesGroup.\"+index+\".vehicle_idX\"]}}</div> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "date",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return vehicle.date_from = $event;
      },
      "class": "form-control",
      autocomplete: "chrome-off"
    }, null, 8
    /* PROPS */
    , _hoisted_30), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, vehicle.date_from]]), $data.form.errors['vehiclesGroup.' + index + '.date_from'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.date_from']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.form.errors['vehiclesGroup.' + index + '.date_fromX'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.date_fromX']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      onClick: function onClick($event) {
        return $options.removeNode(index);
      },
      style: {
        "margin-top": "-10px"
      }
    }, _hoisted_38, 8
    /* PROPS */
    , _hoisted_36)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "date",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return vehicle.date_to = $event;
      },
      disabled: $props.editData !== undefined,
      "class": "form-control",
      autocomplete: "chrome-off"
    }, null, 8
    /* PROPS */
    , _hoisted_39), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, vehicle.date_to]]), $data.form.errors['vehiclesGroup.' + index + '.date_to'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.date_to']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.form.errors['vehiclesGroup.' + index + '.date_toX'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.date_toX']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return vehicle.purpose = $event;
      },
      "class": "form-control",
      autocomplete: "chrome-off"
    }, null, 8
    /* PROPS */
    , _hoisted_45), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, vehicle.purpose]]), $data.form.errors['vehiclesGroup.' + index + '.purpose'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors['vehiclesGroup.' + index + '.purpose']), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary pull-right",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.submit();
    }),
    disabled: $data.form.processing
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pageTitle == "Add" ? "Save/Create" : "Save Changes"), 9
  /* TEXT, PROPS */
  , _hoisted_49)])])], 32
  /* HYDRATE_EVENTS */
  )])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Projects/Create.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Projects/Create.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_fc517d90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=fc517d90 */ "./resources/js/Pages/Projects/Create.vue?vue&type=template&id=fc517d90");
/* harmony import */ var _Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js */ "./resources/js/Pages/Projects/Create.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_fc517d90__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Projects/Create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Projects/Create.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Projects/Create.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Projects/Create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Projects/Create.vue?vue&type=template&id=fc517d90":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Projects/Create.vue?vue&type=template&id=fc517d90 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_fc517d90__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_fc517d90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=fc517d90 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Projects/Create.vue?vue&type=template&id=fc517d90");


/***/ })

}]);