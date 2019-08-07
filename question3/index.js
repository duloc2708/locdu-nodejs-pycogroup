const DISCOUNT_BILL_ON_100 = 5;
const ON_LIMIT_MONEY_HAVE_DISCOUNT = 100; //100$
const Cart = require('./model/Cart.js');
const Product = require('./model/Product.js');
const User = require('./model/User.js');

const totalBillDiscountOnBill100 = (price, discount) => {
    if (price >= ON_LIMIT_MONEY_HAVE_DISCOUNT) {
        return price - (price * DISCOUNT_BILL_ON_100 / 100)
    }
    return price
}
const totalBillOnDiscountByTypeUser = (price, type) => {
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
        default: 0
    }
    return price - (price * discountByUser / 100)
}
const calNetpayment = (products, typeUser) => {
    // sum list product -> total money root
    let totalMoney = products.reduce((prev, cur) => prev + (cur.price * cur.qty), 0);
    //total bill on discount each user
    totalMoney = totalBillOnDiscountByTypeUser(totalMoney, typeUser)
    // case total bill on 100$ then unless 5$
    totalMoney = totalBillDiscountOnBill100(totalMoney)
    return totalMoney
}
const createBill = (dataUser, dataProducts) => {
    let user = [], products = [], ListData = [];

    dataUser.map(item => {
        user.push(new User({ id: item.id, name: item.name, type: item.type }))
    })
    dataProducts.map(item => {
        let newProducts = new Product({ id: item.id, price: item.price })
        newProducts.qty = item.qty
        products.push(newProducts)
    })
    // add user and list products to cart
    let cart = new Cart({ id: `card_1`, user, products })

    // loop cart for cal bill earch user
    cart.user.filter(userL => {
        ListData.push({ user: userL.name, type: userL.type, totalMoneyPay: calNetpayment(cart.products, userL.type) })
    })
    return ListData
}
const createBillNew = (cart) => {
    let ListData = [];
    cart.getUser().map(userL => {
        ListData.push({ user: userL.name, type: userL.type, totalMoneyPay: calNetpayment(cart.getProducts(), userL.type) })
    })
    return ListData
}
module.exports = {
    createBillNew: createBillNew,
    calNetpayment: calNetpayment,
    totalBillDiscountOnBill100: totalBillDiscountOnBill100,
    totalBillOnDiscountByTypeUser: totalBillOnDiscountByTypeUser,
    createBill: createBill
}
let user1 = new User({ id: 1, name: "User 1", type: "IS_AN_EMPLOYEE" })
let user2 = new User({ id: 2, name: "User 2", type: "IS_AN_AFFILIATE" })
let user3 = new User({ id: 3, name: "User 3", type: "IS_CUSTOMER_FOR_OVER_2_YEAS" })
let itemProduct = new Product({ id: "product1", price: 100, qty: 1 })
let itemProduct2 = new Product({ id: "product2", price: 100, qty: 1 })
let cart = new Cart([user1, user2, user3], [itemProduct, itemProduct2])
console.log(createBillNew(cart))
