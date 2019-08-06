## Environment:
- v10.16.0
- Npm 6.9.0

## How to build and test it
- Use npm to run project , please install libraries from Node Js:
```
npm install
```
- To start run show result Q1,Q3:
```
npm run startq-q1
npm run startq-q3
```
- To test run show result:
```
npm test
```
- To test with coverage run:
```
npm run test-coverage
```

## Complexity analysis

### Question 1:
  - load(): we will replace the whole character "n" and browse all the ";" signs to return to the array, then browse to cut the beginning and the last element separated by a "="
  - store(): we will extract the words in the array, then each child element I will use Object.key to get the Key / Value to return to the string, in the last key I will assign additional characters "n"
### test:  
```
npm run start-q1
```
### Question 3:
- I will split OOP model, including model, controller, service
- Input will be an array of user types and total bill, then the function will separate users to calculate discount for each user
- Output will be a list of users with the amount they have to pay
### test:  
```
npm run start-q3
```
#### use example:
```
Input:

const resultQ3 = require('./question3/controller')
const listUser = [
    { "id": 1, "name": "User 1", type: "IS_AN_EMPLOYEE", totalBill: 300 },
    { "id": 2, "name": "User 2", type: "IS_AN_AFFILIATE", totalBill: 300 },
    { "id": 3, "name": "User 3", type: "IS_CUSTOMER_FOR_OVER_2_YEAS", totalBill: 300 },
    { "id": 4, "name": "User 4", type: "CASE_OTHER", totalBill: 300 }
]
console.log(resultQ3.createBillController(listUser))

Result :
[ { name: 'User 1', totalMoney: 195 },
  { name: 'User 2', totalMoney: 255 },
  { name: 'User 3', totalMoney: 270 },
  { name: 'User 4', totalMoney: 285 } ]
```