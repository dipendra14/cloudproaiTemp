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
exports.id = "pages/api/services/cloudengineering/services";
exports.ids = ["pages/api/services/cloudengineering/services"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/services/cloudengineering/services.js":
/*!*********************************************************!*\
  !*** ./pages/api/services/cloudengineering/services.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nasync function handler(req, res) {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(\"data/services/cloudengineering/\");\n    try {\n        const files = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(filePath);\n        let allServices = [];\n        for (const file of files){\n            const fileContent = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(path__WEBPACK_IMPORTED_MODULE_1___default().join(filePath, file), \"utf-8\");\n            allServices.push(JSON.parse(fileContent));\n        }\n        res.status(200).json(allServices);\n    } catch (error) {\n        console.error(\"Error reading files:\", error);\n        res.status(500).json({\n            error: \"Internal Server Error\",\n            details: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VydmljZXMvY2xvdWRlbmdpbmVlcmluZy9zZXJ2aWNlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDZFQUE2RTtBQUNwRDtBQUNEO0FBRVQsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUMsV0FBV0osbURBQVksQ0FBQztJQUU5QixJQUFJO1FBQ0YsTUFBTU0sUUFBUSxNQUFNUCxnREFBbUIsQ0FBQ0s7UUFDeEMsSUFBSUssY0FBYyxFQUFFO1FBRXBCLEtBQUssTUFBTUMsUUFBUUosTUFBTztZQUN4QixNQUFNSyxjQUFjLE1BQU1aLGlEQUFvQixDQUM1Q0MsZ0RBQVMsQ0FBQ0ksVUFBVU0sT0FDcEI7WUFFRkQsWUFBWUssSUFBSSxDQUFDQyxLQUFLQyxLQUFLLENBQUNMO1FBQzlCO1FBRUFSLElBQUljLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNUO0lBQ3ZCLEVBQUUsT0FBT1UsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUN0Q2hCLElBQUljLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztZQUF5QkUsU0FBU0YsTUFBTUcsT0FBTztRQUFDO0lBQ2hGO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2plZW5hLXJlYWN0Ly4vcGFnZXMvYXBpL3NlcnZpY2VzL2Nsb3VkZW5naW5lZXJpbmcvc2VydmljZXMuanM/MGQxZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKCdkYXRhL3NlcnZpY2VzL2Nsb3VkZW5naW5lZXJpbmcvJyk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmaWxlcyA9IGF3YWl0IGZzLnByb21pc2VzLnJlYWRkaXIoZmlsZVBhdGgpO1xyXG4gICAgbGV0IGFsbFNlcnZpY2VzID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XHJcbiAgICAgIGNvbnN0IGZpbGVDb250ZW50ID0gYXdhaXQgZnMucHJvbWlzZXMucmVhZEZpbGUoXHJcbiAgICAgICAgcGF0aC5qb2luKGZpbGVQYXRoLCBmaWxlKSxcclxuICAgICAgICAndXRmLTgnXHJcbiAgICAgICk7XHJcbiAgICAgIGFsbFNlcnZpY2VzLnB1c2goSlNPTi5wYXJzZShmaWxlQ29udGVudCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGFsbFNlcnZpY2VzKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVhZGluZyBmaWxlczonLCBlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJywgZGV0YWlsczogZXJyb3IubWVzc2FnZSB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJmaWxlUGF0aCIsInJlc29sdmUiLCJmaWxlcyIsInByb21pc2VzIiwicmVhZGRpciIsImFsbFNlcnZpY2VzIiwiZmlsZSIsImZpbGVDb250ZW50IiwicmVhZEZpbGUiLCJqb2luIiwicHVzaCIsIkpTT04iLCJwYXJzZSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJkZXRhaWxzIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/services/cloudengineering/services.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/services/cloudengineering/services.js"));
module.exports = __webpack_exports__;

})();