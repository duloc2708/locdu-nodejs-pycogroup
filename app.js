// console.log('--------------------QUESTION 1------------------')
console.log('-------------------QUESTION 1 :')

const resultQ1 = require('./question1')

// console.log('--------------------QUESTION 3------------------')
const resultQ3 = require('./question3/controller')
const { Q3: { listUser } } = require('./data')

console.log('-------------------QUESTION 3 :')
console.log('Function load total money each USER :')
console.log(resultQ3.createBillController(listUser))
