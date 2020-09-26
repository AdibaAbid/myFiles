let emailId = "xyz@gmail.com";
let password = "123456"

function checkEmail() {
    let value = document.querySelector("#email").value;
    let errorSpan = document.querySelector(".error");
    errorSpan.innerHTML = "";
    if (value == "") {
        errorSpan.innerHTML = "Email Address is required! hint: xyz@gmail.com";
    } else if (value !== emailId) {
        errorSpan.innerHTML = "Invalid Email Address!";
    } else {
        window.location.replace("checkpass.html");
    }
}

function checkPassword() {
    let value = document.querySelector("#password").value;
    let errorSpan = document.querySelector(".error");
    errorSpan.innerHTML = "";
    if (value == "") {
        errorSpan.innerHTML = "Password is required! hint: Numeric number from 1 to 6";
    } else if (value !== password) {
        errorSpan.innerHTML = "Invalid Password!";
    } else {
        window.location.replace("welcomePage.html");
    }
}