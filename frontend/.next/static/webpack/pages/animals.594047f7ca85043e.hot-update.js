"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/animals",{

/***/ "./pages/cages.js":
/*!************************!*\
  !*** ./pages/cages.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"../node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"../node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CagesTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CagesTable */ \"./components/CagesTable.js\");\n/* harmony import */ var _components_UpdateCage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UpdateCage */ \"./components/UpdateCage.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"../node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Cages() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2___default().useState(null), 2), selectedRow = ref[0], setSelectedRow = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2___default().useState(0), 2), handleUpdateSubmit = ref1[0], setHandleUpdateSubmit = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), cages = ref2[0], setCages = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), updateCage = ref3[0], setUpdateCage = ref3[1];\n    var nameRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef();\n    var experimentIdRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef();\n    var fetchCages = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var url, res, cageData;\n            return _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        url = \"http://localhost:4000/cages\";\n                        _ctx.next = 3;\n                        return fetch(url, {\n                            method: \"GET\"\n                        });\n                    case 3:\n                        res = _ctx.sent;\n                        console.log(res);\n                        _ctx.next = 7;\n                        return res.json();\n                    case 7:\n                        cageData = _ctx.sent;\n                        console.log(res.status);\n                        // console.log(cageData);\n                        setCages(cageData);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        //passing cage data down in the state\n        }));\n        return function fetchCages() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchCages();\n    }, []);\n    var handleSelectModelChange = function(param) {\n        var _param = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(param, 1), e = _param[0];\n        setSelectedRow(e);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            updateCage && selectedRow && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UpdateCage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                cageData: cages.find(function(param) {\n                    var id = param.id;\n                    return id === selectedRow;\n                }),\n                sx: {\n                    zIndex: 100\n                },\n                handleSubmit: function() {\n                    setHandleUpdateSubmit(handleUpdateSubmit + 1);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/pages/cages.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        onClick: function() {\n                            console.log(cages, selectedRow);\n                            setUpdateCage(true);\n                        },\n                        children: \"EDIT CAGE\"\n                    }, void 0, false, {\n                        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/pages/cages.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        onClick: function() {\n                            var check = confirm(\"are you sure\");\n                        },\n                        children: \"DELETE CAGE\"\n                    }, void 0, false, {\n                        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/pages/cages.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    cages && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_CagesTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        handleSelectModelChange: handleSelectModelChange,\n                        cageData: cages\n                    }, void 0, false, {\n                        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/pages/cages.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/pages/cages.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/pages/cages.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(Cages, \"2be5x3JPyVTJHpDk9IkPDG2vffI=\");\n_c = Cages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cages);\nvar _c;\n$RefreshReg$(_c, \"Cages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0JBQ0osOERBQUNULDhEQUFVO3dCQUNUMEIsdUJBQXVCLEVBQUVBLHVCQUF1Qjt3QkFDaERQLFFBQVEsRUFBRVYsS0FBSzs7Ozs7NEJBQ0g7Ozs7OztvQkFFWjs7Ozs7O1lBQ0MsQ0FDVDtDQUNIO0dBckVRTCxLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUF1RWQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYWdlcy5qcz8wZDRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2FnZXNUYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYWdlc1RhYmxlXCI7XG5pbXBvcnQgVXBkYXRlQ2FnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9VcGRhdGVDYWdlXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmZ1bmN0aW9uIENhZ2VzKCkge1xuICBjb25zdCBbc2VsZWN0ZWRSb3csIHNldFNlbGVjdGVkUm93XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaGFuZGxlVXBkYXRlU3VibWl0LCBzZXRIYW5kbGVVcGRhdGVTdWJtaXRdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjYWdlcywgc2V0Q2FnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdXBkYXRlQ2FnZSwgc2V0VXBkYXRlQ2FnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgbmFtZVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBjb25zdCBleHBlcmltZW50SWRSZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICBjb25zdCBmZXRjaENhZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2NhZ2VzXCI7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzKTtcblxuICAgIGNvbnN0IGNhZ2VEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKHJlcy5zdGF0dXMpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNhZ2VEYXRhKTtcblxuICAgIHNldENhZ2VzKGNhZ2VEYXRhKTtcbiAgICAvL3Bhc3NpbmcgY2FnZSBkYXRhIGRvd24gaW4gdGhlIHN0YXRlXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaENhZ2VzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVTZWxlY3RNb2RlbENoYW5nZSA9IChbZV0pID0+IHtcbiAgICBzZXRTZWxlY3RlZFJvdyhlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7dXBkYXRlQ2FnZSAmJiBzZWxlY3RlZFJvdyAmJiAoXG4gICAgICAgIDxVcGRhdGVDYWdlXG4gICAgICAgICAgY2FnZURhdGE9e2NhZ2VzLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IHNlbGVjdGVkUm93KX1cbiAgICAgICAgICBzeD17eyB6SW5kZXg6IDEwMCB9fVxuICAgICAgICAgIGhhbmRsZVN1Ym1pdD17KCkgPT4ge1xuICAgICAgICAgICAgc2V0SGFuZGxlVXBkYXRlU3VibWl0KGhhbmRsZVVwZGF0ZVN1Ym1pdCArIDEpO1xuICAgICAgICAgIH19XG4gICAgICAgID48L1VwZGF0ZUNhZ2U+XG4gICAgICApfVxuICAgICAgPGRpdj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhZ2VzLCBzZWxlY3RlZFJvdyk7XG4gICAgICAgICAgICBzZXRVcGRhdGVDYWdlKHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBFRElUIENBR0VcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGVjayA9IGNvbmZpcm0oXCJhcmUgeW91IHN1cmVcIik7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIERFTEVURSBDQUdFXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICB7Y2FnZXMgJiYgKFxuICAgICAgICAgIDxDYWdlc1RhYmxlXG4gICAgICAgICAgICBoYW5kbGVTZWxlY3RNb2RlbENoYW5nZT17aGFuZGxlU2VsZWN0TW9kZWxDaGFuZ2V9XG4gICAgICAgICAgICBjYWdlRGF0YT17Y2FnZXN9XG4gICAgICAgICAgPjwvQ2FnZXNUYWJsZT5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYWdlcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FnZXNUYWJsZSIsIlVwZGF0ZUNhZ2UiLCJCdXR0b24iLCJMYXlvdXQiLCJDYWdlcyIsInNlbGVjdGVkUm93Iiwic2V0U2VsZWN0ZWRSb3ciLCJoYW5kbGVVcGRhdGVTdWJtaXQiLCJzZXRIYW5kbGVVcGRhdGVTdWJtaXQiLCJjYWdlcyIsInNldENhZ2VzIiwidXBkYXRlQ2FnZSIsInNldFVwZGF0ZUNhZ2UiLCJuYW1lUmVmIiwidXNlUmVmIiwiZXhwZXJpbWVudElkUmVmIiwiZmV0Y2hDYWdlcyIsInVybCIsInJlcyIsImNhZ2VEYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwianNvbiIsInN0YXR1cyIsImhhbmRsZVNlbGVjdE1vZGVsQ2hhbmdlIiwiZSIsImZpbmQiLCJpZCIsInN4IiwiekluZGV4IiwiaGFuZGxlU3VibWl0IiwiZGl2Iiwib25DbGljayIsImNoZWNrIiwiY29uZmlybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cages.js\n"));

/***/ })

});