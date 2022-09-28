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
    charges: Object,
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
        borrowing_office: null,
        borrowing_division: '',
        remaining_fuel: null,
        maxLiters: "",
        gasoline_id: null,
        tank_balance: null,
        consumed_fuel: null,
        idooe: null,
        idraao: null,
        charge: null
      }),
      pageTitle: "Create",
      columnFrom: "col-md-12",
      vehicle_status: "",
      employees: [],
      drivers: [],
      divisions: [],
      offices: [],
      gasPrice: "",
      fuelLimit: null,
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
      }],
      loader: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.loadGasoline();

            case 2:
              if (!(_this.editData !== undefined)) {
                _context.next = 49;
                break;
              }

              _.assign(_this.form, {
                current_liters: _this.editData.total_liters
              }); // this.form.charge = `4899-50`;


              _this.form.charge = "".concat(_this.editData.idraao, "-").concat(_this.editData.idooe);
              _this.loading = true;
              _this.pageTitle = "Edit";
              _this.form.place_to_visit = _this.editData.place_to_visit;
              _this.form.gas_type = _this.editData.gas_type;
              _this.form.tank_balance = _this.editData.tank_balance;
              _this.form.borrowing_office = _this.editData.borrowing_office;
              _this.form.borrowing_division = _this.editData.borrowing_division;
              _this.form.consumed_fuel = _this.editData.consumed_fuel;
              _this.form.time_arrival = _this.editData.time_arrival;
              _this.form.time_departure = _this.editData.time_departure;
              _this.form.is_borrowed_fuel = Boolean(_this.editData.is_borrowed_fuel);
              _this.form.total_liters = _this.editData.total_liters;
              _this.form.vehicles_id = String(_this.editData.driver_vehicle.vehicles_id);
              _this.form.driver_vehicles_id = _this.editData.driver_vehicle.id;
              _this.form.official_passenger = _this.editData.official_passenger;
              _this.form.purpose = _this.editData.purpose;
              _this.form.price = _this.editData.price;
              _this.form.drivers_id = _this.editData.driver_vehicle.drivers_id;
              _this.form.date_from = _this.editData.date_from;
              _this.form.gasoline_id = _this.editData.gasoline_id;
              _this.form.office_id = _this.editData.office_id;
              _this.form.is_carpool = Boolean(_this.editData.is_carpool);
              _this.form.showActualDriver = _this.editData.actual_driver ? true : false;
              _this.form.actual_driver = _this.editData.actual_driver ? _this.editData.actual_driver : "";

              if (_this.editData.date_to) {
                _this.form.rangedDate = true;
              }

              _context.next = 32;
              return _this.getVehicles();

            case 32:
              _context.next = 34;
              return _this.fetchPrice();

            case 34:
              _context.next = 36;
              return _this.getOffice();

            case 36:
              if (_this.editData.borrowing_division) {
                _this.loadDivision();
              }

              _context.next = 39;
              return _this.getVehicleDetails();

            case 39:
              _context.next = 41;
              return _this.showActualDriver();

            case 41:
              _context.next = 43;
              return _this.selectChargeDetails();

            case 43:
              _context.next = 45;
              return _this.loadDivision();

            case 45:
              _this.loader = false;
              setTimeout(function () {
                _this.form.date_to = _this.editData.date_to;
              }, 0);
              _context.next = 52;
              break;

            case 49:
              _this.pageTitle = "Create";

              _this.getVehicles();

              _this.loader = false;

            case 52:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    selectChargeDetails: function selectChargeDetails(e) {
      var chargeAttr = $('#charge').find(":selected");

      if (e !== undefined) {
        var chargeAttributes = _.flatMapDepth(e.target.selectedOptions[0].attributes, function (obj) {
          return obj.value;
        }); // console.log(e);


        this.form.idraao = chargeAttributes[0];
        this.form.idooe = chargeAttributes[1];
        this.form.balance = chargeAttributes[2];
      } else {
        this.form.idraao = chargeAttr[0].attributes[0].value;
        this.form.idooe = chargeAttr[0].attributes[1].value;
        this.form.balance = chargeAttr[0].attributes[2].value;
      }
    },
    loadGasoline: function loadGasoline() {
      var _this2 = this;

      axios.get('/prices/fetch').then(function (response) {
        _this2.gasoline = response.data;
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
      return "<div class=\"text-success\">asaas</div>";
    },
    fetchPrice: function fetchPrice() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post('/travels/get-price', {
                  datefilter: _this3.form.date_from,
                  gasType: _this3.form.gas_type,
                  gasoline_id: _this3.form.gasoline_id
                }).then(function (response) {
                  _this3.gasPrice = "Price: \u20B1".concat(parseFloat(response.data).toFixed(2));
                  _this3.form.price = (Number(response.data) * Number(_this3.form.total_liters)).toFixed(2);
                });

              case 2:
                if (!_this3.form.vehicles_id) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 5;
                return _this3.getFuelLimit();

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getVehicles: function getVehicles(e) {
      var _this4 = this;

      // axios.post(`/vehicles/getVehicles`).then( (response) => {
      //     this.vehicles = response.data
      // })
      axios.post("/travels/get-vehicles").then(function (response) {
        _this4.vehicles = response.data;
        var office = _this4.auth.user.office_id;

        try {
          if (e.target.checked) {
            _this4.vehicles = response.data;
          } else {
            _this4.vehicles = _.filter(response.data, function (o) {
              return o.office_id == office;
            });
          }
        } catch (error) {
          _this4.vehicles = response.data;
        }
      });
    },
    getEmployees: function getEmployees() {
      var _this5 = this;

      axios.get('/employees/getEmployees').then(function (response) {
        _this5.employees = response.data;
      });
    },
    // getMaxLiters() {
    //     if (this.form.vehicles_id) {
    //         axios.post('/travels/vehicle-details',{vehicles_id:this.form.vehicles_id, date_to: this.form.date_to, date_from: this.form.date_from})
    //         .then((response) => {
    //             this.drivers =  response.data[0].map(obj => {
    //                 this.form.maxLiters = response.data[1] != 0 ? Number(response.data[0][0].vehicle.fuel_limit) - Number(response.data[1]) : ""
    //             })   
    //         })
    //     }
    // },
    getVehicleDetails: function getVehicleDetails(e) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // console.log(this.editData !== undefined)
                if (_this6.editData !== undefined) {
                  _this6.form.type_code = _this6.editData.driver_vehicle.vehicle.TYPECODE;
                } else {
                  _this6.form.type_code = e.typeCode;
                }

                _context3.next = 3;
                return axios.post('/travels/vehicle-details', {
                  vehicles_id: _this6.form.vehicles_id,
                  date_to: _this6.form.date_to,
                  date_from: _this6.form.date_from
                }).then(function (response) {
                  _this6.drivers = response.data.map(function (obj) {
                    var _selected = false;

                    if (_this6.editData != undefined) {
                      _selected = obj.empl.empl_id === _this6.editData.driver_vehicle.drivers_id;
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
                    _this6.vehicle_status = response.data[0] ? "Status: ".concat(response.data[0].vehicle.vehicle_status.condition) : "";
                  } catch (error) {
                    _this6.vehicle_status = "No status available";
                  }
                });

              case 3:
                if (!_this6.form.date_from) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 6;
                return _this6.getFuelLimit();

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getFuelLimit: function getFuelLimit() {
      var _this7 = this;

      var data = {
        vehicles_id: this.form.vehicles_id,
        date_to: this.form.date_to,
        date_from: this.form.date_from,
        driver_vehicles_id: this.form.driver_vehicles_id
      };

      if (this.editData !== undefined) {
        _.assign(data, {
          id: this.editData.id
        });
      }

      axios.post('/travels/get-fuel', data).then(function (response) {
        _this7.fuelLimit = response.data;
      });
    },
    // checkWeek() {
    //     if(this.form.date_to && this.form.date_to) {
    //         this.form.post('/travels/check-week', {date_from:this.form.date_from, date_to:this.form.date_to}, {
    //             onSuccess: page => {
    //                 console.log(page)
    //             }
    //         });
    //     }    
    // },
    showActualDriver: function showActualDriver(e) {
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
      var data = data = {
        text: "",
        id: "",
        selected: true
      };

      if (this.editData != undefined) {
        if (this.editData.office) {
          data = {
            text: this.editData.office_borrowed_fuel.office,
            id: this.editData.office_borrowed_fuel.id,
            selected: true
          };
        }
      }

      if (!this.form.is_borrowed_fuel) {
        this.form.borrowing_office = null;
        this.form.borrowing_division = null;
        this.divisions = [];
      }

      if (this.$refs.is_borrowed_fuel.checked) {
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
          data: [data],
          placeholder: 'Search for an office',
          minimumInputLength: 2,
          templateResult: this.formatOfficeSelection,
          templateSelection: this.formatOffice
        });
      }
    },
    loadDivision: function loadDivision() {
      var _this8 = this;

      axios.post('/divisions/fetch', {
        department_code: this.form.borrowing_office
      }).then(function (response) {
        _this8.divisions = response.data;
      });
    },
    submit: function submit() {
      if (this.editData) {
        this.form.patch("/travels/".concat(this.editData.id), this.form); // console.log(this.form)

        return false;
      }

      this.form.post("/travels");
    }
  },
  computed: {
    officeFiltered: function officeFiltered() {
      var _this9 = this;

      return _.filter(this.vehicles, function (o) {
        if (!_this9.form.is_borrowed_vehicle && !_this9.form.is_borrowed_fuel) {
          return o.office_id == _this9.auth.user.office_id;
        } else {
          return _this9.vehicles;
        }
      });
    },
    fuelMaxLimit: function fuelMaxLimit() {
      var display = "";

      if (this.fuelLimit == 'Unlimited') {
        display = "No fuel limit";
      } else if (this.fuelLimit != null && this.fuelLimit != 'Unlimited') {
        display = "Remaining weekly fuel limit: ".concat(this.fuelLimit, " liters");
      }

      return display;
    }
  },
  watch: {
    'form.total_liters': _.debounce(function () {
      this.getFuelLimit();
    }, 1000),
    'form.rangedDate': function formRangedDate(value) {
      var _this10 = this;

      if (value) {
        this.columnFrom = 'col-md-6';
      } else {
        setTimeout(function () {
          _this10.form.date_to = null;
          _this10.columnFrom = 'col-md-12';
        }, 100);
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
  key: 0,
  "class": "p-0"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<span class=\"text-center text-secondary\">Please Wait...</span><p class=\"card-text placeholder-glow\"><span class=\"placeholder col-12 placeholder-lg\"></span><span class=\"placeholder col-4\"></span><span class=\"placeholder col-4\"></span><span class=\"placeholder col-6\"></span><span class=\"placeholder col-8\"></span></p><p class=\"card-text placeholder-glow\"><span class=\"placeholder col-12 placeholder-lg\"></span><span class=\"placeholder col-4\"></span><span class=\"placeholder col-4\"></span><span class=\"placeholder col-6\"></span><span class=\"placeholder col-8\"></span></p><p class=\"card-text placeholder-glow\"><span class=\"placeholder col-7\"></span><span class=\"placeholder col-4\"></span><span class=\"placeholder col-4\"></span><span class=\"placeholder col-6\"></span><span class=\"placeholder col-8\"></span></p><p class=\"card-text placeholder-glow\"><span class=\"placeholder col-7\"></span><span class=\"placeholder col-4\"></span><span class=\"placeholder col-4\"></span><span class=\"placeholder col-6\"></span><span class=\"placeholder col-8\"></span></p>", 5);

var _hoisted_7 = {
  "class": "peers fxw-nw jc-sb ai-c"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Balance: ");

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_10 = {
  "class": "col-md-8"
};
var _hoisted_11 = {
  "class": "row"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "CHARGE", -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  "class": "text-danger pull-right mL-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "(Required)")], -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  readonly: "",
  disabled: ""
}, "Select Charge", -1
/* HOISTED */
);

var _hoisted_15 = ["idraoo", "idooe", "value", "balance1", "selected"];
var _hoisted_16 = {
  key: 0,
  "class": "fs-6 c-red-500"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "FROM", -1
/* HOISTED */
);

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  "class": "text-danger pull-right mL-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "(Required)")], -1
/* HOISTED */
);

var _hoisted_20 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_21 = {
  key: 0,
  "class": "col-md-6"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "TO", -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  "class": "text-danger pull-right mL-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "(Required)")], -1
/* HOISTED */
);

var _hoisted_24 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_25 = {
  "class": "col-md-12"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_27 = {
  "class": "form-check"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label disable-select",
  "for": "flexCheckDefault"
}, " CHECK FOR RANGE DATE ", -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_30 = {
  key: 0
};
var _hoisted_31 = {
  "class": "row"
};
var _hoisted_32 = {
  "class": "col-md-6"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "TRAVEL DEPARTURE", -1
/* HOISTED */
);

var _hoisted_34 = {
  "class": "col-md-6"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "TRAVEL ARRIVAL", -1
/* HOISTED */
);

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  "class": "text-danger"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "(Required)")], -1
/* HOISTED */
);

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_39 = {
  "class": "position-relative"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-md-3",
  "for": ""
}, "VEHICLE NAME", -1
/* HOISTED */
);

var _hoisted_41 = {
  "class": "position-absolute top-0 end-0",
  "for": ""
};
var _hoisted_42 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_43 = {
  "class": "col-md-12 mT-10 card card-secondary card-body"
};
var _hoisted_44 = {
  "class": "col-md-12"
};
var _hoisted_45 = {
  "class": "form-check"
};

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label disable-select",
  "for": "carpool"
}, " TAG AS CARPOOL ", -1
/* HOISTED */
);

var _hoisted_47 = {
  "class": "12"
};
var _hoisted_48 = {
  "class": "col-md-4"
};
var _hoisted_49 = {
  "class": "form-check"
};

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label disable-select",
  "for": "is_borrowed_vehicle"
}, " Check if borrow vehicle ", -1
/* HOISTED */
);

var _hoisted_51 = {
  "class": "col-md-4"
};
var _hoisted_52 = {
  "class": "form-check"
};

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label disable-select",
  "for": "is_borrowed_fuel"
}, " Check if borrow fuel ", -1
/* HOISTED */
);

var _hoisted_54 = {
  key: 0
};

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "BORROWED BY(Office)", -1
/* HOISTED */
);

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  "class": "text-danger pull-right mL-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "(Required)")], -1
/* HOISTED */
);

var _hoisted_58 = {
  key: 0,
  "class": "fs-6 c-red-500"
};

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Division", -1
/* HOISTED */
);

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "",
  disabled: "",
  selected: "",
  readonly: ""
}, "Select Division", -1
/* HOISTED */
);

var _hoisted_61 = ["value"];

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_63 = {
  key: 1
};

var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "AUTHORIZED DRIVER", -1
/* HOISTED */
);

var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  "class": "text-danger pull-right mL-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "(Required)")], -1
/* HOISTED */
);

var _hoisted_66 = {
  key: 0,
  "class": "fs-6 c-red-500"
};

var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_68 = {
  "class": "col-md-12"
};
var _hoisted_69 = {
  "class": "form-check"
};

var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label disable-select",
  "for": "actualDriverBox",
  id: "labelActual"
}, " CHECK TO SET SUBSTITUTE DRIVER ", -1
/* HOISTED */
);

var _hoisted_71 = {
  key: 1
};

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "ACTUAL DRIVER", -1
/* HOISTED */
);

var _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  "class": "text-danger pull-right mL-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "(Required)")], -1
/* HOISTED */
);

var _hoisted_74 = {
  key: 2,
  "class": "fs-6 c-red-500"
};

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "NAME OF AUTHORIZED PASSENGER/s", -1
/* HOISTED */
);

var _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "PLACE TO VISIT", -1
/* HOISTED */
);

var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "PURPOSE OF TRAVEL", -1
/* HOISTED */
);

var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "FUEL TANK BALANCE", -1
/* HOISTED */
);

var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": ""
}, null, -1
/* HOISTED */
);

var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "GASOLINE STATION", -1
/* HOISTED */
);

var _hoisted_82 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  "class": "text-danger pull-right mL-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "(Required)")], -1
/* HOISTED */
);

var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  disabled: "",
  value: ""
}, "Select Station", -1
/* HOISTED */
);

var _hoisted_84 = ["value"];
var _hoisted_85 = {
  "class": "position-relative"
};

var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-md-3",
  "for": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("GAS TYPE "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  "class": "text-danger"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "(Required)")])], -1
/* HOISTED */
);

var _hoisted_87 = {
  "class": "position-absolute top-0 end-0",
  "for": ""
};

var _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "",
  disabled: ""
}, null, -1
/* HOISTED */
);

var _hoisted_89 = {
  key: 0,
  disabled: "",
  value: ""
};
var _hoisted_90 = ["value"];
var _hoisted_91 = {
  key: 3,
  "class": "fs-6 c-red-500"
};
var _hoisted_92 = {
  "class": "position-relative"
};

var _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("LITER/s "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  "class": "text-danger"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "(Required)")])], -1
/* HOISTED */
);

var _hoisted_94 = {
  "class": "position-absolute top-0 end-0",
  "for": ""
};
var _hoisted_95 = {
  key: 4,
  "class": "fs-6 c-red-500"
};

var _hoisted_96 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "PRICE", -1
/* HOISTED */
);

var _hoisted_97 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  "class": "text-danger pull-right"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "(Required)")], -1
/* HOISTED */
);

var _hoisted_98 = ["disabled"];
var _hoisted_99 = {
  key: 5,
  "class": "fs-6 c-red-500"
};

var _hoisted_100 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "DEDUCT USED DURING THE TRIP", -1
/* HOISTED */
);

var _hoisted_101 = ["disabled"];
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

  }), $data.loader ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span class=\"text-secondary placeholder bg-none\"></span> "), _hoisted_2])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["row gap-20 masonry pos-r", {
      'd-none': $data.loader == true
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pageTitle) + " Travel", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("\u20B1".concat(Number($data.form.balance ? $data.form.balance : 0).toLocaleString(undefined, {
    minimumFractionDigits: 2
  }))), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/travels"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"row\">\r\n            <div class=\"col-md-4 offset-md-5 offset-4 col-4\">\r\n                <h3 class=\"ms-5 \">From:</h3>\r\n                <select class=\"form-select\">\r\n                    \r\n                </select>\r\n            </div>\r\n        </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[35] || (_cache[35] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.submit();
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_12, _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form.charge = $event;
    }),
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return $options.selectChargeDetails($event);
    }),
    id: "charge",
    ref: "select_charge"
  }, [_hoisted_14, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.charges, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: index,
      idraoo: item.idraao,
      idooe: item.idooe,
      value: "".concat(item.idraao, "-").concat(item.idooe),
      balance1: item.balance1,
      selected: $data.form.charge == "".concat(item.idraao, "-").concat(item.idooe)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.fraodesc) + " --- (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.fooedesc) + ") ", 9
    /* TEXT, PROPS */
    , _hoisted_15);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.charge]]), $data.form.errors.balance ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.balance), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$data.columnFrom])
  }, [_hoisted_18, _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.date_from = $event;
    }),
    type: "date",
    "class": "form-control",
    autocomplete: "chrome-off",
    onChange: _cache[3] || (_cache[3] = function ($event) {
      return $options.fetchPrice();
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.date_from]]), $data.form.errors.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.date_from), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade",
    mode: "out-in"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.form.rangedDate ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, [_hoisted_22, _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $data.form.date_to = $event;
        }),
        type: "date",
        "class": "form-control",
        autocomplete: "chrome-off"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.date_to]]), $data.form.errors.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.date_to), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.form.rangedDate = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.rangedDate]]), _hoisted_28])])]), _hoisted_29, $data.form.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.form.time_departure = $event;
    }),
    type: "time",
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.time_departure]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.form.time_arrival = $event;
    }),
    type: "time",
    "class": "form-control",
    autocomplete: "chrome-off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.time_arrival]])])]), _hoisted_36, _hoisted_37, _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.vehicle_status), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select2, {
    modelValue: $data.form.vehicles_id,
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.form.vehicles_id = $event;
    }),
    options: $options.officeFiltered,
    onSelect: _cache[9] || (_cache[9] = function ($event) {
      return $options.getVehicleDetails($event);
    })
  }, null, 8
  /* PROPS */
  , ["modelValue", "options"]), $data.form.errors.vehicles_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.vehicles_id), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "ml-5 form-check-input",
    type: "checkbox",
    value: "",
    id: "carpool",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.form.is_carpool = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.is_carpool]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "ml-5 form-check-input",
    type: "checkbox",
    id: "is_borrowed_vehicle",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.form.is_borrowed_vehicle = $event;
    }),
    onChange: _cache[12] || (_cache[12] = function ($event) {
      return $options.getOffice($event);
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.is_borrowed_vehicle]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "ml-5 form-check-input",
    type: "checkbox",
    ref: "is_borrowed_fuel",
    id: "is_borrowed_fuel",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $data.form.is_borrowed_fuel = $event;
    }),
    onChange: _cache[14] || (_cache[14] = function ($event) {
      return $options.getOffice($event);
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.is_borrowed_fuel]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade",
    mode: "out-in"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.form.is_borrowed_fuel ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_54, [_hoisted_55, _hoisted_56, _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select2, {
        "class": "js-data-example-ajax",
        id: "office",
        modelValue: $data.form.borrowing_office,
        "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
          return $data.form.borrowing_office = $event;
        }),
        onSelect: $options.loadDivision
      }, null, 8
      /* PROPS */
      , ["modelValue", "onSelect"]), $data.form.errors.borrowing_office ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.borrowing_office), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
          return $data.form.borrowing_division = $event;
        }),
        "class": "form-select"
      }, [_hoisted_60, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.divisions, function (item, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
          key: index,
          value: item.id
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.text), 9
        /* TEXT, PROPS */
        , _hoisted_61);
      }), 128
      /* KEYED_FRAGMENT */
      ))], 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.borrowing_division]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  })]), _hoisted_62])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.form.date_from && $data.form.vehicles_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_63, [_hoisted_64, _hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select2, {
    "class": "js-data-example-ajax",
    modelValue: $data.form.drivers_id,
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $data.form.drivers_id = $event;
    }),
    options: $data.drivers,
    onSelect: _cache[18] || (_cache[18] = function ($event) {
      return $options.setDriverVehicle($event);
    })
  }, null, 8
  /* PROPS */
  , ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input type=\"text\" class=\"form-control\" v-model=\"driverName\"> "), $data.form.errors.driver_vehicles_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.driver_vehicles_id), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    value: "",
    id: "actualDriverBox",
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return $data.form.showActualDriver = $event;
    }),
    onChange: _cache[20] || (_cache[20] = function ($event) {
      return $options.showActualDriver($event);
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.showActualDriver]]), _hoisted_70])]), $data.form.showActualDriver ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_71, [_hoisted_72, _hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
      return $data.form.actual_driver = $event;
    }),
    "class": "form-control"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.actual_driver]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Select2 \r\n                        v-if=\"form.showActualDriver\"\r\n                        v-model=\"form.actual_driver\" \r\n                        id=\"actualDriver\" \r\n                        @select=\"setActualDriver($event)\" \r\n                    /> "), $data.form.errors.actual_driver ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.actual_driver), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input type=\"text\" v-model=\"form.actual_driver\" class=\"form-control\" v-if=\"form.showActualDriver\"> "), _hoisted_75, _hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control",
    cols: "3",
    "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
      return $data.form.official_passenger = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.official_passenger]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input type=\"text\" v-model=\"form.official_passenger\" class=\"form-control\"> "), _hoisted_77, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
      return $data.form.place_to_visit = $event;
    }),
    "class": "form-control"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.place_to_visit]]), _hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[24] || (_cache[24] = function ($event) {
      return $data.form.purpose = $event;
    }),
    "class": "form-control"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.purpose]]), _hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[25] || (_cache[25] = function ($event) {
      return $data.form.tank_balance = $event;
    }),
    "class": "form-control"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.tank_balance]]), _hoisted_80, _hoisted_81, _hoisted_82, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    "onUpdate:modelValue": _cache[26] || (_cache[26] = function ($event) {
      return $data.form.gasoline_id = $event;
    }),
    onChange: _cache[27] || (_cache[27] = function ($event) {
      return $options.fetchPrice();
    })
  }, [_hoisted_83, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.gasoline, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.text), 9
    /* TEXT, PROPS */
    , _hoisted_84);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.gasoline_id]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [_hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.gasPrice), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    "onUpdate:modelValue": _cache[28] || (_cache[28] = function ($event) {
      return $data.form.gas_type = $event;
    }),
    onChange: _cache[29] || (_cache[29] = function ($event) {
      return $options.fetchPrice();
    })
  }, [_hoisted_88, !$data.form.gasoline_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", _hoisted_89, "Select Gasoline Station first")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.gases, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.text), 9
    /* TEXT, PROPS */
    , _hoisted_90);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.gas_type]]), $data.form.errors.gas_type ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.gas_type), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [_hoisted_93, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.fuelMaxLimit), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[30] || (_cache[30] = function ($event) {
      return $data.form.total_liters = $event;
    }),
    "class": "form-control",
    onKeyup: _cache[31] || (_cache[31] = function ($event) {
      return $options.fetchPrice();
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.total_liters]]), $data.form.errors.total_liters ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_95, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.total_liters), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_96, _hoisted_97, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[32] || (_cache[32] = function ($event) {
      return $data.form.price = $event;
    }),
    "class": "form-control",
    disabled: $props.editData !== undefined,
    readonly: ""
  }, null, 8
  /* PROPS */
  , _hoisted_98), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.price]]), $data.form.errors.price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_99, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.price), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_100, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[33] || (_cache[33] = function ($event) {
      return $data.form.consumed_fuel = $event;
    }),
    "class": "form-control"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.consumed_fuel]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary mt-3",
    onClick: _cache[34] || (_cache[34] = function ($event) {
      return $options.submit();
    }),
    disabled: $data.form.processing
  }, "Save changes", 8
  /* PROPS */
  , _hoisted_101)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32
  /* HYDRATE_EVENTS */
  )])], 2
  /* CLASS */
  )], 64
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
<<<<<<< HEAD
/* harmony import */ var E_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");
=======
/* harmony import */ var F_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");
>>>>>>> 007ec59cb36f7d2267bef9900d727be55bd787c8




;
<<<<<<< HEAD
const __exports__ = /*#__PURE__*/(0,E_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_31abcf8a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Travels/Create.vue"]])
=======
const __exports__ = /*#__PURE__*/(0,F_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_31abcf8a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Travels/Create.vue"]])
>>>>>>> 007ec59cb36f7d2267bef9900d727be55bd787c8
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