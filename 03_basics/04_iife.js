// Immediately Invoked Function Expression (IIFE)

function chai(){
    console.log(`DB CONNECTED`)
}

chai(); // normal function

// Named IIFE function
(function chai(){
    console.log(`DB CONNECTED 2`);
})();

/*
// Two IIFE function at once. // (don't forget about semicolon)
// Simple Arrow Function IIFE
(()=>{
        console.log(`DB CONNECTED 3`)
})();


// passing parameters to IIFE function.
((name)=>{
    console.log(`DB CONNECTED 4 by ${name}`)
})("Ravichandra")


// what is iife?
// The functions which executes immediately 
// we use iife to avoid pollutions due to global scope variables.
*/
