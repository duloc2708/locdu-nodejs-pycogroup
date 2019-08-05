const { createBill } = require('../services/index')
function createBillController(listUser) {
    return createBill(listUser)
}
module.exports = {
    createBillController: createBillController
}