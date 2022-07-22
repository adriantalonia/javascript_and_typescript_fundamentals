let person = {
  name: "Tony Stark",
  codeName: "Iron-man",
  age: 40,
  coords: {
    lat: 34.037,
    lng: -118.7,
  },
  suits: ["Mark I", "Mark V", "HulkBuster"],
  direction: {
    zip: "1257878",
    state: "Malibu",
  },
};

console.log(person);
console.log(person.name);
console.log(person["name"]);
console.log(person.coords.lat);
console.log(person.suits.length);

// delete a field or property

delete person.age;
console.log(person);

// group by pairs
const pairs = Object.entries(person);
console.log(pairs);

// block changes in the properties
Object.freeze(person);
person.money = 100000;
console.log(person);

// List of properties
const properties = Object.getOwnPropertyNames(person);
console.log(properties);

const values = Object.values(person);
console.log(values);
