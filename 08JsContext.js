//calling function before declaring it
sayHello(); //not possible in c++, but in JS it is possible
//function declaretion are scanned and made available 
//variables declaration are scanned and made undefined 
function sayHello() {
  console.log("Hello Aman");
}

function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}
tipper(5);

//here bigTipper is not running because bigTipper is defined as variable and it is defined undefined
//where as if it was function it will be made availbale
// bigTipper(200);
var bigTipper = function(a) {
    var bill = parseInt(a);
    
    console.log(bill + 15);
}
bigTipper(200);//here it will work

console.log(fullname);//variable is scanned and defned as undefined
var fullname = "Aman Singh Parihar";
console.log(fullname); //it will work fine
