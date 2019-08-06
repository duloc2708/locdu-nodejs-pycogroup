const { validKeyBeforeAdd } = require("../common")
class Cart {
    constructor(entry) {
        const setables = ["id", "user", "products"];
        Object.keys(entry).forEach(key => {
            validKeyBeforeAdd(setables, key);
        });
        Object.assign(this, entry);
        return new Proxy(this, {
            set(target, name, value) {
                validKeyBeforeAdd(setables, name);
                target[name] = value;
                return true;
            }
        });
    }
}

module.exports = Cart;