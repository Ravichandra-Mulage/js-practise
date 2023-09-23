const user = {
    username : "Ravichandra",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); 
        // this keyword talks about current context. it refers to the current context.

        // console.log(this)
    }


}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  // returns {},  here current context is empty.

// the global object which is present in the browser is known as window object.


// function chai(){
//     let username = "ravichandra"
//     console.log(this.username);  // retunes undefined
// }

// chai()

// const chai = function(){
//         let username = "ravichandra"
//         console.log(this.username);  // gives same output undefined
//     }
    
//     chai()

// this is how we define arrow function.
// const chai = () => {
//             let username = "ravichandra" 
//             console.log(this);  
//         }
        
        // chai()

    //   const addTwo = (num1, num2)=>{  // simple arrow function program.
    //         return num1 + num2
    //     }
    //     console.log(addTwo(2,4))

        //

        // addTwo = (num1, num2)=> num1 + num2  // example of implicit return.  // here no need to write return keyword.
        
    //  const   addTwo = (num1, num2)=> (num1 + num2 )
        
    //     console.log(addTwo(2,4))

    const addTwo = (num1, num2) => ({username:"Ravichandra"})  // must wrap within parenthesis.

    console.log(addTwo(2,4))

    const myArray = [2 ,43, 4, 1, 45, 6, 4]

    // myArray.forEach(()=>{})