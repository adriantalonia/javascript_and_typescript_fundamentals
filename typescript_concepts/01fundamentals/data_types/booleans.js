"use strict";
(() => {
    let isSuperman = true;
    console.log(isSuperman);
    isSuperman = true && false;
    console.log(isSuperman);
    //isSuperman = (true) ? 'superman':'batman'; error type
});
