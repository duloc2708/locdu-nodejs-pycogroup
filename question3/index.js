const { load, store } = require('./listFunction')
let a = load("key1=value1;key2=value2\nkeyA=valueA\n")
let text = store(a);
console.log('LOAD DATA:');
console.log(text);

console.log('LOAD STRING:');
console.log(a);

