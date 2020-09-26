//Q1
function name() {
    alert("Hello Adiba")
}
name()

//Q2
function dateAndTime() {
    now = new Date()
    alert("Current date and time is : " + now)
}
dateAndTime()

//Q3
function greetings() {
    var fName = prompt("Enter your first name")
    var lName = prompt("Enter your last name")
    alert("Good Morning " + fName + " " + lName)
}
greetings()

//Q4
function addition() {
    var num1 = +prompt("Enter first number to addition")
    var num2 = +prompt("Enter second number to addition")
    return num1 + num2
}
var result = addition()
alert(result)


//Q5
function calculator(num1, num2, operation) {

    switch (operation) {
        case "+":
            return num1 + num2
        case "-":
            return num1 + num2
        case "*":
            return num1 + num2
        case "/":
            return num1 + num2
    }
    return "invalid parameters"
}
calculator(5, 6, "+")

//Q6
function square(num) {
    return num * num

}
var result = square(5)
console.log(result)

//Q7
function factorial(num) {
    var multi = 1
    for (var i = 1; i <= num; i++) {
        multi = multi * i
    }
    return multi
}
var result = factorial(5)
console.log("factorial " + result)

console.log("______")

//Q8
function counting() {
    var fNum = +prompt("Enter first num to counting")
    var eNum = +prompt("Enter second num to counting")
    for (var i = fNum; i <= eNum; i++) {
        console.log(i)
    }
}
counting()

//Q9
function calculateHypotenuse(base, perpendicular) {
    function getSquare(num) {
        return num * num
    }
    var hypotenuse = getSquare(base) + getSquare(hypotenuse)
    return getSquare(hypotenuse)
}
calculateHypotenuse(6, 3)


console.log("---------")



//Q10
function argumnt() {

    console.log(arguments)
}

argumnt(1, 2, 3, 4)


console.log("---------")



//Q11
function largestNum() {
    var largest = 0
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > largest) {
            largest = arguments[i]
        }
    }
    console.log(largest)
}

largestNum(3, 5, 2, 1, 4, )


console.log("---------")



//Q12
//Argument as value
function areaOfRectangle(height, width) {
    return height * width
}
var result = areaOfRectangle(56, 20)
console.log("Area of a rectangle is : " + result)

//Argument as variables
function areaOfRectangleasArgument() {
    console.log("Area of a rectangle is : " + arguments[0] * arguments[1])
}
areaOfRectangleasArgument(6, 2)


console.log("---------")



//Q13
var array = [2, 2, 5, 8, 9, 6, 3, 2, 1]
var result = sortArray(array)

function sortArray(arr) {
    return arr.sort()
}
console.log("sorted array is : " + result)


console.log("---------")



//Q14
var array = [2, 2, 5, 5, 6, 2]
var result = sumArray(array)

function sumArray(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}
console.log("Sum Of array is : " + result)


console.log("---------")


//Q15
var param = function inner() {
    return typeof inner;
}
var result = param(param());
console.log("Type of inner is " + result)



console.log("---------")

//Q16
function powerOfNum(number, pow) {
    var num = 1
    for (var i = 1; i <= pow; i++) {
        num = num * number
    }
    return num
}
var result = powerOfNum(2, 3)
console.log("power of 2 is " + result)


console.log("---------")

//Q17
function dice() {
    return Math.floor(Math.random() * 6) + 1
}
console.log("Return a random dice value " + dice())
console.log("---------")


//Q18
var array = [2, 2, 5, 8, 9, 6, 3, 2, 1]
var result = reverseArray(array)

function reverseArray(arr) {
    return arr.reverse()
}
console.log("array is " + array)
console.log("sorted array is : " + result)


console.log("---------")

//Q19
function isPalindrome(name) {
    var ans = name.split("").reverse().join("")
    if (ans == name) {
        console.log("Its palindrome " + ans)
    } else {
        console.log("Its not a Palindrome " + ans)
    }
}
isPalindrome("Adiba")
isPalindrome("madam")

console.log("---------")

//Q20
var text = "happy birth day to you"

function upperCase(text) {
    var capLetter = text.split(" ")
    for (var i = 0; i < capLetter.length; i++) {
        var letters = capLetter[i].split("")
        letters[0] = letters[0].toUpperCase()
        capLetter[i] = letters.join("")
    }
    return capLetter.join(" ")
}

var result = upperCase(text)
console.log(result)


console.log("---------")



//Q21
var str = "Web Development Tutorial"

function longestString(text) {
    var word = text.split(" ")
    var maxWord = 0
    var longestWord = " "
    for (var i = 0; i < word.length; i++) {
        if (maxWord < word[i].length) {
            maxWord = word[i].length
            longestWord = word[i]
        }

    }
    return longestWord
}

var result = longestString(str)
console.log("Longest word is " + result)


console.log("---------")

//Q22
function checkVowels(sentence) {
    var vowelList = ["a", "e", "i", "o", "u"];
    var vcount = 0;

    for (var i = 0; i < sentence.length; i++) {
        if (vowelList.indexOf(sentence[i]) !== -1) {
            vcount += 1;
        }

    }
    return vcount;
}
var result = checkVowels("The quick brown fox")
console.log("In this sentence there are  " + result + " vowels")


console.log("---------")

//Q23
function findTypeOf(arg) {
    return typeof(arg)
}
var result = findTypeOf()
console.log("Typeof  pasing argument is " + result)
var result = findTypeOf(5)
console.log("Typeof  pasing argument is " + result)
var result = findTypeOf([1, 2, 3, 1, 2])
console.log("Typeof  pasing argument is " + result)
var result = findTypeOf(true)
console.log("Typeof  pasing argument is " + result)
var result = findTypeOf("true")
console.log("Typeof  pasing argument is " + result)


console.log("---------")

//Q24
function getUnique(array) {
    var uniqueArray = [];

    // Loop through array values
    for (i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }

    return uniqueArray;
}

result = getUnique("thequickbrownfoxjumpsoverthelazydog")
console.log("Ouput : " + result.join(""))

console.log("---------")

//Q25
function occurrenceInAString(str, word) {
    var count = str.split(word).length - 1
    return count
}
var result = occurrenceInAString("JSResources.com", "o")
console.log("Occurrence of o is : " + result)


console.log("---------")

//Q26
function ageCalculator(currentYear, byear) {
    return currentYear - byear
}

var currentYear = new Date().getFullYear()
var birthYear = 1992
var age = ageCalculator(currentYear, birthYear)
var maxAge = age + 1
console.log("The Age Calculator")
console.log("Current year: " + currentYear)
console.log("Birthyear : " + birthYear)
console.log("Your are either " + age + " or " + maxAge + " years old")

console.log("---------")

//Q27
function CalculateSupply(age, amount, estimatedAge) {
    return Math.round(estimatedAge - age * amount)
}
var snack = prompt("Enter your favrorite snake: ")
var age = +prompt("Enter your current age")
var estimatedAge = +prompt("Enter your maximun age")
var amountPerDay = +prompt("Emount oF snack per day?")

var result = CalculateSupply(age, amountPerDay, estimatedAge)
console.log("The lifetime Supply Calculator")
console.log("favorite snack " + snack)
console.log("current age " + age)
console.log("Estimated maximum age " + estimatedAge)
console.log("Amount of snack per day " + amountPerDay)

console.log("you will need " + result + " " + snack + " to last you until the ripe old age of " + estimatedAge)

console.log("---------")


//Q28
var pi = 3.142

function calcCircumference(raduis) {
    var circumference = 2 * pi * raduis
    return circumference
}

var result = calcCircumference(6)
console.log("The Circumference of a circle is: " + result)

function calcArea(raduis) {
    var area = pi * Math.pow(raduis, 2)
    return area
}
var result = calcArea(6)
console.log("The Area of acircle  is: " + result)


console.log("---------")


//Q29
function celsiusToFahrenheit(cels) {
    var celsius = cels
    return (celsius * 9 / 5) + 32
}
var result = celsiusToFahrenheit(3)
console.log("Celsius to Farenheit converter : " + result)

function fahrenheitToCelsius(fahr) {
    var fahrenheit = fahr
    return (fahrenheit - 32) * 5 / 9
}
var result = fahrenheitToCelsius(37)
console.log("Fahrenheit to Celsius converter : " + result)

console.log("---------")