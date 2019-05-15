webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/DateInput.js":
/*!*********************************!*\
  !*** ./components/DateInput.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/number/is-nan */ "../node_modules/@babel/runtime-corejs2/core-js/number/is-nan.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input */ "./components/Input.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./utils.js");
/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useDebounce */ "./hooks/useDebounce.js");


var _jsxFileName = "D:\\Dev\\RoapApp\\app\\components\\DateInput.js";






var DateInput = function DateInput(props) {
  var dispatchToParent = props.dispatchToParent,
      preFill = props.preFill;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(preFill),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(function () {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isValidDate"])(preFill);
  }),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      isValid = _useState4[0],
      setIsValid = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      isDeleting = _useState6[0],
      setIsDeleting = _useState6[1];

  var debouncedValue = Object(_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_6__["default"])(date, 500);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatchToParent({
      zip: preFill,
      validZip: !preFill.length ? null : Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isValidDate"])(preFill)
    });
  }, [dispatchToParent, preFill]);

  function handleDate(event) {
    var dateVal = event.target.value;
    var dateStr = String(dateVal);

    if (!_babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_0___default()(dateVal * 1) || dateStr.includes('/')) {
      // add - if user is not deleting and length is 2 or 5
      if (!isDeleting && (dateVal.length === 2 || dateVal.length === 5)) {
        dateVal = "".concat(dateVal, "/");
      } // check if last digit is / and then remove it


      if (dateStr.endsWith('/') && isDeleting) {
        dateVal = dateVal.slice(0, dateStr.length - 1);
      }

      var valid = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isValidDate"])(dateVal);
      setIsValid(!dateVal.length ? null : valid);
      setDate(dateVal);
      dispatchToParent({
        date: dateVal,
        validDate: !dateVal.length ? null : valid
      });
    }
  }

  function getKeyCode(event) {
    setIsDeleting(event.which === 8);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, props.label.length ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, props.label) : null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "text",
    disabled: props.disabled,
    name: props.name,
    placeholder: props.disabled ? 'Disabled' : props.placeholder,
    className: "input ".concat(props.className, " ").concat(debouncedValue.length ? isValid ? 'is-success' : 'is-danger' : ''),
    onChange: handleDate,
    onKeyDown: getKeyCode,
    value: date,
    maxLength: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), props.iconClass.length && !debouncedValue.length ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "kt-input-icon__icon kt-input-icon__icon--right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "".concat(props.iconClass),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }))) : null), !isValid && debouncedValue.length ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "help is-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "".concat(props.errMsg, " "), "\uD83D\uDC4E") : debouncedValue.length ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "help is-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "".concat(props.successMsg, " "), "\uD83D\uDC4D") : null, props.helpText.length ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "form-text text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, props.helpText) : null);
};

DateInput.defaultProps = {
  name: 'date',
  placeholder: '__/__/____',
  helpText: 'MM/DD/YYYY',
  className: 'form-control',
  errMsg: 'Please enter valid date (mm/dd/yyyy)',
  successMsg: 'Date is valid',
  preFill: '',
  iconClass: 'la la-calendar',
  label: 'Date',
  disabled: false,
  canBeFuture: false,
  dispatchToParent: function dispatchToParent() {}
};
DateInput.propTypes = {
  errMsg: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  dispatchToParent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  helpText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  preFill: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  successMsg: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  iconClass: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  canBeFuture: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (DateInput);

/***/ })

})
//# sourceMappingURL=index.js.ba18e18be3949fe146f2.hot-update.js.map