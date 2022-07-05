let a = 10,
  b = 20,
  c = 30,
  d = 40,
  x = a + b;

console.log(a);
console.warn(b);
console.error(c);

console.log("a ", a);
console.log("b ", b);
console.log("c ", c);

console.log({ a });
console.log({ b });
console.log({ c });

console.log("%c Mis variables", "color: blue; font-weight: bold");

c = "Hola ";
d = "Spiderman";

console.table({ a, b, c, d, x });

const saludo = c + d; // variable que no cambia su valor, es mas ligera

alert("Hola");

let name = prompt("Cual es tu nombre?", "Sin nombre");
console.log(name);

const selection = confirm("Are you sure?");
console.log(selection);
