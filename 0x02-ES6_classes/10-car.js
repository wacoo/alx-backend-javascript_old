/**
 * implement the class Car
 * @param {String} brand
 * @param {String} motor
 * @param color
 *
 */

export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(brand) {
    this._brand = brand;
  }

  get motor() {
    return this._motor;
  }

  set motor(motor) {
    this._motor = motor;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
