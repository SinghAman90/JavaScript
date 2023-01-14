const body = document.querySelector('body');
const span = document.querySelector(".colorcode");
const button = document.querySelector(".container button");
const simple = document.querySelector(".simple");
const hex = document.querySelector(".hex");
var rgbcolor , hexcolor ;

const rgbtohex = (a,b,c) => {
    return("#" + a.toString(16) + b.toString(16) + c.toString(16));
}

const generator = () => {
    const a = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    const c = Math.floor(Math.random()*255);
    rgbcolor = `rgb(${a}, ${b}, ${c})`;
    hexcolor = rgbtohex(a,b,c);
}
window.addEventListener('load', () => {
    generator();
    body.style.backgroundColor = rgbcolor;
} )
button.addEventListener('click', ()=>{
    generator();
    body.style.backgroundColor = rgbcolor;
})
simple.addEventListener("click", () => {
    span.textContent = rgbcolor;
});
hex.addEventListener("click", () => {
    span.textContent = hexcolor;
});