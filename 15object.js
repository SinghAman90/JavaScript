var user = {
    firstName : "Aman",
    lastname : "Singh Parihar",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true
};
console.log(user.loginCount);
console.log(user["role"]);

user.loginCount = 40;
console.log(user.loginCount);