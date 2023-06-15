/* test imporved calculateNumber */
const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {

    it(`checking if numbers round`, function() {
      const res = calculateNumber('SUM', 1, 3);
      assert.strictEqual(res, 4);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber('SUBTRACT', 1.3, 2.7);
      assert.strictEqual(res, -2);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber('SUBTRACT', 4.8, 2.8);
      assert.strictEqual(res, 2);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber('DIVIDE', 4, 2);
      assert.strictEqual(res, 2);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber('DIVIDE', 3.7, 0);
      assert.strictEqual(res, "Error");
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber('DIVIDE', 1.3, 4.7);
      assert.strictEqual(res, 0.2);
    });
});
