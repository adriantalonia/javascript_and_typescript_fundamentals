(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["speed", "time travel"]
  };

  let superman: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["speed", "time travel"],
    getName() {
      return this.name;
    }
  };
})();
