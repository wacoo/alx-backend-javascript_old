/* implement a class Pricing
  Args:
    amount: number
    currency: Currency
*/
import Currency from './3-currency';

export default class Pricing{
  constructor(amount, currency){
    this._amount = typeof amount === 'amount' ? amount : throw new TypeError('Amount is not a number');
    this._currency = instanceof currency === Currency ? currency : throw new TypeError('Currency is not a Currency');
  }
  getAmount(){
    return this._amount;
  }
  setAmount(amount){
    this._amount = amount;
  }
  getCurrency(){
    return this._currency;
  }
  setCurrency(currency){
    this._currency = currency;
  }
  displayFullPrice(){
    return {_amount: this._amount, _currency: this._currency}
  }
  static convertPrice(amount, conversionRate){
    return amount * conversionRate;
  }
}

