function createPerson(name, lastName) {
  return {
    name,
    lastName,
  };
}

console.log(createPerson("Adrian", "Talonia"));

const createPerson2 = (name, lastName) => ({
  name,
  lastName,
});

console.log(createPerson2("Adrian", "Talonia"));

function printArguments() {
  console.log(arguments);
}

const printArguments2 = (...args) => {
  console.log(args);
};

const printArguments3 = (...args) => {
  return args;
};

printArguments(10, true, false, "Test");
printArguments2(10, true, false, "Test");

const [a, b, c, d] = printArguments3(10, true, false, "Test");
console.log({ a, b, c, d });

let tony = {
  name: "Tony Stark",
  codeName: "Iron-man",
  age: 40,
  suits: ["Mark I", "Mark V", "HulkBuster"],
};

const printFields = ({name,codeName,age, size = 10}) => {

  console.log({name});
  console.log({codeName});
  console.log({age});
  console.log({size});
}

printFields(tony);