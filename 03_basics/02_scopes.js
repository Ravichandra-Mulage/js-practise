var c = 300

let a = 300 

if(true){
    let a = 10;

    const b = 20;
    
    var c = 30;

//     console.log(a);
}

//  console.log(a);
// console.log(b);
// console.log(c);

//  we must avoid using var,
// cause it has some block scope issue, for ex. even if we use var inside a function, it gets leaked into the global scope of the program.

function one(){
    const username = "ravichandra"

    function two(){
        const website = "youtube"
      //  console.log(username);
    }
  //  console.log(website);

    two()
}

one()

if(true){
    const username = "ravichandra"
    if (username === "ravichandra"){
        const website = " google"
       // console.log(username + website);
    }

  //  console.log(website);
}

// console.log(username);

// ********************************** interesting *********************************************

console.log(addone (5))     // works

function addone(num){ 
        return num + 1;
}


addTwo(5)           // does not work

const addTwo = function(num){ // variables can hold anything in Javascript... for ex. functions, objects, arrays etc..
    return num + 2
}

