const red = document.querySelector(".color-red");
const cyan = document.querySelector(".color-cyan");
const violet = document.querySelector(".color-violet");
const orange = document.querySelector(".color-orange");
const pink = document.querySelector(".color-pink");
const content = document.querySelector(".content");
const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};
// var orangeElementColor = getBGColor(orange);

// orange.addEventListener("mouseenter", () => {
//   center.style.background = orangeElementColor;
//   center.style.border = "solid 2px black";
// });

const magicColorChanger = (element, color) => {
  return element.addEventListener("mouseout", () => {
    center.style.background = color;
    center.style.border = "solid 2px white ";
  });
};

// window.addEventListener("load", () => {
//     content.textContent = "Page is Loaded";
// })

magicColorChanger(red, getBGColor(red));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(pink, getBGColor(pink));
magicColorChanger(violet, getBGColor(violet));
