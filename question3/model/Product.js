const { validKeyBeforeAdd } = require("../common")
class Product {
  constructor(entry) {
    const setables = ["id", "price", "qty"];
    Object.keys(entry).forEach(key => {
      validKeyBeforeAdd(setables, key);
    })
    Object.assign(this, entry);
  }
}
module.exports = Product;