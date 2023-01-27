webpackHotUpdate("main",{

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\r\n/*!\r\n    Copyright (c) 2018 Jed Watson.\r\n    Licensed under the MIT License (MIT), see\r\n    http://jedwatson.github.io/classnames\r\n*/\r\n/* global define */\r\n(function () {\r\n    'use strict';\r\n    var hasOwn = {}.hasOwnProperty;\r\n    var nativeCodeString = '[native code]';\r\n    function classNames() {\r\n        var classes = [];\r\n        for (var i = 0; i < arguments.length; i++) {\r\n            var arg = arguments[i];\r\n            if (!arg)\r\n                continue;\r\n            var argType = typeof arg;\r\n            if (argType === 'string' || argType === 'number') {\r\n                classes.push(arg);\r\n            }\r\n            else if (Array.isArray(arg)) {\r\n                if (arg.length) {\r\n                    var inner = classNames.apply(null, arg);\r\n                    if (inner) {\r\n                        classes.push(inner);\r\n                    }\r\n                }\r\n            }\r\n            else if (argType === 'object') {\r\n                if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {\r\n                    classes.push(arg.toString());\r\n                    continue;\r\n                }\r\n                for (var key in arg) {\r\n                    if (hasOwn.call(arg, key) && arg[key]) {\r\n                        classes.push(key);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return classes.join(' ');\r\n    }\r\n    if ( true && module.exports) {\r\n        classNames.default = classNames;\r\n        module.exports = classNames;\r\n    }\r\n    else if (true) {\r\n        // register as 'classnames', consistent with npm package name\r\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\r\n            return classNames;\r\n        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n    }\r\n    else {}\r\n}());\r\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/ThreadTitle/threadtitle.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Text/text.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/Text/text.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".text__s28--Puvgs {\\r\\n    font-size: 28px;\\r\\n    line-height: 33px;\\r\\n}\\r\\n\\r\\n.text__s20--3Xq66 {\\r\\n    font-size: 20px;\\r\\n    line-height: 23px;\\r\\n}\\r\\n\\r\\n.text__s16--G_lUr {\\r\\n    font-size: 16px;\\r\\n    line-height: 19px;\\r\\n}\\r\\n\\r\\n.text__s14--jvCoO {\\r\\n    font-size: 14px;\\r\\n    line-height: 16px;\\r\\n}\\r\\n\\r\\n.text__s12--2S2T2 {\\r\\n    font-size: 12px;\\r\\n    line-height: 14px;\\r\\n}\\r\\n\\r\\n.text__s10--DYLfy {\\r\\n    font-size: 10px;\\r\\n    line-height: 12px;\\r\\n}\\r\\n\\r\\n.text__black--1zchg {\\r\\n    color: var(--black);\\r\\n}\\r\\n\\r\\n.text__orange--1RyAM {\\r\\n    color: var(--orange);\\r\\n}\\r\\n\\r\\n.text__green--3mYQn {\\r\\n    color: var(--green);\\r\\n}\\r\\n\\r\\n.text__white--13JGE {\\r\\n    color: var(--white);\\r\\n}\\r\\n\\r\\n.text__grayF4--2X2jV {\\r\\n    color: var(--greyF4);\\r\\n}\\r\\n\\r\\n.text__greyF3--2Lfsi {\\r\\n    color: var(--greyF3);\\r\\n}\\r\\n\\r\\n.text__greyD9--7iRFr {\\r\\n    color: var(--greyD9);\\r\\n}\\r\\n\\r\\n.text__greyC4--3oiNM {\\r\\n    color: var(--greyC4);\\r\\n}\\r\\n\\r\\n.text__grey99--35u3B {\\r\\n    color: var(--grey99);\\r\\n}\\r\\n\\r\\n.text__grey66--373uw {\\r\\n    color: var(--grey66);\\r\\n}\\r\\n\\r\\n.text__upperCase--2EMyT {\\r\\n    text-transform: uppercase;\\r\\n}\\r\\n\\r\\n@media all and (min-width: 320px) and (max-width: 1023px) {\\r\\n    .text__m28--2u2zs {\\r\\n        font-size: 28px;\\r\\n        line-height: 33px;\\r\\n    }\\r\\n\\r\\n    .text__m20--1gFlM {\\r\\n        font-size: 20px;\\r\\n        line-height: 23px;\\r\\n    }\\r\\n\\r\\n    .text__m16--cSY4u {\\r\\n        font-size: 16px;\\r\\n        line-height: 19px;\\r\\n    }\\r\\n\\r\\n    .text__m14--s6pnr {\\r\\n        font-size: 14px;\\r\\n        line-height: 16px;\\r\\n    }\\r\\n\\r\\n    .text__m12--1W0av {\\r\\n        font-size: 12px;\\r\\n        line-height: 14px;\\r\\n    }\\r\\n\\r\\n    .text__m10--UtIkW {\\r\\n        font-size: 10px;\\r\\n        line-height: 12px;\\r\\n    }\\r\\n}\\r\\n\\r\\n.text__bold--gb02H {\\r\\n    font-weight: 500;\\r\\n}\\r\\n\\r\\n@media all and (min-width: 1024px) and (max-width: 1539px) {\\r\\n    .text__t28--A4rHF {\\r\\n        font-size: 28px;\\r\\n        line-height: 33px;\\r\\n    }\\r\\n\\r\\n    .text__t20--78tCz {\\r\\n        font-size: 20px;\\r\\n        line-height: 23px;\\r\\n    }\\r\\n\\r\\n    .text__t16--nkVMz {\\r\\n        font-size: 16px;\\r\\n        line-height: 19px;\\r\\n    }\\r\\n\\r\\n    .text__t14--1Rj72 {\\r\\n        font-size: 14px;\\r\\n        line-height: 16px;\\r\\n    }\\r\\n\\r\\n    .text__t12--7txjW {\\r\\n        font-size: 12px;\\r\\n        line-height: 14px;\\r\\n    }\\r\\n\\r\\n    .text__t10--n2R7f {\\r\\n        font-size: 10px;\\r\\n        line-height: 12px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media all and (min-width: 1540px) {\\r\\n    .text__d28--3oIok {\\r\\n        font-size: 28px;\\r\\n        line-height: 33px;\\r\\n    }\\r\\n\\r\\n    .text__d20--uwHxr {\\r\\n        font-size: 20px;\\r\\n        line-height: 23px;\\r\\n    }\\r\\n\\r\\n    .text__d16--1Pwd1 {\\r\\n        font-size: 16px;\\r\\n        line-height: 19px;\\r\\n    }\\r\\n\\r\\n    .text__d14--3Futo {\\r\\n        font-size: 14px;\\r\\n        line-height: 16px;\\r\\n    }\\r\\n\\r\\n    .text__d12--5X_qc {\\r\\n        font-size: 12px;\\r\\n        line-height: 14px;\\r\\n    }\\r\\n\\r\\n    .text__d10--3pWnc {\\r\\n        font-size: 10px;\\r\\n        line-height: 12px;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"s28\": \"text__s28--Puvgs\",\n\t\"s20\": \"text__s20--3Xq66\",\n\t\"s16\": \"text__s16--G_lUr\",\n\t\"s14\": \"text__s14--jvCoO\",\n\t\"s12\": \"text__s12--2S2T2\",\n\t\"s10\": \"text__s10--DYLfy\",\n\t\"black\": \"text__black--1zchg\",\n\t\"orange\": \"text__orange--1RyAM\",\n\t\"green\": \"text__green--3mYQn\",\n\t\"white\": \"text__white--13JGE\",\n\t\"grayF4\": \"text__grayF4--2X2jV\",\n\t\"greyF3\": \"text__greyF3--2Lfsi\",\n\t\"greyD9\": \"text__greyD9--7iRFr\",\n\t\"greyC4\": \"text__greyC4--3oiNM\",\n\t\"grey99\": \"text__grey99--35u3B\",\n\t\"grey66\": \"text__grey66--373uw\",\n\t\"upperCase\": \"text__upperCase--2EMyT\",\n\t\"m28\": \"text__m28--2u2zs\",\n\t\"m20\": \"text__m20--1gFlM\",\n\t\"m16\": \"text__m16--cSY4u\",\n\t\"m14\": \"text__m14--s6pnr\",\n\t\"m12\": \"text__m12--1W0av\",\n\t\"m10\": \"text__m10--UtIkW\",\n\t\"bold\": \"text__bold--gb02H\",\n\t\"t28\": \"text__t28--A4rHF\",\n\t\"t20\": \"text__t20--78tCz\",\n\t\"t16\": \"text__t16--nkVMz\",\n\t\"t14\": \"text__t14--1Rj72\",\n\t\"t12\": \"text__t12--7txjW\",\n\t\"t10\": \"text__t10--n2R7f\",\n\t\"d28\": \"text__d28--3oIok\",\n\t\"d20\": \"text__d20--uwHxr\",\n\t\"d16\": \"text__d16--1Pwd1\",\n\t\"d14\": \"text__d14--3Futo\",\n\t\"d12\": \"text__d12--5X_qc\",\n\t\"d10\": \"text__d10--3pWnc\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst Text_1 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\r\nfunction ThreadTitle() {\r\n    return (\r\n    // <h1 className={styles['thread-title']}>Личный кабинет</h1>\r\n    react_1.default.createElement(Text_1.Text, { size: true }, \"\\u041B\\u0438\\u0447\\u043D\\u044B\\u0439 \\u043A\\u0430\\u0431\\u0438\\u043D\\u0435\\u0442\"));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
false,

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = exports.EColor = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\r\n// Лучше перенести в отдельный файл!\r\nvar EColor;\r\n(function (EColor) {\r\n    EColor[\"black\"] = \"black\";\r\n    EColor[\"white\"] = \"white\";\r\n    EColor[\"orange\"] = \"orange\";\r\n    EColor[\"green\"] = \"green\";\r\n    EColor[\"greyF3\"] = \"greyF3\";\r\n    EColor[\"greyF4\"] = \"greyF4\";\r\n    EColor[\"greyD9\"] = \"greyD9\";\r\n    EColor[\"grey99\"] = \"grey99\";\r\n    EColor[\"grey66\"] = \"grey66\";\r\n    EColor[\"greyC4\"] = \"greyC4\";\r\n    EColor[\"greyEC\"] = \"greyEC\";\r\n})(EColor = exports.EColor || (exports.EColor = {}));\r\nfunction Text(props) {\r\n    const { As = 'span', children, color = EColor.black, bold = false, size, mobileSize, tabletSize, desktopSize } = props;\r\n    const classes = (0, classnames_1.default)(text_css_1.default[`s${size}`], text_css_1.default[color], { [text_css_1.default.bold]: bold }, { [text_css_1.default[`m${mobileSize}`]]: mobileSize }, { [text_css_1.default[`t${tabletSize}`]]: tabletSize }, { [text_css_1.default[`d${desktopSize}`]]: desktopSize });\r\n    return (react_1.default.createElement(As, { className: classes }, children));\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./text.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Text/text.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./text.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Text/text.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./text.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Text/text.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?");

/***/ })

})