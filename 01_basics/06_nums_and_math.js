const score = 400;

// console.log(score);

const balance = new Number(100)

// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // The toFixed() method of Number values formats this number using fixed-point notation.

const otherNumber = 23.7979;

// console.log(otherNumber.toPrecision(3)); // returns a string representing this number to the specified precision.

const hundreds = 1000000;

// console.log(hundreds.toLocaleString('en-IN')); // The toLocaleString() method of Date instances returns a string with a language-sensitive representation of this date. In implementations with Intl.DateTimeFormat API support, this method simply calls Intl.DateTimeFormat.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4)); // returns absolute value.

// console.log(Math.round(4.3)) // returns rounded value.

// console.log(Math.ceil(4.2)); // returns ceiling value 5.
// console.log(Math.floor(4.9)); // returns floor value 4.

// console.log(Math.min(2, 4, 1 ,8, 5)); // returns lowest value.
// console.log(Math.max(9, 1, 4, 3 ,5, 2 )) // returns higest value.

console.log(Math.random()); // Math.random method will always return value between 0 and 1.

const random = console.log(Math.floor(Math.random() * 10) + 1); // to get number between 1 and 10 and round of the number.

const min = 10;
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)) // this formula gives number between 11 to 20 (keep in mind.)



