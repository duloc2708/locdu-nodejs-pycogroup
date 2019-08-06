class Product {
  constructor(id = '', price = 0) {
    this._id = id;
    this._price = price
  }
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }
  get price() {
    return this._price;
  }
  set price(price) {
    this._price = price;
  }
}
module.exports = Product;