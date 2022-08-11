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

/***/ "./components/UpdateCage.js":
/*!**********************************!*\
  !*** ./components/UpdateCage.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"../node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"../node_modules/@mui/material/index.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction UpdateCage(props) {\n    _s();\n    var nameRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef();\n    var experimentIdRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef();\n    // ============ Update: Cage ========\n    var updateCage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(cageData) {\n            var url, res, newCageData;\n            return _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        url = \"http://localhost:4000/cages/:id\";\n                        _ctx.next = 3;\n                        return fetch(url, {\n                            method: \"PATCH\",\n                            body: JSON.stringify(cageData),\n                            headers: {\n                                \"content-type\": \"application/json\"\n                            }\n                        });\n                    case 3:\n                        res = _ctx.sent;\n                        console.log(res);\n                        _ctx.next = 7;\n                        return res.json();\n                    case 7:\n                        newCageData = _ctx.sent;\n                        console.log(res.status);\n                        console.log(newCageData);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function updateCage(cageData) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    updateCage();\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var cageData;\n            return _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        cageData = {\n                            name: nameRef.current.value,\n                            experiment_id: Number(experimentIdRef.current.value)\n                        };\n                        // console.log(cageData);\n                        updateCage(cageData);\n                        setSubmit(true);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"styles.update\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                children: \"Update Cage: \"\n            }, void 0, false, {\n                fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/UpdateCage.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                id: \"outlined-cageName\",\n                label: \"Cage Name\",\n                inputRef: nameRef\n            }, void 0, false, {\n                fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/UpdateCage.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                id: \"outlined-experiementID\",\n                label: \"Experiment ID\",\n                inputRef: experimentIdRef\n            }, void 0, false, {\n                fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/UpdateCage.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FormGroup, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FormControlLabel, {\n                        control: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Checkbox, {\n                            defaultChecked: true,\n                            checkbox: !checked,\n                            onChange: handleCheck\n                        }, void 0, false, void 0, void 0),\n                        label: \"Breeding Cage\"\n                    }, void 0, false, {\n                        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/UpdateCage.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        onClick: handleSubmit,\n                        children: \"UPDATE CAGE\"\n                    }, void 0, false, {\n                        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/UpdateCage.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/UpdateCage.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/UpdateCage.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(UpdateCage, \"leYqpNSySuXJVN2D5eQlQn6810U=\");\n_c = UpdateCage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UpdateCage);\nvar _c;\n$RefreshReg$(_c, \"UpdateCage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VwZGF0ZUNhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFBc0M7QUFFd0I7QUFFOUQsU0FBU0ssVUFBVSxDQUFDQyxLQUFLLEVBQUU7O0lBQ3pCLElBQU1DLE9BQU8sR0FBR1AsbURBQVksRUFBRTtJQUM5QixJQUFNUSxlQUFlLEdBQUdSLG1EQUFZLEVBQUU7SUFFdEMscUNBQXFDO0lBRXJDLElBQU1TLFVBQVU7bUJBQUcsbVFBQU9DLFFBQVEsRUFBSztnQkFDL0JDLEdBQUcsRUFDSEMsR0FBRyxFQU1IQyxXQUFXOzs7O3dCQVBYRixHQUFHLEdBQUcsaUNBQWlDLENBQUM7OytCQUM1QkcsS0FBSyxDQUFDSCxHQUFHLEVBQUU7NEJBQzNCSSxNQUFNLEVBQUUsT0FBTzs0QkFDZkMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1IsUUFBUSxDQUFDOzRCQUM5QlMsT0FBTyxFQUFFO2dDQUFFLGNBQWMsRUFBRSxrQkFBa0I7NkJBQUU7eUJBQ2hELENBQUM7O3dCQUpJUCxHQUFHLFlBSVA7d0JBQ0ZRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxHQUFHLENBQUMsQ0FBQzs7K0JBQ1NBLEdBQUcsQ0FBQ1UsSUFBSSxFQUFFOzt3QkFBOUJULFdBQVcsWUFBbUI7d0JBQ3BDTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsR0FBRyxDQUFDVyxNQUFNLENBQUMsQ0FBQzt3QkFDeEJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixXQUFXLENBQUMsQ0FBQzs7Ozs7O1NBQzFCO3dCQVhLSixVQUFVLENBQVVDLFFBQVE7OztPQVdqQztJQUVERCxVQUFVLEVBQUUsQ0FBQztJQUViLElBQU1lLFlBQVk7bUJBQUcsbVFBQU9DLEtBQUssRUFBSztnQkFJOUJmLFFBQVE7Ozs7d0JBSGRlLEtBQUssQ0FBQ0MsY0FBYyxFQUFFLENBQUM7d0JBR2pCaEIsUUFBUSxHQUFHOzRCQUNmaUIsSUFBSSxFQUFFcEIsT0FBTyxDQUFDcUIsT0FBTyxDQUFDQyxLQUFLOzRCQUMzQkMsYUFBYSxFQUFFQyxNQUFNLENBQUN2QixlQUFlLENBQUNvQixPQUFPLENBQUNDLEtBQUssQ0FBQzt5QkFFckQsQ0FBQzt3QkFDRix5QkFBeUI7d0JBQ3pCcEIsVUFBVSxDQUFDQyxRQUFRLENBQUMsQ0FBQzt3QkFFckJzQixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7OztTQUNqQjt3QkFiS1IsWUFBWSxDQUFVQyxLQUFLOzs7T0FhaEM7SUFDRCxxQkFDRSw4REFBQ1EsS0FBRztRQUFDQyxTQUFTLEVBQUMsZUFBZTs7MEJBQzVCLDhEQUFDaEMscURBQVU7MEJBQUMsZUFBYTs7Ozs7b0JBQWE7MEJBRXRDLDhEQUFDQyxvREFBUztnQkFBQ2dDLEVBQUUsRUFBQyxtQkFBbUI7Z0JBQUNDLEtBQUssRUFBQyxXQUFXO2dCQUFDQyxRQUFRLEVBQUU5QixPQUFPOzs7OztvQkFBSTswQkFDekUsOERBQUNKLG9EQUFTO2dCQUNSZ0MsRUFBRSxFQUFDLHdCQUF3QjtnQkFDM0JDLEtBQUssRUFBQyxlQUFlO2dCQUNyQkMsUUFBUSxFQUFFN0IsZUFBZTs7Ozs7b0JBQ3pCOzBCQUVGLDhEQUFDOEIsU0FBUzs7a0NBQ1IsOERBQUNDLGdCQUFnQjt3QkFDZkMsT0FBTyxnQkFDTCw4REFBQ0MsUUFBUTs0QkFDUEMsY0FBYzs0QkFDZEMsUUFBUSxFQUFFLENBQUNDLE9BQU87NEJBQ2xCQyxRQUFRLEVBQUVDLFdBQVc7eURBQ3JCO3dCQUVKVixLQUFLLEVBQUMsZUFBZTs7Ozs7NEJBQ3JCO2tDQUNGLDhEQUFDaEMsaURBQU07d0JBQUMyQyxPQUFPLEVBQUV2QixZQUFZO2tDQUFFLGFBQVc7Ozs7OzRCQUFTOzs7Ozs7b0JBQ3pDOzs7Ozs7WUFDUixDQUNOO0NBQ0g7R0E3RFFuQixVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUErRG5CLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVDYWdlLmpzPzZmZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBUZXh0RmllbGQsIEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmZ1bmN0aW9uIFVwZGF0ZUNhZ2UocHJvcHMpIHtcbiAgY29uc3QgbmFtZVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBjb25zdCBleHBlcmltZW50SWRSZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICAvLyA9PT09PT09PT09PT0gVXBkYXRlOiBDYWdlID09PT09PT09XG5cbiAgY29uc3QgdXBkYXRlQ2FnZSA9IGFzeW5jIChjYWdlRGF0YSkgPT4ge1xuICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2NhZ2VzLzppZFwiO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYWdlRGF0YSksXG4gICAgICBoZWFkZXJzOiB7IFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzKTtcbiAgICBjb25zdCBuZXdDYWdlRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc29sZS5sb2cocmVzLnN0YXR1cyk7XG4gICAgY29uc29sZS5sb2cobmV3Q2FnZURhdGEpO1xuICB9O1xuXG4gIHVwZGF0ZUNhZ2UoKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vb24gU3VibWl0LCBkYXRhIGlzIHBhc3NlZCB0byB0aGUgZGF0YWJhc2VcblxuICAgIGNvbnN0IGNhZ2VEYXRhID0ge1xuICAgICAgbmFtZTogbmFtZVJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgZXhwZXJpbWVudF9pZDogTnVtYmVyKGV4cGVyaW1lbnRJZFJlZi5jdXJyZW50LnZhbHVlKSxcbiAgICAgIC8vIGlzQnJlZWRpbmc6IGNoZWNrZWQsXG4gICAgfTtcbiAgICAvLyBjb25zb2xlLmxvZyhjYWdlRGF0YSk7XG4gICAgdXBkYXRlQ2FnZShjYWdlRGF0YSk7XG5cbiAgICBzZXRTdWJtaXQodHJ1ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdHlsZXMudXBkYXRlXCI+XG4gICAgICA8VHlwb2dyYXBoeT5VcGRhdGUgQ2FnZTogPC9UeXBvZ3JhcGh5PlxuXG4gICAgICA8VGV4dEZpZWxkIGlkPVwib3V0bGluZWQtY2FnZU5hbWVcIiBsYWJlbD1cIkNhZ2UgTmFtZVwiIGlucHV0UmVmPXtuYW1lUmVmfSAvPlxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBpZD1cIm91dGxpbmVkLWV4cGVyaWVtZW50SURcIlxuICAgICAgICBsYWJlbD1cIkV4cGVyaW1lbnQgSURcIlxuICAgICAgICBpbnB1dFJlZj17ZXhwZXJpbWVudElkUmVmfVxuICAgICAgLz5cblxuICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxuICAgICAgICAgICAgICBjaGVja2JveD17IWNoZWNrZWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhYmVsPVwiQnJlZWRpbmcgQ2FnZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fT5VUERBVEUgQ0FHRTwvQnV0dG9uPlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZUNhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJUeXBvZ3JhcGh5IiwiVGV4dEZpZWxkIiwiQnV0dG9uIiwiVXBkYXRlQ2FnZSIsInByb3BzIiwibmFtZVJlZiIsImV4cGVyaW1lbnRJZFJlZiIsInVwZGF0ZUNhZ2UiLCJjYWdlRGF0YSIsInVybCIsInJlcyIsIm5ld0NhZ2VEYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwianNvbiIsInN0YXR1cyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwiY3VycmVudCIsInZhbHVlIiwiZXhwZXJpbWVudF9pZCIsIk51bWJlciIsInNldFN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwibGFiZWwiLCJpbnB1dFJlZiIsIkZvcm1Hcm91cCIsIkZvcm1Db250cm9sTGFiZWwiLCJjb250cm9sIiwiQ2hlY2tib3giLCJkZWZhdWx0Q2hlY2tlZCIsImNoZWNrYm94IiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hlY2siLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UpdateCage.js\n"));

/***/ })

});