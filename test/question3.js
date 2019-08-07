process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

const { createBillNew } = require('../question3')
const Cart = require('../question3/model/Cart.js');
const Product = require('../question3/model/Product.js');
const User = require('../question3/model/User.js');
/// UNIT TEST QUESTION 3
describe('Test question 3', () => {
    beforeEach((done) => {
        done();
    });
    it('Test single return discount for employee', async () => {
        // PARAMS
        let user1 = new User({ id: 1, name: "User 1", type: "IS_AN_EMPLOYEE" })
        let itemProduct = new Product({ id: "product1", price: 100, qty: 1 })
        let cart = new Cart([user1], [itemProduct])

        // Result compare
        let resultCompare = [{ user: 'User 1', type: 'IS_AN_EMPLOYEE', totalMoneyPay: 70 }]

        // excute test
        chai.expect(resultCompare).to.deep.equals(createBillNew(cart));
    });

    it('Test single return discount for affiliate', async () => {
        // PARAMS
        let user1 = new User({ id: 1, name: "User 1", type: "IS_AN_AFFILIATE" })
        let itemProduct = new Product({ id: "product1", price: 100, qty: 1 })
        let cart = new Cart([user1], [itemProduct])

        // Result compare
        let resultCompare = [{ user: 'User 1', type: 'IS_AN_AFFILIATE', totalMoneyPay: 90 }]

        // excute test
        chai.expect(resultCompare).to.deep.equals(createBillNew(cart));
    });

    it('Test single return discount for customer over 2 years ', async () => {
        // PARAMS
        let user1 = new User({ id: 1, name: "User 1", type: "IS_CUSTOMER_FOR_OVER_2_YEAS" })
        let itemProduct = new Product({ id: "product1", price: 100, qty: 1 })
        let cart = new Cart([user1], [itemProduct])

        // Result compare
        let resultCompare = [{
            user: 'User 1',
            type: 'IS_CUSTOMER_FOR_OVER_2_YEAS',
            totalMoneyPay: 95
        }]
        // excute test
        chai.expect(resultCompare).to.deep.equals(createBillNew(cart));
    });
});
