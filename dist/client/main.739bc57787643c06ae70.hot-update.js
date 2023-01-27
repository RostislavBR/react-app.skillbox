webpackHotUpdate("main",{

/***/ "./src/shared/Main/CardList/Card/CardInfo/AuthorInfo/AuthorInfo.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/Main/CardList/Card/CardInfo/AuthorInfo/AuthorInfo.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AuthorInfo = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst authorinfo_css_1 = __importDefault(__webpack_require__(/*! ./authorinfo.css */ \"./src/shared/Main/CardList/Card/CardInfo/AuthorInfo/authorinfo.css\"));\r\nconst Text_1 = __webpack_require__(/*! ../../../../../Text */ \"./src/shared/Text/index.ts\");\r\nfunction AuthorInfo({ name, description }) {\r\n    return (react_1.default.createElement(\"div\", { className: authorinfo_css_1.default['author-wrapper'] },\r\n        react_1.default.createElement(\"div\", { className: authorinfo_css_1.default['logo-wrapper'] },\r\n            react_1.default.createElement(\"svg\", { width: \"56px\", height: \"56px\", viewBox: \"0 0 56 56\", xmlns: \"http://www.w3.org/2000/svg\", className: authorinfo_css_1.default['logo-svg'] },\r\n                react_1.default.createElement(\"path\", { d: \"M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 27.9999 26.6875 C 24.7421 26.6640 22.1640 23.9453 22.1640 20.3125 C 22.1640 16.9140 24.7421 14.0781 27.9999 14.0781 C 31.2343 14.0781 33.8124 16.9140 33.8124 20.3125 C 33.8124 23.9453 31.2343 26.7344 27.9999 26.6875 Z M 17.6171 39.7422 C 16.7030 39.7422 16.2577 39.1328 16.2577 38.3125 C 16.2577 35.8047 20.0312 29.3594 27.9999 29.3594 C 35.9687 29.3594 39.7187 35.8047 39.7187 38.3125 C 39.7187 39.1328 39.2733 39.7422 38.3827 39.7422 Z\" }))),\r\n        react_1.default.createElement(Text_1.Text, { size: true }, name),\r\n        react_1.default.createElement(Text_1.Text, { size: 10 },\r\n            react_1.default.createElement(Text_1.Text, { size: 10 }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E\"),\r\n            description)));\r\n}\r\nexports.AuthorInfo = AuthorInfo;\r\n\n\n//# sourceURL=webpack:///./src/shared/Main/CardList/Card/CardInfo/AuthorInfo/AuthorInfo.tsx?");

/***/ }),

/***/ "./src/shared/Main/CardList/Card/CardInfo/AuthorInfo/index.ts":
/*!********************************************************************!*\
  !*** ./src/shared/Main/CardList/Card/CardInfo/AuthorInfo/index.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./AuthorInfo */ \"./src/shared/Main/CardList/Card/CardInfo/AuthorInfo/AuthorInfo.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Main/CardList/Card/CardInfo/AuthorInfo/index.ts?");

/***/ })

})