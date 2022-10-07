"use strict";
(() => {
    let myCustomVariable = "Adrian";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = { name: "adrian", age: 29, powers: [1] };
    console.log(typeof myCustomVariable);
})();
