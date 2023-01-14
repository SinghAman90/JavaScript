var name = "Aman";
console.log("Name is : " + name);

function sayName(){
    var fullname = "Aman singh Parihar";
    console.log("Name is :" + fullname);
}
sayName();

//unlike other languages variable defined inside if-else block will
// be in its local scope but it will be in global acope and available 
// to ouside
if(true){
    var name1 = "aman";
}
console.log(`Another name is : ${name1}`);

// below will cause error as fullname is not in current scope
// console.log(fullname);