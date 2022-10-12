"use strict";
(() => {
    const iron_man = {
        name: "Iron Man",
        weapon: "Armorsuit",
    };
    const captain_america = {
        name: "Capitan America",
        weapon: "Escudo",
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir",
    };
    const avengers = [iron_man, captain_america, thor];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
