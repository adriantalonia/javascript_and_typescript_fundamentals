(() => {
  class Avenger {
    name;
    power;

    constructor(name = "default", power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  const hulk = new Avenger("Hulk", 9001);
  console.log(hulk);

  class FlyingAvenger extends Avenger {
    fly;

    constructor(name, power) {
      super(name, power);
      this.fly = true;
    }
  }

  const falcon = new FlyingAvenger("Falcon", 50);
  console.log(falcon);

  
})();
