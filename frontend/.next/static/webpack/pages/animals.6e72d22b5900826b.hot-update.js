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

/***/ "./components/NewCage.js":
/*!*******************************!*\
  !*** ./components/NewCage.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewCage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"../node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"../node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"../node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TextField */ \"../node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"../node_modules/@mui/material/index.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction NewCage(props) {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2__.useState(false), 2), checked = ref[0], setChecked = ref[1];\n    // +++++++++++++++\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2__.useState(false), 2), cageName = ref1[0], setCageName = ref1[1];\n    // ++++++++++++++++\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2__.useState(false), 2), submit = ref2[0], setSubmit = ref2[1];\n    var nameRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();\n    var experimentIdRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();\n    // ========ANIMAL\n    // const tagRef = React.useRef();\n    // const genderRef = React.useRef();\n    // const genotypeRef = React.useRef();\n    // const phenotypeRef = React.useRef();\n    // const birthDateRef = React.useRef();\n    var handleCheck = function(checked) {\n        setChecked(checked);\n    };\n    // ================ Create : Add new cage ======\n    var addNewCage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(cageData) {\n            var url, res, newCageData;\n            return _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        url = \"http://localhost:4000/cages\";\n                        _ctx.next = 3;\n                        return fetch(url, {\n                            method: \"POST\",\n                            body: JSON.stringify(cageData),\n                            headers: {\n                                \"content-type\": \"application/json\"\n                            }\n                        });\n                    case 3:\n                        res = _ctx.sent;\n                        _ctx.next = 6;\n                        return res.json();\n                    case 6:\n                        newCageData = _ctx.sent;\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // console.log(res.status);\n        // console.log(newCageData);\n        }));\n        return function addNewCage(cageData) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var cageData;\n            return _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        cageData = {\n                            name: nameRef.current.value,\n                            experiment_id: Number(experimentIdRef.current.value),\n                            isBreeding: checked\n                        };\n                        console.log(cageData);\n                        addNewCage(cageData);\n                        setSubmit(true);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        component: \"form\",\n        sx: {\n            \"& .MuiTextField-root\": {\n                m: 1,\n                width: \"25ch\"\n            }\n        },\n        noValidate: true,\n        autoComplete: \"off\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                    children: \"Add a new cage: \"\n                }, void 0, false, {\n                    fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/NewCage.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    id: \"outlined-cageName\",\n                    label: \"Cage Name\",\n                    inputRef: nameRef\n                }, void 0, false, {\n                    fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/NewCage.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    id: \"outlined-experiementID\",\n                    label: \"Experiment ID\",\n                    inputRef: experimentIdRef\n                }, void 0, false, {\n                    fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/NewCage.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.FormGroup, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.FormControlLabel, {\n                            control: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {\n                                defaultChecked: true,\n                                checkbox: !checked,\n                                onChange: handleCheck\n                            }, void 0, false, void 0, void 0),\n                            label: \"Breeding Cage\"\n                        }, void 0, false, {\n                            fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/NewCage.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            onClick: handleSubmit,\n                            children: \"ADD CAGE\"\n                        }, void 0, false, {\n                            fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/NewCage.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/NewCage.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/NewCage.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/NewCage.js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/NewCage.js\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/NewCage.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n};\n_s(NewCage, \"MXoO+iPVYlpdkF6buDm8p5Vcjfc=\");\n_c = NewCage;\nvar _c;\n$RefreshReg$(_c, \"NewCage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTO29CQUNSaUQsRUFBRSxFQUFDLG1CQUFtQjtvQkFDdEJDLEtBQUssRUFBQyxXQUFXO29CQUNqQkMsUUFBUSxFQUFFcEMsT0FBTzs7Ozs7d0JBQ2pCOzhCQUNGLDhEQUFDZiwrREFBUztvQkFDUmlELEVBQUUsRUFBQyx3QkFBd0I7b0JBQzNCQyxLQUFLLEVBQUMsZUFBZTtvQkFDckJDLFFBQVEsRUFBRWxDLGVBQWU7Ozs7O3dCQUN6Qjs4QkFFRiw4REFBQ2Ysb0RBQVM7O3NDQUNSLDhEQUFDRCwyREFBZ0I7NEJBQ2ZtRCxPQUFPLGdCQUNMLDhEQUFDaEQsbURBQVE7Z0NBQ1BpRCxjQUFjO2dDQUNkQyxRQUFRLEVBQUUsQ0FBQzdDLE9BQU87Z0NBQ2xCOEMsUUFBUSxFQUFFckMsV0FBVzs2REFDckI7NEJBRUpnQyxLQUFLLEVBQUMsZUFBZTs7Ozs7Z0NBQ3JCO3NDQUNGLDhEQUFDN0MsaURBQU07NEJBQUNtRCxPQUFPLEVBQUV6QixZQUFZO3NDQUFFLFVBQVE7Ozs7O2dDQUFTOzs7Ozs7d0JBQ3RDOzhCQUNaLDhEQUFDMEIsSUFBRTs7Ozt3QkFBRzs4QkFDTiw4REFBQ0EsSUFBRTs7Ozt3QkFBRzs7Ozs7O2dCQUNGOzs7OztZQUNGLENBQ047Q0FDSDtHQTdGdUJuRCxPQUFPO0FBQVBBLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdDYWdlLmpzPzRlZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcbmltcG9ydCB7IEZvcm1Db250cm9sTGFiZWwsIEZvcm1Hcm91cCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBDaGVja2JveCwgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3Q2FnZShwcm9wcykge1xuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gKysrKysrKysrKysrKysrXG4gIGNvbnN0IFtjYWdlTmFtZSwgc2V0Q2FnZU5hbWVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAvLyArKysrKysrKysrKysrKysrXG5cbiAgY29uc3QgW3N1Ym1pdCwgc2V0U3VibWl0XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBuYW1lUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIGNvbnN0IGV4cGVyaW1lbnRJZFJlZiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIC8vID09PT09PT09QU5JTUFMXG4gIC8vIGNvbnN0IHRhZ1JlZiA9IFJlYWN0LnVzZVJlZigpO1xuICAvLyBjb25zdCBnZW5kZXJSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgLy8gY29uc3QgZ2Vub3R5cGVSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgLy8gY29uc3QgcGhlbm90eXBlUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIC8vIGNvbnN0IGJpcnRoRGF0ZVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIGNvbnN0IGhhbmRsZUNoZWNrID0gKGNoZWNrZWQpID0+IHtcbiAgICBzZXRDaGVja2VkKGNoZWNrZWQpO1xuICB9O1xuXG4gIC8vID09PT09PT09PT09PT09PT0gQ3JlYXRlIDogQWRkIG5ldyBjYWdlID09PT09PVxuICBjb25zdCBhZGROZXdDYWdlID0gYXN5bmMgKGNhZ2VEYXRhKSA9PiB7XG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvY2FnZXNcIjtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYWdlRGF0YSksXG4gICAgICBoZWFkZXJzOiB7IFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICBjb25zdCBuZXdDYWdlRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgLy8gY29uc29sZS5sb2cocmVzLnN0YXR1cyk7XG4gICAgLy8gY29uc29sZS5sb2cobmV3Q2FnZURhdGEpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy9vbiBTdWJtaXQsIGRhdGEgaXMgcGFzc2VkIHRvIHRoZSBkYXRhYmFzZVxuICAgIGNvbnN0IGNhZ2VEYXRhID0ge1xuICAgICAgbmFtZTogbmFtZVJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgZXhwZXJpbWVudF9pZDogTnVtYmVyKGV4cGVyaW1lbnRJZFJlZi5jdXJyZW50LnZhbHVlKSxcbiAgICAgIGlzQnJlZWRpbmc6IGNoZWNrZWQsXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhjYWdlRGF0YSk7XG5cbiAgICBhZGROZXdDYWdlKGNhZ2VEYXRhKTtcblxuICAgIHNldFN1Ym1pdCh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGNvbXBvbmVudD1cImZvcm1cIlxuICAgICAgc3g9e3tcbiAgICAgICAgXCImIC5NdWlUZXh0RmllbGQtcm9vdFwiOiB7IG06IDEsIHdpZHRoOiBcIjI1Y2hcIiB9LFxuICAgICAgfX1cbiAgICAgIG5vVmFsaWRhdGVcbiAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFR5cG9ncmFwaHk+QWRkIGEgbmV3IGNhZ2U6IDwvVHlwb2dyYXBoeT5cblxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgaWQ9XCJvdXRsaW5lZC1jYWdlTmFtZVwiXG4gICAgICAgICAgbGFiZWw9XCJDYWdlIE5hbWVcIlxuICAgICAgICAgIGlucHV0UmVmPXtuYW1lUmVmfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgaWQ9XCJvdXRsaW5lZC1leHBlcmllbWVudElEXCJcbiAgICAgICAgICBsYWJlbD1cIkV4cGVyaW1lbnQgSURcIlxuICAgICAgICAgIGlucHV0UmVmPXtleHBlcmltZW50SWRSZWZ9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXG4gICAgICAgICAgICAgICAgY2hlY2tib3g9eyFjaGVja2VkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsPVwiQnJlZWRpbmcgQ2FnZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+QUREIENBR0U8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2xMYWJlbCIsIkZvcm1Hcm91cCIsIlR5cG9ncmFwaHkiLCJDaGVja2JveCIsIkJ1dHRvbiIsIk5ld0NhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJjYWdlTmFtZSIsInNldENhZ2VOYW1lIiwic3VibWl0Iiwic2V0U3VibWl0IiwibmFtZVJlZiIsInVzZVJlZiIsImV4cGVyaW1lbnRJZFJlZiIsImhhbmRsZUNoZWNrIiwiYWRkTmV3Q2FnZSIsImNhZ2VEYXRhIiwidXJsIiwicmVzIiwibmV3Q2FnZURhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImpzb24iLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImV4cGVyaW1lbnRfaWQiLCJOdW1iZXIiLCJpc0JyZWVkaW5nIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCIsInN4IiwibSIsIndpZHRoIiwibm9WYWxpZGF0ZSIsImF1dG9Db21wbGV0ZSIsImRpdiIsImlkIiwibGFiZWwiLCJpbnB1dFJlZiIsImNvbnRyb2wiLCJkZWZhdWx0Q2hlY2tlZCIsImNoZWNrYm94Iiwib25DaGFuZ2UiLCJvbkNsaWNrIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NewCage.js\n"));

/***/ })

});