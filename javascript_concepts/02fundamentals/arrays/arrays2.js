let games = ['a', 'b', 'c', 'd'];
console.log("size: ", games.length);

let first = games[0];
let last = games[games.length - 1];
console.log(first + " " + last);

games.forEach((v, k, a) => {
  console.log({ v, k, a });
});

let newL = games.push("e");
console.log({ newL, games });

newL = games.unshift("xx");
console.log({ newL, games });

let gameDeleted = games.pop();
console.log({ gameDeleted, games });

let pos = 1;
gameDeleted = games.splice(pos, 2);
console.log({ gameDeleted, games });

let indexD = games.indexOf('d')
console.log(indexD);

