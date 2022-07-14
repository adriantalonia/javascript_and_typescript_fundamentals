// primitive types
/*
- Boolean -> true/false
- Null - without value
- Undefined - variable without value
- String - array of characters
- Symbol - unique value
*/

// String
let name = 'Peter Parker';
console.log(name);

name = 'Ben Parker';
console.log(typeof name);

name = 123
console.log(typeof name);

// Boolean
let isReal = true;
console.log(typeof isReal);

// Number
let age = 33;
console.log(age);

age = 33.333;
console.log(typeof age);

// Undefined
let power;
console.log(power);

// Null
let isNull = null;
console.log(typeof isNull);

// Symbol
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1);

console.log(symbol1 === symbol2);