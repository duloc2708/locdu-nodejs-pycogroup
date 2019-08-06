const User = require('../model/User.js');
const Bill = require('../model/Bill.js');
const { DISCOUNT_BILL_ON_100, DISCOUNT_BY_USER } = require('../constant');
const createBill = (listUser) => {
    let listResultUser = []
    listUser.map(item => {
        let { id, name, type, totalBill } = item
        let discountOnBill100 = 0, discountByUser = 0, totalMoney = 0
        // create modal user, bill
        let user = new User(`user-${id}`, name, type),
            bill = new Bill(`order-user-${id}`, totalBill);
        // cal discount bill on 100$ 
        if (totalBill >= 100) {
            discountOnBill100 = bill.discountOnBill100(DISCOUNT_BILL_ON_100) || 0
        }
        // cal discount each user type
        discountByUser = bill.discountByTypeUser(DISCOUNT_BY_USER[user.type]) || 0;

        // cal total money each user
        totalMoney = bill.calNetpayment(discountOnBill100, discountByUser)
        listResultUser.push({ name: user.name, totalMoney })
    })
    return listResultUser
}
module.exports = {
    createBill: createBill
}