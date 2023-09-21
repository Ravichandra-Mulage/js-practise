function sayMyName(){
    console.log("Ravichandra");
    console.log("Mulage")
}

// sayMyName();

// function addNums(number1, number2){
//     console.log(number1+number2);
// }


function addNums(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}

const result = addNums(5, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
            console.log("Please enter a username");
            return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ravichandra"));

function calculateCarPrice(val1, val2, ...num1){ // ... rest operator (also spread opertor)
    return num1
}

console.log(calculateCarPrice(200, 400, 500));

const user = {
    username: "Ravichandra",
    price: 200
}

function handleObject(anyObject){  // how to pass object into function.
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username:"sam",
    price: 399
})

const myNewArray = [200, 300 , 100, 500]

function returnSecondValue(getArray){
    return getArray[2];
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue(myNewArray))