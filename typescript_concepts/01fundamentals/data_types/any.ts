let avenger: any = 123;
avenger = "Dr Strange";
console.log(avenger.chatAt(0));

avenger = 150.123455;
console.log(avenger.toFixed(2));

// casting
// with as
(avenger as string).charAt(0);
// using <type>
<number>avenger.toFixed(2);
