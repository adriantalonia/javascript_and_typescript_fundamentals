// define type which we are going to work
const a: number = 10;
let b: number = 10;

function sayHello(message: string) {
  // a good practice is define parameter type in this case String
  console.log(message);
}

(() => {
  const a: number = 10;
  console.log(a);
})(); // funcion anonima autoinvocada