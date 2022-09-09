"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_SoaTravels_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SoaTravels/Show.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SoaTravels/Show.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Filter */ "./resources/js/Shared/Filter.vue");
/* harmony import */ var _Shared_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Pagination */ "./resources/js/Shared/Pagination.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Pages_Travels_Invoice_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Pages/Travels/Invoice.vue */ "./resources/js/Pages/Travels/Invoice.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Soa Travel',
  components: {
    Pagination: _Shared_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"],
    Filtering: _Shared_Filter__WEBPACK_IMPORTED_MODULE_1__["default"],
    Invoice: _Pages_Travels_Invoice_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    travel: Array,
    auth: Object
  },
  data: function data() {
    return {
      invoiceItem: {},
      invoiceOpen: false,
      Travels: [],
      currentSort: 'name',
      currentSortDir: 'asc',
      pageSize: 10,
      currentPage: 1,
      form: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        date_from: "",
        date_to: "",
        gasoline_id: this.auth.user.gasoline_id,
        travels: [],
        user_id: this.auth.user.id,
        office_id: "",
        division_code: ""
      }),
      offices: [],
      divisions: [],
      temp2: []
    };
  },
  computed: {
    sortedEmp: function sortedEmp() {
      var _this = this;

      this.tem2 = [];
      var startDate = this.form.date_from;
      var endDate = this.form.date_to;
      var office = this.form.office_id;
      var divisions = this.form.division_code;

      if (startDate == "") {
        this.temp2 = [];
      } else {
        this.temp2 = this.Travels.filter(function (item) {
          if (divisions) {
            if (!!item.division_code) {
              return item.office_id == office && item.division_code.division_code == divisions;
            } else {
              return item.office_id == office;
            }
          } else {
            return item.office_id == office;
          }
        }).filter(function (item) {
          var travelDateFrom = item.date_fueled;

          if (startDate && endDate) {
            return startDate <= travelDateFrom && endDate >= travelDateFrom;
          }

          if (startDate && !endDate) {
            return startDate <= travelDateFrom;
          }

          return _this.temp2;
        });
      }
      /*
      if ( !startDate && endDate ) {
          return travelDateTo <= endDate;
      }*/


      this.form.travels = this.temp2;
      this.myLength = this.temp2.length;
      return this.temp2.sort(function (a, b) {
        var modifier = 1;
        if (_this.currentSortDir === 'desc') modifier = -1;
        if (a[_this.currentSort] < b[_this.currentSort]) return -1 * modifier;
        if (a[_this.currentSort] > b[_this.currentSort]) return 1 * modifier;
        return 0;
      }).filter(function (row, index) {
        var start = (_this.currentPage - 1) * _this.pageSize;
        var end = _this.currentPage * _this.pageSize;
        if (index >= start && index < end) return true;
      });
    }
  },
  watch: {
    'form.office_id': function formOffice_id(value) {
      this.loadDivisions(value);
    }
  },
  mounted: function mounted() {
    this.getData();
    this.loadOffices();
  },
  methods: {
    back: function back() {
      window.history.back();
    },
    getData: function getData() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.Travels = _this2.travel;
                _this2.myLength = _this2.Travels.length;

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    nextPage: function nextPage() {
      if (this.currentPage * this.pageSize < this.myLength) this.currentPage++;
    },
    prevPage: function prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    sort: function sort(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }

      this.currentSort = s;
    },
    getTo: function getTo() {
      var toPage = this.currentPage;
      toPage = toPage * this.pageSize;

      if (toPage > this.myLength) {
        toPage = toPage - (toPage - this.myLength);
      }

      return toPage;
    },
    date_from: function date_from() {
      this.currentPage = 1;
    },
    date_to: function date_to() {
      this.currentPage = 1;
    },
    submit: function submit() {
      this.form.post("/soatravels", this.form);
    },
    loadOffices: function loadOffices() {
      var _this3 = this;

      axios.get('/offices/fetch').then(function (response) {
        _this3.offices = response.data;
      });
    },
    loadDivisions: function loadDivisions(value) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = _this4;
                _context2.next = 3;
                return axios.post('/divisions/fetch', {
                  department_code: value
                }).then(function (response) {
                  self.divisions = response.data;
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    invoice: function invoice(item) {
      console.log(item);
      /**
       * if using component use the code below
       * 
       * this.invoiceItem = item; create an array data named invoiceItem
       * this.invoiceOpen = true create boolean data named invoiceOpen
       */

      this.invoiceItem = item;
      this.invoiceOpen = true;
    },
    save: function save(_refresh) {
      var _this5 = this;

      this.invoiceOpen = false;
      this.$inertia.visit("/soatravels/merge", {
        preserveState: true,
        onFinish: function onFinish() {
          _this5.Travels = _this5.travel;
          _this5.temp2 = _this5.Travels;
        }
      });
    },
    gas: function gas(gas_type) {
      switch (gas_type) {
        case 'premium_price':
          return "PREMUIM";
          break;

        case 'regular_price':
          return "REGULAR";
          break;

        case 'deisoline_price':
          return "DIESOLINE";
          break;

        case 'engine_oil_price':
          return "ENGINE OIL";
          break;

        case 'brake_oil_price':
          return "BRAKE OIL";
          break;

        case 'greases_price':
          return "GREASES";
          break;

        default:
          return "";
          break;
      }
    }
    /* fetchPrice(soa_travel,gas_type,total_liters) {
       
        
        var xxxx;
        let var_price =  axios.post('/travels/get-price', 
            {datefilter:soa_travel, gasType:gas_type}
        ).then(response => respose.data)
        .then(data => {
            xxxx= (Number(data) * Number(total_liters)).toFixed(2);
            
        
        }) 
          return  xxxx;            
    },*/

  }
});

/***/ }),

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
        id: null
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    prev: String,
    next: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SoaTravels/Show.vue?vue&type=template&id=b367fb42":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SoaTravels/Show.vue?vue&type=template&id=b367fb42 ***!
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

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Travels", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "peers fxw-nw jc-sb ai-c"
};
var _hoisted_5 = {
  "class": "peer"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_7 = {
  "class": "col-12"
};
var _hoisted_8 = {
  "class": "row p-20 d-flex justify-content-end"
};
var _hoisted_9 = {
  "class": "bgc-white col-md-12 m-0"
};
var _hoisted_10 = {
  "class": "row"
};
var _hoisted_11 = {
  "class": "col-md-3"
};
var _hoisted_12 = {
  "class": "input-group"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, "Office", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  disabled: "",
  value: ""
}, "Select Offices", -1
/* HOISTED */
);

var _hoisted_15 = ["value"];
var _hoisted_16 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_17 = {
  "class": "col-md-4"
};
var _hoisted_18 = {
  "class": "input-group"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, "Divisions", -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  disabled: "",
  value: ""
}, "Select Division", -1
/* HOISTED */
);

var _hoisted_21 = ["value"];
var _hoisted_22 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_23 = {
  "class": "col-md-2"
};
var _hoisted_24 = {
  "class": "input-group"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, "From", -1
/* HOISTED */
);

var _hoisted_26 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_27 = {
  "class": "col-md-2"
};
var _hoisted_28 = {
  "class": "input-group"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, "To", -1
/* HOISTED */
);

var _hoisted_30 = {
  key: 0,
  "class": "fs-6 c-red-500"
};
var _hoisted_31 = {
  "class": "col-md-1"
};
var _hoisted_32 = ["disabled"];
var _hoisted_33 = {
  "class": "bgc-white p-20 bd table table-responsive"
};
var _hoisted_34 = {
  "class": "table table-hover"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Ticket Number"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Invoice Number"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Date Fuel"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Gas Type"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Liters"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Actual Liters"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  style: {
    "text-align": "right"
  }
}, "Price"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  style: {
    "text-align": "right"
  }
}, "total Price"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Action")])], -1
/* HOISTED */
);

var _hoisted_36 = ["innerHTML"];
var _hoisted_37 = {
  "class": "text-end"
};
var _hoisted_38 = {
  "class": "text-end"
};
var _hoisted_39 = ["onClick"];

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-receipt",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
})], -1
/* HOISTED */
);

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Invoice ");

var _hoisted_42 = [_hoisted_40, _hoisted_41];
var _hoisted_43 = {
  key: 0,
  colspan: "6"
};
var _hoisted_44 = {
  "class": "pagination"
};
var _hoisted_45 = {
  "class": "page-item"
};
var _hoisted_46 = {
  "class": "page-iteme"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_invoice = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("invoice");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/",
    onClick: $options.back
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form.office_id = $event;
    }),
    "class": "form-control",
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return $options.loadDivisions($event);
    })
  }, [_hoisted_14, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.offices, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.short_name), 9
    /* TEXT, PROPS */
    , _hoisted_15);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.office_id]])]), $data.form.errors.office_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.office_id), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.division_code = $event;
    }),
    "class": "form-control"
  }, [_hoisted_20, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.divisions, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.text), 9
    /* TEXT, PROPS */
    , _hoisted_21);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.division_code]])]), $data.form.errors.division_code ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.division_code), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "date",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.form.date_from = $event;
    }),
    onChange: _cache[4] || (_cache[4] = function ($event) {
      return $options.date_from();
    }),
    "class": "form-control"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.date_from]])]), $data.form.errors.date_from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.date_from), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "date",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.form.date_to = $event;
    }),
    onChange: _cache[6] || (_cache[6] = function ($event) {
      return $options.date_to();
    }),
    "class": "form-control"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.date_to]])]), $data.form.errors.date_to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.date_to), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-primary text-white",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $options.submit();
    }),
    disabled: $data.form.travels == 0
  }, "Merge", 8
  /* PROPS */
  , _hoisted_32)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.sortedEmp, function (soa_travel) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(soa_travel.ticket_number), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(soa_travel.invoice), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(soa_travel.date_fueled), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      innerHTML: $options.gas(soa_travel.gas_type)
    }, null, 8
    /* PROPS */
    , _hoisted_36), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(soa_travel.total_liters), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(soa_travel.actual_liters), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Number(soa_travel.actual_prices).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Number(soa_travel.price).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "dropdown-item",
      onClick: function onClick($event) {
        return $options.invoice(soa_travel);
      }
    }, _hoisted_42, 8
    /* PROPS */
    , _hoisted_39)])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  )), !$options.sortedEmp.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_43, "No record found.")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_45, [this.currentPage > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "page-link",
    onClick: _cache[8] || (_cache[8] = function () {
      return $options.prevPage && $options.prevPage.apply($options, arguments);
    }),
    "preserve-scroll": "",
    style: {
      "color": "grey"
    }
  }, "Previous")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), this.currentPage <= 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "page-link",
    disabled: true,
    onClick: _cache[9] || (_cache[9] = function () {
      return $options.prevPage && $options.prevPage.apply($options, arguments);
    }),
    style: {
      "color": "grey"
    }
  }, "Previous")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_46, [this.currentPage * this.pageSize < this.myLength ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "page-link",
    onClick: _cache[10] || (_cache[10] = function () {
      return $options.nextPage && $options.nextPage.apply($options, arguments);
    }),
    "preserve-scroll": "",
    style: {
      "color": "grey"
    }
  }, "Next")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), this.currentPage * this.pageSize >= this.myLength ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "page-link",
    disabled: true,
    onClick: _cache[11] || (_cache[11] = function () {
      return $options.nextPage && $options.nextPage.apply($options, arguments);
    }),
    style: {
      "color": "grey"
    }
  }, "Next")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), $data.invoiceOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_invoice, {
    key: 0,
    item: $data.invoiceItem,
    onCloseModal: $options.save
  }, null, 8
  /* PROPS */
  , ["item", "onCloseModal"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

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
  key: 0,
  "class": "ml-2"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "spinner-border spinner-border-sm",
  role: "status",
  "aria-hidden": "true"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Submitting... ");

var _hoisted_10 = [_hoisted_8, _hoisted_9];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Modal");

  return $data.showInvoice ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Modal, {
    key: 0,
    onCloseModal: _cache[4] || (_cache[4] = function ($event) {
      return $options.invoice();
    }),
    showSaveButton: true,
    onSaveModal: _cache[5] || (_cache[5] = function ($event) {
      return $options.saveInvoice();
    }),
    modalTitle: 'Invoice'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
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
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $data.form.processing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_7, _hoisted_10)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32
      /* HYDRATE_EVENTS */
      )];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "sidebar-wrapper",
  "class": "sidebar-nav nav navbar-inverse"
};
var _hoisted_2 = {
  "class": "row",
  style: {
    "width": "380px"
  }
};
var _hoisted_3 = {
  "class": "bgc-white"
};
var _hoisted_4 = {
  "class": "modal-header"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "exampleModalLiveLabel"
}, "Advanced Filtering", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "modal-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-close",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('closeFilter');
    })
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "pagination"
};
var _hoisted_2 = {
  "class": "page-item"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Previous");

var _hoisted_4 = {
  "class": "page-item"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Next");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" \r\n            I intend to recreate a simple pagination [simplePaginate()] for performance purpose \r\n            read https://laravel.com/docs/8.x/pagination#simple-pagination\r\n\r\n            If you think you will not have huge dataset in the future you can use\r\n            the paginate() by uncommenting below and in the actual component.\r\n        "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Component \r\n            :is=\"link.url ? 'Link' : 'span'\"\r\n            v-for=\"link in links\" \r\n            :href=\"link.url\" \r\n            v-html=\"link.label\"\r\n            class=\"p-3 text-decoration-none\"\r\n            :class=\"{'text-muted' : !link.url, 'fw-bold' : link.active}\"\r\n        /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <ul class=\"pagination\">\r\n            <li \r\n                v-for=\"(link, index) in links\"\r\n                :key=\"index\"\r\n                class=\"page-item\"\r\n                :class=\"{'active' : link.active, 'disabled' : !link.url }\"\r\n            >\r\n                <Link \r\n                    class=\"page-link\" \r\n                    :href=\"link.url\" \r\n                    v-html=\"link.label\" \r\n                    preserve-scroll\r\n                />\r\n            </li>\r\n            \r\n          </ul> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_2, [$props.prev ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    "class": "page-link",
    href: $props.prev,
    "preserve-scroll": "",
    "preserve-state": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-link", {
      'text-muted': !$props.prev
    }])
  }, "Previous", 2
  /* CLASS */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_4, [$props.next ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    "class": "page-link",
    href: $props.next,
    "preserve-scroll": "",
    "preserve-state": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-link", {
      'text-muted': !$props.next
    }])
  }, "Next", 2
  /* CLASS */
  ))])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#sidebar-wrapper {\r\n        width: auto;\r\n        margin-top: -9px;\r\n        z-index: 1000;\r\n        position: fixed;\r\n        right: 250px;\r\n        height: 100%;\r\n        margin-right: -250px;\r\n        overflow-y: auto;\r\n        transition: all 0.5s ease;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_09f80c58_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_09f80c58_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_09f80c58_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/SoaTravels/Show.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/SoaTravels/Show.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_b367fb42__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=b367fb42 */ "./resources/js/Pages/SoaTravels/Show.vue?vue&type=template&id=b367fb42");
/* harmony import */ var _Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js */ "./resources/js/Pages/SoaTravels/Show.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Show_vue_vue_type_template_id_b367fb42__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/SoaTravels/Show.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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
/* harmony import */ var D_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Invoice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Invoice_vue_vue_type_template_id_2a796d04__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Travels/Invoice.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Filter.vue":
/*!****************************************!*\
  !*** ./resources/js/Shared/Filter.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter_vue_vue_type_template_id_09f80c58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter.vue?vue&type=template&id=09f80c58 */ "./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58");
/* harmony import */ var _Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter.vue?vue&type=script&lang=js */ "./resources/js/Shared/Filter.vue?vue&type=script&lang=js");
/* harmony import */ var _Filter_vue_vue_type_style_index_0_id_09f80c58_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css */ "./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css");
/* harmony import */ var D_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Filter_vue_vue_type_template_id_09f80c58__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Filter.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Pagination.vue":
/*!********************************************!*\
  !*** ./resources/js/Shared/Pagination.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=7ed7fa14 */ "./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js */ "./resources/js/Shared/Pagination.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fuel_monitoring_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Pagination.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/SoaTravels/Show.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/SoaTravels/Show.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SoaTravels/Show.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Shared/Filter.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/Shared/Filter.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Pagination.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Shared/Pagination.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/SoaTravels/Show.vue?vue&type=template&id=b367fb42":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/SoaTravels/Show.vue?vue&type=template&id=b367fb42 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_b367fb42__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_b367fb42__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=template&id=b367fb42 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SoaTravels/Show.vue?vue&type=template&id=b367fb42");


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


/***/ }),

/***/ "./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58":
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_template_id_09f80c58__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_template_id_09f80c58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=template&id=09f80c58 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=template&id=09f80c58");


/***/ }),

/***/ "./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14":
/*!**************************************************************************!*\
  !*** ./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=template&id=7ed7fa14 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14");


/***/ }),

/***/ "./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css":
/*!************************************************************************************!*\
  !*** ./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_09f80c58_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Filter.vue?vue&type=style&index=0&id=09f80c58&lang=css");


/***/ })

}]);