class Cart {
    constructor(users, products) {
        this._users = users
        this._products = products
    }
    getUser() {
        return this._users
    }
    getProducts() {
        return this._products
    }
}

module.exports = Cart;