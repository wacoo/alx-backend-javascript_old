/**
 * implement class EVCar extends Car
 * @param {String} brand
 * @param {String} motor
 * @param {String} color
 * @param {String} range
 */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(range) {
    this._range = range;
  }

  cloneCar() {
    const Species = super.constructor[Symbol.species];
    return new Species();
  }
}
