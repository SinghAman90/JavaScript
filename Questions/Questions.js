// const main = document.querySelectorAll(".main");

// main.forEach((main) => {
//   const line = main.querySelector(".line");
//   const open = main.querySelector(".fa-square-plus");
//   const close = main.querySelector(".fa-square-minus");
//   const answer = main.querySelector(".answer");

//   open.addEventListener("click", () => {
//     open.classList.add("none");
//     close.classList.add("block");
//     answer.classList.add("block");
//     line.classList.add("block");
//   });
//   close.addEventListener("click", () => {
//     open.classList.remove("none");
//     close.classList.remove("block");
//     answer.classList.remove("block");
//     line.classList.remove("block");
//   });

// });
const main = document.querySelectorAll(".main");

main.forEach((question) => {
  const open = question.querySelector(".fa-square-plus");
  const close = question.querySelector(".fa-square-minus");
  const line = question.querySelector(".line");
  const answer = question.querySelector(".answer");

  open.addEventListener("click", () => {
    main.forEach((element) => {
      if (element != question) {
        for (const child of element.children) child.classList.remove("block");
      }
    });
    open.classList.add("none");
    close.classList.add("block");
    answer.classList.add("block");
    line.classList.add("block");
  });
  close.addEventListener("click", () => {
    open.classList.remove("none");
    close.classList.remove("block");
    answer.classList.remove("block");
    line.classList.remove("block");
  });
});
