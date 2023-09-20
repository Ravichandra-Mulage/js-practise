/* Primitive DataTypes - Called by value not by reference memory
7 Types :    String, Number, Boolean, Null, undefined, Symbol and BigInt

const name = "Ravichandra";
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = true;
const outSideTemp = null
let userEmail; // undefined
*/ 

// const id = Symbol('123')
// const anotherId = Symbol('123') 

// console.log(id === anotherId) // false

// const bigNumber = 326887625687692874676n //BigInt


//****************************************************************************************************************************************

/* Non-Primitive DataTypes (reference type)
1. Array
2. Objects
3. Functions



*/

// const heros = ["shaktiman", "naagraaj", "doga"]; // Array 

// let myObj = {
//                 name : "Ravichandra",
//                 age: "22"
// }

// const myFunction = function() {
//     console.log("Hello World");
// }

// myFunction();

// How to check datatype of a variable?

// let bigInt = 235679977809789797980898668679879797n;

// console.log(typeof bigInt); // bigInt

//****************************************************************************************************************************************

/*
is JavaScript statically typed or dynamically typed?

Python and JavaScript - "Dynamically Typed" (This means we do not have to declare the type of the data, while variable declaration.)

let score = 23;

C, C++ and Java - "Statically Typed" (In these languages one has to declare the datatype first, in order to declare the variables.)

int score = 23;

*/

//****************************************************************************************************************************************

/*

Difference between compiled and interpreted language

compiled language:

Compiled language follows at least two levels to get from source code to execution.
A compiled language is converted into machine code so that the processor can execute it.
The compiled programs run faster than interpreted programs.


interpreted language:

Interpreted language follows one step to get from source code to execution.
An interpreted language is a language in which the implementations execute instructions directly without earlier compiling a program into machine language.
The interpreted programs run slower than the compiled program.

*/

//****************************************************************************************************************************************

/*

Differnce between byte code and machine code

byte code:

It is an intermediate between source code and Machine code.
ts instructions contain binary and hexadecimal characters with macro commands like new, add, swap, etc.
Byte code requires an interpreter to get executed.

machine code:

It is a low-level language.
Its instructions are written in a binary form containing only 0s and 1s.
The CPU directly executes machine code

*/
     