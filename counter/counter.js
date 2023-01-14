const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const count = document.querySelector(".count");


btn1.addEventListener("click", () => {
    var val = parseInt(count.innerText);
    if(val <= 0){
        count.style.color = "red";
    }
    val -= 1;
    count.textContent = val.toString();
});
btn2.addEventListener("click", () => {
    count.textContent = "0";
    count.style.color = "black";
});
btn3.addEventListener("click", () => {
    var val = parseInt(count.innerText);
    val += 1;
    if(val > 0)
        count.style.color = "green";
    else if(val === 0)
        count.style.color = "black";
    count.textContent = val.toString();
});