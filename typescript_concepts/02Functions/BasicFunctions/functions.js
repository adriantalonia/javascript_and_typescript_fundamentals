"use strict";
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activateSignal = () => {
        return 'Signal activated';
    };
    console.log(typeof activateSignal);
})();
