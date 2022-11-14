"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/LineChart.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/LineChart.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/dist/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.esm.js");



chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_1__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'LineChart',
  components: {
    Line: vue_chartjs__WEBPACK_IMPORTED_MODULE_2__.Line
  },
  props: {
    chartId: {
      type: String,
      "default": 'line-chart'
    },
    width: {
      type: Number,
      "default": 400
    },
    height: {
      type: Number,
      "default": 400
    },
    cssClasses: {
      "default": '',
      type: String
    },
    styles: {
      type: Object,
      "default": function _default() {}
    },
    plugins: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  setup: function setup(props) {
    var chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [40, 39, 10, 40, 39, 80, 40]
      }]
    };
    var chartOptions = {
      responsive: true,
      maintainAspectRatio: false
    };
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue_chartjs__WEBPACK_IMPORTED_MODULE_2__.Line, {
        chartData: chartData,
        chartOptions: chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins
      });
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/PieChart.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/PieChart.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/dist/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.esm.js");



chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_1__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'PieChart',
  components: {
    Pie: vue_chartjs__WEBPACK_IMPORTED_MODULE_2__.Pie
  },
  props: {
    chartId: {
      type: String,
      "default": 'pie-chart'
    },
    width: {
      type: Number,
      "default": 400
    },
    height: {
      type: Number,
      "default": 400
    },
    cssClasses: {
      "default": '',
      type: String
    },
    styles: {
      type: Object,
      "default": function _default() {}
    },
    plugins: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    pieChartData: {
      type: Array,
      defualt: function defualt() {
        return [];
      }
    },
    pieChartLabels: {
      type: Array,
      defualt: function defualt() {
        return [];
      }
    }
  },
  setup: function setup(props) {
    var chartData = {
      labels: props.pieChartLabels,
      datasets: [{
        backgroundColor: ['#ff0000', '#ff4000', '#ff8000', '#ffbf00', '#ffff00', '#bfff00', '#80ff00', '#40ff00', '#00ff00', '#00ff40', '#00ff80', '#00ffbf', '#00ffff', '#00bfff', '#0080ff', '#0040ff', '#0000ff', '#4000ff', '#8000ff', '#bf00ff', '#ff00ff', '#ff00bf', '#ff0080', '#ff0040', '#ff0000', '#0d6efd', '#6f42c1', '#d63384', '#dc3545', '#fd7e14', '#ffc107', '#198754', '#20c997', '#0dcaf0', '#6c757d', '#343a40', '#0d6efd', '#198754', '#0dcaf0', '#ffc107', '#dc3545', '#212529'],
        data: props.pieChartData
      }]
    };
    var chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          align: 'start',
          labels: {
            usePointStyle: true,
            pointStyle: 'rect',
            font: {
              size: 10,
              style: 'normal'
            }
          }
        },
        datalabels: {
          display: true,
          align: 'bottom',
          backgroundColor: '#ccc',
          borderRadius: 3,
          font: {
            size: 18
          }
        }
      }
    };
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue_chartjs__WEBPACK_IMPORTED_MODULE_2__.Pie, {
        chartData: chartData,
        chartOptions: chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins
      });
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/SomeChart.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/SomeChart.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/dist/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.esm.js");



chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_1__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'DoughnutChart',
  components: {
    Doughnut: vue_chartjs__WEBPACK_IMPORTED_MODULE_2__.Doughnut
  },
  props: {
    chartId: {
      type: String,
      "default": 'doughnut-chart'
    },
    width: {
      type: Number,
      "default": 400
    },
    height: {
      type: Number,
      "default": 400
    },
    cssClasses: {
      "default": '',
      type: String
    },
    styles: {
      type: Object,
      "default": function _default() {}
    },
    plugins: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    chartData: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    chartLabel: {
      type: String,
      "default": function _default() {
        return ['vue', 'js', 'charts'];
      }
    },
    chartColor: {
      type: String,
      "default": function _default() {
        return ['#ff0000', '#ff4000', '#ff8000', '#ffbf00', '#ffff00', '#bfff00', '#80ff00', '#40ff00', '#00ff00', '#00ff40', '#00ff80', '#00ffbf', '#00ffff', '#00bfff', '#0080ff', '#0040ff', '#0000ff', '#4000ff', '#8000ff', '#bf00ff', '#ff00ff', '#ff00bf', '#ff0080', '#ff0040', '#ff0000', '#0d6efd', '#6f42c1', '#d63384', '#dc3545', '#fd7e14', '#ffc107', '#198754', '#20c997', '#0dcaf0', '#6c757d', '#343a40', '#0d6efd', '#198754', '#0dcaf0', '#ffc107', '#dc3545', '#212529'];
      }
    },
    CharLegelPosition: {
      type: String,
      "default": "top"
    }
  },
  setup: function setup(props) {
    var chartData = {
      labels: props.chartLabel,
      datasets: [{
        data: props.chartData,
        backgroundColor: props.chartColor
      }]
    };
    var chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: props.CharLegelPosition,
          align: 'start',
          labels: {
            usePointStyle: true,
            pointStyle: 'rectRounded',
            font: {
              size: 10,
              style: 'normal'
            }
          }
        },
        datalabels: {
          display: true,
          align: 'bottom',
          backgroundColor: '#ccc',
          borderRadius: 3,
          font: {
            size: 18
          }
        }
      }
    };
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue_chartjs__WEBPACK_IMPORTED_MODULE_2__.Doughnut, {
        chartData: chartData,
        chartOptions: chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins
      });
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/TotalUsers.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/TotalUsers.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/dist/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.esm.js");



chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_1__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'BarChart',
  components: {
    Bar: vue_chartjs__WEBPACK_IMPORTED_MODULE_2__.Bar
  },
  props: {
    chartId: {
      type: String,
      "default": 'bar-chart'
    },
    width: {
      type: Number,
      "default": 400
    },
    height: {
      type: Number,
      "default": 400
    },
    cssClasses: {
      "default": '',
      type: String
    },
    styles: {
      type: Object,
      "default": function _default() {}
    },
    plugins: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    chartData: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    chartLabel: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    chartColor: {
      type: Array,
      "default": function _default() {
        return ['#329719', '#433979', '#544979', '#855979', '#966979', '#177979', '#f87327', '#f81279', '#f87979', '#f86979', '#f11979', '#f89979'];
      }
    },
    chartBarLabel: {
      type: String,
      "default": "Number of Travels"
    },
    chartOptionYAxis: {
      type: Object,
      "default": {
        min: 0,
        // minimum value
        max: 100 // maximum value

      }
    }
  },
  setup: function setup(props) {
    var vm = this;
    console.log(props.chartLabel);
    var chartData = {
      labels: props.chartLabel,
      datasets: [{
        label: props.chartBarLabel,
        backgroundColor: props.chartColor,
        data: props.chartData
      }]
    };
    var chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        // yAxis: props.chartOptionYAxis
        x: {
          grid: {
            display: false
          }
        }
      }
    };
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue_chartjs__WEBPACK_IMPORTED_MODULE_2__.Bar, {
        chartData: chartData,
        chartOptions: chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins
      });
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pages_Charts_TotalUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Pages/Charts/TotalUsers */ "./resources/js/Pages/Charts/TotalUsers.vue");
/* harmony import */ var _Pages_Charts_SomeChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pages/Charts/SomeChart */ "./resources/js/Pages/Charts/SomeChart.vue");
/* harmony import */ var _Pages_Charts_LineChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Pages/Charts/LineChart */ "./resources/js/Pages/Charts/LineChart.vue");
/* harmony import */ var _Pages_Charts_PieChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Pages/Charts/PieChart */ "./resources/js/Pages/Charts/PieChart.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");





var componentKey = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(0);
var componentKey1 = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    TotalUser: _Pages_Charts_TotalUsers__WEBPACK_IMPORTED_MODULE_0__["default"],
    SomeChart: _Pages_Charts_SomeChart__WEBPACK_IMPORTED_MODULE_1__["default"],
    LineChart: _Pages_Charts_LineChart__WEBPACK_IMPORTED_MODULE_2__["default"],
    PieChart: _Pages_Charts_PieChart__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    officesLabels: Array,
    vehicles: Array,
    consume: "",
    balance: "",
    isAdmin: "",
    fuelConsumed: Array,
    TotalCharge: "",
    username: ""
  },
  data: function data() {
    return {
      charge_to: Array,
      charges: Array,
      totalUser: [10, 20, 50, 6, 525, 85],
      cData: [],
      cLabels: [],
      chargesChartData: {
        Labels: [],
        Data: [],
        Colors: []
      },
      pieChartData: {
        Labels: [],
        Data: [],
        Colors: ['rgb(13 110 253)', 'rgb(25 135 84)', 'rgb(220 53 69)', 'rgb(255 193 7)', 'rgb(13 202 240)']
      },
      barChart: {
        Labels: [],
        Data: []
      },
      barTitle: "Number Of Travels Per Office",
      fuel_status: true,
      dep_charges: true,
      pie_data: true
    };
  },
  computed: {
    temp: function temp() {
      var vm = this;

      if (vm.officesLabels !== null) {
        _.forEach(vm.officesLabels, function (value, key) {
          vm.barChart.Labels.push(value.short_name);
          vm.barChart.Data.push(value.travel_count);
        });
      }

      return true;
    },
    chartDataX: function chartDataX() {
      return this.chargesChartData.Data;
    },
    peiDataX: function peiDataX() {
      return this.pieChartData.Data;
    }
  },
  mounted: function mounted() {// this.loadDepartmentCharges();
    // this.loadFuelStatus();
    // this.loadFuelUtilize();
  },
  methods: {
    print: function print() {
      window.open("http://122.54.19.171:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Ffuel_monitoring&reportUnit=%2Freports%2Ffuel_monitoring%2Fcharge_balance&standAlone=truee&decorate=no", "_blank");
    },
    loadDepartmentCharges: function loadDepartmentCharges() {
      var vm = this;
      axios.get("/load-department-charges").then(function (response) {
        if (response.data != null) {
          if (vm.chargesChartData !== null) {
            vm.dep_charges = false;
            vm.chargesChartData.Labels = response.data.chartLabel;
            vm.chargesChartData.Data = response.data.chartData;
            vm.componentKey += 1;
          }
        }
      });
    },
    loadFuelStatus: function loadFuelStatus() {
      var _this = this;

      axios.get("/load-fuel-status").then(function (response) {
        if (response.data != null) {
          _this.charge_to = response.data;
          _this.fuel_status = false;
        }
      });
    },
    loadFuelUtilize: function loadFuelUtilize() {
      var vm = this;
      axios.get("/load-utilize").then(function (response) {
        if (response.data != null) {
          console.log(response.data.utilize_data);
          vm.pie_data = false;
          vm.pieChartData.Data = response.data.utilize_data;
          vm.pieChartData.Labels = response.data.utilize_label;
          vm.componentKey1 += 1;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/LineChart.vue?vue&type=template&id=0644bece":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/LineChart.vue?vue&type=template&id=0644bece ***!
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/PieChart.vue?vue&type=template&id=3aee11b3":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/PieChart.vue?vue&type=template&id=3aee11b3 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return null;
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/SomeChart.vue?vue&type=template&id=1bb7fb99":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/SomeChart.vue?vue&type=template&id=1bb7fb99 ***!
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/TotalUsers.vue?vue&type=template&id=46fa1c36":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/TotalUsers.vue?vue&type=template&id=46fa1c36 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return null;
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Home", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "row gap-20 masonry pos-r"
};
var _hoisted_3 = {
  "class": "col-lg-12"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "/students/"
}, "GO TO STUDENTS 2", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.username) + " DIRI KA NI SULOD", 1
  /* TEXT */
  ), _hoisted_4])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/** https://loading.io/css/ **/\n.lds-ellipsis {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 64px;\r\n  height: 64px;\n}\n.lds-ellipsis div {\r\n  position: absolute;\r\n  top: 27px;\r\n  width: 11px;\r\n  height: 11px;\r\n  border-radius: 50%;\r\n  background: #ddd;\r\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\r\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.lds-ellipsis div:nth-child(1) {\r\n  left: 6px;\r\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\r\n          animation: lds-ellipsis1 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(2) {\r\n  left: 6px;\r\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\r\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(3) {\r\n  left: 26px;\r\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\r\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(4) {\r\n  left: 45px;\r\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\r\n          animation: lds-ellipsis3 0.6s infinite;\n}\n@-webkit-keyframes lds-ellipsis1 {\n0% {\r\n    transform: scale(0);\n}\n100% {\r\n    transform: scale(1);\n}\n}\n@keyframes lds-ellipsis1 {\n0% {\r\n    transform: scale(0);\n}\n100% {\r\n    transform: scale(1);\n}\n}\n@-webkit-keyframes lds-ellipsis3 {\n0% {\r\n    transform: scale(1);\n}\n100% {\r\n    transform: scale(0);\n}\n}\n@keyframes lds-ellipsis3 {\n0% {\r\n    transform: scale(1);\n}\n100% {\r\n    transform: scale(0);\n}\n}\n@-webkit-keyframes lds-ellipsis2 {\n0% {\r\n    transform: translate(0, 0);\n}\n100% {\r\n    transform: translate(19px, 0);\n}\n}\n@keyframes lds-ellipsis2 {\n0% {\r\n    transform: translate(0, 0);\n}\n100% {\r\n    transform: translate(19px, 0);\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_6a63e488_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=style&index=0&id=6a63e488&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_6a63e488_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_6a63e488_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Charts/LineChart.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Charts/LineChart.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LineChart_vue_vue_type_template_id_0644bece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChart.vue?vue&type=template&id=0644bece */ "./resources/js/Pages/Charts/LineChart.vue?vue&type=template&id=0644bece");
/* harmony import */ var _LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineChart.vue?vue&type=script&lang=js */ "./resources/js/Pages/Charts/LineChart.vue?vue&type=script&lang=js");
/* harmony import */ var D_Personal_files_Sideline_TabulatorMain_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Personal_files_Sideline_TabulatorMain_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LineChart_vue_vue_type_template_id_0644bece__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Charts/LineChart.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Charts/PieChart.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Charts/PieChart.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PieChart_vue_vue_type_template_id_3aee11b3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PieChart.vue?vue&type=template&id=3aee11b3 */ "./resources/js/Pages/Charts/PieChart.vue?vue&type=template&id=3aee11b3");
/* harmony import */ var _PieChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PieChart.vue?vue&type=script&lang=js */ "./resources/js/Pages/Charts/PieChart.vue?vue&type=script&lang=js");
/* harmony import */ var D_Personal_files_Sideline_TabulatorMain_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Personal_files_Sideline_TabulatorMain_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PieChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PieChart_vue_vue_type_template_id_3aee11b3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Charts/PieChart.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Charts/SomeChart.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Charts/SomeChart.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SomeChart_vue_vue_type_template_id_1bb7fb99__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SomeChart.vue?vue&type=template&id=1bb7fb99 */ "./resources/js/Pages/Charts/SomeChart.vue?vue&type=template&id=1bb7fb99");
/* harmony import */ var _SomeChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SomeChart.vue?vue&type=script&lang=js */ "./resources/js/Pages/Charts/SomeChart.vue?vue&type=script&lang=js");
/* harmony import */ var D_Personal_files_Sideline_TabulatorMain_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Personal_files_Sideline_TabulatorMain_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SomeChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SomeChart_vue_vue_type_template_id_1bb7fb99__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Charts/SomeChart.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Charts/TotalUsers.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Charts/TotalUsers.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TotalUsers_vue_vue_type_template_id_46fa1c36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TotalUsers.vue?vue&type=template&id=46fa1c36 */ "./resources/js/Pages/Charts/TotalUsers.vue?vue&type=template&id=46fa1c36");
/* harmony import */ var _TotalUsers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TotalUsers.vue?vue&type=script&lang=js */ "./resources/js/Pages/Charts/TotalUsers.vue?vue&type=script&lang=js");
/* harmony import */ var D_Personal_files_Sideline_TabulatorMain_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Personal_files_Sideline_TabulatorMain_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TotalUsers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TotalUsers_vue_vue_type_template_id_46fa1c36__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Charts/TotalUsers.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Home.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_6a63e488__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=6a63e488 */ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488");
/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ "./resources/js/Pages/Home.vue?vue&type=script&lang=js");
/* harmony import */ var _Home_vue_vue_type_style_index_0_id_6a63e488_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=6a63e488&lang=css */ "./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&lang=css");
/* harmony import */ var D_Personal_files_Sideline_TabulatorMain_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Personal_files_Sideline_TabulatorMain_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Home_vue_vue_type_template_id_6a63e488__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Home.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Charts/LineChart.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Charts/LineChart.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LineChart.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/LineChart.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Charts/PieChart.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Charts/PieChart.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PieChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PieChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PieChart.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/PieChart.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Charts/SomeChart.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Charts/SomeChart.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SomeChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SomeChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SomeChart.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/SomeChart.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Charts/TotalUsers.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Charts/TotalUsers.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TotalUsers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TotalUsers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TotalUsers.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/TotalUsers.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Charts/LineChart.vue?vue&type=template&id=0644bece":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Charts/LineChart.vue?vue&type=template&id=0644bece ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LineChart_vue_vue_type_template_id_0644bece__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LineChart_vue_vue_type_template_id_0644bece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LineChart.vue?vue&type=template&id=0644bece */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/LineChart.vue?vue&type=template&id=0644bece");


/***/ }),

/***/ "./resources/js/Pages/Charts/PieChart.vue?vue&type=template&id=3aee11b3":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Charts/PieChart.vue?vue&type=template&id=3aee11b3 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PieChart_vue_vue_type_template_id_3aee11b3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PieChart_vue_vue_type_template_id_3aee11b3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PieChart.vue?vue&type=template&id=3aee11b3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/PieChart.vue?vue&type=template&id=3aee11b3");


/***/ }),

/***/ "./resources/js/Pages/Charts/SomeChart.vue?vue&type=template&id=1bb7fb99":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Charts/SomeChart.vue?vue&type=template&id=1bb7fb99 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SomeChart_vue_vue_type_template_id_1bb7fb99__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SomeChart_vue_vue_type_template_id_1bb7fb99__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SomeChart.vue?vue&type=template&id=1bb7fb99 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/SomeChart.vue?vue&type=template&id=1bb7fb99");


/***/ }),

/***/ "./resources/js/Pages/Charts/TotalUsers.vue?vue&type=template&id=46fa1c36":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Charts/TotalUsers.vue?vue&type=template&id=46fa1c36 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TotalUsers_vue_vue_type_template_id_46fa1c36__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TotalUsers_vue_vue_type_template_id_46fa1c36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TotalUsers.vue?vue&type=template&id=46fa1c36 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charts/TotalUsers.vue?vue&type=template&id=46fa1c36");


/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_6a63e488__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_6a63e488__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=template&id=6a63e488 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488");


/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&lang=css":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&lang=css ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_6a63e488_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=style&index=0&id=6a63e488&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&lang=css");


/***/ })

}]);