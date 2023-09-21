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

console.log(loginUserMessage("Ravichandra"));