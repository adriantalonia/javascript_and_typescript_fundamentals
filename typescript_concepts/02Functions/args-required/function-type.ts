(() => {
  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hello ${name}`;
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
