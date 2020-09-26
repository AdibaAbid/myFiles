//Q1
var fName = prompt("Enter first name?")
var lName = prompt("Enter Last  name?")
var fullName = (fName + " " + lName)
alert(fullName)

console.log("---------")

//Q2
var userInput = prompt("Enter your favroute mobile Model.")
console.log("Your favrourite phone is: " + userInput.toUpperCase())
console.log("Length of string is: " + userInput.length)

console.log("---------")

//Q3
var text = "Pakistani"
console.log("String is: " + text)
index = text.indexOf("n")
console.log("Index of 'n' : " + index)

// console.log("---------")

//Q4
var text = "Hello world"
console.log("String is: " + text)
lastIndex = text.lastIndexOf("l")
console.log("Last index of " + " 'L': " + lastIndex)

console.log("---------")

//Q5
var str = "Pakistani"
console.log("Third index of Pakistan is : " + str[3])

console.log("---------")

//Q6
var fName = prompt("Enter first name?")
var lName = prompt("Enter Last  name?")
var fullName = fName.concat(" " + lName)
alert(fullName)

console.log("---------")

//Q7
var city = "Hyderabad"
city.replace("Hyderabad", "Islam")
console.log(city)

console.log("---------")

//Q8
var message = "Ali and sami are best friends.  they play cricket and football together"

message.split("and").join("&")
console.log(message)


console.log("---------")

//Q9
var value = prompt("Enter any value to Display")
alert(value + " is a " + typeof value + " type ")
value = +value
alert("After conversion the " + value + " type is convert into " + typeof value)

console.log("---------")

//Q10
var site = prompt("Enter any website")
site = site.split("www.")[1]
console.log(site)

console.log("---------")

//Q11
var userInput = prompt("Enter any value to convert in capital letter")
userInput = userInput.toUpperCase()
console.log(userInput)

console.log("---------")

//Q12
var userInput = prompt("Enter any value to convert in small letter")
userInput = userInput.toLowerCase()
console.log(userInput)

console.log("---------")

//Q13
var userInput = prompt("Enter name to Capitalize 1st letter")
var firstLetter = userInput[0].toUpperCase()
var userInput2 = firstLetter + userInput.slice(1)
console.log(userInput2)

console.log("---------")

//Q14
var num = 35.36
console.log("Number: " + num)
num = num.toString().replace(".", "")
console.log("Result: " + num)

console.log("---------")

//Q15
var firstValue = prompt("Enter first number")
var secondValue = prompt("Enter second num ")
alert("First value is : " + firstValue)
alert("Second value is : " + secondValue)
alert("After Concate, First value + second value is : " + firstValue + secondValue)

console.log("---------")

//Q16
var firstValue = prompt("Enter first number")
var secondValue = prompt("Enter second num ")
alert("First value is : " + firstValue)
alert("Second value is : " + secondValue)
var result = firstValue - secondValue
alert("After Concate, First value + second value is : " + result)

console.log("---------")

//Q17
var input = prompt("Enter your name.")
var isFound = false
for (var i = 0; i < input.length; i++) {
    var input1 = input.charCodeAt(i)

    if (input1 == 33 || input1 == 44 || input1 == 46 || input1 == 64) {
        alert("Enter a valid user name except [@ . , !]")
        isFound = true
        break
    }
}
if (isFound == false) {
    alert("Hello " + input.toLocaleUpperCase())
}

console.log("---------")

//Q18
var array = ["cake", "cookie", "chips", "patties", "apple pie", "rusk", "bread"]
var order = prompt("Welcome to ABC Bakery. what do you want to order sir/ ma'am?")
order = order.toLowerCase()
var isFound = false
for (var i = 0; i < array.length; i++) {
    if (array[i] == order) {
        console.log(order + " is available at index " + i + " in our bakery.")
        isFound = true
        break
    }
}
if (isFound == false) {
    console.log("we are sorry " + order + " is not available right now.")
}

console.log("---------")

//Q19
var str1 = prompt("Enter any string to compare")
var str2 = prompt("Enter any string to compare")
var result = str1.localeCompare(str2);
if (result == 0) {
    console.log(str1 + " and " + str2 + " both are equal ")
} else if (result == 1) {
    console.log(str1 + " is greater than " + str2)
} else if (result == -1) {
    console.log(str1 + " is samller than " + str2)
}

console.log("---------")

//Q20
var password = prompt("Enter your password here.")

if (password.length >= 5) {

    if (password[0] >= 0 && password[0] <= 9) {
        alert("password should not starts with numbers")
    } else {
        for (var i = 0; i < password.length; i++) {
            var password1 = password[i].charCodeAt()
            if (password1 >= 65 && password1 <= 90 || password1 >= 97 && password1 <= 122) {
                alert("Successfully Entered")
                break
            }
        }
    }
} else {
    alert("Enter a valid  Password. Please Enter a 6 characters long password.")

}

console.log("---------")

//Q21
var uni = "University of Karachi"
console.log("Array is : " + uni)
for (var i = 0; i < uni.length; i++) {
    console.log(uni[i])
}

console.log("---------")

//Q22
var str = prompt("Enter any string")
console.log("Last Character of " + str + " is: " + str.charAt(str.length - 1))

console.log("---------")

//Q23
var text = "The quick brown fox jumps over the lazy dog"
console.log("Finding 'the' from the string: " + text)
var word = text.match(/the/gi).length
console.log("There are " + word + " times THE occurrence(s)")

console.log("---------")


//Q24
var str = "Pakistan"
var isFound = false
console.log("String is : " + str)
for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
        console.log(str[i] + " Its a Vowel character")
    } else {
        console.log(str[i] + " its not a vowel character")
    }
}

console.log("---------")