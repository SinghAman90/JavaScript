const uid = "abc123"; // we can't modify it , it is constant

var fullName = "Aman Singh Parihar";
var email = "pariharaman490@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var courseCount = 0;
var isLoggedInFronGoogle = false;

// one way of taking input
// fullName = prompt("Enter Your Name:");

// console.log("Full Name is : " + fullName);
console.log(`
    With Unique ID : ${uid}
    User is : ${fullName}
    and his email is : ${email}
    and uses the password : ${password}
`);
