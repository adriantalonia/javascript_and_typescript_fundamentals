const cars = ["ford", "ferrari", "mazda", "toyota"];

let i = 0;

while (i < cars.length) {
  console.log(cars[i]);
  i++;
}

do {
  console.log(cars[i]);
  i++;
} while (i < cars.length);
