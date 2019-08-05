const { load, store } = require('./listFunction')
const expectedStr = "key1=value1;key2=value2\nkeyA=value for key A;keyB=value for key B";
const array = [
    { key1: 'value1', key2: "value2" },
    { keyA: "value for key A", keyB: "value for key B" }
]
let funcLoad = load(expectedStr)
let funcStore = store(array);
console.log('Function Load >>>>>>>>>>>>>>>>>:\n');
console.log(funcLoad);
console.log('\nEnd\n');
console.log('Function Store >>>>>>>>>>>>>>>>>:\n');
console.log(funcStore);
console.log('\nEnd\n');


