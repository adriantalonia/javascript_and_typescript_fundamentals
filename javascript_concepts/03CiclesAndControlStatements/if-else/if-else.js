let a = 5;

if (a > 10) {
  console.log("A > 10");
}

console.log("Program ended");

//
const today = new Date();
let day = today.getDay();

if (day === 5) {
  console.log("Sunday");
} else {
  if (day === 1) {
    console.log("Monday");
  } else {
    console.log("error day");
  }
}

//

day = 3;

const week = {
  1: "Monday",
  2: "thursday",
  3: "wednesday",
};

console.log(week[day]);

// operador ternario
day = 1;
let hour = 11;
let nowHour = 10;

openHour = [0, 6].includes(day) ? 9 : 11;

message = nowHour >= openHour ? "it is open" : "it is close";

console.log({ openHour, message });

// PRO tips

const grater = (a, b) => (a > b) ? a : b;

let note = 65;

const grade = note >= 95? 'A+':
              nota >= 90? 'A':
              nota >= 85? 'B+':
              nota >= 80? 'B':
              nota >= 75? 'C+':
              nota >= 70? 'C': 'F'