process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
const resultQ3 = require('../question3/controller')
const totalBillDefault = 100
/// UNIT TEST QUESTION 3
describe('Test question 3', () => {
    beforeEach((done) => {
        done();
    });
    describe('Test validate input data', () => {
        it('should return object successfully', () => {
            // exucute result
            let rs = resultQ3.createBillController([{ "name": "User 1", type: "IS_AN_EMPLOYEE", totalBill: "NULL" }])
            // compare result
            chai.expect("Input totalBill not format . please check again!").is.equals(rs);
        });
    });
    describe('Test Employee', () => {
        it('should return object successfully', () => {
            // exucute result
            let rs = resultQ3.createBillController([{ "name": "User 1", type: "IS_AN_EMPLOYEE", totalBill: 300 }])
            // compare result
            chai.expect([{ name: 'User 1', totalMoney: 195 }]).to.deep.equals(rs);
        });
    });
    describe('Test Affiliate', () => {
        it('should return object successfully', () => {
            // exucute result
            let rs = resultQ3.createBillController([{ "name": "User 2", type: "IS_AN_AFFILIATE", totalBill: 300 }])
            // compare result
            chai.expect([{ name: 'User 2', totalMoney: 255 }]).to.deep.equals(rs);
        });
    });
    describe('Test customer for over 2 year', () => {
        it('should return object successfully', () => {
            // exucute result
            let rs = resultQ3.createBillController([{ "name": "User 3", type: "IS_CUSTOMER_FOR_OVER_2_YEAS", totalBill: 300 }])
            // compare result
            chai.expect([{ name: 'User 3', totalMoney: 270 }]).to.deep.equals(rs);
        });
    });
    describe('Test case user other', () => {
        it('should return object successfully', () => {
            // exucute result
            let rs = resultQ3.createBillController([{ "name": "User 4", type: "CASE_OTHER", totalBill: 300 }])
            // compare result
            chai.expect([{ name: 'User 4', totalMoney: 285 }]).to.deep.equals(rs);
        });
    });
});
