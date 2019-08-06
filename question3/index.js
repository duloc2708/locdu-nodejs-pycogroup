const DISCOUNT_BILL_ON_100 = 5;
const DISCOUNT_BY_USER = {
    IS_AN_EMPLOYEE: 30,
    IS_AN_AFFILIATE: 10,
    IS_CUSTOMER_FOR_OVER_2_YEAS: 5,
    ON_GROCERIES: 0
}
const Cart = require('./model/Cart.js');
const Product = require('./model/Product.js');
const User = require('./model/User.js');
const { Q3: { listProduct, listUser } } = require('../data')
class Bill {
    constructor() {
        this._result = []
    }
    getResult() {
        return this._result
    }
    discountOnBill100(price, discount) {
        return (price * discount / 100)
    }
    discountByTypeUser(price, discountByUser) {
        return (price * discountByUser / 100)
    }
    calNetpayment(price, discount, discountByUser) {
        return price - discount - discountByUser
    }
    createBill(dataUser, dataProducts) {
        let user = [], products = [];
        const cart = new Cart({ id: 1, user, products }), ListData = [];
        dataUser.map(item => {
            user.push(new User({ id: item.id, name: item.name, type: item.type }))
        })
        dataProducts.map(item => {
            products.push(new Product(item.id, item.price))
        })

        let typeUser = cart.user.filter(userL => {
            let totalMoney = 0, totalDiscount = 0
            cart.products.filter(productL => {
                let discountOnBill100 = this.discountOnBill100(productL._price, DISCOUNT_BILL_ON_100)
                let discountByUser = this.discountOnBill100(productL._price, DISCOUNT_BY_USER[userL._type])
                totalDiscount = discountOnBill100 + discountByUser
                totalMoney = totalMoney + this.calNetpayment(productL._price, discountOnBill100, discountByUser)
            })
            ListData.push({ user: userL._name, type: userL._type, totalDiscount: totalDiscount, totalMoneyPay: totalMoney })
        })
        this._result = ListData
    }
}

module.exports = Bill;
const bill = new Bill();
bill.createBill(listUser, listProduct)
console.log(bill.getResult())
