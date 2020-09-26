//Q1
var msg = "hello world"
for (var i = 0; i < 5; i++) {
    console.log(msg)
}

//Q2 
for (var i = 1; i < 11; i++) {
    console.log(i)
}


//Q3
var table = prompt("Enter which table you want")
var lenght = prompt("Enter table length")
for (var i = 1; i <= lenght; i++) {
    console.log(table + " x " + i + " = " + i * table)
}
console.log("***--***")
    //Q4
var brand = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
for (var i = 0; i < brand.length; i++) {
    console.log(brand[i])
}
console.log("***--***")
    //Q5 
var item = ["apple", "banana", "mango", "orange", "Guava", "grapes"]
for (var i = 0; i < item.length; i++) {
    console.log(item[i])
    console.log("Element of " + i + " is " + item[i])

}
console.log("***--***")

//Q6

var randomItem = +prompt("Enter any number of item which i s array length")
var array = []
for (var i = 0; i < randomItem; i++) {
    array[i] = prompt("Enter value for index " + i)
}
console.log("your updated array " + array)

console.log("***--***")

//Q7
for (var i = 1; i <= 10; i++) {
    console.log("Counting " + i)
}
for (var i = 10; i >= 1; i--) {
    console.log("Reverse Counting " + i)
}
for (var i = 0; i <= 20; i = i + 2) {
    console.log("Even Counting " + i)
}
for (var i = 1; i < 20; i = i + 2) {
    console.log("odd Counting " + i)
}
for (var i = 0; i <= 20; i = i + 2) {
    console.log("series Counting " + i + "k")
}

console.log("***--***")


//Q8
var bakeryArray = ["cookie", "cake", "apple pie", "chips", "patties"]
var input = prompt("Enter which item you want from our bakery?")
input = input.toLocaleLowerCase()
var isFound = false
for (var i = 0; i <= bakeryArray.length; i++) {
    if (input === bakeryArray[i]) {
        console.log(input + " is  available at " + i + "  index  in our  bakery ")
        isFound = true
        break
    }
}
// } else if (i === bakeryArray.length - 1) {
//     console.log("sorry its not available in our bakery")
// }

if (isFound == false) {
    console.log("We are sorry! it is not available")
}

console.log("***--***")

//Q9
var a = [24, 26, 18, 2, 50, 62, 21, 88]
console.log("Array items is: " + a)
a.sort()
console.log("The largest number in array is : " + a[a.length - 1])

console.log("***--***")

//Q10
var b = [24, 55, 66, 22, 44, 88]
console.log("Array items is: " + b)
var newb = b.sort()
console.log("in ascending order : 5" + newb)
console.log("reverse of the arrray is " + newb.reverse())
console.log("The Smallest number in array is : " + newb[newb.length - 1])

console.log("***--***")

//Q11
var aArray = [24, 53, 78, 91, 56, 12]
console.log("Array is: " + aArray)
aArray.sort()
console.log("The Largest number in array is : " + aArray[aArray.length - 1])
aArray.reverse()
console.log("The smallest number in array is : " + aArray[aArray.length - 1])

console.log("***--***")

//Q12
var tableFromUser = +prompt("Enter a number to print table")
var tableLength = +prompt("Enter length of table")
for (i = 1; i <= tableLength; i++) {
    console.log(tableFromUser + " x " + i + " = " + tableFromUser * i)
}
console.log("***--***")

//Q13
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];
console.log("Students Scores")
for (i = 0; i < students.length; i++) {
    console.log(students[i] + "  score is " + scores[i])
}
console.log("***--***")

//Q14
var score = [12, 45, 3, 22, 34, 50]
console.log("Score Array is : " + score)
stopValue = +prompt("Enter a stop value so that the array stop there.")
for (var i = 0; i < stopValue; i++) {
    console.log("Value from score array is: " + score[i])
}

console.log("***--***")

//Q15
var multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(multiArray)
for (var i = 0; i < multiArray.length; i++) {
    console.log(multiArray[i])
    for (var j = 0; j < multiArray[i].length; j++) {
        console.log(multiArray[i][j])

    }
}

console.log("***--***")

//Q16
var num = +prompt("Enter any num to decrease with 0.5 every time.")
console.log(num)
for (var i = num * 2 - 1; i >= 0; i--) {
    num = num - 0.5
    console.log(num)

}
console.log("***--***")

//Q17

for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even number ")
    } else {
        console.log(i + " is oldd number ")
    }
}
console.log("***--***")

//Q18
var product = 1
for (var i = 1; i <= 7; i = i + 2) {

    product = product * i
    console.log("odd integer product:  " + product)
}

console.log("***--***")

//Q19

var star = prompt("Enter a total number of stars to create pattern.")
for (var i = star; i >= 1; i--) {
    var str = "";
    for (var j = i; j <= star; j++) {
        str += "*";
    }
    console.log(str);
}
console.log("-----")
    //Q20(A)

for (var i = 1; i <= 4; i++) {
    var str = "";
    for (var j = 1; j <= 4; j++) {
        str += "*";
    }
    console.log(str);
}

console.log("-----")

//Q20(B)

var star2 = prompt("Enter a total number of stars to create pattern.")
for (var i = 1; i <= star2; i++) {
    var str = "";
    for (var j = i; j <= star2; j++) {
        str += "*";
    }
    console.log(str);
}