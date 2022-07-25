const cars = ["ford", "ferrari", "mazda", "toyota"];

console.log("for (let i = 0; i < cars.length; i++)");
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
console.log("for (let i in cars)");
for (let i in cars) {
  console.log(cars[i]);
}

console.log("for (let i of cars)");
for (let i of cars) {
  console.log(i);
}

console.log("cars.forEach((c) =>");
cars.forEach((c) => {
  console.log(c);
});
