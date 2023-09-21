var c = 300

let a = 300 

if(true){
    let a = 10;

    const b = 20;
    
    var c = 30;

    console.log(a);
}

 console.log(a);
// console.log(b);
// console.log(c);

//  we must avoid using var,
// cause it has some block scope issue, for ex. even if we use var inside a function, it gets leaked into the global scope of the program.

