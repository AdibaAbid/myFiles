//Q1
var divisible = +prompt("Enter any number to check its divisible by 3 or not?")
if (divisible % 3 == 0) {
    alert("Its divisible by 3")
} else {
    alert("sorry its not")
}

//Q2 
var checkEven = +prompt("Enter any number to check whether its even or not?")
if (checkEven % 2 == 0) {
    alert("Its a Even Number")
} else {
    alert("Sorry Its not")
}

//Q3
var age = +prompt("Enter your Age")
if (age >= 18) {
    alert("Old Enough")
} else {
    alert("Too young")
}

//Q4
var name = prompt("Enter Your Name")
if (name == "adiba") {
    alert("Greeting Adiba")
}

//Q5
var numCheck = +prompt("Enter any number to check its divisible by 3 or not?")
switch (numCheck % 3) {
    case 0:
        alert("its divisible by 3 ")
        break
    default:
        alert("its not divisible by 3")
}
//Q6
var char = prompt("Enter Any Single Letter either Small letter or capital letter or a number")
var inputUser = char.charCodeAt()
if (inputUser >= 65 && inputUser <= 90) {
    alert("Its a Upper Case Letter")
} else if (inputUser >= 97 && inputUser <= 122) {
    alert("Its a Lower Case Letter")

} else if (typeof inputUser == "number") {
    alert("Its a Number ")
}

//Q7
var cal1 = +prompt("Enter any number to calculate operations")
var cal2 = +prompt("Enter any other to calculate operations ")
var operation = prompt("Enter which operation you want to apply ? (+,-,/,*,%)")
switch (operation) {
    case "+":
        var sum = cal1 + cal2
        alert("Sum of " + cal1 + " and " + cal2 + " is " + sum)
        break
    case "-":
        var sub = cal1 - cal2
        alert("Subtraction of " + cal1 + " and " + cal2 + " is " + sub)
        break
    case "*":
        alert("Multiplication of " + cal1 + " and " + cal2 + " is " + cal1 * cal2)
        break
    case "%":
        alert("Modulas of " + cal1 + " and " + cal2 + " is " + cal1 % cal2)
        break
    case "/":
        alert("Division of " + cal1 + " and " + cal2 + " is " + cal1 / cal2)
        break
    default:
        alert("Invalid operator")


}

//Q8
var time = +prompt("Enter time in 24 hours format")
if (time >= 00 && time < 12) {
    alert("Good morning")
} else if (time >= 12 && time < 17) {
    alert("Good afternoon")
} else if (time >= 17 && time < 21) {
    alert("Good evening")
} else if (time >= 21 && time <= 23) {
    alert("good night")
}

//Q9
var year = +prompt("Enter Year to check its leap year or not ? ")
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    alert("Its a leap year")
} else {
    alert("its not a leap year")
}

//Q10
var password = 12345
var userPassword = +prompt("Enter your Password")
if (password == userPassword) {
    alert("Correct! The Password you entered matches the original Password")
} else {
    alert("Incorrect Password")
}

//Q11
var firstName = "Ali"
if (firstName === "Fahad") {
    alert("Hello Fahad")
} else {
    alert("You are not Fahad")
}

//Q12
var greeting = +prompt("Enter your Hours now")
if (greeting <= 13) {
    alert("Good Day")
} else {
    alert("Good Evening")
}

//Q13
var num = +prompt("Enter any number to find which is larger number")
var num2 = +prompt("Enter another number to find which is larger number")
if (num > num2) {
    alert(num + " is the Larger number")
} else if (num < num2) {
    alert(num2 + " is the Larger number")
} else {
    alert("Both are equal ")
}

//Q14
var checkNum = +prompt("Enter Any number to check its positive or negative or zero ")
if (checkNum < 0) {
    alert("its a Negative number")
} else if (checkNum > 0) {
    alert("its a Positive number")
} else {
    alert("Its Zero")
}

//Q15
var currentHour = +prompt("Enter Your current hour is? in 24hours patttern")
if (currentHour >= 6 && currentHour <= 9) {
    alert("Breakfast time is served")
}
if (currentHour >= 11 && currentHour <= 13) {
    alert("Time for Lunch")
} else if (currentHour >= 17 && currentHour <= 20) {
    alert("Its Dinner time")
} else {
    alert("Sorry, you'll have to wait, or go get a snack.")
}

//Q16
var value = "karachi"
if (typeof value == "string") {
    alert("Its a String")
} else if (typeof value == "number") {
    alert("Its a Number")
} else if (typeof value == "boolean") {
    alert("Its a Boolean")
} else {
    alert("undefined")
}

//Q17
var character = prompt("Enter any character to check its a vowel character or not?")
character = character.toLowerCase()
if (character === 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u') {
    alert("Its a Vowel character")
} else {
    alert("its not a vowel character")
}

//Q18

alert("Is 10 is not equal to 8?")
if (10 !== 8) {
    alert("True , its correct")
} else {
    alert("False , its wrong.")
}