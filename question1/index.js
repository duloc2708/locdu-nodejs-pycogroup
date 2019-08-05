const { load, store } = require('./listFunction')
const { Q1: { strText, array } } = require('../data')
let funcLoad = load(strText)
let funcStore = store(array);
console.log('Function Load >>>>>>>>>>>>>>>>>:\n');
console.log(funcLoad);
console.log('\nEnd\n');
console.log('Function Store >>>>>>>>>>>>>>>>>:\n');
console.log(funcStore);
console.log('\nEnd\n');


