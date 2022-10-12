(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    power: number;
  };

  const avengers: Avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    power: 123123,
  };

  const { power, vision } = avengers;

  console.log(power.toFixed(2), vision.toUpperCase());

  const printAvengers = ({ ironman, ...resto }: Avengers) => {
    console.log(ironman, resto);
  };

  //  const avengerArr: string[] = ["Cap. America", "Ironman", "Hulk"];
  const avengerArr: [string, boolean, number] = ["Cap. America", true, 150.15];

  //const [capitan, ironman, nom] = avengerArr;
  //console.log({ ironman, capitan });

  const [capitan, flag, value] = avengerArr;
  console.log({ capitan, flag, value });


  
})();
