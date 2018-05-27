webpackHotUpdate(4,{

/***/ "./Data/Random.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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

var RandomData =
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

var data = new RandomData();
var _default = data;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(random, "random", "/Users/piotrryszewski/Desktop/Projekty/Test Data Creation Tool/Test_Data_Tool/Data/Random.js");
  reactHotLoader.register(RandomData, "RandomData", "/Users/piotrryszewski/Desktop/Projekty/Test Data Creation Tool/Test_Data_Tool/Data/Random.js");
  reactHotLoader.register(data, "data", "/Users/piotrryszewski/Desktop/Projekty/Test Data Creation Tool/Test_Data_Tool/Data/Random.js");
  reactHotLoader.register(_default, "default", "/Users/piotrryszewski/Desktop/Projekty/Test Data Creation Tool/Test_Data_Tool/Data/Random.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.c521db74eb6a0f7373ca.hot-update.js.map