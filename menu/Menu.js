const items = document.querySelectorAll(".items");
const all = document.querySelector(".b-1");
const breakfast = document.querySelector(".b-2");
const lunch = document.querySelector(".b-3");
const shake = document.querySelector(".b-4");
const dinner = document.querySelector(".b-5");

all.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.remove("none");
  });
});
breakfast.addEventListener("click", () => {
  items.forEach((item) => {
    if (item.classList.contains("Breakfast") === false)
      item.classList.add("none");
    else item.classList.remove("none");
  });
});
lunch.addEventListener("click", () => {
  items.forEach((item) => {
    if (item.classList.contains("Lunch") === false) item.classList.add("none");
    else item.classList.remove("none");
  });
});
shake.addEventListener("click", () => {
  items.forEach((item) => {
    if (item.classList.contains("Shake") === false) item.classList.add("none");
    else item.classList.remove("none");
  });
});
dinner.addEventListener("click", () => {
  items.forEach((item) => {
    if (item.classList.contains("Dinner") === false) item.classList.add("none");
    else item.classList.remove("none");
  });
});
