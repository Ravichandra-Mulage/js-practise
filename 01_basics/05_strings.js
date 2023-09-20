const name = "ravichandra"

const repoCount = 50;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name.to} and my repo count is ${repoCount}`);

const gameName = new String('ravichandra')

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length); // to check the length of string.

console.log(gameName.toUpperCase()) // to make string uppercase

console.log(gameName.charAt(4)) // to check the char at index 4.

console.log(gameName.indexOf('i')); // to check at which index character is present.

const newString = gameName.substring(0,4); // The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

// console.log(newString); 

const anotherString = gameName.slice(-8, 4) // The slice() method returns selected elements in an array, as a new array.
// console.log(anotherString);

const newStringOne = "    hitesh   "

console.log(newStringOne);
console.log(newStringOne.trim()); //The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

const url = "https://ravichandra.com/ravichandra%20mulage"


console.log(url.replace('%20','-')); // to replace specific characters within string.

console.log(url.includes('sundar')); // false

const coolString = "The quick brown fox jumps over the lazy dog.";

const char = coolString.split(" "); // understand the differnce between these two lines.

const anotherChar = coolString.split(""); // understand how both gives different output.

console.log(anotherChar[5]); // returns u

console.log(char[5]); // returns over

