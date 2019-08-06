const { validKeyBeforeAdd } = require("../common")
class User {
    constructor(entry) {
        const setables = ["id", "name", "type"];
        Object.keys(entry).forEach(key => {
            validKeyBeforeAdd(setables, key);
        })
        Object.assign(this, entry);
    }
    get id() { return this._id; }
    set id(id) { this._id = id; }
    get name() { return this._name; }
    set name(name) { this._name = name; }
    get type() { return this._type; }
    set type(type) { this._type = type; }
}

module.exports = User;