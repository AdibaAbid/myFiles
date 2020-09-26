// Q1
// 12345
// 1234
// 123
// 12
// 1
console.log("---****---")
for (var i = 5; i >= 1; i--) {
    var str = " "
    for (var j = 1; j <= i; j++) {
        str = str + j
    }
    console.log(str)
}

console.log("---****---")

//Q2
// 1
// 12
// 123
// 1234
// 12345

for (var i = 1; i <= 5; i++) {
    var str = " "
    for (var j = 1; j <= i; j++) {
        str = str + j
    }
    console.log(str)
}

console.log("---****---")

//Q3
// 1
// 22
// 333
// 4444
// 55555

for (var i = 1; i <= 5; i++) {
    var str = " "
    for (var j = 1; j <= i; j++) {
        str = str + i
    }
    console.log(str)
}

console.log("---****---")

//Q4
// 55555
// 4444
// 333
// 22
// 1

for (var i = 5; i >= 1; i--) {
    var str = " "
    for (j = 1; j <= i; j++) {
        str = str + i
    }
    console.log(str)
}

console.log("---****---")

//Q5
// ****
// ****
// ****
// ****

for (var i = 1; i <= 4; i++) {
    var str = " "
    for (var j = 1; j <= 4; j++) {
        str = str + "*"
    }
    console.log(str)
}

console.log("---****---")

//Q6
// *
// **
// ***
// ****
// *****

for (var i = 1; i <= 5; i++) {
    str = " "
    for (var j = 1; j <= i; j++) {
        str = str + "*"
    }
    console.log(str)
}

console.log("---****---")

//Q7
// *****
// ****
// ***
// **
// *

for (var i = 5; i >= 1; i--) {
    var str = " "
    for (var j = 1; j <= i; j++) {
        str = str + "*"
    }
    console.log(str)
}
console.log("---****---")

//Q8