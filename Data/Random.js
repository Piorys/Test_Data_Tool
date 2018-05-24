/*
Author: Piotr Ryszewski
Date: 24.05.2018
Scope: Methods for generating random data
*/
"use strict"

//Libraries
const random = require("random-js")();
//Data import
const nameBase = require("./Source/Name.js");
const lastNameBase = require("./Source/LastName.js");
const mailBase = require("./Source/MailDomains.js");
const countriesBase = require("./Source/Countries.js");
const citiesBase = require("./Source/Cities.js");
const streetBase = require("./Source/Streets.js");
const dictionary = require("./Source/Dictionary.js");
const personSchema = require("./Source/PersonSchema.js");

module.exports = class RandomData {
  /*
  Scope: Helper function to return random value from an array
  @param data - Array of values
  */
  getRandomValue(data) {
    var index = random.integer(0, data.length - 1);
    var value = data[index];
    return value;
  }
  getRandomDigit() {
    return random.integer(0, 9).toString();
  }

  getRandomMailAddress() {
    var firstName = this.getRandomValue(nameBase);
    var lastName = this.getRandomValue(lastNameBase);
    var mailSuffix = this.getRandomValue(mailBase);
    var mailAddress = firstName + "." + lastName + "@" + mailSuffix;
    return mailAddress;
  }

  getRandomStreetName() {
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

  getRandomStreetNumber() {
    var rand = random.integer(1, 300);
    return rand;
  }

  getRandomFlatNumber() {
    var rand = random.integer(1, 150);
    return rand;
  }

  getRandomZipCode() {
    var zipCode =
      this.getRandomDigit() +
      this.getRandomDigit() +
      "-" +
      this.getRandomDigit() +
      this.getRandomDigit() +
      this.getRandomDigit();
    return zipCode;
  }

  getRandomUsername() {
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

  getRandomPassword() {
    return random.string(15);
  }

  getRandomTelephone() {
    return (
      this.getRandomDigit() +
      this.getRandomDigit() +
      this.getRandomDigit() +
      this.getRandomDigit() +
      this.getRandomDigit() +
      this.getRandomDigit() +
      this.getRandomDigit() +
      this.getRandomDigit() +
      this.getRandomDigit()
    );
  }
  getRandomStreetAddress() {
    if (random.bool()) {
      return (
        this.getRandomStreetName() +
        " " +
        this.getRandomStreetNumber() +
        " " +
        this.getRandomFlatNumber()
      );
    } else {
      return this.getRandomStreetName() + " " + this.getRandomStreetNumber();
    }
  }

  getPerson() {
    let person = personSchema;
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
}
