var isEven = (element) => { //arrow function
    // if(element%2 === 0){
    //     return true;
    // }
    // return false;
    return element%2 === 0;
}

console.log(isEven(23));

var result = [2,5,4,6,8].every(isEven); //callback function
console.log(result);