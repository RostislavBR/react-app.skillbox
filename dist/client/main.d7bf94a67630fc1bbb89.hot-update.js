webpackHotUpdate("main",{

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst sortblock_css_1 = __importDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './sortblock.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\r\nconst ListInterface_1 = __webpack_require__(/*! ../../../interfaces/ListInterface */ \"./src/interfaces/ListInterface.tsx\");\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nconst merge_1 = __webpack_require__(/*! ../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nconst DropDown_1 = __webpack_require__(/*! ../../DropDown */ \"./src/shared/DropDown/index.ts\");\r\nconst SORTLIST = [\r\n    { AS: 'li', text: 'Просмотренное', className: `${sortblock_css_1.default['sort-block-item']}` },\r\n    { AS: 'li', text: 'Сохраннённое', className: `${sortblock_css_1.default['sort-block-item']}` },\r\n    { AS: 'li', text: 'Мои посты', className: `${sortblock_css_1.default['sort-block-item']}` },\r\n    { AS: 'li', text: 'Прокомментированное', className: `${sortblock_css_1.default['sort-block-item']}` },\r\n].map((item) => (Object.assign(Object.assign({}, item), { id: (0, generateRandomIndex_1.generateRandomString)() })));\r\nfunction pipe(...fns) {\r\n    return (initialValue) => fns.reduce((previousValue, fn) => fn(previousValue), initialValue);\r\n}\r\nfunction pick(prop) {\r\n    return (obj) => obj[prop];\r\n}\r\nfunction isEqual(left) {\r\n    return (right) => left === right;\r\n}\r\nfunction cond(b) {\r\n    return !b;\r\n}\r\nfunction SortBlock() {\r\n    const [defaultItem, setDefaultItem] = react_1.default.useState('Просмотренное');\r\n    const [list, setList] = react_1.default.useState(SORTLIST);\r\n    // const createFilterBy = (prop: string) => (id: string) => pipe(pick(prop), isEqual(id), cond)\r\n    // const filterWithId = createFilterBy('id')\r\n    const handleItemClick = (id) => {\r\n        // list.filter((item) => item.id === id ? setDefaultItem(item.text) : item);\r\n        // const filteredCards = list.filter(filterWithId(id))\r\n        console.log(id);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default['sort-block'] },\r\n        react_1.default.createElement(DropDown_1.DropDown, { button: react_1.default.createElement(\"div\", { className: sortblock_css_1.default['sort-block-item'] }, defaultItem) },\r\n            react_1.default.createElement(\"ul\", { className: sortblock_css_1.default['sort-block-list'] },\r\n                react_1.default.createElement(ListInterface_1.MyList, { list: list.map(((0, merge_1.merge)({ onClick: handleItemClick }))) }),\r\n                react_1.default.createElement(\"button\", { type: \"button\", className: sortblock_css_1.default.btn }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")))));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ })

})