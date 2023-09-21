// const tinderUser = new Object() // This is a singleton object.

const tinderUser = {} // this is a non-singleton object.


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userFullname:{
            firstname: "Ravichandra",
            lastname: "Mulage"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {
    1 : "a", 2:"b"
}

const obj2 = {
    3 : "c", 4:"d"
}

const obj4 = {
    5 : "e", 6:"f"
}

// const obj3 = {obj1, obj2} // it does not combine two objects as expected.

// const obj3 = Object.assign({},obj1,obj2, obj4) // it works, but not a good practice.

//const obj3 = Object.assign({},obj1,obj2, obj4) // good practice

const obj3 = {...obj1, ...obj2} // this is easy way to combine two objects into 1 object. (using spread operator.)

 // console.log(obj3);

 const users = [{
    id: 1, 
    email:"r@gmail.com"
 },
 {
    id: 2, 
    email:"s@gmail.com"

 },
 {
    id: 3,
    name: "sagar" ,
    email:"s@gmail.com"

 },
 {

 }
] 

// console.log(users[2].name) // array of objects.

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // used to get only 'keys' of the object. // imp // keep in mind. 

// console.log(Object.values(tinderUser)); // used to get only 'values' of the object. // imp // keep in mind. 

// console.log(Object.entries(tinderUser)); // used to get only 'values' of the object. // imp // keep in mind. 

console.log(tinderUser.hasOwnProperty("isLogged")); // To check whether a property exist in object or not.

 

