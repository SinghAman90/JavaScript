const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const p4 = document.querySelector(".p4");
const p5 = document.querySelector(".p5");
const prev = document.querySelector(".b-1");
const next = document.querySelector(".b-2");
const randomReview = document.querySelector(".buttons button");

const reviews = [p1, p2, p3, p4, p5];
var cur = 0;
const randomGenerator = () => {
  return Math.floor(Math.random() * 4);
};
const displayedReviews = (k) => {
  for (let i = 0; i < 5; i++) {
    if (i == k) reviews[i].style.display = "block";
    else reviews[i].style.display = "none";
  }
};
next.addEventListener("click", () => {
  if (cur < 4) cur++;
  else cur = 0;
  displayedReviews(cur);
});
prev.addEventListener("click", () => {
  if (cur === 0) cur = 4;
  else cur--;
  displayedReviews(cur);
});
randomReview.addEventListener("click", () => {
  const k = randomGenerator();
  while(k == cur){
    k = randomGenerator();
  }
  displayedReviews(k);
});
