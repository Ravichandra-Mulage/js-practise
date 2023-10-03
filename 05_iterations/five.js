const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (item){
    // console.log(item);
})


// Arrow-Function
coding.forEach((value)=>{
    // console.log(value);

})


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item, index, arr);
})

// Access objects in Array

const myCoding = [
    {
        languageName : "javascript",
        languageFileName: "javascript"
    },

    {
        languageName : "java",
        languageFileName: "java"
    },

    {
        languageName : "cpp",
        languageFileName: "cpp"
    },

     {
        languageName : "python",
        languageFileName: "python"
     }
    
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})