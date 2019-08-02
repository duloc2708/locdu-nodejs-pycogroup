console.log('--------------------QUESTION 1------------------')

const resultQ1 = require('./question1')

console.log('--------------------QUESTION 3------------------')
const resultQ3 = require('./question3/controller')
const totalBillDefault = 200
// Run result Employy
console.log('Run result Employee: ', resultQ3.calculatorBill('ON_GROCERIES', totalBillDefault))
console.log('Run result Affiliate: ', resultQ3.calculatorBill('IS_AN_AFFILIATE', totalBillDefault))
console.log('Run result Customer for over 2 year: ', resultQ3.calculatorBill('IS_CUSTOMER_FOR_OVER_2_YEAS', totalBillDefault))
console.log('Run result GROCERIES: ', resultQ3.calculatorBill('ON_GROCERIES', totalBillDefault))

