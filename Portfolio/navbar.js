const contactes = document.querySelector(".contacts");
const contact_elements = document.querySelector(".contacts span");
const heading = document.querySelector(".heading");
const bar = document.querySelector(".fa-bars");
var is_open = false;
// for nav section
const navbar = document.querySelector(".navbar");
let Top = navbar.offsetTop;
bar.addEventListener("click", () => {
  if (is_open === false) {
    heading.style.display = "none";
    contactes.classList.add("open");
    is_open = true;
  } else {
    heading.style.display = "block";
    contactes.classList.remove("open");
    is_open = false;
  }
});

function stickynavbar() {
  if (window.scrollY >= Top) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
window.addEventListener("scroll", stickynavbar);

// for typewritter effect in main section
var i = 0;
var txt = "HEY I'M AMAN SINGH PARIHAR";
var speed = 100; /* The speed/duration of the effect in milliseconds */
window.addEventListener("load", typeWriter);

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".main").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

//for third(projects section)
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
  while (k == cur) {
    k = randomGenerator();
  }
  displayedReviews(k);
});
//for skill set
if (screen.width > 500) {
  const skills = document.querySelectorAll(".skills");
  const skillSet = [];
  skills.forEach((skill) => {
    skill.classList.add("none");
    skillSet.push(skill);
  });
  var l = 0;
  const forward = document.querySelector(".fa-forward");
  const backward = document.querySelector(".fa-backward");

  window.addEventListener("load", () => {
    display(l, l + 2);
  });

  const display = (l, r) => {
    const len = skillSet.length;
    for (let i = 0; i < skillSet.length; i++) {
      skillSet[i].classList.add("none");
    }
    skillSet[l % len].classList.remove("none");
    skillSet[(l + 1) % len].classList.remove("none");
    skillSet[(l + 2) % len].classList.remove("none");
  };
  forward.addEventListener("click", () => {
    l++;
    display(l, l + 2);
  });
  backward.addEventListener("click", () => {
    l--;
    display(l, l + 2);
  });
} 
else {
  const skills = document.querySelectorAll(".skills");
  const skillSet = [];
  skills.forEach((skill) => {
    skill.classList.add("none");
    skillSet.push(skill);
  });
  var l = 0;
  const forward = document.querySelector(".fa-forward");
  const backward = document.querySelector(".fa-backward");

  window.addEventListener("load", () => {
    display(l, l + 0 );
  });

  const display = (l, r) => {
    const len = skillSet.length;
    for (let i = 0; i < skillSet.length; i++) {
      skillSet[i].classList.add("none");
    }
    skillSet[l % len].classList.remove("none");
  };
  forward.addEventListener("click", () => {
    l++;
    display(l, l + 0);
  });
  backward.addEventListener("click", () => {
    l--;
    display(l, l + 0);
  });
}
