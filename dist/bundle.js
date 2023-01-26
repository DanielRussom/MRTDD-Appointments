/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./src/AppointmentsDayView.js":
/*!************************************!*\
  !*** ./src/AppointmentsDayView.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Appointment": () => (/* binding */ Appointment),
/* harmony export */   "AppointmentsDayView": () => (/* binding */ AppointmentsDayView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var appointmentTimeOfDay = function (startsAt) {
    var _a = new Date(startsAt).toTimeString().split(':'), h = _a[0], m = _a[1];
    return "".concat(h, ":").concat(m);
};
var Appointment = function (_a) {
    var customer = _a.customer, startsAt = _a.startsAt;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null,
            "Today's appointment at ",
            appointmentTimeOfDay(startsAt)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { id: 'customer' },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Customer"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null,
                        customer.firstName,
                        " ",
                        customer.surname)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { id: 'phoneNumber' },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Phone number"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, customer.phoneNumber)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { id: 'stylist' },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Stylist"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, customer.stylist)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { id: 'service' },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Service"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, customer.service)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { id: 'notes' },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Notes"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, customer.notes))))));
};
var AppointmentsDayView = function (_a) {
    var appointments = _a.appointments;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), selectedAppointmentIndex = _b[0], setSelectedAppointmentIndex = _b[1];
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "appointmentsDayView" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ol", null, appointments.map(function (appointment, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { key: appointment.startsAt },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: "button", onClick: function () { return setSelectedAppointmentIndex(index); } }, appointmentTimeOfDay(appointment.startsAt)))); })),
        appointments.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "There are no appointments scheduled for today.")) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Appointment, __assign({}, appointments[selectedAppointmentIndex])))));
};


/***/ }),

/***/ "./src/sampleData.ts":
/*!***************************!*\
  !*** ./src/sampleData.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sampleAppointments": () => (/* binding */ sampleAppointments)
/* harmony export */ });
var today = new Date();
var at = function (hours) { return today.setHours(hours, 0); };
var sampleAppointments = [
    { startsAt: at(9), customer: { firstName: 'Charlie', surname: 'Bloggs', phoneNumber: '(+44) 142-4022' } },
    { startsAt: at(10), customer: { firstName: 'Frankie' } },
    { startsAt: at(11), customer: { firstName: 'Casey' } },
    { startsAt: at(12), customer: { firstName: 'Ashley' } },
    { startsAt: at(13), customer: { firstName: 'Jordan' } },
    { startsAt: at(14), customer: { firstName: 'Jay' } },
    { startsAt: at(15), customer: { firstName: 'Alex' } },
    { startsAt: at(16), customer: { firstName: 'Jules' } },
    { startsAt: at(17), customer: { firstName: 'Stevie' } },
];


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _AppointmentsDayView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppointmentsDayView */ "./src/AppointmentsDayView.js");
/* harmony import */ var _sampleData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sampleData */ "./src/sampleData.ts");




var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('root'));
root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AppointmentsDayView__WEBPACK_IMPORTED_MODULE_2__.AppointmentsDayView, { appointments: _sampleData__WEBPACK_IMPORTED_MODULE_3__.sampleAppointments }));

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map