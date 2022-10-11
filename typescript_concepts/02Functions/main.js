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
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no lastName'}`;
    };
    const name = fullName("Adrian");
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Adrian", "Talonia|");
    console.log(name);
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `The world is saved`;
    let myFunction;
    //let myFunction: (y: number, x: number) => number;
    //let myFunction: (text: string) => string;
    //let myFunction: () => string;
    myFunction = 10;
    console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction("Adrian"));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
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
(() => {
    let myCustomVariable = "Adrian";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = { name: "adrian", age: 29, powers: [1] };
    console.log(typeof myCustomVariable);
})();
