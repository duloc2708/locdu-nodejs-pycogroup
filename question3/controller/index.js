const { calculateResult } = require('../services/index')
function calculatorBill(typeEmployee, totalAmount) {
    return calculateResult(typeEmployee, totalAmount)
}
module.exports = {
    calculatorBill: calculatorBill
}