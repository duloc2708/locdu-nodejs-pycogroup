const User = require('../model/User.js');
const Bill = require('../model/Bill.js');
const { DISCOUNT_BILL_ON_100, DISCOUNT_BY_USER } = require('../constant');
const createBill = (listUser) => {
    let listResultUser = []
    listUser.map(item => {
        let { id, name, type, totalBill } = item
        // create modal user, bill
        let user = new User(`user-${id}`, name, type),
            bill = new Bill(`order-user-${id}`, totalBill);
        // create discount bill on 100$ and discount each user type
        let discountOnBill100 = totalBill >= 100 ? bill.discountOnBill100(DISCOUNT_BILL_ON_100) : 0,
            discountByUser = bill.discountByTypeUser(DISCOUNT_BY_USER[type]) || 0;
        // cal total money each user
        let totalMoney = bill.calNetpayment(discountOnBill100, discountByUser)
        user.totalMoney = totalMoney
        listResultUser.push({ name: user.name, totalMoney: user.totalMoney })
    })
    return listResultUser
}
module.exports = {
    createBill: createBill
}