/**
 * implement the class Airport
 * @param {String} name
 * @param {String} code
 */

export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
    return this.code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
