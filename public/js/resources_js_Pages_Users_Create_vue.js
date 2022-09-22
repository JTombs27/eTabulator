"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Users_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Users/Create.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Users/Create.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    editData: Object
  },
  data: function data() {
    return {
      form: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
        gasoline_id: null,
        permission: "",
        name: "",
        citymunCode: "",
        brgyCode: "",
        purok_id: "",
        email: "",
        password: "",
        password_confirmation: "",
        username: "",
        cats: null,
        id: null,
        office_id: null,
        non_capitol: null
      }),
      stations: [],
      municipals: [],
      barangays: [],
      offices: [],
      employees: [],
      testValue: "",
      pageTitle: "",
      showPassword: null,
      loading: false,
      passwordType: "password"
    };
  },
  mounted: function mounted() {
    this.getGasolineStations();

    if (this.editData !== undefined) {
      this.loading = true;
      this.pageTitle = "Edit";
      this.form.name = this.editData.name;
      this.form.username = this.editData.username;
      this.form.email = this.editData.email;
      this.form.id = this.editData.id;
      this.form.gasoline_id = this.editData.gasoline_id;
      this.form.cats = this.editData.cats;
      this.form.office_id = this.editData.office_id;
      this.form.permission = this.editData.role;

      if (this.editData.office_id) {
        $('#office').select2({
          data: [{
            text: this.editData.office.office,
            id: this.editData.office_id
          }]
        });
      }
    } else {
      this.pageTitle = "Create";
    }

    $('#office').select2({
      ajax: {
        url: '/offices/fetch',
        dataType: 'json',
        delay: 500,
        data: function data(filter) {
          return {
            filter: filter.term
          };
        },
        processResults: function processResults(data, params) {
          params.page = params.page || 1;
          return {
            results: $.map(data, function (obj) {
              return {
                id: obj.id,
                text: obj.text,
                office: obj.office
              };
            })
          };
        },
        cache: true
      },
      placeholder: 'Search for an office',
      minimumInputLength: 2,
      templateResult: this.formatOfficeSelection,
      templateSelection: this.formatOffice
    }); // this.loadOffices();
  },
  methods: {
    selectName: function selectName($event) {
      this.form.cats = $event.cats;
      this.form.office_id = $event.department_code;
      $('#office').select2({
        data: [{
          office: $event.office,
          id: $event.department_code,
          text: $event.office,
          selected: true
        }]
      });
    },
    getGasolineStations: function getGasolineStations() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/travels/gasoline-station').then(function (response) {
        _this.stations = response.data;
      });
    },
    fetchEmployees: function fetchEmployees() {
      $("#emp_name").select2({
        ajax: {
          url: this.urlEmp,
          dataType: 'json',
          delay: 700,
          data: function data(params) {
            return {
              filter: params.term
            };
          },
          processResults: function processResults(data, params) {
            params.page = params.page || 1;
            return {
              results: $.map(data, function (obj) {
                console.log(obj.empl_photo_img.data);
                return {
                  id: obj.employee_name,
                  text: obj.employee_name,
                  cats: obj.empl_id,
                  data: obj.empl_photo_img.data,
                  position: obj.position_long_title,
                  department_code: obj.department_code,
                  office: obj.department_proper_name
                };
              })
            };
          },
          cache: true
        },
        data: [{
          "text": this.form.name,
          "id": this.form.name,
          "selected": true
        }],
        placeholder: 'Search for a repository',
        minimumInputLength: 3,
        templateResult: this.formatRepo,
        templateSelection: this.formatRepoSelection
      });
    },
    formatOffice: function formatOffice(repo) {
      return repo.text;
    },
    formatOfficeSelection: function formatOfficeSelection(repo) {
      if (repo.loading) {
        return "Searching...";
      }

      var img = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-building\" viewBox=\"0 0 16 16\">\n            <path fill-rule=\"evenodd\" d=\"M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z\"/>\n            <path d=\"M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z\"/>\n            </svg>";
      var $container = $("<div class=\"d-flex pt-3\">\n               ".concat(img, " <strong style=\"margin-left:5px\">").concat(repo.office, "</strong>\n            </div>\n           "));
      return $container;
    },
    formatRepo: function formatRepo(repo) {
      if (repo.loading) {
        return "Searching...";
      }

      var img = "";

      if (!repo.data) {
        img = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"60\" height=\"60\" fill=\"currentColor\" class=\"bi bi-person-square bd-placeholder-img flex-shrink-0 me-2 rounded\" viewBox=\"0 0 16 16\">\n                    <path d=\"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z\"/>\n                    <path d=\"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z\"/>\n                    </svg>";
      } else {
        img = " <img class='bd-placeholder-img flex-shrink-0 me-2 rounded'  width='60' src='data:image/png;base64,".concat(repo.data, "'/>");
      }

      var $container = $("<div class=\"d-flex pt-3\">\n                    ".concat(img, "\n                    <p class=\"pb-3 mb-0 small lh-sm border-bottom\">\n                        <strong class=\"d-block\">").concat(repo.id, "</strong>\n                        <strong class=\"d-block\">").concat(repo.cats, "</strong>\n                        ").concat(repo.position, "\n                    </p>\n                </div>\n                        "));
      return $container;
    },
    formatRepoSelection: function formatRepoSelection(repo) {
      return repo.employee_name || repo.text;
    },
    myChangeEvent: function myChangeEvent(val) {
      console.log(val);
    },
    submit: function submit() {
      if (this.editData !== undefined) {
        this.form.patch("/users/" + this.form.id, this.form);
      } else {
        this.form.post("/users", this.form);
      }
    },
    loadMunicipals: function loadMunicipals() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/municipalities').then(function (response) {
        _this2.municipals = response.data;
      });
    },
    loadBarangays: function loadBarangays() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/barangays', {
        citymunCode: this.form.citymunCode
      }).then(function (response) {
        _this3.barangays = response.data;
        _this3.puroks = [];
      });
    },
    loadOffices: function loadOffices() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().get('/offices/fetch').then(function (response) {
        _this4.offices = response.data;
      });
    }
  },
  watch: {
    showPassword: function showPassword(value) {
      if (value) {
        this.passwordType = 'text';
      } else {
        this.passwordType = 'password';
      }
    },
    'form.permission': function formPermission(value) {
      if (value != 'gasoline-station') {
        this.form.gasoline_id = null;
      }
    },
    'form.non_capitol': function formNon_capitol() {
      this.fetchEmployees();
    }
  },
  computed: {
    urlEmp: function urlEmp() {
      if (this.form.non_capitol == false) {
        return "http://122.54.19.172:91//api/PGDDO_Employees";
      } else if (this.form.non_capitol == true) {
        return "/employees/fetch";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Users/Create.vue?vue&type=template&id=636aa3ac":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Users/Create.vue?vue&type=template&id=636aa3ac ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "25",
  height: "25",
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

var _hoisted_4 = {
  "class": "col-md-8"
};
var _hoisted_5 = {
  "class": "col-md-12 mT-10 gap-20"
};
var _hoisted_6 = {
  "class": "row"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "",
  "class": "col-md-4 col-12 my-auto offset-md-2 text-md-start"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, " Select Agency Type"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  "class": "text-danger"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "(Required)")])], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "col-md-3 col-6 d-grid"
};
var _hoisted_9 = {
  "class": "btn btn-sm btn-outline-success text-nowrap",
  "for": "capitol"
};
var _hoisted_10 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = [_hoisted_11, _hoisted_12];

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Fetch from API ");

var _hoisted_15 = {
  "class": "col-md-3 col-6 d-grid"
};
var _hoisted_16 = {
  "class": "btn btn-sm btn-outline-success text-nowrap",
  "for": "non-capitol"
};
var _hoisted_17 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1
/* HOISTED */
);

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
}, null, -1
/* HOISTED */
);

var _hoisted_20 = [_hoisted_18, _hoisted_19];

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Fetch from database ");

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Permission", -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"Admin\">Admin</option><option value=\"PGO\">PGO-Admin</option><option value=\"PG-Head\">PG-Head</option><option value=\"RO\">Requestioning Office</option><option value=\"PGSO\">PGSO</option><option value=\"peo-motorpool\">PEO Motorpool</option><option value=\"gasoline-station\">Gasoline Station</option>", 7);

var _hoisted_30 = [_hoisted_23];
var _hoisted_31 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_32 = {
  key: 1
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Gasoline Station", -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "",
  readonly: "",
  disabled: ""
}, "Select station", -1
/* HOISTED */
);

var _hoisted_35 = ["value"];
var _hoisted_36 = {
  key: 0,
  "class": "fs-6 c-red-500"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Names", -1
/* HOISTED */
);

var _hoisted_38 = {
  key: 3,
  "class": "fs-6 c-red-500"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Office", -1
/* HOISTED */
);

var _hoisted_40 = {
  key: 0,
  "class": "fs-6 c-red-500"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Username", -1
/* HOISTED */
);

var _hoisted_42 = {
  key: 4,
  "class": "fs-6 c-red-500"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Password", -1
/* HOISTED */
);

var _hoisted_44 = ["type"];
var _hoisted_45 = {
  key: 5,
  "class": "fs-6 c-red-500"
};

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Confirm Password", -1
/* HOISTED */
);

var _hoisted_47 = ["type"];
var _hoisted_48 = {
  "class": "form-check"
};

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "flexCheckDefault"
}, " Show Password ", -1
/* HOISTED */
);

var _hoisted_50 = {
  key: 6,
  "class": "fs-6 c-red-500"
};
var _hoisted_51 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_Select2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Select2");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pageTitle) + " users", 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pageTitle) + " users", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/users"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.submit();
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    "class": "btn-check",
    name: "options-outlined",
    id: "capitol",
    autocomplete: "off",
    value: "0",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form.non_capitol = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.form.non_capitol]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_9, [$data.form.non_capitol == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_10, _hoisted_13)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_14])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    "class": "btn-check",
    name: "options-outlined",
    id: "non-capitol",
    autocomplete: "off",
    value: "1",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.non_capitol = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.form.non_capitol]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_16, [$data.form.non_capitol == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_17, _hoisted_20)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_21])])])]), _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.permission = $event;
    })
  }, _hoisted_30, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.permission]]), $data.form.errors.permission ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.permission), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.form.permission == 'gasoline-station' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.form.gasoline_id = $event;
    })
  }, [_hoisted_34, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.stations, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.id,
      key: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 9
    /* TEXT, PROPS */
    , _hoisted_35);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.gasoline_id]]), $data.form.errors.gasoline_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.gasoline_id), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_37, $data.form.permission == 'gasoline-station' ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 2,
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form.name = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.name]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select2, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.form.name = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'd-none': $data.form.permission == 'gasoline-station'
    }),
    id: "emp_name",
    onSelect: _cache[6] || (_cache[6] = function ($event) {
      return $options.selectName($event);
    })
  }, null, 8
  /* PROPS */
  , ["modelValue", "class"]), $data.form.errors.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.name), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'd-none': $data.form.permission == 'gasoline-station'
    })
  }, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select2, {
    modelValue: $data.form.office_id,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.form.office_id = $event;
    }),
    id: "office"
  }, null, 8
  /* PROPS */
  , ["modelValue"]), $data.form.errors.office_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.office_id), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.form.username = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.username]]), $data.form.errors.username ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.username), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: $data.passwordType,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.form.password = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 8
  /* PROPS */
  , _hoisted_44), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, $data.form.password]]), $data.form.errors.password ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.password), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: $data.passwordType,
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.form.password_confirmation = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 8
  /* PROPS */
  , _hoisted_47), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, $data.form.password_confirmation]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.showPassword = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.showPassword]]), _hoisted_49]), $data.form.errors.password ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.password), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $data.form.id = $event;
    }),
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.id]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary mt-3",
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $options.submit();
    }),
    disabled: $data.form.processing
  }, "Save changes", 8
  /* PROPS */
  , _hoisted_51)], 32
  /* HYDRATE_EVENTS */
  )])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Users/Create.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Users/Create.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_636aa3ac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=636aa3ac */ "./resources/js/Pages/Users/Create.vue?vue&type=template&id=636aa3ac");
/* harmony import */ var _Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js */ "./resources/js/Pages/Users/Create.vue?vue&type=script&lang=js");
/* harmony import */ var F_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_636aa3ac__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Users/Create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Users/Create.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Users/Create.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Users/Create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Users/Create.vue?vue&type=template&id=636aa3ac":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Users/Create.vue?vue&type=template&id=636aa3ac ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_636aa3ac__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_636aa3ac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=636aa3ac */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Users/Create.vue?vue&type=template&id=636aa3ac");


/***/ })

}]);