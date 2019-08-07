const { validKeyBeforeAdd } = require("../common")
class User {
    constructor(entry) {
        const setables = ["id", "name", "type"];
        Object.keys(entry).forEach(key => {
            validKeyBeforeAdd(setables, key);
        })
        Object.assign(this, entry);
    }
}

module.exports = User;