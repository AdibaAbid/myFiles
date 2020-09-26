// *****Access Methods******

//Question:1
// How will you access the third position of the following array?
let arr = [5, 10, 15]

console.log( arr[2] )

//Question:2
// How will you access the second element, degree from the following object?
let obj = { name: "Maimoona", degree: "MBBS" }

console.log(obj.degree)

//Question:3
// How will you access all elements of the following array using loops?
let arr = [1, 2, 3, 4, 5, 6, 7]

arr.forEach(function(item){
    console.log(item)
})

// Question:4
// How will you access all elements of the following object using loops?
let obj = { name: "Maimoona", degree: "MBBS", age: 25 }

for (const property in obj) {
    console.log(`${property}: ${obj[property]}`);
  }


// ---------------------------------------------------


// *****Students' Names and Hobbies Data*****

//Question:1
//Given an array of students:
let students = [
    {
        name: "Amna",
        hobbies: ["eating", "cooking"]
    },
    {
        name: "Daniyal",
        hobbies: ["arts", "shopping"]
    },
    {
        name: "Fahad",
        hobbies: ["coding", "cooking"]
    },
    {
        name: "Hajra",
        hobbies: ["sleep", "reading"]
    }
];

students.forEach(function(item){
    console.log(`Hobbies Of ${item.name}`)

    item.hobbies.forEach(function(hobbies, index){
        console.log(`${index+1}. ${hobbies}`)
    })
})



