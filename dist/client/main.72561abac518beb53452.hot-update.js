webpackHotUpdate("main",{

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\r\nconst ListInterface_1 = __webpack_require__(/*! ../../../interfaces/ListInterface */ \"./src/interfaces/ListInterface.tsx\");\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nconst merge_1 = __webpack_require__(/*! ../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nconst SORTLIST = [\r\n    { As: 'li', text: 'Просмотренное', className: `${sortblock_css_1.default['sort-block-item']}` },\r\n    { As: 'li', text: 'Сохранённое', className: `${sortblock_css_1.default['sort-block-item']}` },\r\n    { As: 'li', text: 'Мои посты', className: `${sortblock_css_1.default['sort-block-item']}` },\r\n    { As: 'li', text: 'Прокомментированное', className: `${sortblock_css_1.default['sort-block-item']}` },\r\n].map(generateRandomIndex_1.generateId);\r\nfunction pipe(...fns) {\r\n    return (initialValue) => fns.reduce((previousValue, fn) => fn(previousValue), initialValue);\r\n}\r\nfunction pick(prop) {\r\n    return (obj) => obj[prop];\r\n}\r\nfunction isEqual(left) {\r\n    return (right) => left === right;\r\n}\r\nfunction cond(b) {\r\n    return !b;\r\n}\r\nfunction SortBlock() {\r\n    const [defaultItem, setDefaultItem] = react_1.default.useState('Просмотренное');\r\n    const [list, setList] = react_1.default.useState(SORTLIST);\r\n    // const createFilterBy = (prop: string) => (id: string) => pipe(pick(prop), isEqual(id), cond)\r\n    // const filterWithId = createFilterBy('id')\r\n    const handleItemClick = (id) => {\r\n        // list.filter((item) => item.id === id ? setDefaultItem(item.text) : item);\r\n        // const filteredCards = list.filter(filterWithId(id))\r\n        console.log(id);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default['sort-block'] },\r\n        react_1.default.createElement(\"div\", { className: sortblock_css_1.default['sort-block-list'] },\r\n            react_1.default.createElement(ListInterface_1.MyList, { list: list.map(((0, merge_1.merge)({ onClick: handleItemClick }))) }),\r\n            react_1.default.createElement(\"button\", { type: \"button\", className: sortblock_css_1.default.btn }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"))));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Main/CardList/Card/MenuList/MenuList.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/Main/CardList/Card/MenuList/MenuList.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuList = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst menulist_css_1 = __importDefault(__webpack_require__(/*! ./menulist.css */ \"./src/shared/Main/CardList/Card/MenuList/menulist.css\"));\r\nconst ListInterface_1 = __webpack_require__(/*! ../../../../../interfaces/ListInterface */ \"./src/interfaces/ListInterface.tsx\");\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ../../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nconst MENULIST = [\r\n    { AS: 'li', text: 'text1', className: `${menulist_css_1.default['menu-list-item']}` },\r\n    { AS: 'li', text: 'text2', className: `${menulist_css_1.default['menu-list-item']}` },\r\n    { AS: 'li', text: 'text3', className: `${menulist_css_1.default['menu-list-item']}` },\r\n].map(generateRandomIndex_1.generateId);\r\nfunction MenuList() {\r\n    const [list, setList] = react_1.default.useState(MENULIST);\r\n    const handleItemClick = (id) => {\r\n        console.log(id);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: menulist_css_1.default['menu-wrapper'] },\r\n        react_1.default.createElement(\"ul\", { className: menulist_css_1.default['menu-list'] },\r\n            react_1.default.createElement(ListInterface_1.MyList, { list: list.map((item) => (Object.assign(Object.assign({}, item), { onClick: () => {\r\n                        console.log(list);\r\n                    } }))) })),\r\n        react_1.default.createElement(\"button\", { className: menulist_css_1.default['menu-list-button'] }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")));\r\n}\r\nexports.MenuList = MenuList;\r\n\n\n//# sourceURL=webpack:///./src/shared/Main/CardList/Card/MenuList/MenuList.tsx?");

/***/ }),

/***/ "./src/shared/Main/CardList/Card/MenuList/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/Main/CardList/Card/MenuList/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuList */ \"./src/shared/Main/CardList/Card/MenuList/MenuList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Main/CardList/Card/MenuList/index.ts?");

/***/ }),

/***/ "./src/shared/Main/Main.tsx":
/*!**********************************!*\
  !*** ./src/shared/Main/Main.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Main = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst CardList_1 = __webpack_require__(/*! ./CardList */ \"./src/shared/Main/CardList/index.ts\");\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nconst LIST = [\r\n    {\r\n        name: 'Константин Кодов',\r\n        description: '8 часов назад',\r\n        title: 'Реплицированные с зарубежных источников возможности '\r\n    },\r\n    {\r\n        name: 'Ирина Зверева',\r\n        description: '6 часов назад',\r\n        title: 'С учётом сложившейся международной обстановки'\r\n    },\r\n    {\r\n        name: 'Владимир Петров',\r\n        description: '5 часов назад',\r\n        title: 'Следует отметить, что новая модель организационной деятельности'\r\n    },\r\n].map(generateRandomIndex_1.generateId);\r\nfunction Main() {\r\n    return (react_1.default.createElement(\"main\", null,\r\n        react_1.default.createElement(CardList_1.CardList, { list: LIST })));\r\n}\r\nexports.Main = Main;\r\n\n\n//# sourceURL=webpack:///./src/shared/Main/Main.tsx?");

/***/ }),

/***/ "./src/shared/Main/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Main/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Main */ \"./src/shared/Main/Main.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Main/index.ts?");

/***/ }),

/***/ "./src/utils/react/generateRandomIndex.ts":
/*!************************************************!*\
  !*** ./src/utils/react/generateRandomIndex.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.generateId = exports.assignId = exports.generateRandomString = void 0;\r\nconst assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\r\nconst generateRandomString = () => Math.random().toString(36).substring(2, 15);\r\nexports.generateRandomString = generateRandomString;\r\nconst assignId = () => (0, assoc_1.assoc)('id', (0, exports.generateRandomString)());\r\nexports.assignId = assignId;\r\nconst generateId = (obj) => (0, exports.assignId)()(obj);\r\nexports.generateId = generateId;\r\n\n\n//# sourceURL=webpack:///./src/utils/react/generateRandomIndex.ts?");

/***/ })

})