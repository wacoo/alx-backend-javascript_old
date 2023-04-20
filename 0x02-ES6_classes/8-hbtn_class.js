/**
 * implement a class HolbertonClass
 * @param {Number} size
 * @param {String} location
 */
export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    this._size = size;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    this._location = location;
  }

  [Symbol.toPrimitive](data) {
    if (data === 'string') {
      return this.location;
    }
    if (data === 'number') {
      return this.size;
    }
    return null;
  }
}
