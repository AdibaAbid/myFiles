//Q1
var positiveNum = +prompt("Enter Positive integer")
console.log("Number: " + positiveNum)
var result = Math.round(positiveNum)
console.log("round off value: " + result)
result = Math.floor(positiveNum)
console.log("Floor value : " + result)
result = Math.ceil(positiveNum)
console.log("Ciel value: " + result)

console.log("------------")

//Q2
var negativeNum = +prompt("Enter Negative integer")
console.log("Number: " + negativeNum)
var result = Math.round(negativeNum)
console.log("round off value: " + result)
result = Math.floor(negativeNum)
console.log("Floor value : " + result)
result = Math.ceil(negativeNum)
console.log("Ciel value: " + result)

console.log("------------")

//Q3
var positiveFloatNum = +prompt("Enter Positive Float integer")
console.log("Number: " + positiveFloatNum)
var result = Math.round(positiveFloatNum)
console.log("round off value: " + result)
result = Math.floor(positiveFloatNum)
console.log("Floor value : " + result)
result = Math.ceil(positiveFloatNum)
console.log("Ciel value: " + result)

console.log("------------")

//Q4
var negativeFloatNum = +prompt("Enter Negative Float integer")
console.log("Number: " + negativeFloatNum)
var result = Math.round(negativeFloatNum)
console.log("round off value: " + result)
result = Math.floor(negativeFloatNum)
console.log("Floor value : " + result)
result = Math.ceil(negativeFloatNum)
console.log("Ciel value: " + result)

console.log("------------")

//Q5
var absVlaue = +prompt("Enter any number to check Absolute value")
console.log("The Absolute value of " + absVlaue + " is : " + Math.abs(absVlaue))

console.log("------------")

//Q6
var randomNum = Math.floor(Math.random() * 6) + 1
console.log("Random dice value is : " + randomNum)

console.log("------------")

//Q7
var randomCoin = Math.floor(Math.random() * 2) + 1
if (randomCoin == 2) {
    console.log("Random coin value is HEADS : " + randomCoin)
} else {
    console.log("Random coin value is TAILS : " + randomCoin)
}

console.log("------------")

//Q8
var randomNum = Math.floor(Math.random() * 100) + 1
console.log("Random Number between 1 and 100 is : " + randomNum)

console.log("------------")

//Q9
var userWeight = prompt("Enter your weight in kilograms")
var weight = userWeight.split("kg ")
alert("The weight of your's is " + weight + " kilograms")

console.log("------------")

//Q10
var randomSecretNum = Math.floor(Math.random() * 10) + 1
var userNum = +prompt("Guess any number between 1 to 10 to unlock the secret number.")
if (userNum == randomSecretNum) {
    alert("Congratulation you got it !")
} else {
    alert("Sorry! Try Again")
}

console.log("------------")

//Q11
var now = new Date()
console.log(now)

console.log("------------")

//Q12
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var now = new Date().getMonth()
alert("Current Month is : " + month[now])

console.log("------------")

//Q13
var now = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var nowDay = days[now.getDay()]
alert("Today day is: " + nowDay.split("day"))

console.log("------------")

//Q14
var today = prompt("Enter today Day.")
today = today.toLowerCase()

if (today == "sunday" || today == "saturday") {
    alert("Its Fun day ")
} else {
    alert("Its not a fun day")
}

console.log("------------")

//Q15
var now = new Date().getDate()

if (now <= 16) {
    console.log("Its " + now + "th Last Days of the month")
} else {
    console.log("Its " + now + "th First fifteen days of the month")
}

console.log("------------")

//Q16
var currentDate = new Date()
console.log("Current Date : " + currentDate)

console.log("Elapsed miliseconds since January 1, 1970 : " + currentDate.getTime())
var minutes = (currentDate.getTime() / 60000)
console.log("Elapsed minutes since January 1, 1970 : " + minutes)

console.log("------------")

//Q17
var hours = new Date().getHours()
if (hours >= 12 && hours <= 24) {
    console.log("Its PM " + hours + " hours")
} else {
    console.log("Its AM" + hours + " hours")
}

console.log("------------")

//Q18
var laterDate = new Date("December 31, 2021")
console.log(laterDate)

console.log("------------")

//Q19
var oneDay = 24 * 60 * 60 * 1000
var firstDate = new Date("June 18, 2015")
var secondDate = new Date()
var diff = Math.round(Math.abs((firstDate - secondDate) / oneDay))
console.log(diff + " days have passed since 1st Ramadan, June 18 2015")

console.log("------------")

//Q20
var currentDate = new Date().getTime()
var refDate = new Date("Jan 1,2020").getTime()
var resultInMiliseconds = (refDate - currentDate)
var resultInSeconds = Math.floor((currentDate - refDate) / 1000)

alert(resultInSeconds + " seconds had passed since begining of 2020 ")


console.log("------------")


//Q21
var date = new Date()
console.log("Current date : " + date)
var newDate = date.getHours() - 1
date.setHours(newDate)
console.log("1Hour ago, it was " + date)

console.log("------------")

//Q22
var date = new Date()
alert("Current date : " + date)
var newYear = date.getFullYear() - 100

date.setFullYear(newYear)
alert(" And 100 years back, it was  " + date)

console.log("------------")

//Q23
var userAge = +prompt("Enter your age to calculate your birth year.")
var currentYear = new Date().getFullYear()
var age = currentYear - userAge
alert("Your birthyear is " + age)

console.log("------------")

//Q24
var userName = prompt("Enter your Name, Who is paying bill?")
console.log("Customer Name: " + userName)
var userMonth = prompt("Enter Month")
console.log("Month: " + userMonth)
var noOfUnit = +prompt("Enter Number of units")
console.log("Number of units: " + noOfUnit)
var chargesPerUnit = +prompt("Enter Charges per unit?")
console.log("Charges per unit: " + chargesPerUnit)
var amountWithinDueDate = Math.round(noOfUnit * chargesPerUnit)
console.log("Net Amount Payable (within Due Date): " + amountWithinDueDate)
console.log("Late Payment Surcharge: 500")
var amountAfterDueDate = Math.round(amountWithinDueDate + 500)
console.log("Gross Amount Payable (After due date): " + amountAfterDueDate)
