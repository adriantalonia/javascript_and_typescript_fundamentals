(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const iron_man: Avenger = {
    name: "Iron Man",
    weapon: "Armorsuit",
  };

  const captain_america: Avenger = {
    name: "Capitan America",
    weapon: "Escudo",
  };

  const thor: Avenger = {
    name: "Thor",
    weapon: "Mjolnir",
  };

  const avengers: Avenger[] = [iron_man, captain_america, thor];

  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon);
  }

})();
