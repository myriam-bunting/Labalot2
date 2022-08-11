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

/***/ "./components/CagesTable.js":
/*!**********************************!*\
  !*** ./components/CagesTable.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CagesTable)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/x-data-grid */ \"@mui/x-data-grid\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction CagesTable({ cageData  }) {\n    const columns = [\n        {\n            field: \"id\",\n            headerName: \"ID\",\n            width: 80\n        },\n        {\n            field: \"name\",\n            headerName: \"Name\",\n            width: 80\n        },\n        {\n            field: \"experiment_id\",\n            headerName: \"Experiment\",\n            width: 80\n        }, \n    ];\n    const rows = [];\n    console.log({\n        cageData\n    });\n    const cageData2 = [];\n    console.log(cageData2.length);\n    const cageDataRow = (cages)=>{\n        for (const cage of cages){\n            rows.push({\n                id: cage.id,\n                name: cage.name,\n                experiment_id: cage.experiment_id\n            });\n        //add number of animals\n        }\n        console.log(`rows ${rows}`);\n    };\n    cageDataRow(cageData);\n    //add number of animals\n    console.log(`rows ${rows}`);\n    // cageDataRow();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            height: \"90vh\",\n            width: \"90vw\",\n            paddingRight: 8\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__.DataGrid, {\n            rows: rows,\n            columns: columns,\n            pageSize: 80,\n            rowsPerPageOptions: [\n                10\n            ],\n            checkboxSelection: true\n        }, void 0, false, {\n            fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/CagesTable.js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/CagesTable.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhZ2VzVGFibGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ3NCO0FBRXRDLFNBQVNHLFVBQVUsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUMvQyxNQUFNQyxPQUFPLEdBQUc7UUFDZDtZQUFFQyxLQUFLLEVBQUUsSUFBSTtZQUFFQyxVQUFVLEVBQUUsSUFBSTtZQUFFQyxLQUFLLEVBQUUsRUFBRTtTQUFFO1FBQzVDO1lBQUVGLEtBQUssRUFBRSxNQUFNO1lBQUVDLFVBQVUsRUFBRSxNQUFNO1lBQUVDLEtBQUssRUFBRSxFQUFFO1NBQUU7UUFDaEQ7WUFBRUYsS0FBSyxFQUFFLGVBQWU7WUFBRUMsVUFBVSxFQUFFLFlBQVk7WUFBRUMsS0FBSyxFQUFFLEVBQUU7U0FBRTtLQUNoRTtJQUVELE1BQU1DLElBQUksR0FBRyxFQUFFO0lBRWZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO1FBQUVQLFFBQVE7S0FBRSxDQUFDLENBQUM7SUFFMUIsTUFBTVEsU0FBUyxHQUFHLEVBQUU7SUFFcEJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0lBRTlCLE1BQU1DLFdBQVcsR0FBRyxDQUFDQyxLQUFLLEdBQUs7UUFDN0IsS0FBSyxNQUFNQyxJQUFJLElBQUlELEtBQUssQ0FBRTtZQUN4Qk4sSUFBSSxDQUFDUSxJQUFJLENBQUM7Z0JBQ1JDLEVBQUUsRUFBRUYsSUFBSSxDQUFDRSxFQUFFO2dCQUNYQyxJQUFJLEVBQUVILElBQUksQ0FBQ0csSUFBSTtnQkFDZkMsYUFBYSxFQUFFSixJQUFJLENBQUNJLGFBQWE7YUFDbEMsQ0FBQyxDQUFDO1FBRUgsdUJBQXVCO1NBQ3hCO1FBQ0RWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFRixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDN0I7SUFDREssV0FBVyxDQUFDVixRQUFRLENBQUMsQ0FBQztJQUN0Qix1QkFBdUI7SUFFdkJNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFRixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFNUIsaUJBQWlCO0lBRWpCLHFCQUNFLDhEQUFDWSxLQUFHO1FBQUNDLEtBQUssRUFBRTtZQUFFQyxNQUFNLEVBQUUsTUFBTTtZQUFFZixLQUFLLEVBQUUsTUFBTTtZQUFFZ0IsWUFBWSxFQUFFLENBQUM7U0FBRTtrQkFDNUQsNEVBQUN2QixzREFBUTtZQUNQUSxJQUFJLEVBQUVBLElBQUk7WUFDVkosT0FBTyxFQUFFQSxPQUFPO1lBQ2hCb0IsUUFBUSxFQUFFLEVBQUU7WUFDWkMsa0JBQWtCLEVBQUU7QUFBQyxrQkFBRTthQUFDO1lBQ3hCQyxpQkFBaUI7Ozs7O2dCQUNqQjs7Ozs7WUFDRSxDQUNOO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvQ2FnZXNUYWJsZS5qcz8yMDg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRGF0YUdyaWQsIEdyaWRSb3cgfSBmcm9tIFwiQG11aS94LWRhdGEtZ3JpZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWdlc1RhYmxlKHsgY2FnZURhdGEgfSkge1xuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHsgZmllbGQ6IFwiaWRcIiwgaGVhZGVyTmFtZTogXCJJRFwiLCB3aWR0aDogODAgfSxcbiAgICB7IGZpZWxkOiBcIm5hbWVcIiwgaGVhZGVyTmFtZTogXCJOYW1lXCIsIHdpZHRoOiA4MCB9LFxuICAgIHsgZmllbGQ6IFwiZXhwZXJpbWVudF9pZFwiLCBoZWFkZXJOYW1lOiBcIkV4cGVyaW1lbnRcIiwgd2lkdGg6IDgwIH0sXG4gIF07XG5cbiAgY29uc3Qgcm93cyA9IFtdO1xuXG4gIGNvbnNvbGUubG9nKHsgY2FnZURhdGEgfSk7XG5cbiAgY29uc3QgY2FnZURhdGEyID0gW107XG5cbiAgY29uc29sZS5sb2coY2FnZURhdGEyLmxlbmd0aCk7XG5cbiAgY29uc3QgY2FnZURhdGFSb3cgPSAoY2FnZXMpID0+IHtcbiAgICBmb3IgKGNvbnN0IGNhZ2Ugb2YgY2FnZXMpIHtcbiAgICAgIHJvd3MucHVzaCh7XG4gICAgICAgIGlkOiBjYWdlLmlkLFxuICAgICAgICBuYW1lOiBjYWdlLm5hbWUsXG4gICAgICAgIGV4cGVyaW1lbnRfaWQ6IGNhZ2UuZXhwZXJpbWVudF9pZCxcbiAgICAgIH0pO1xuXG4gICAgICAvL2FkZCBudW1iZXIgb2YgYW5pbWFsc1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgcm93cyAke3Jvd3N9YCk7XG4gIH07XG4gIGNhZ2VEYXRhUm93KGNhZ2VEYXRhKTtcbiAgLy9hZGQgbnVtYmVyIG9mIGFuaW1hbHNcblxuICBjb25zb2xlLmxvZyhgcm93cyAke3Jvd3N9YCk7XG5cbiAgLy8gY2FnZURhdGFSb3coKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjkwdmhcIiwgd2lkdGg6IFwiOTB2d1wiLCBwYWRkaW5nUmlnaHQ6IDggfX0+XG4gICAgICA8RGF0YUdyaWRcbiAgICAgICAgcm93cz17cm93c31cbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgcGFnZVNpemU9ezgwfVxuICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1sxMF19XG4gICAgICAgIGNoZWNrYm94U2VsZWN0aW9uXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRGF0YUdyaWQiLCJHcmlkUm93IiwiQ2FnZXNUYWJsZSIsImNhZ2VEYXRhIiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsIndpZHRoIiwicm93cyIsImNvbnNvbGUiLCJsb2ciLCJjYWdlRGF0YTIiLCJsZW5ndGgiLCJjYWdlRGF0YVJvdyIsImNhZ2VzIiwiY2FnZSIsInB1c2giLCJpZCIsIm5hbWUiLCJleHBlcmltZW50X2lkIiwiZGl2Iiwic3R5bGUiLCJoZWlnaHQiLCJwYWRkaW5nUmlnaHQiLCJwYWdlU2l6ZSIsInJvd3NQZXJQYWdlT3B0aW9ucyIsImNoZWNrYm94U2VsZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CagesTable.js\n");

/***/ }),

/***/ "./pages/cages.js":
/*!************************!*\
  !*** ./pages/cages.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CagesTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CagesTable */ \"./components/CagesTable.js\");\n\n\n\nfunction Cages() {\n    const { 0: cages , 1: setCages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchCages = async ()=>{\n        const url = \"http://localhost:4000/cages\";\n        const res = await fetch(url, {\n            method: \"GET\"\n        });\n        console.log(res);\n        const cageData = await res.json();\n        console.log(res.status);\n        // console.log(cageData);\n        setCages(cageData);\n    //passing cage data down in the state\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchCages();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: cages && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CagesTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            cageData: cages\n        }, void 0, false, {\n            fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/pages/cages.js\",\n            lineNumber: 27,\n            columnNumber: 25\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/pages/cages.js\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cages);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYWdlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNEO0FBRWxELFNBQVNJLEtBQUssR0FBRztJQUNmLE1BQU0sS0FBQ0MsS0FBSyxNQUFFQyxRQUFRLE1BQUlMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRXRDLE1BQU1NLFVBQVUsR0FBRyxVQUFZO1FBQzdCLE1BQU1DLEdBQUcsR0FBRyw2QkFBNkI7UUFDekMsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsR0FBRyxFQUFFO1lBQzNCRyxNQUFNLEVBQUUsS0FBSztTQUNkLENBQUM7UUFDRkMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLE1BQU1LLFFBQVEsR0FBRyxNQUFNTCxHQUFHLENBQUNNLElBQUksRUFBRTtRQUVqQ0gsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLENBQUM7UUFDeEIseUJBQXlCO1FBRXpCVixRQUFRLENBQUNRLFFBQVEsQ0FBQyxDQUFDO0lBQ25CLHFDQUFxQztLQUN0QztJQUVEWixnREFBUyxDQUFDLElBQU07UUFDZEssVUFBVSxFQUFFLENBQUM7S0FDZCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQU8sOERBQUNVLEtBQUc7a0JBQUVaLEtBQUssa0JBQUksOERBQUNGLDhEQUFVO1lBQUNXLFFBQVEsRUFBRVQsS0FBSzs7Ozs7Z0JBQWU7Ozs7O1lBQU8sQ0FBQztDQUN6RTtBQUVELGlFQUFlRCxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2NhZ2VzLmpzPzBkNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYWdlc1RhYmxlIGZyb20gXCIuLi9jb21wb25lbnRzL0NhZ2VzVGFibGVcIjtcblxuZnVuY3Rpb24gQ2FnZXMoKSB7XG4gIGNvbnN0IFtjYWdlcywgc2V0Q2FnZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGZldGNoQ2FnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvY2FnZXNcIjtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgY29uc3QgY2FnZURhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2cocmVzLnN0YXR1cyk7XG4gICAgLy8gY29uc29sZS5sb2coY2FnZURhdGEpO1xuXG4gICAgc2V0Q2FnZXMoY2FnZURhdGEpO1xuICAgIC8vcGFzc2luZyBjYWdlIGRhdGEgZG93biBpbiB0aGUgc3RhdGVcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoQ2FnZXMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8ZGl2PntjYWdlcyAmJiA8Q2FnZXNUYWJsZSBjYWdlRGF0YT17Y2FnZXN9PjwvQ2FnZXNUYWJsZT59PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYWdlcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FnZXNUYWJsZSIsIkNhZ2VzIiwiY2FnZXMiLCJzZXRDYWdlcyIsImZldGNoQ2FnZXMiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJjYWdlRGF0YSIsImpzb24iLCJzdGF0dXMiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cages.js\n");

/***/ }),

/***/ "@mui/x-data-grid":
/*!***********************************!*\
  !*** external "@mui/x-data-grid" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@mui/x-data-grid");

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