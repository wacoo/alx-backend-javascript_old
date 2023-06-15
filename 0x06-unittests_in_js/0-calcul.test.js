/* test 0-calcul.caculateNumber */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('tests caculateNumber', () => {
  it('test', () => {
    const sum = calculateNumber(2, 4);
    assert.strictEqual(sum, 6);
  });
  it('test', () => {
    const sum = calculateNumber(2.2, 4.2);
    assert.strictEqual(sum, 6);
  });
  it('test', () => {
    const sum = calculateNumber(2.6, 4.2);
    assert.strictEqual(sum, 7);
  });
  it('test', () => {
    const sum = calculateNumber(2, -4);
    assert.strictEqual(sum, -2);
  });
  it('test', () => {
    const sum = calculateNumber(4, -2);
    assert.strictEqual(sum, 2);
  });
  it('test', () => {
    const sum = calculateNumber(2.2, -4.2);
    assert.strictEqual(sum, -2);
  });
  it('test', () => {
    const sum = calculateNumber(-2.6, 4.2);
    assert.strictEqual(sum, 2);
  });
  it('test', () => {
    const sum = calculateNumber(0, 4);
    assert.strictEqual(sum, 4);
  });
  it('test', () => {
    const sum = calculateNumber(4, 0);
    assert.strictEqual(sum, 4);
  });
  it('test', () => {
    const sum = calculateNumber(0, 0);
    assert.strictEqual(sum, 0);
  });
  it('test', () => {
    const sum = calculateNumber(-4, -2);
    assert.strictEqual(sum, -6);
  });
});
