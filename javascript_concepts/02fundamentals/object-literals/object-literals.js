let person = {
    name: 'Tony Stark',
    codeName: 'Iron-man',
    age: 40,
    coords: {
        lat: 34.037,
        lng: -118.70
    },
    suits: ['Mark I', 'Mark V', 'HulkBuster'],
    direction: {
        zip: '1257878',
        state: 'Malibu'
    }
};

console.log(person);
console.log(person.name);
console.log(person['name']);
console.log(person.coords.lat);
console.log(person.suits.length);