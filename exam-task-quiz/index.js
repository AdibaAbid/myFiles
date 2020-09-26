//--------------------
//Q1
// Solution for Q1
var score = [320, 230, 480]

function percentage(score) {
    var studentName = ["Adil", "KAshif", "javed"]

    var totalMarks = 500
    for (var i = 0; i < score.length; i++) {
        var percentage = score[i] * 100 / totalMarks
        console.log("Score Of " + studentName[i] + " is " + score[i] + " Percentage is " + percentage + " %")
    }
}

percentage(score)
console.log("-----------")

//--------------------
//Q2
// Solution for Q2
var sum = 0
for (var i = 1; i <= 100; i++) {
    sum = sum + i
}
console.log("Sum of 1st 100 numbers is " + sum)

console.log("-----------")

//--------------------
//Q3
// Solution for Q3

var table = prompt("Enter which table you want")
var lenght = prompt("Enter table length")
console.log("Multiplication table from 1 to " + lenght)
for (var i = 1; i <= lenght; i++) {
    console.log(table + " x " + i + " = " + i * table)
}
console.log("-----------")

//--------------------
//Q4
// Solution for Q4
for (var i = 1; i <= 15; i++) {
    console.log("Counting " + i)
}
console.log("-----------")
for (var i = 10; i >= 1; i--) {
    console.log("Reverse Counting " + i)
}
console.log("-----------")
for (var i = 0; i <= 20; i = i + 2) {
    console.log("Even Counting " + i)
}
console.log("-----------")
for (var i = 1; i < 20; i = i + 2) {
    console.log("odd Counting " + i)
}
console.log("-----------")
for (var i = 0; i <= 20; i = i + 2) {
    console.log("series Counting " + i + "k")
}

console.log("----------")


//--------------------
//Q5
// Solution for Q5
var a = [24, 53, 78, 91, 12]
var newa = a.sort()
console.log("The largest number in array is : " + newa[newa.length - 1])

console.log("--------")


var b = [24, 53, 78, 91, 12]
console.log("Array items is: " + b)
var newb = b.sort()
newb.reverse()
console.log("The Smallest number in array is : " + newb[newb.length - 1])
console.log("----------")


//--------------------
//Q6
// Solution for Q6
function isPalindrome(name) {
    var result = name.split("").reverse().join("")
    if (result == name) {
        console.log("Its palindrome " + result)
    } else {
        console.log("Its not a Palindrome " + result)
    }
}
isPalindrome("Adiba Abid")
isPalindrome("madam")

console.log("---------")

//--------------------
//Q7
// Solution for Q7
// function random(array) {
//     var pattern = ["p", "a", "k"]

// }

//--------------------
//Q8
// Solution for Q8

function strId(len) {
    var text = "";
    var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < len; i++) {
        text += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    return text;
}
var result = strId(8)
console.log("random Id : " + result);

console.log("---------")

//--------------------
//Q9
// Solution for Q9
function getUnique(array) {
    var uniqueArray = []
    for (i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i])
        }
    }

    return uniqueArray
}

result = getUnique("Helloworld!welcome")
console.log("Ouput : " + result.join(""))

console.log("---------")

//--------------------
//Q10
// Solution for Q10
function timeConvert(num) {
    var hours = (num / 60)
    var newHours = Math.floor(hours)
    var minutes = (hours - newHours) * 60
    var newMinutes = Math.round(minutes)
    return num + " minutes = " + newHours + " hour(s) and " + newMinutes + " minute(s)"
}
var result = timeConvert(200)
console.log(result)