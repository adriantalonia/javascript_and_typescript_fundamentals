"use strict";
// define type which we are going to work
const a = 10;
let b = 10;
function sayHello(message) {
    // a good practice is define parameter type in this case String
    console.log(message);
}
(() => {
    const a = 10;
    console.log(a);
})(); // funcion anonima autoinvocada
