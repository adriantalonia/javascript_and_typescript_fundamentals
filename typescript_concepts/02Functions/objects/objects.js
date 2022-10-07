"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        power: ["speed", "time travel"]
    };
    flash = {
        name: "another name",
        //age: 60,
        power: ["strong"],
        getName() {
            return this.name;
        },
    };
    console.log(flash);
})();
