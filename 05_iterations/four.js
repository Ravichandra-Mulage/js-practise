// In this section I learned about forof loop and forin loop

// To work on objects we use forin loop

// To work on arrays we use forof loop


const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObject) {
   
//    console.log(`${key} shortcut is for ${myObject[key]}`);

}

const heros = ["flash", "spiderman", "batman","ironman"]

for (const key in heros) {
    // console.log(heros[key]);
}

const map = new Map()

map.set('IN', "India")
map.set('US', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// maps are not iteratable
for (const key in map) {
    console.log(key);
}