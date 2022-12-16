webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".sortblock__sort-block--_fGva {\\r\\n    background-color: var(--white);\\r\\n    border-radius: 7px;\\r\\n    margin: 0 0 20px;\\r\\n}\\r\\n\\r\\n.sortblock__sort-block-list--1dKYk {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    padding: 0 20px;\\r\\n    margin: 0 0 12px 0;\\r\\n}\\r\\n\\r\\n.sortblock__sort-block-item--1JVOz {\\r\\n    display: block;\\r\\n    position: relative;\\r\\n    font-size: 12px;\\r\\n    font-weight: 400;\\r\\n    line-height: 14px;\\r\\n    color: var(--grey99);\\r\\n    border-bottom: 1px solid var(--greyEC);\\r\\n    padding: 10px 0 10px 20px;\\r\\n}\\r\\n\\r\\n.sortblock__sort-block-item--1JVOz:last-child {\\r\\n    border: none;\\r\\n    padding-bottom: 0;\\r\\n}\\r\\n\\r\\n.sortblock__sort-block-item--1JVOz:before {\\r\\n    content: '';\\r\\n    position: absolute;\\r\\n    top: 11px;\\r\\n    right: 0;\\r\\n    padding: 5px;\\r\\n    background-color: #333333;\\r\\n    /*background-image: url(\\\"../../../images/eyes.svg\\\");*/\\r\\n    /*background-repeat: no-repeat;*/\\r\\n    /*background-position: center;*/\\r\\n}\\r\\n\\r\\n.sortblock__sort-block-item--1JVOz:after {\\r\\n    content: '';\\r\\n    position: absolute;\\r\\n    top: 11px;\\r\\n    left: 0;\\r\\n    padding: 5px;\\r\\n    background-color: #333333;\\r\\n    /*background-image: url(\\\"../../../images/arrow.svg\\\");*/\\r\\n    /*background-repeat: no-repeat;*/\\r\\n    /*background-position: center;*/\\r\\n}\\r\\n\\r\\n.sortblock__btn--3Dy7e {\\r\\n    width: 100%;\\r\\n    display: block;\\r\\n    padding: 11px;\\r\\n    text-align: center;\\r\\n    font-size: 12px;\\r\\n    font-weight: 400;\\r\\n    line-height: 14px;\\r\\n    color: var(--grey66);\\r\\n    background-color: var(--greyD9);\\r\\n    border: none;\\r\\n    border-radius: 0px 0px 3px 3px;\\r\\n    cursor: pointer;\\r\\n    outline: 1px black;\\r\\n}\\r\\n\\r\\n.sortblock__active--27Lrz {\\r\\n    outline: 1px solid #333333;\\r\\n}\\r\\n\\r\\n@media all and (min-width: 1024px) {\\r\\n    .sortblock__sortBlock--141aZ {\\r\\n        background-color: transparent;\\r\\n        padding: 0;\\r\\n        margin: 0;\\r\\n        border-radius: 0;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"sort-block\": \"sortblock__sort-block--_fGva\",\n\t\"sort-block-list\": \"sortblock__sort-block-list--1dKYk\",\n\t\"sort-block-item\": \"sortblock__sort-block-item--1JVOz\",\n\t\"btn\": \"sortblock__btn--3Dy7e\",\n\t\"active\": \"sortblock__active--27Lrz\",\n\t\"sortBlock\": \"sortblock__sortBlock--141aZ\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\r\nfunction SortBlock() {\r\n    function handleClick(el) {\r\n        const button = document.querySelector('btn');\r\n        el.button.classList.add('active');\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default['sort-block'] },\r\n        react_1.default.createElement(\"ul\", { className: sortblock_css_1.default['sort-block-list'] },\r\n            react_1.default.createElement(\"li\", { className: sortblock_css_1.default['sort-block-item'] }, \"text\"),\r\n            react_1.default.createElement(\"li\", { className: sortblock_css_1.default['sort-block-item'] }, \"text\"),\r\n            react_1.default.createElement(\"li\", { className: sortblock_css_1.default['sort-block-item'] }, \"text\"),\r\n            react_1.default.createElement(\"li\", { className: sortblock_css_1.default['sort-block-item'] }, \"text\")),\r\n        react_1.default.createElement(\"button\", { type: \"button\", className: sortblock_css_1.default.btn }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ })

})