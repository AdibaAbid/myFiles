//Q1 and Q2
var student = []

//Q3
var stringArray = ["apple", "mango", "banana", "guava", "orange"]

//Q4
var numberArray = [5, 6, 8, 9, 2, 3, 1]

//Q5
var booleanArray = [true, false, true, false]

//Q6
var mixedArray = ["hello", 5, true, "girls"]

//Q7
var mobileNetworkArray = ["ufone ", "jazz", "telenor", "Mobilink", "zong", "djuice"]
console.log("-----******-----")

//Q8
var education = ["SSC", "HSC", "FSC", "BS", "BCOM", "MS", "M.COM", "M.PHIL"]
console.log("List of Eduaction Qualifications in Pakistan: " + education)
console.log("-----******-----")

//Q9
var movieArray = []
movieArray.push("Justice League")
movieArray.push("Avengers")
movieArray.push("Iron man")
movieArray.push("Batman")
console.log("Best Movies")
console.log(movieArray)
console.log("Movie Array Length" + movieArray.length)

console.log("-----******-----")
    //Q10
var favCars = ["vivo", "swift", "mehran", "cultus", "civic"]
console.log("Car at First index of the array of fav cars " + favCars[0])
console.log("Last index of the array of fav car " + favCars[favCars.length - 1])

console.log("-----******-----")

//Q11
var studentName = ["kashif", "javed", "iqbal"]
var studentScore = [300, 370, 450]

console.log("Score of " + studentName[0] + " is " + studentScore[0] + " and Percentage is " + studentScore[0] * 100 / 500 + "%")
console.log("Score of " + studentName[1] + " is " + studentScore[1] + " and Percentage is " + studentScore[1] * 100 / 500 + "%")
console.log("Score of " + studentName[2] + " is " + studentScore[2] + " and Percentage is " + studentScore[2] * 100 / 500 + "%")

console.log("-----******-----")

//Q12(A)
var colorsArray = ["pink", "blue", "orange"]
var color = prompt("Enter any color you want to add in array from starting")
colorsArray.unshift(color)
console.log("After adding new color your Updated array is " + colorsArray)
    //(B)
var newColor = prompt("Enter any color you want from the end of the array ")
colorsArray.push(newColor)
console.log("After deleting color from the last your Updated array is " + colorsArray)
    //(C)
alert("Adding 2 more color in the array randomly")
colorsArray.unshift("white", "black")
console.log("After adding two more colors randomly your Updated array is " + colorsArray)
    //(D)
alert("Deleting first color from the array")
colorsArray.shift()
console.log("After deleting first color from array your Updated array is " + colorsArray)
    //(E)
alert("Deleting Last color fromthe array")
colorsArray.pop()
console.log("After deleting last color from the array now your Updated array is " + colorsArray)
    //(F)
var indexNum = +prompt("At which index you wants to add color?")
var color1 = prompt("color you want to add")
colorsArray.splice(indexNum, 0, color1)
console.log("After added your color in your Updated array is " + colorsArray)
    //(G)
var delColorIndex = +prompt("At which index you wants to delete color?")
var howManyColors = +prompt("How many colors you want to delete?")
colorsArray.splice(delColorIndex, howManyColors)
console.log("after deleting color from array your Updated array is " + colorsArray)

console.log("-----******-----")

//Q13
var scoreStudent = [320, 480, 220, 323, 200]
console.log("Student score Array is " + scoreStudent)
console.log("Ordered Scores of Students is : " + scoreStudent.sort())

console.log("-----******-----")

//Q14
var fruits = ["Mango", "Apple", "Orange", "Banana", "Guava"]
console.log("Fruits Array is : " + fruits)
console.log("Ordered fruits array is : " + fruits.sort())

console.log("-----******-----")

//Q15
var cilies = ["karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
console.log("Cities array is : " + cilies)
var selectedCitiesName = cilies.slice(0, 3)
console.log("selected Cities array copied from cities array is : " + selectedCitiesName)


console.log("-----******-----")

//Q16
var singleString = ["This", "is", "my", "house"]
console.log("Array is : " + singleString)
console.log("Array in a Single String is:  " + singleString.join(" "))

console.log("-----******-----")

//Q17
var devices = ["Mouse", "Keyboard", "Printer", "Monitor", "CPU"]
console.log("Your Devices Array is : " + devices)
console.log("Deleting from FIFO Method ")
devices.shift()
console.log("Updating Array after deleting First in First Out: " + devices)
devices.shift()
console.log("Updating Array after deleting First in First Out: " + devices)
devices.shift()
console.log("Updating Array after deleting First in First Out: " + devices)
devices.shift()
console.log("Updating Array after deleting First in First Out: " + devices)
devices.shift()
console.log("Updating Array after deleting First in First Out: " + devices)



console.log("-----******-----")

//Q18
var devices = ["Mouse", "Keyboard", "Printer", "Monitor", "CPU"]
console.log("Your Devices Array is : " + devices)
console.log("Deleting from LIFO Method ")
devices.pop()
console.log("Updating Array after deleting Last in First Out: " + devices)
devices.pop()
console.log("Updating Array after deleting Last in First Out: " + devices)
devices.pop()
console.log("Updating Array after deleting Last in First Out: " + devices)
devices.pop()
console.log("Updating Array after deleting Last in First Out: " + devices)
devices.pop()
console.log("Updating Array after deleting Last in First Out: " + devices)


console.log("-----******-----")