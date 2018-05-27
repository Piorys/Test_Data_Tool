webpackHotUpdate(4,{

/***/ "./Data/Random.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/*
Author: Piotr Ryszewski
Date: 24.05.2018
Scope: Methods for generating random data
*/
 //Libraries

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var random = __webpack_require__("./node_modules/random-js/lib/random.js")(); //Data import


var nameBase = __webpack_require__("./Data/Source/Name.js");

var lastNameBase = __webpack_require__("./Data/Source/LastName.js");

var mailBase = __webpack_require__("./Data/Source/MailDomains.js");

var countriesBase = __webpack_require__("./Data/Source/Countries.js");

var citiesBase = __webpack_require__("./Data/Source/Cities.js");

var streetBase = __webpack_require__("./Data/Source/Streets.js");

var dictionary = __webpack_require__("./Data/Source/Dictionary.js");

var personSchema = __webpack_require__("./Data/Source/PersonSchema.js");

module.exports =
/*#__PURE__*/
function () {
  function RandomData() {
    _classCallCheck(this, RandomData);
  }

  _createClass(RandomData, [{
    key: "getRandomValue",

    /*
    Scope: Helper function to return random value from an array
    @param data - Array of values
    */
    value: function getRandomValue(data) {
      var index = random.integer(0, data.length - 1);
      var value = data[index];
      return value;
    }
  }, {
    key: "getRandomDigit",
    value: function getRandomDigit() {
      return random.integer(0, 9).toString();
    }
  }, {
    key: "getRandomMailAddress",
    value: function getRandomMailAddress() {
      var firstName = this.getRandomValue(nameBase);
      var lastName = this.getRandomValue(lastNameBase);
      var mailSuffix = this.getRandomValue(mailBase);
      var mailAddress = firstName + "." + lastName + "@" + mailSuffix;
      return mailAddress;
    }
  }, {
    key: "getRandomStreetName",
    value: function getRandomStreetName() {
      var randomNoun = this.getRandomValue(dictionary.noun);
      var randomType = this.getRandomValue(streetBase.type);
      var randomDirection = this.getRandomValue(streetBase.direction);
      var street;

      if (random.bool()) {
        street = randomNoun + " " + randomType;
      } else {
        street = randomNoun + " " + randomType + " " + randomDirection;
      }

      return street;
    }
  }, {
    key: "getRandomStreetNumber",
    value: function getRandomStreetNumber() {
      var rand = random.integer(1, 300);
      return rand;
    }
  }, {
    key: "getRandomFlatNumber",
    value: function getRandomFlatNumber() {
      var rand = random.integer(1, 150);
      return rand;
    }
  }, {
    key: "getRandomZipCode",
    value: function getRandomZipCode() {
      var zipCode = this.getRandomDigit() + this.getRandomDigit() + "-" + this.getRandomDigit() + this.getRandomDigit() + this.getRandomDigit();
      return zipCode;
    }
  }, {
    key: "getRandomUsername",
    value: function getRandomUsername() {
      var adj = this.getRandomValue(dictionary.adjective);
      var noun = this.getRandomValue(dictionary.noun);

      if (random.bool()) {
        return adj + this.getRandomDigit() + this.getRandomDigit();
      } else if (random.bool()) {
        return adj + "_" + noun + this.getRandomDigit() + this.getRandomDigit();
      } else {
        return adj + noun + this.getRandomDigit() + this.getRandomDigit();
      }
    }
  }, {
    key: "getRandomPassword",
    value: function getRandomPassword() {
      return random.string(15);
    }
  }, {
    key: "getRandomTelephone",
    value: function getRandomTelephone() {
      return this.getRandomDigit() + this.getRandomDigit() + this.getRandomDigit() + this.getRandomDigit() + this.getRandomDigit() + this.getRandomDigit() + this.getRandomDigit() + this.getRandomDigit() + this.getRandomDigit();
    }
  }, {
    key: "getRandomStreetAddress",
    value: function getRandomStreetAddress() {
      if (random.bool()) {
        return this.getRandomStreetName() + " " + this.getRandomStreetNumber() + " " + this.getRandomFlatNumber();
      } else {
        return this.getRandomStreetName() + " " + this.getRandomStreetNumber();
      }
    }
  }, {
    key: "getPerson",
    value: function getPerson() {
      var person = personSchema;
      person.firstName = this.getRandomValue(nameBase);
      person.lastName = this.getRandomValue(lastNameBase);
      person.mail = this.getRandomMailAddress();
      person.username = this.getRandomUsername();
      person.password = this.getRandomPassword();
      person.telephone = this.getRandomTelephone();
      person.country = this.getRandomValue(countriesBase);
      person.street = this.getRandomStreetName();
      person.streetNumber = this.getRandomStreetNumber();
      person.flatNumber = this.getRandomFlatNumber();
      person.zipCode = this.getRandomZipCode();
      person.streetAddress = this.getRandomStreetAddress();
      return person;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RandomData;
}();

;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(random, "random", "/Users/piotrryszewski/Desktop/Projekty/Test Data Creation Tool/Test_Data_Tool/Data/Random.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./components/block.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Data_Random_js__ = __webpack_require__("./Data/Random.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Data_Random_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Data_Random_js__);

var _jsxFileName = "/Users/piotrryszewski/Desktop/Projekty/Test Data Creation Tool/Test_Data_Tool/components/block.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 // const RandomData = require("../Data/Random.js");
// const data = new RandomData();



var Block =
/*#__PURE__*/
function (_Component) {
  _inherits(Block, _Component);

  function Block() {
    _classCallCheck(this, Block);

    return _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).apply(this, arguments));
  }

  _createClass(Block, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Container */], {
        textAlign: "center",
        text: "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */], {
        celled: true,
        basic: "very",
        textAlign: "center",
        columns: "2",
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "First Name"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Value")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Last Name"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "Value")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Username"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "Value")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Password"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Value")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "Telephone"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Value")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Country"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Value")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Street Name"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Value")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Street Number"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "Value")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Flat Number"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Value")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Zip Code"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Value")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "Street Address"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Value")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
        content: "Generate!",
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(props) {
        var person;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return data.getPerson();

              case 2:
                person = _context.sent;
                return _context.abrupt("return", {
                  firstName: person.firstName,
                  lastName: person.lastName,
                  username: person.username,
                  password: person.password,
                  telephone: person.telephone,
                  country: sperson.country,
                  streetName: person.streetName,
                  streetNumber: person.streetNumber,
                  flatNumber: person.flatNumber,
                  zipCode: person.zipCode,
                  streetAddress: "todo"
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Block;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Block, "Block", "/Users/piotrryszewski/Desktop/Projekty/Test Data Creation Tool/Test_Data_Tool/components/block.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.4f1e67f6d916f6be00dd.hot-update.js.map