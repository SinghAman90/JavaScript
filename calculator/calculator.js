var zero = document.querySelector("#zero");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three= document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var add = document.querySelector("#add");
var sub = document.querySelector("#sub");
var mul = document.querySelector("#mul");
var div = document.querySelector("#div");
var equal = document.querySelector("#equal");
var panel = document.querySelector(".answerpanel")
var answerpanel = document.querySelector(".answerpanel p");
var back = document.querySelector("#back");
var clear = document.querySelector("#ac");
var per = document.querySelector("#per");
var expression = [];
const text = (element) => {
    var str = "";
    for(const n of expression){
        str += n ;
    }
    answerpanel.textContent = str;
};
const express = (element) => {
    return element.addEventListener("click", ( )=> {
        expression.push(element.innerHTML);
        // element.classList.add("selected");
        text(element);
        check(element);
    })
};
const issymbol = (char) => {
    if(char === '/' || char === '*' || char === '+' || char === '-' )
        return true;
    else 
        return false;
}
const check = (element) => {
    if(issymbol(element.innerHTML)){
        var len = expression.length;
        if(expression.length === 1){
            panel.style.border = "2px solid red";
        }
        else if(issymbol( expression[len - 2] )){
            panel.style.border = "2px solid red";
        }
    }
}
express(zero);
express(one);
express(two);
express(three);
express(four);
express(five);
express(six);
express(seven);
express(eight);
express(nine);
express(add);
express(sub);
express(mul);
express(div);
express(per);
clear.addEventListener("click",  ()=>{
    answerpanel.textContent = "";
    while(expression.length)
        expression.pop();
    panel.style.border = "solid 2px black";
});
back.addEventListener("click", () => {
    expression.pop();
    var str = "";
    for(const n of expression){
        str += n ;
    }
    panel.textContent = str;
    panel.style.border = "solid 2px black";
});
equal.addEventListener("click", () => {
    while(expression.length > 1){
        var index;
        index = expression.indexOf('/');
        if(index !== -1){
            var sum = parseFloat(expression[index-1]) / parseFloat(expression[index+1]);
            expression.splice(index+1, 1);
            expression.splice(index, 1);
            expression.splice(index-1, 1);
            expression.splice(index-1, 0, sum); // adding element into array
        }
        index = expression.indexOf('+');
        if(index !== -1){
            var sum = parseFloat(expression[index-1]) + parseFloat(expression[index+1]);
            expression.splice(index+1, 1);
            expression.splice(index, 1);
            expression.splice(index-1, 1);
            expression.splice(index-1, 0, sum);// adding element into array
        }
        index = expression.indexOf('-');
        if(index !== -1){
            var sum = parseFloat(expression[index-1]) - parseFloat(expression[index+1]);
            expression.splice(index+1, 1);
            expression.splice(index, 1);
            expression.splice(index-1, 1);
            expression.splice(index-1, 0, sum);// adding element into array
        }
        index = expression.indexOf('*');
        if(index !== -1){
            var sum = parseFloat(expression[index-1]) * parseFloat(expression[index+1]);
            expression.splice(index+1, 1);
            expression.splice(index, 1);
            expression.splice(index-1, 1);
            expression.splice(index-1, 0, sum); //adding element into array
        }
        // index = expression.indexOf('%');
        // if(index !== -1){
        //     var sum = (parseFloat(expression[index-1]) / parseFloat(expression[index+1])) * 100;
        //     expression.splice(index+1, 1);
        //     expression.splice(index, 1);
        //     expression.splice(index-1, 1);
        //     expression.splice(0, 0, sum); // adding element into array
        // }
    }
    answerpanel.textContent = parseFloat(expression[0]);
});
