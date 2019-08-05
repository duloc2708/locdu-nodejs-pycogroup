const { createBill } = require('../services')
const { validateInputUser } = require('../common')

function createBillController(listUser) {
    if (validateInputUser(listUser)) {
        return createBill(listUser)
    } else {
        return "Input totalBill not format . please check again!"
    }
}
module.exports = {
    createBillController: createBillController
}