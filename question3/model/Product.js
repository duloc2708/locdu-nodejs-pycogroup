const { validKeyBeforeAdd } = require("../common")
class Product {
  constructor(entry) {
    const setables = ["id", "price"];
    Object.keys(entry).forEach(key => {
      validKeyBeforeAdd(setables, key);
    })
    Object.assign(this, entry);
  }
}
module.exports = Product;