"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["speed", "time travel"]
    };
    let superman = {
        name: "Barry Allen",
        age: 24,
        powers: ["speed", "time travel"],
        getName() {
            return this.name;
        }
    };
})();
