"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || "no lastName"}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || "no lastName"}`;
        }
    };
    const name = fullName("Adrian", "Talonia", true);
    console.log(name);
})();
