(() => {
  let flash: { name: string; age?: number; power: string[], getName?:()=>string } = {
    name: "Barry Allen",
    age: 24,
    power: ["speed", "time travel"]
  };

  flash = {
    name: "another name",
    //age: 60,
    power: ["strong"],
    getName():string {
      return this.name;
    },
  };

  console.log(flash);
})();
