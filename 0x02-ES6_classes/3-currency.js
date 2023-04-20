/* implements a class named Currency 
  Args:
    code: String
    name: String
*/

export default class Currency{
  constructor(code, namse){
    this._code = typeof code === 'string' ? code : throw new TypeError('Code is not a string');
    this._name = typeof name === 'string' ? name : throw new TypeError('Name is not a string');
  }

  getCode(){
    return this._code;
  }
  setCode(code){
    this._code = code;
  }
  getName(){
    return this._code;
  }
  setName(name){
    this._name = name;
  }

  dusplayFullCurrency(){
    return `${this._name (${this._code})}`;
  }
}
