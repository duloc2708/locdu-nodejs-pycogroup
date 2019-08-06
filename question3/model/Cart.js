const { validKeyBeforeAdd } =require("../common")
class Cart {
    constructor(entry) {
        const setables = ["id", "user", "products"];
        Object.keys(entry).forEach(key => {
            validKeyBeforeAdd(setables, key);
        });
        Object.assign(this, entry);
    }
}

module.exports = Cart;