//Question#13
var team1 = prompt("Enter Your 1st Team Name")
team1 = team1.toUpperCase()
var team2 = prompt("Enter your 2nd Team name")
team2 = team2.toUpperCase()
var team1Score = +prompt("Enter your " + team1 + " Score")
var team2Score = +prompt("Enter Your " + team2 + " Score")

if (team1Score < team2Score) {
    alert(team2 + " have won the game")
} else if (team1Score > team2Score) {
    alert(team1 + " have won the match ")
} else {
    alert("There is a tie")
}

//Question#14
var userString = "Karachi"
if (typeof userString === 'string') {
    alert(userString + " is a String")
} else {
    alert("This is not a String")
}
var userString2 = 56
if (typeof userString2 === 'number') {
    alert(userString2 + " is a Number")
} else {
    alert("This is not a Number")
}
var userString3 = false
if (typeof userString3 === 'boolean') {
    alert(userString3 + " is a Boolean")
} else {
    alert("This is not a Boolean")
}

//Question#15
var check = +prompt("Enter any number to check whether its an even number or odd number")
if (check % 2 == 0) {
    alert("The number " + check + " is an even number")
} else {
    alert("The number " + check + " is an odd number")
}

//Question#16
var temperature = +prompt("Enter todays weather temperature")
if (temperature >= 40) {
    alert(temperature + "! Its too hot outside")
} else if (temperature >= 30) {
    alert(temperature + "! The Weather today is Normal")
} else if (temperature >= 20) {
    alert(temperature + "! Today's Weather is cool")
} else if (temperature >= 10) {
    alert(temperature + "! OMG! Today's weather is so cool")
}

//Question#17
var num1 = +prompt("Enter 1st number to Calculate operation (+ , - , * , / , %)")
var num2 = +prompt("Enter 2nd number to Calculate operation")
var sum = num1 + num2
var sub = num1 - num2
alert("Addition of " + num1 + "+" + num2 + " is " + sum)
alert("Subtraction of " + num1 + "-" + num2 + " is " + sub)
alert("Multiplication of " + num1 + "*" + num2 + " is " + num1 * num2)
alert("Division of " + num1 + "/" + num2 + " is " + num1 / num2)
alert("Remainder of " + num1 + "%" + num2 + " is " + num1 % num2)

//Question#18
var weekDayName = prompt("Enter Today Day Name")
weekDayName = weekDayName.toLowerCase()
if (weekDayName == "monday" || weekDayName == "tuesday" || weekDayName == "wednesday" || weekDayName == "thursday" || weekDayName == "friday") {
    alert("Its a Week day")
} else if (weekDayName == "saturday") {
    alert("Its Weekend")
} else if (weekDayName == "sunday") {
    alert("Yay! Its a holiday")
} else {
    alert("This is not a days name")
}

//Question#19
var userScore = +prompt("Enter your marks")
if (userScore >= 50) {
    alert("You are passed")
} else {
    alert("Sorry! Try again! you should score 50 marks to PASS")
}

//Question#20
var number1 = +prompt("Enter any number to check greater number")
var number2 = +prompt("Enter any number to check greater number")
if (number1 > number2) {
    alert("The greater number of " + number1 + " and " + number2 + " is " + number1)
} else if (number1 < number2) {
    alert("The greater number of " + number1 + " and " + number2 + " is " + number2)
} else {
    alert("Both numbers are equal")
}

//Question#21
var userLanguage = prompt("Enter language code (e.g. es, de, en, fr)")
if (userLanguage == "en") {
    alert("Hello World")
} else if (userLanguage == "de") {
    alert("Hallo Welt")
} else if (userLanguage == "es") {
    alert("Hola Mundo")
} else if (userLanguage == "fr") {
    alert("Bonjour le monde")
} else {
    alert("This is not a language code")
}

//Question#22
var anyNum = +prompt("Enter any number to check its positive number or not")
if (anyNum >= 0) {
    alert("Its a positive number")
} else if (anyNum < 0) {
    alert("Its a negative number")
} else {
    alert("Its not a number")
}
//Question#23
var noun = prompt("Enter any Noun to get Pluralizer")
var anyNumber = +prompt("Enter any number to get Pluralizer")
if (typeof noun === "string" && anyNumber == 1) {
    alert(anyNumber + " " + noun)
} else if (typeof noun === "string" && anyNumber >= 1) {
    alert(anyNumber + " " + noun + "s")
} else {
    alert("Invalid variable")
}