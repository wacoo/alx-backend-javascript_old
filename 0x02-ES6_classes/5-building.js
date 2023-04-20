/* implement a class BUilding
  Args:
    sqft: number
*/
export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      if (this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }
}
