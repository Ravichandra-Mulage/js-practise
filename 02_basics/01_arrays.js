// array

const myArr = [1, 2, 3, 4, 5 ]
const myHeros = ["Ironman, Spiderman, Dr. Strange"]
// console.log(myArr[2]);


// Array Methods

// myArr.push(6) // [ 1, 2, 3, 4, 5, 6 ]
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // [ 9, 1, 2, 3, 4, 5 ]
// myArr.shift()    // [ 1, 2, 3, 4, 5 ]

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // converts array into string.

// console.log(myArr); // [ 1, 2, 3, 4, 5 ]
// console.log(newArr); // 1,2,3,4,5
// console.log(typeof newArr); // string

// slice, splice

console.log("A ", myArr); // A  [ 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1); // [ 2, 3 ]

console.log("B ", myArr); // B  [ 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);  // C  [ 1, 5 ]
console.log(myn2);         // [ 2, 3, 4 ]


/*

difference between slice and splice in javascript

slice returns a piece of the array but it doesn't affect the original array. splice changes the original array by removing, replacing, or adding values and returns the affected values. 

*/


