class Bill {
    constructor(id, price) {
        this._id = id;
        this._price = price;
    }
    get id() { return this._id; }
    set id(id) { this._id = id; }
    get price() { return this._price; }
    set price(price) { this._price = price; }
    discountOnBill100(discount) {
        return (parseFloat(this._price) * discount / 100)
    }
    discountByTypeUser(discountByUser) {
        return (parseFloat(this._price) * parseInt(discountByUser) / 100)
    }
    calNetpayment(discount, discountByUser) {
        return this._price - discount - discountByUser
    }
}
module.exports = Bill;