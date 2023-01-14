// function init() {
//     var firstName = "Aman";
//     console.log("I am init");

//     function sayFirstName() {
//         console.log(firstName);
//     }
//     return sayFirstName;
// }

// var value = init();
// value();

// classic example of adder function

function makeAdder(num1) {
    return function(num2){
        return num1+num2;
    }
}
// var add5 = makeAdder(5);
// console.log(add5(10));
console.log( makeAdder(5)(10) );//curring in JavaScript 