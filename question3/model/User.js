class User {
    constructor(id = 1, name = '', type = '') {
        this._id = id;
        this._name = name;
        this._type = type;
    }
    get id() { return this._id; }
    set id(id) { this._id = id; }
    get name() { return this._name; }
    set name(name) { this._name = name; }
    get type() { return this._type; }
    set type(type) { this._type = type; }   
}

module.exports = User;