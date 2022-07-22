function sayHi(name) {
  console.log(arguments);
  console.log("Hello" + name);
}

sayHi("Adrian", 40, true, "Mexico");

// function anonymous
const sayHello = function () {
  console.log("Hey! Hello");
};

sayHello();

const sayHey = function (name) {
  console.log("Hi " + name);
};

sayHey("Adrian");

// arrow functions

const sayBye = () => {
  console.log("goodbye");
};

const sayBye2 = (name) => {
  console.log("goodbye");
};

sayBye();

sayBye2("Adrian");

// Return values

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log("result: " + result);

const sum2 = (a, b) => {
  return a + b;
};

const sum3 = (a, b) => a + b;

function getRandom() {
    return Math.random();
}

const getRandom2 = () => Math.random();
console.log(getRandom2());
