// for of

// array specific loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
  //  console.log(num);
}

const name = "Ravi chandra";

for (const letter of name) {
    //console.log(letter);
}

// maps

const map = new Map()

map.set('IN', "India")
map.set('US', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// it does not work(iterate)
for (const [key,value] of myObject) {
    console.log(key, ':-', value);
}