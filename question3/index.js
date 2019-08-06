const DISCOUNT_BILL_ON_100 = 5;
const ON_LIMIT_MONEY_HAVE_DISCOUNT = 100; //100$
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
    totalBillDiscountOnBill100(price, discount) {
        if (price >= ON_LIMIT_MONEY_HAVE_DISCOUNT) return price - (price * discount / 100)
        return 0
    }
    totalBillOnDiscountByTypeUser(price, type) {
        let discountByUser = 0
        switch (type) {
            case "IS_AN_EMPLOYEE":
                discountByUser = 30
                break;
            case "IS_AN_AFFILIATE":
                discountByUser = 10
                break;
            case "IS_CUSTOMER_FOR_OVER_2_YEAS":
                discountByUser = 5
                break;
            default:
                break;
        }
        return price - (price * discountByUser / 100)
    }
    calNetpayment(price, discount, discountByUser) {
        return price - discount - discountByUser
    }
    createBill(dataUser, dataProducts) {
        let user = [], products = [], ListData = [];
        dataUser.map(item => {
            user.push(new User({ id: item.id, name: item.name, type: item.type }))
        })
        dataProducts.map(item => {
            let newProducts = new Product(item.id, item.price)
            newProducts._qty = item.qty
            products.push(newProducts)
        })
        // add user and list products to cart
        let cart = new Cart({ id: `card_1`, user, products })

        // loop cart for cal bill earch user
        cart.user.filter(userL => {
            let totalMoney = 0, totalDiscount = 0
            // cal total bill not yet discount
            cart.products.filter(productL => {
                totalMoney = totalMoney + (productL._qty * productL.price)
            })
            // call total bill on discount each user
            totalMoney = this.totalBillOnDiscountByTypeUser(totalMoney, userL._type)

            // case total bill on 100$ then unless 5$
            totalMoney = this.totalBillDiscountOnBill100(totalMoney, DISCOUNT_BILL_ON_100)

            ListData.push({ user: userL._name, type: userL._type, totalMoneyPay: totalMoney })
        })
        this._result = ListData
    }
}

module.exports = Bill;
const bill = new Bill();
bill.createBill(listUser, listProduct)
console.log(bill.getResult())
