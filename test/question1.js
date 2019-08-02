process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

const { load, store } = require('../question1/listFunction')
const strText = 'key1=value1;key2=value2\nkeyA=valueA'
const data = [{ key1: 'value1' }, { key2: 'value2' }, { keyA: 'valueA' }];

/// UNIT TEST QUESTION 1
describe('Test question 1', () => {
    beforeEach((done) => {
        done();
    });
    // test function load test
    describe('load text', () => {
        it('should return object successfully', () => {
            const text = JSON.stringify(strText)
            const getText = load(strText);
            chai.expect(text).is.equals(getText);
        });
    });
    // test function load test
    describe('load store', () => {
        it('should return object successfully', () => {
            const getText = load(strText);
            const maps = store(getText);
            chai.expect(data).to.deep.equals(maps);
        });
    });
});