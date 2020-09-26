//Q19
var anyNum = +prompt("Enter any number between 1 to 12 to see which month is this?")
switch (anyNum) {
    case 1:
        alert("Its January")
        break
    case 2:
        alert("Its Febuary")
        break
    case 3:
        alert("Its March")
        break
    case 4:
        alert("Its April")
        break
    case 5:
        alert("Its May")
        break
    case 6:
        alert("Its June")
        break
    case 7:
        alert("Its July")
        break
    case 8:
        alert("Its August")
        break
    case 9:
        alert("Its September")
        break
    case 10:
        alert("Its October")
        break
    case 11:
        alert("Its November")
        break
    case 12:
        alert("Its December")
        break
    default:
        alert("You Entered Wrong number")
}

//Q20 
var userAge = +prompt("Enter your age to check your are Voteable person or not?")
if (userAge < 18) {
    alert("Voteable should be Too Young ")
} else {
    alert("Old enough you are voteable")
}