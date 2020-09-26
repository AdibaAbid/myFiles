//***** Extensive Student Data Task *****

let students = [
    {
    name: "Amna",
    gender: "f",
    dob: new Date("02-04-1990"),
    address: {
        ilaqa: "Gulistan-e-Johar",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 47114
    },
    phoneNo: "0331-2324243",
    admissionTestScore: 56,
    hasInternet: true,
    hasComputer: false,
    hasJob: true,
    hasSchoolBefore: false
    },
    {
    name: "Hadia",
    gender: "f",
    dob: new Date("05-15-1984"),
    address: {
        ilaqa: "Lyari",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 75660
    },
    phoneNo: "0345-3452953",
    admissionTestScore: 48,
    hasInternet: false,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: true
    },
    {
    name: "Ahmed",
    gender: "m",
    dob: new Date("06-27-2002"),
    address: {
        ilaqa: "University Road",
        city: "Quetta",
        country: "Pakistan",
        postalCode: 82215
    },
    phoneNo: "0333-0124325",
    admissionTestScore: 33,
    hasInternet: true,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: false
    },
    {
    name: "Fariha",
    gender: "f",
    dob: new Date("09-13-1998"),
    address: {
        ilaqa: "University Road",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 82215
    },
    phoneNo: "0331-9432532",
    admissionTestScore: 33,
    hasInternet: true,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: false
    },
    {
    name: "Abdullah",
    gender: "m",
    dob: new Date("01-24-1972"),
    address: {
        ilaqa: "Bazar Colony",
        city: "Lahore",
        country: "Pakistan",
        postalCode: 32212
    },
    phoneNo: "0345-9912121",
    admissionTestScore: 33,
    hasInternet: false,
    hasComputer: false,
    hasJob: true,
    hasSchoolBefore: true
    }
];

// Question no.1
// Print each student in this format:

//   Name: Amna
//   Gender: Female
//   City: Karachi
//   Score: 56 marks

students.forEach(function(element){
    console.log(`Name: ${element.name}`)
    console.log(`Gender: ${element.gender}`)
    console.log(`City: ${element.address.city}`)
    console.log(`Score: ${element.admissionTestScore}`)
})

// Question no.2
// Print names of female students only.

 students.filter(function(item){
    if(item.gender==='f'){
        console.log(item.name)
    }
})

//Question no.3
//Print names of male students only

students.filter(function(item){
    if(item.gender==='m'){
        console.log(item.name)
    }
})

//Question no.4
//Print names of students who have passed the admission test. Passing marks are 50.

students.filter(function(item){
    if(item.admissionTestScore >=50){
        console.log(`Students who have passed the exams are: ${item.name}`)
    }
})

//Question no.5
//Print names of eligible students only (students who have internet and live in Karachi are eligible)

students.filter(function(item){
    if(item.hasInternet && item.address.city =='Karachi'){
        console.log(`Eligible Students are: ${item.name}`)
    }
})

//Question no.6
//Print address of each student in this format:

// Amna's address:
// Gulistan-e-Johar in Karachi, Pakistan

students.forEach(function(item){
    console.log(`${item.name}'s address:
    ${item.address.ilaqa} in ${item.address.city}, ${item.address.country}
    `)
})


//Question no.7
//Print names and phone number of students who have Ufone.

students.filter(function(item){
    if(item.phoneNo.substring(0,3) ==='033'){
        console.log(`Name: ${item.name} 
        Ufone Phone no: ${item.phoneNo}
        `)
    }
})

//Question no.8
// Students who have a job or a class are placed in Group B. Print the names of students in Group A, and in Group B, 
// in the below format:
//  Group A:  name1, name2
// Group B:  name3, name4, name5

let groupB = [],
  groupA = [];

console.log("Students who have a job or a class are placed in Group B");

students.filter(function (student) {
  if (student.hasJob || student.hasSchoolBefore) {
    groupB.push(student.name);
  } else {
    groupA.push(student.name);
  }
});

console.log("Group A: ", groupA.join());
console.log("Group B: ", groupB.join());

//Question no.9
//Print age of each student in the below format:
// Amna's age is 29 years

students.forEach(function(student){
const age = 2020 - student.dob.getFullYear()
    console.log(`${student.name}'s age is ${age}`)
})

//Question.10
// Print the name of the oldest student

let studentAge = [{}];
let ageArray =[]
students.forEach(function (student) {
const newStudents={
    age : 2020 - student.dob.getFullYear(),
    name : student.name
} 
studentAge.push(newStudents);
ageArray.push(newStudents.age)  
})

const oldestAge = ageArray.sort().reverse()
studentAge.forEach(function(item){
    if(oldestAge[0]==item.age){
        console.log(`Oldest age Student is ${item.name} with age ${oldestAge[0]}`)
    }
})

