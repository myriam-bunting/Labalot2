"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/cages";
exports.ids = ["pages/cages"];
exports.modules = {

/***/ "./pages/cages.js":
/*!************************!*\
  !*** ./pages/cages.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Cages() {\n    const { 0: cages , 1: setCages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        viewCages();\n    }, [\n        cages\n    ]);\n    const viewCages = async ()=>{\n        const url = \"/api/cages\";\n        const res = await fetch(url, {\n            method: \"GET\"\n        });\n        console.log(res);\n        const cageData1 = await res.json();\n        console.log(res.status);\n        console.log(cageData1);\n        if (cageData1.length === 0) {\n            console.log(\"No cages here\");\n            alert(`You have yet to add cages!`);\n        }\n        cageData1;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: cages && cageData\n    }, void 0, false, {\n        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/pages/cages.js\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cages);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYWdlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQW1EO0FBRW5ELFNBQVNHLEtBQUssR0FBRztJQUNmLE1BQU0sS0FBQ0MsS0FBSyxNQUFFQyxRQUFRLE1BQUlKLCtDQUFRLEVBQUU7SUFFcENDLGdEQUFTLENBQUMsSUFBTTtRQUNkSSxTQUFTLEVBQUUsQ0FBQztLQUNiLEVBQUU7UUFBQ0YsS0FBSztLQUFDLENBQUMsQ0FBQztJQUVaLE1BQU1FLFNBQVMsR0FBRyxVQUFZO1FBQzVCLE1BQU1DLEdBQUcsR0FBRyxZQUFZO1FBQ3hCLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUcsRUFBRTtZQUMzQkcsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDO1FBQ0ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixHQUFHLENBQUMsQ0FBQztRQUNqQixNQUFNSyxTQUFRLEdBQUcsTUFBTUwsR0FBRyxDQUFDTSxJQUFJLEVBQUU7UUFDakNILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixHQUFHLENBQUNPLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUSxDQUFDLENBQUM7UUFFdEIsSUFBSUEsU0FBUSxDQUFDRyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QkssS0FBSyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0RKLFNBQVEsQ0FBQztLQUNWO0lBRUQscUJBQU8sOERBQUNLLEtBQUc7a0JBQUVkLEtBQUssSUFBSVMsUUFBUTs7Ozs7WUFBTyxDQUFDO0NBQ3ZDO0FBRUQsaUVBQWVWLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvY2FnZXMuanM/MGQ0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBDYWdlcygpIHtcbiAgY29uc3QgW2NhZ2VzLCBzZXRDYWdlc10gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmlld0NhZ2VzKCk7XG4gIH0sIFtjYWdlc10pO1xuXG4gIGNvbnN0IHZpZXdDYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSBcIi9hcGkvY2FnZXNcIjtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIGNvbnN0IGNhZ2VEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhyZXMuc3RhdHVzKTtcbiAgICBjb25zb2xlLmxvZyhjYWdlRGF0YSk7XG5cbiAgICBpZiAoY2FnZURhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vIGNhZ2VzIGhlcmVcIik7XG4gICAgICBhbGVydChgWW91IGhhdmUgeWV0IHRvIGFkZCBjYWdlcyFgKTtcbiAgICB9XG4gICAgY2FnZURhdGE7XG4gIH07XG5cbiAgcmV0dXJuIDxkaXY+e2NhZ2VzICYmIGNhZ2VEYXRhfTwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FnZXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNhZ2VzIiwiY2FnZXMiLCJzZXRDYWdlcyIsInZpZXdDYWdlcyIsInVybCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImNhZ2VEYXRhIiwianNvbiIsInN0YXR1cyIsImxlbmd0aCIsImFsZXJ0IiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cages.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/cages.js"));
module.exports = __webpack_exports__;

})();