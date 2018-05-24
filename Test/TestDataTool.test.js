const random = require("../Data/Random.js");
const assert = require("assert");

let data = new random();
let person;

beforeEach(async () => {
  person = data.getPerson();
});

describe("Test Data Tool", () => {
  it("Allows generating person object", () => {
    assert(person);
  });
  it("Allows to generate random digit", () => {
    assert(data.getRandomDigit());
  });
  it("Allows to generate random mail address", () => {
    assert(data.getRandomMailAddress());
  });
  it("Allows to generate random street name", () => {
    assert(data.getRandomStreetName());
  });
  it("Allows to generate random street number", () => {
    assert(data.getRandomStreetNumber());
  });
  it("Allows to generate random flat number", () => {
    assert(data.getRandomFlatNumber());
  });
  it("Allows to generate random zip code", () => {
    assert(data.getRandomZipCode().length === 6);
  });
  it("Allows to generate random username", () => {
    assert(data.getRandomUsername());
  });
  it("Allows to generate random password", () => {
    assert(data.getRandomPassword());
  });
  it("Allows to generate random phone number", () => {
    assert(data.getRandomTelephone().length === 9);
  });
  it("Allows to generate random full street address", () => {
    assert(data.getRandomStreetAddress());
  });
});
