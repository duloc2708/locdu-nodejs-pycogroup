process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
const totalBillDefault = 100
const Bill = require('../question3')
/// UNIT TEST QUESTION 3
describe('Test question 3', () => {
    beforeEach((done) => {
        done();
    });
    it('Test single return discount for employee', async () => {
        // PARAMS
        let listUser = [{ id: 1, "name": "Tom", "type": "IS_AN_EMPLOYEE" }];
        let listProduct = [{ id: "product1", price: 100, qty: 2 }]

        // Run result
        const bill = new Bill();
        bill.createBill(listUser, listProduct)

        // Result compare
        let resultCompare = [{ user: 'Tom', type: 'IS_AN_EMPLOYEE', totalMoneyPay: 133 }]
        // excute test
        chai.expect(resultCompare).to.deep.equals(bill.getResult());
    });

    it('Test single return discount for affiliate', async () => {
        // PARAMS
        let listUser = [{ id: 2, "name": "Jery", "type": "IS_AN_AFFILIATE" }];
        let listProduct = [{ id: "product1", price: 100, qty: 2 }]

        // Run result
        const bill = new Bill();
        bill.createBill(listUser, listProduct)

        // Result compare
        let resultCompare = [{ user: 'Jery', type: 'IS_AN_AFFILIATE', totalMoneyPay: 171 }]
        // excute test
        chai.expect(resultCompare).to.deep.equals(bill.getResult());
    });

    it('Test single return discount for customer over 2 years ', async () => {
        // PARAMS
        let listUser = [{ id: 3, "name": "Jery", "type": "IS_CUSTOMER_FOR_OVER_2_YEAS" }];
        let listProduct = [{ id: "product1", price: 100, qty: 2 }]

        // Run result
        const bill = new Bill();
        bill.createBill(listUser, listProduct)

        // Result compare
        let resultCompare = [{
            user: 'Jery',
            type: 'IS_CUSTOMER_FOR_OVER_2_YEAS',
            totalMoneyPay: 180.5
        }]
        // excute test
        chai.expect(resultCompare).to.deep.equals(bill.getResult());
    });
});
