/* test imporved with chai calculateNumber */
const assert = require("assert");
const expect = require("chai").expect;
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {
  describe("SUM", function() {
    it(`checking if numbers round`, function() {
      const res = calculateNumber('SUM', 1, 3);
      expect(res).to.equal( 4);
    });
  });
  describe("SUBTRACT", function() {
    it(`checking if numbers round`, function() {
      const res = calculateNumber('SUBTRACT', 1.3, 2.7);
      expect(res).to.equal(-2);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber('SUBTRACT', 4.8, 2.8);
      expect(res).to.equal(2);
    });
  });
  describe("DIVIDE", function() {
    it(`checking if numbers round`, function() {
      const res = calculateNumber('DIVIDE', 4, 2);
      expect(res).to.equal(2);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber('DIVIDE', 3.7, 0);
      expect(res).to.equal("Error");
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber('DIVIDE', 1.3, 4.7);
      expect(res).to.equal(0.2);
    });
  });
});
