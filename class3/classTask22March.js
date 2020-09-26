//Q1

var userName = prompt("Enter Your name")
alert("Hi " + userName)

//Q2
var numInput = prompt("Enter a number here")
if (!numInput) {
    numInput = 5
}
console.log(numInput + ' x ' + 1 + ' = ' + numInput * 1)
console.log(numInput + ' x ' + 2 + ' = ' + numInput * 2)
console.log(numInput + ' x ' + 3 + ' = ' + numInput * 3)
console.log(numInput + ' x ' + 4 + ' = ' + numInput * 4)
console.log(numInput + ' x ' + 5 + ' = ' + numInput * 5)
console.log(numInput + ' x ' + 6 + ' = ' + numInput * 6)
console.log(numInput + ' x ' + 7 + ' = ' + numInput * 7)
console.log(numInput + ' x ' + 8 + ' = ' + numInput * 8)
console.log(numInput + ' x ' + 9 + ' = ' + numInput * 9)
console.log(numInput + ' x ' + 10 + ' = ' + numInput * 10)

console.log("----*****----")
    //Q3

var cityName = prompt("Enter City name here")
cityName = cityName.toLowerCase()
if (cityName == "karachi") {
    alert("welcome to " + cityName)
}
//Q4

var gender = prompt("Enter your gender")
gender = gender.toLowerCase()
if (gender == "male") {
    alert("Good morning Sir")
} else if (gender == "female") {
    alert("Good morning Madam")
}

//Q5

var signalColor = prompt("Enter Signal Color here")
signalColor = signalColor.toLowerCase()
if (signalColor === "red") {
    alert("vehicles must stop")
} else if (signalColor === "yellow") {
    alert("vehichles should get ready to move")
} else if (signalColor === "green") {
    alert("vehicles can move now")
} else {
    alert("invalid color")
}
//Q6
var currentAge = +prompt("enter your current age")
var maxAge = +prompt("enter your maximum age")
if (currentAge <= maxAge) {
    alert("You are Welcome")
}
//Q7
var fuelInCar = prompt("Enter Your Current Fuel in Liters")
if (fuelInCar <= 0.25) {
    alert("Please Refill the fuel in your car")
} else {
    alert("your are happy to go ")
}
//Q8
//Part(a)
var a = 4
if (++a === 5) {
    alert("Given condition of variable is true ")
        // this condition is true because of pre-increment of a

}
//Part (b)
var b = 82
if (b++ === 83) {
    alert("given condition for variable is true")
}
/* above alert not desplayed because of post increment of variable b. 
so the value of b is 82 still.*/

//Part(c)
var c = 12
if (c++ === 13) {
    alert("condition 1 is true")
        //this condition is not display because in variable c have the value of 12

}
if (c === 13) {
    alert("Condition 2 is true")
        /* condition 2 is display because the post increment in 
        last step increase the value of c now so it becomes equal to 13*/
}
if (++c < 14) {
    alert("Condition 3 is true")
        //this condition is not true because of c is not smaller than 14
}
if (c === 14) {
    alert("condition 4 is true")
        /* condition 4 is display because of last pre-increment so,
         the value in variable c is 14 
         */
}
//Part (D)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost
if (totalCost === laborCost + materialCost) {
    alert("The cost equals.")
        //this alert is show the answer because the condition is true
        // we have totalCost value is 22000 and the other side also have sme value.
}
//Part (e)
if (true) {
    alert("true")
        //if condition display alert because it accept the value of true
}
if (false) {
    alert("false")
        //if condition does not display alert because it can not accept false 
}

//Part (F)
if ("car" < "cat") {
    alert("Car is smaller than cat")
        //in this condition both value are true so it display alert.
}
console.log("----*****----")
    //Q9
var markObtained = +prompt("Enter your Obtained Marks in three Subject")
var totalMarks = +prompt("Enter your Total Marks")
var percentage = markObtained * 100 / totalMarks
console.log("MARKS SHEET")
if (percentage >= 80) {
    console.log("Total marks: " + totalMarks)
    console.log("Marks Obtained: " + markObtained)
    console.log("Percentage: " + percentage + "%")
    console.log("Grade: A-1")
    console.log("Remarks: Excellent ")
} else
if (percentage >= 70) {
    console.log("Total marks: " + totalMarks)
    console.log("Marks Obtained: " + markObtained)
    console.log("Percentage: " + percentage + "%")
    console.log("Grade: A")
    console.log("Remarks: Good ")
} else
if (percentage >= 60) {
    console.log("Total marks: " + totalMarks)
    console.log("Marks Obtained: " + markObtained)
    console.log("Percentage: " + percentage + "%")
    console.log("Grade: B")
    console.log("Remarks:  You Need Improvement ")

} else if (percentage < 60) {
    console.log("Total marks: " + totalMarks)
    console.log("Marks Obtained: " + markObtained)
    console.log("Percentage: " + percentage + "%")
    console.log("Grade: Fail")
    console.log("Remarks: Sorry ")
}
console.log("------******-------")

//Q10
var item1 = prompt("Enter your item name, Which you want to buy")
var quantityItem1 = +prompt("Enter your  1st product Quantity here")
var item2 = prompt("Enter your 2nd item name which you want to buy")
var quantityItem2 = +prompt("Enter your  2nd product Quantity here")
var priceOfitem1 = +prompt("Enter Price of  " + item1)
var priceOfitem2 = +prompt("Enter price of " + item2)
var shippingCharges = 500
var totalCostOfProducts = (priceOfitem1 * quantityItem1) + (priceOfitem2 * quantityItem2) + shippingCharges

if (totalCostOfProducts > 2000) {
    discount = totalCostOfProducts * 10 / 100
    var totalAmount = totalCostOfProducts - discount
    console.log("Price of " + item1 + " is " + priceOfitem1)
    console.log("Quantity of " + item1 + " is " + quantityItem1)
    console.log("Price of " + item2 + " is " + priceOfitem2)
    console.log("Quantity of " + item2 + " is " + quantityItem2)
    console.log("Shipping charges is " + shippingCharges)
    console.log("Total Cost of your order is " + totalCostOfProducts + " PKR")
    console.log("Discounted price is " + totalAmount + " PKR")
} else {
    console.log("Price of " + item1 + " is " + priceOfitem1)
    console.log("Quantity of " + item1 + " is " + quantityItem1)
    console.log("Price of " + item2 + " is " + priceOfitem2)
    console.log("Quantity of " + item2 + " is " + quantityItem2)
    console.log("Shipping charges is " + shippingCharges)
    console.log("Total Cost of your order is " + totalCostOfProducts + " PKR")

}

//Q11
secretNum = 5
var anyNum = +prompt("Guess the Secret Number")
if (anyNum === secretNum) {
    alert("Bingo! Correct Answers")
} else if (anyNum === ++secretNum) {
    alert("Close enough to the correct answer")
} else {
    alert("wrong guess")
}
//Q12

var divNum = +prompt("Enter any number for divided by 3")
if (divNum % 3 === 0) {
    alert("Your number is divisible by 3")
} else {
    alert("Your number is not divisible by 3")
}