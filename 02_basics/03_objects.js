


const mySym = Symbol("key1")

// object literals

const JsUser = {
    name: "Ravichandra",
    [mySym]: "myKey1",
    age: 21,
    "full name": "Ravichandra Mulage",
    location: "Pune",
    email: "ravi@google.com",
    isLoggedIN: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// Following these two are ways of accessing key-values of objects in JavaScript.

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// // console.log(JsUser."full name") // this will not work(syntax error)
// console.log(JsUser["full name"]) // this will work.

// console.log(JsUser[mySym])

JsUser.email = "ravichandra00@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ravichandra00@cmicrosoft.com"

// console.log(JsUser);

JsUser.greeting = function (){
    console.log("hello js user");
}

JsUser.greetingTwo = function (){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





