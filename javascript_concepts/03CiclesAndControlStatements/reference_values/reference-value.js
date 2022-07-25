let a = 10;
let b = 10;
a = 30;
// por valor - primitivos

// referencia - objetos
let juan = { name: "Adrian" };
let ana = juan;
ana.name = "Ana";

const changeName = ({ ...person }) => {
  // { ...} romper el paso por referencia
  person.name = "Tony";
  return person;
};

let peter = { name: "Peter" };
let tony = changeName(peter);

console.log({ peter, tony });

//
const fruits = ["Manzana", "Pera", "Piña"];

console.time("slice");
const otherFruits1 = fruits.slice();
console.timeEnd("slice");

console.time("spread");
const otherFruits = [...fruits]; // new array
console.timeEnd("spread");



otherFruits.push("Mango");
console.log({ fruits, otherFruits });
