
// console.log('--------------------QUESTION 3------------------')
const resultQ3 = require('./controller')
// const totalBillDefault = 200
// // Run result Employy
const listUser = [
    { "id": 1, "name": "User 1", type: "IS_AN_EMPLOYEE", totalBill: 300 },
    { "id": 2, "name": "User 2", type: "IS_AN_AFFILIATE", totalBill: 300 },
    { "id": 3, "name": "User 3", type: "IS_CUSTOMER_FOR_OVER_2_YEAS", totalBill: 300 },
    { "id": 4, "name": "User 4", type: "CASE_OTHER", totalBill: 300 }
]
console.log('Function load total money each USER :')
console.log(resultQ3.createBillController(listUser))
