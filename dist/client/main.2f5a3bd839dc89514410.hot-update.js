webpackHotUpdate("main",{

/***/ "./src/shared/Main/CardList/Card/CardInfo/CardInfo.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/Main/CardList/Card/CardInfo/CardInfo.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardInfo = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst cardinfo_css_1 = __importDefault(__webpack_require__(/*! ./cardinfo.css */ \"./src/shared/Main/CardList/Card/CardInfo/cardinfo.css\"));\r\nconst AuthorInfo_1 = __webpack_require__(/*! ./AuthorInfo */ \"./src/shared/Main/CardList/Card/CardInfo/AuthorInfo/index.ts\");\r\nconst CardInfoTitle_1 = __webpack_require__(/*! ./CardInfoTitle */ \"./src/shared/Main/CardList/Card/CardInfo/CardInfoTitle/index.ts\");\r\nfunction CardInfo() {\r\n    return (react_1.default.createElement(\"div\", { className: cardinfo_css_1.default['card-info'] },\r\n        react_1.default.createElement(AuthorInfo_1.AuthorInfo, null),\r\n        react_1.default.createElement(CardInfoTitle_1.CardInfoTitle, null)));\r\n}\r\nexports.CardInfo = CardInfo;\r\n\n\n//# sourceURL=webpack:///./src/shared/Main/CardList/Card/CardInfo/CardInfo.tsx?");

/***/ }),

/***/ "./src/shared/Main/CardList/Card/CardInfo/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/Main/CardList/Card/CardInfo/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardInfo */ \"./src/shared/Main/CardList/Card/CardInfo/CardInfo.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Main/CardList/Card/CardInfo/index.ts?");

/***/ })

})