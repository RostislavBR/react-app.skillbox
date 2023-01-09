webpackHotUpdate("main",{

/***/ "./src/shared/Main/Main.tsx":
/*!**********************************!*\
  !*** ./src/shared/Main/Main.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Main = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst CardList_1 = __webpack_require__(/*! ./CardList */ \"./src/shared/Main/CardList/index.ts\");\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nconst LIST = [\r\n    {\r\n        name: 'Константин Кодов',\r\n        description: '8 часов назад',\r\n        title: 'Реплицированные с зарубежных источников возможности '\r\n    },\r\n    {\r\n        name: 'Ирина Зверева',\r\n        description: '6 часов назад',\r\n        title: 'С учётом сложившейся международной обстановки'\r\n    },\r\n    {\r\n        name: 'Владимир Петров',\r\n        description: '5 часов назад',\r\n        title: 'Следует отметить, что новая модель организационной деятельности'\r\n    },\r\n].map((item) => (Object.assign(Object.assign({}, item), { id: (0, generateRandomIndex_1.generateRandomString)() })));\r\nfunction Main() {\r\n    return (react_1.default.createElement(\"main\", null,\r\n        react_1.default.createElement(CardList_1.CardList, { cardList: LIST })));\r\n}\r\nexports.Main = Main;\r\n\n\n//# sourceURL=webpack:///./src/shared/Main/Main.tsx?");

/***/ }),

/***/ "./src/shared/Main/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Main/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Main */ \"./src/shared/Main/Main.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Main/index.ts?");

/***/ })

})