var temperature;

//TODO: go to goole and get tha data

temperature = 20;

if (temperature < 20) {
    console.log("It's cold outside");
}
else if(temperature < 30){
    console.log("It's Moderate outside");
}
else{
    console.log("It's Hot outside")
}
//show user a signout button if he us authenticated
//other wise show him option to login/signup
var authenticated = true;

// if(authenticated){
//     console.log("Show Sign Out button");
// }
// else{
//     console.log("Show sign in button ");
// }
console.log(authenticated ? "SignOut button" : "SignIn button");//ternary operator 