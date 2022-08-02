"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Travels_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Travels/Create.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Travels/Create.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    editData: Object,
    balance: Number,
    auth: Object
  },
  data: function data() {
    return {
      vehicles: [],
      driverName: "",
      form: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        place_to_visit: '',
        gas_type: '',
        time_arrival: '',
        time_departure: '',
        total_liters: null,
        official_passenger: "",
        driver_vehicles_id: null,
        actual_driver: "",
        date_from: '',
        date_to: '',
        rangedDate: null,
        price: 0.00,
        showActualDriver: false,
        vehicles_id: null,
        purpose: "",
        drivers_id: null,
        is_carpool: null,
        actual_driver_id: null,
        balance: null,
        type_code: null,
        is_borrowed_vehicle: null,
        is_borrowed_fuel: null,
        borrowing_office: null
      }),
      pageTitle: "Create",
      columnFrom: "col-md-12",
      vehicle_status: "",
      employees: [],
      drivers: [],
      gasPrice: "",
      gases: [{
        id: "regular_price",
        text: "Gasoline(Regular)"
      }, {
        id: "premium_price",
        text: "Gasoline(Premium)"
      }, {
        id: "deisoline_price",
        text: "Diesoline"
      }, {
        id: "engine_oil_price",
        text: "Engine Oil"
      }, {
        id: "brake_oil_price",
        text: "Brake Oil"
      }, {
        id: "greases_price",
        text: "Greases"
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // console.log(this.auth.user)
              _this.form.balance = _this.balance;

              if (!(_this.editData !== undefined)) {
                _context.next = 30;
                break;
              }

              _this.loading = true;
              _this.pageTitle = "Edit";
              _this.form.place_to_visit = _this.editData.place_to_visit;
              _this.form.gas_type = _this.editData.gas_type;
              _this.form.time_arrival = _this.editData.time_arrival;
              _this.form.time_departure = _this.editData.time_departure;
              _this.form.total_liters = _this.editData.total_liters;
              _this.form.vehicles_id = String(_this.editData.driver_vehicle.vehicles_id);
              _this.form.driver_vehicles_id = _this.editData.driver_vehicle.id;
              _this.form.official_passenger = _this.editData.official_passenger;
              _this.form.purpose = _this.editData.purpose;
              _this.form.price = _this.editData.price;
              _this.form.drivers_id = _this.editData.driver_vehicle.drivers_id;
              _this.form.date_from = _this.editData.date_from;
              _this.form.office_id = _this.editData.office_id;
              _this.form.is_carpool = Boolean(_this.editData.is_carpool);
              _this.form.showActualDriver = _this.editData.actual_driver ? true : false;
              _this.form.actual_driver = _this.editData.actual_driver ? _this.editData.actual_driver : "";

              if (_this.editData.date_to) {
                _this.form.rangedDate = true;
              }

              _context.next = 23;
              return _this.getVehicleDetails();

            case 23:
              _context.next = 25;
              return _this.showActualDriver();

            case 25:
              _context.next = 27;
              return _this.fetchPrice();

            case 27:
              setTimeout(function () {
                _this.form.date_to = _this.editData.date_to;
              }, 0);
              _context.next = 31;
              break;

            case 30:
              _this.pageTitle = "Create";

            case 31:
              _this.getVehicles(); // $("#actualDriver").select2({
              //   tags: true
              // });


            case 32:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
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
      return "<div class=\"text-success\">asaas</div>";
    },
    fetchPrice: function fetchPrice() {
      var _this2 = this;

      axios.post('/travels/get-price', {
        datefilter: this.form.date_from,
        gasType: this.form.gas_type
      }).then(function (response) {
        _this2.gasPrice = "Price: \u20B1".concat(parseFloat(response.data).toFixed(2));
        _this2.form.price = (Number(response.data) * Number(_this2.form.total_liters)).toFixed(2);
      });
    },
    getVehicles: function getVehicles(e) {
      var _this3 = this;

      axios.post("/vehicles/getVehicles").then(function (response) {
        _this3.vehicles = response.data;
      }); // axios.post(`/travels/get-vehicles`).then( (response) => {
      //     this.vehicles = response.data
      //     // let office = this.auth.user.office_id
      //     // try {
      //     //     if (e.target.checked) {
      //     //         this.vehicles = response.data
      //     //     } else {
      //     //         this.vehicles = _.filter(response.data, (o) => o.office_id == office)
      //     //     }
      //     // } catch (error) {
      //     //     this.vehicles = response.data
      //     // }
      // })
    },
    getEmployees: function getEmployees() {
      var _this4 = this;

      axios.get('/employees/getEmployees').then(function (response) {
        _this4.employees = response.data;
      });
    },
    getVehicleDetails: function getVehicleDetails(e) {
      var _this5 = this;

      if (this.editData !== undefined) {
        this.form.type_code = this.editData.driver_vehicle.vehicle;
      } else {
        this.form.type_code = e.typeCode.TYPECODE;
      }

      axios.post('/travels/vehicle-details', {
        vehicles_id: this.form.vehicles_id
      }).then(function (response) {
        _this5.drivers = response.data.map(function (obj) {
          var _selected = false;

          if (_this5.editData != undefined) {
            _selected = obj.empl.empl_id === _this5.editData.driver_vehicle.drivers_id;
          }

          var mi = "";

          if (obj.empl.middle_name) {
            mi = obj.empl.middle_name.charAt(0);
          }

          return {
            id: obj.empl.empl_id,
            text: "".concat(obj.empl.first_name, " ").concat(mi, ". ").concat(obj.empl.last_name),
            dv_id: obj.id,
            office_id: obj.empl.department_code,
            "selected": _selected
          };
        });

        try {
          _this5.vehicle_status = response.data ? "Status: ".concat(response.data[0].vehicle.vehicle_status.condition) : "";
        } catch (error) {
          _this5.vehicle_status = "No status available";
        }
      });
    },
    showActualDriver: function showActualDriver(e) {
      console.log(e);

      if (true) {
        $('#actualDriver').select2({
          ajax: {
            type: "GET",
            dataType: "json",
            url: "/employees/getEmployees",
            delay: 400,
            data: function data(_data) {
              return {
                search: _data.term
              };
            },
            processResults: function processResults(data, params) {
              params.page = params.page || 1;
              return {
                results: $.map(data, function (obj) {
                  return {
                    id: obj.text,
                    text: obj.text,
                    cats: obj.cats
                  };
                })
              };
            },
            cache: true
          },
          data: [{
            text: this.form.actual_driver,
            id: this.form.actual_driver,
            selected: true
          }],
          placeholder: 'Search to add actual driver',
          minimumInputLength: 3
        });
      }
    },
    setActualDriver: function setActualDriver(e) {
      console.log(e); // let separator = "";
      // if (this.form.official_passenger != "") {
      //     separator = ", ";
      //     this.form.official_passenger += `${separator}${e.text}`
      //     return false;
      // }
      // this.form.official_passenger += `${separator}${e.text}`
    },
    setDriverVehicle: function setDriverVehicle($event) {
      this.form.driver_vehicles_id = $event.dv_id;

      if (this.editData === undefined) {
        this.form.office_id = $event.office_id;
      }
    },
    getOffice: function getOffice(e) {
      if (!this.form.is_borrowed_vehicle && !this.form.is_borrowed_fuel) {
        this.form.borrowing_office = null;
      }

      if (e.target.checked) {
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
        });
      }
    },
    submit: function submit() {
      if (this.editData) {
        this.form.patch("/travels/".concat(this.editData.id), this.form);
        return false;
      }

      this.form.post("/travels", this.form);
    }
  },
  computed: {
    officeFiltered: function officeFiltered() {
      var _this6 = this;

      return _.filter(this.vehicles, function (o) {
        if (!_this6.form.is_borrowed_vehicle) {
          return o.office_id == _this6.auth.user.office_id;
        } else {
          return _this6.vehicles;
        }
      });
    }
  },
  watch: {
    'form.rangedDate': function formRangedDate(value) {
      var _this7 = this;

      if (value) {
        this.columnFrom = 'col-md-6';
        this.form.date_to = null;
      } else {
        setTimeout(function () {
          _this7.columnFrom = 'col-md-12';
        }, 100);
      }
    },
    form: {
      handler: function handler(val) {
        console.log("test");
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Travels/Create.vue?vue&type=template&id=31abcf8a":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Travels/Create.vue?vue&type=template&id=31abcf8a ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Balance: ");

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_5 = {
  "class": "col-md-8"
};
var _hoisted_6 = {
  "class": "row"
};
var _hoisted_7 = {
  "class": "col-md-4"
};
var _hoisted_8 = {
  "class": "form-check"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label disable-select",
  "for": "is_borrowed_vehicle"
}, " Check if borrow vehicle ", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "col-md-4"
};
var _hoisted_11 = {
  "class": "form-check"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label disable-select",
  "for": "is_borrowed_fuel"
}, " Check if borrow fuel ", -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "From", -1
/* HOISTED */
);

var _hoisted_16 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_17 = {
  key: 0,
  "class": "col-md-6"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "To", -1
/* HOISTED */
);

var _hoisted_19 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_20 = {
  "class": "col-md-12"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "form-check"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label disable-select",
  "for": "flexCheckDefault"
}, " Check ranged date ", -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "row"
};
var _hoisted_26 = {
  "class": "col-md-6"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Travel Departure", -1
/* HOISTED */
);

var _hoisted_28 = {
  "class": "col-md-6"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Travel Arrival", -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_31 = {
  "class": "position-relative"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-md-3",
  "for": ""
}, "Vehicle Name", -1
/* HOISTED */
);

var _hoisted_33 = {
  "class": "position-absolute top-0 end-0",
  "for": ""
};
var _hoisted_34 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_35 = {
  "class": "col-md-12"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_37 = {
  "class": "form-check"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label disable-select",
  "for": "carpool"
}, " Tag as carpool ", -1
/* HOISTED */
);

var _hoisted_39 = {
  key: 0
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Borrowed by", -1
/* HOISTED */
);

var _hoisted_42 = {
  key: 0,
  "class": "fs-6 c-red-500"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Authorized Driver", -1
/* HOISTED */
);

var _hoisted_45 = {
  key: 1,
  "class": "fs-6 c-red-500"
};

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_47 = {
  "class": "col-md-12"
};
var _hoisted_48 = {
  "class": "form-check"
};

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label disable-select",
  "for": "actualDriverBox",
  id: "labelActual"
}, " Check to set substitute driver ", -1
/* HOISTED */
);

var _hoisted_50 = {
  key: 2
};
var _hoisted_51 = {
  key: 4,
  "class": "fs-6 c-red-500"
};

var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Name of Authorized Passenger/s", -1
/* HOISTED */
);

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Place to visit", -1
/* HOISTED */
);

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Purpose of Travel", -1
/* HOISTED */
);

var _hoisted_56 = {
  "class": "position-relative"
};

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-md-3",
  "for": ""
}, "Gas Type", -1
/* HOISTED */
);

var _hoisted_58 = {
  "class": "position-absolute top-0 end-0",
  "for": ""
};
var _hoisted_59 = ["value"];
var _hoisted_60 = {
  key: 5,
  "class": "fs-6 c-red-500"
};

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Liter/s", -1
/* HOISTED */
);

var _hoisted_62 = {
  key: 6,
  "class": "fs-6 c-red-500"
};

var _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Price", -1
/* HOISTED */
);

var _hoisted_64 = ["disabled"];
var _hoisted_65 = {
  key: 7,
  "class": "fs-6 c-red-500"
};
var _hoisted_66 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_Select2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Select2");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pageTitle) + " travel", 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pageTitle) + " Travel", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("\u20B1".concat(Number($props.balance).toLocaleString(undefined, {
    minimumFractionDigits: 2
  }))), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/travels"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[29] || (_cache[29] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.submit();
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "ml-5 form-check-input",
    type: "checkbox",
    id: "is_borrowed_vehicle",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form.is_borrowed_vehicle = $event;
    }),
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return $options.getOffice($event);
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.is_borrowed_vehicle]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "ml-5 form-check-input",
    type: "checkbox",
    id: "is_borrowed_fuel",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.is_borrowed_fuel = $event;
    }),
    onChange: _cache[3] || (_cache[3] = function ($event) {
      return $options.getOffice($event);
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.is_borrowed_fuel]])]), _hoisted_13]), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.columnFrom])
  }, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form.date_from = $event;
    }),
    type: "date",
    "class": "form-control",
    autocomplete: "chrome-off",
    onChange: _cache[5] || (_cache[5] = function ($event) {
      return $options.fetchPrice();
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.date_from]]), $data.form.errors.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.date_from), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade",
    mode: "out-in"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.form.rangedDate ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $data.form.date_to = $event;
        }),
        type: "date",
        "class": "form-control",
        autocomplete: "chrome-off"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.date_to]]), $data.form.errors.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.date_to), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.form.rangedDate = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.rangedDate]]), _hoisted_23])])]), _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.form.time_departure = $event;
    }),
    type: "time",
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.time_departure]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.form.time_arrival = $event;
    }),
    type: "time",
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.time_arrival]])])]), _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.vehicle_status), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select2, {
    modelValue: $data.form.vehicles_id,
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.form.vehicles_id = $event;
    }),
    options: $data.vehicles,
    onSelect: _cache[11] || (_cache[11] = function ($event) {
      return $options.getVehicleDetails($event);
    })
  }, null, 8
  /* PROPS */
  , ["modelValue", "options"]), $data.form.errors.vehicles_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.vehicles_id), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "ml-5 form-check-input",
    type: "checkbox",
    value: "",
    id: "carpool",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $data.form.is_carpool = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.is_carpool]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade",
    mode: "out-in"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.form.is_borrowed_vehicle || $data.form.is_borrowed_fuel ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_39, [_hoisted_40, _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select2, {
        "class": "js-data-example-ajax",
        id: "office",
        modelValue: $data.form.borrowing_office,
        "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
          return $data.form.borrowing_office = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"]), $data.form.errors.borrowing_office ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.borrowing_office), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  })]), _hoisted_43, _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select2, {
    "class": "js-data-example-ajax",
    modelValue: $data.form.drivers_id,
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $data.form.drivers_id = $event;
    }),
    options: $data.drivers,
    onSelect: _cache[15] || (_cache[15] = function ($event) {
      return $options.setDriverVehicle($event);
    })
  }, null, 8
  /* PROPS */
  , ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input type=\"text\" class=\"form-control\" v-model=\"driverName\"> "), $data.form.errors.driver_vehicles_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.driver_vehicles_id), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    value: "",
    id: "actualDriverBox",
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $data.form.showActualDriver = $event;
    }),
    onChange: _cache[17] || (_cache[17] = function ($event) {
      return $options.showActualDriver($event);
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.showActualDriver]]), _hoisted_49])]), $data.form.showActualDriver ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_50, "Actual Driver")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.form.showActualDriver ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Select2, {
    key: 3,
    modelValue: $data.form.actual_driver,
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $data.form.actual_driver = $event;
    }),
    id: "actualDriver",
    onSelect: _cache[19] || (_cache[19] = function ($event) {
      return $options.setActualDriver($event);
    })
  }, null, 8
  /* PROPS */
  , ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.form.errors.actual_driver ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.actual_driver), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input type=\"text\" v-model=\"form.actual_driver\" class=\"form-control\" v-if=\"form.showActualDriver\"> "), _hoisted_52, _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control",
    cols: "3",
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $data.form.official_passenger = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.official_passenger]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input type=\"text\" v-model=\"form.official_passenger\" class=\"form-control\"> "), _hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
      return $data.form.place_to_visit = $event;
    }),
    "class": "form-control"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.place_to_visit]]), _hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
      return $data.form.purpose = $event;
    }),
    "class": "form-control"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.purpose]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [_hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.gasPrice), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
      return $data.form.gas_type = $event;
    }),
    onChange: _cache[24] || (_cache[24] = function ($event) {
      return $options.fetchPrice();
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.gases, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.text), 9
    /* TEXT, PROPS */
    , _hoisted_59);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.gas_type]]), $data.form.errors.gas_type ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.gas_type), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[25] || (_cache[25] = function ($event) {
      return $data.form.total_liters = $event;
    }),
    "class": "form-control",
    onKeyup: _cache[26] || (_cache[26] = function ($event) {
      return $options.fetchPrice();
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.total_liters]]), $data.form.errors.total_liters ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.total_liters), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[27] || (_cache[27] = function ($event) {
      return $data.form.price = $event;
    }),
    "class": "form-control",
    disabled: $props.editData !== undefined
  }, null, 8
  /* PROPS */
  , _hoisted_64), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.price]]), $data.form.errors.price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.price), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary mt-3",
    onClick: _cache[28] || (_cache[28] = function ($event) {
      return $options.submit();
    }),
    disabled: $data.form.processing
  }, "Save changes", 8
  /* PROPS */
  , _hoisted_66)], 32
  /* HYDRATE_EVENTS */
  )])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Travels/Create.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Travels/Create.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_31abcf8a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=31abcf8a */ "./resources/js/Pages/Travels/Create.vue?vue&type=template&id=31abcf8a");
/* harmony import */ var _Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js */ "./resources/js/Pages/Travels/Create.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_31abcf8a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Travels/Create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Travels/Create.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Travels/Create.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Travels/Create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Travels/Create.vue?vue&type=template&id=31abcf8a":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Travels/Create.vue?vue&type=template&id=31abcf8a ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_31abcf8a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_31abcf8a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=31abcf8a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Travels/Create.vue?vue&type=template&id=31abcf8a");


/***/ })

}]);