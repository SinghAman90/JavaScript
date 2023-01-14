// var returnedValue = Math.max(2,5,3,9,8,1);
// console.log(returnedValue);

// var myObj = {}
// Object.assign(myObj, {a:1, b:2, c:3}, {x:4, y:5, z:6});
// console.log(myObj);

function sumOne(a, b){
    return a+b;
}
var myA = [5,4];
// console.log(sumOne(myA)); //it will not run in desired way, so we can use 
console.log(sumOne(...myA)); // this is spread operator
                             // spread opearor will take array as input and convert it to spreaded value
function sumTwo(...args){ // this is rest operator
    let sum = 0; // rest operator will take spreaded value and convet it to array
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(sumTwo(2,3,4,5,6));