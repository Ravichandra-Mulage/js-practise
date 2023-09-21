const marvel_heros = ["thor", "ironman", "spiderman"]

const dc_heros = ["superman", "flash", "batman"]

// console.log(marvel_heros)
// console.log(marvel_heros[3][1]);

// marvel_heros.push(dc_heros);

const allHeros = marvel_heros.concat(dc_heros) // creates a new aaray then concates both the array into one array.

const all_new_heros= [...marvel_heros,...dc_heros] // easy way to concat two arrays.

// console.log(allHeros)

const another_array = [1, 2, 3, [4, 5, 6], 7 ,[6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

console.log(Array.isArray("Ravichandra")); // to check whather it's an array or not.

console.log(Array.from("Ravichandra")); // to create array out of string.

console.log(Array.from({name: "Ravichandra"}));  // interesting case // gives an empty array.

let score1 = 100

let score2 = 200

let score3 = 300

console.log(Array.of(score1,score2,score3)); // converts all variables into an array.