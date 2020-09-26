// Q1
var student = {
        name: "Adiba"
    }
    //Q2
var student = {
    name: "Abs Student",
    age: 20,
    student_id: 420
}
alert("Student properties: name" + student.name + "Age" + student.age + "ID" + student.student_id)

//Q3
var studentBio = {

}
studentBio.name = prompt("Enter you name")
studentBio.Lname = prompt("Enter you Last name")
studentBio.Id = prompt("Enter you ID")
studentBio.contact = prompt("Enter you contact")

//Q4
var studentData = {
    name: prompt("Enter you name"),
    studentId: prompt("Enter your id"),
    subjectHTML: prompt("Enter you HTML marks"),
    subjectCss: prompt("Enter you Css marks"),
    subjectJs: prompt("Enter you JavaScript marks"),
    subjectBootstrap: prompt("Enter you Bootstrap marks"),
    totalMarks: 400
}


//Q5
var studentData = {
    name: prompt("Enter your name"),
    age: +prompt("Enter your age")
}
if (studentData.age > 20) {
    alert(studentData.name + " is not eligible for Module A")
} else {
    alert(studentData.name + " is eligible for Module A")
}

//Q6
var studentOne = {
    name: prompt("Enter you name"),
    studentId: prompt("Enter your id"),
    subjectHTML: +prompt("Enter you HTML marks"),
    subjectCss: +prompt("Enter you Css marks"),
    subjectJs: +prompt("Enter you JavaScript marks"),
    subjectBootstrap: +prompt("Enter you Bootstrap marks"),
    totalMarks: 400,

}

var studentTwo = {
    name: prompt("Enter you name"),
    studentId: prompt("Enter your id"),
    subjectHTML: +prompt("Enter you HTML marks"),
    subjectCss: +prompt("Enter you Css marks"),
    subjectJs: +prompt("Enter you JavaScript marks"),
    subjectBootstrap: +prompt("Enter you Bootstrap marks"),
    totalMarks: 400,

}
var obtainedMarks1 = studentOne.subjectHTML + studentOne.subjectCss + studentOne.subjectJs + studentOne.subjectBootstrap
var obtainedMarks2 = studentTwo.subjectHTML + studentTwo.subjectCss + studentTwo.subjectJs + studentTwo.subjectBootstrap
var percentage1 = obtainedMarks1 * 100 / studentOne.totalMarks
var percentage2 = obtainedMarks2 * 100 / studentOne.totalMarks

if (percentage1 > percentage2) {
    console.log(studentOne.name + " is eligible at " + percentage1 + "%  for scholarship")
}

//Q7
var student = {
    name: prompt("Enter your Name"),
    age: prompt("Enter your Age"),
    address: prompt("Enter your Address"),
}
alert("Name: " + student.name + " age is: " + student.age + " and his Address is : " + student.address)

//Q8
var studentMarksheet = {
    name: prompt("Enter you name"),
    studentId: prompt("Enter your id"),
    subjectHTML: +prompt("Enter you HTML marks"),
    subjectCss: +prompt("Enter you Css marks"),
    subjectJs: +prompt("Enter you JavaScript marks"),
    subjectBootstrap: +prompt("Enter you Bootstrap marks"),
    totalMarks: +prompt("Enter total Marks")
}

//Q9
var array = [
    { name: "Ali", age: 22 },
    { name: "Zubair", age: 20 },
    { name: "Awais", age: 23 },
    { name: "Zubaida", age: 29 },
    { name: "Zubia", age: 25 }
]
console.log(array)

array[3] = { name: "Siddiqui", age: 23 }
array.push({ name: "umair", age: 23 })
array.shift()

console.log(array)

for (var i = 0; i < array.length; i++) {
    array[i].createdAt = new Date()
}

//Q10
var array = [
    { name: "Ali", age: 12 },
    { name: "Zubair", age: 20 },
    { name: "Awais", age: 13 },
    { name: "Zubaida", age: 29 },
    { name: "Zubia", age: 25 }
]
for (var i = 0; i < array.length; i++) {
    if (array[i].age > 18 && array[i].age < 28) {
        console.log(array[i].name)
    }
}

//Q11

var students = [{
        _id: 'std1',
        name: 'Bill Gates',
        age: 30
    },
    {
        _id: 'std2',
        name: 'Steve Jobs',
        age: 30
    },
    {
        _id: 'std3',
        name: 'Suzanne Collins',
        age: 30
    }
]

var courses = [{
        name: 'Maths',
        std_id: ['std3', 'std1']
    },
    {
        name: 'Computer Science',
        std_id: ['std3', 'std2']
    },
    {
        name: 'Commerce',
        std_id: ['std1']
    },
]

var sorted = []
var array = []
for (var i = 0; i < students.length; i++) {

    for (var j = 0; j < courses.length; j++) {

        if (courses[j].std_id.indexOf(students[i]._id) > -1) {
            array.push(courses[j].name)
        }

    }

    sorted.push({
        'name': students[i].name,
        'studen ID': students[i]._id,
        'courses': array
    })
    array = []


}
console.log(sorted)


console.log("--------------")