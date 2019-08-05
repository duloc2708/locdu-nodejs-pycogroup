## Environment:
- v10.16.0
- Npm 6.9.0

## How to build and test it
- Use npm to run project , please install libraries from Node Js:
```
npm install
```
- To start run show result:
```
npm run start
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
  - store(): O(n), we will replace the whole character "n" and browse all the ";" signs to return to the array, then browse to cut the beginning and the last element separated by a "="
  - load(): we will extract the words in the array, then each child element I will use Object.key to get the Key / Value to return to the string, in the last key I will assign additional characters "n"
  
### Question 3:

#### use example:
```
const resultQ3 = require('./question3/controller')
const listUser = [
    { "id": 1, "name": "User 1", type: "IS_AN_EMPLOYEE", totalBill: 300 },
    { "id": 2, "name": "User 2", type: "IS_AN_AFFILIATE", totalBill: 300 },
    { "id": 3, "name": "User 3", type: "IS_CUSTOMER_FOR_OVER_2_YEAS", totalBill: 300 },
    { "id": 4, "name": "User 4", type: "CASE_OTHER", totalBill: 300 }
]
console.log(resultQ3.createBillController(listUser))
```