const courses = [
    {
        name :"Complete JS course",
        price: "299"
    },
    {
        name: "Complete React Js course",
        price: "399"
    },
    {
        name: "Complete Backend course",
        price: "599"
    },
    {
        name: "Complete C++ course",
        price: "499"
    },
];
function generateList(){
    const ul = document.querySelector(".classList");
    ul.innerHTML = ""; //resetting list content to null
    courses.forEach(course => {
        const li = document.createElement("li");//creating new element
        li.classList.add("courses");//adding classname to that element
        const p = document.createElement("p");
        const span = document.createElement("span");
        span.classList.add("price");
        const name = document.createTextNode(course.name);
        p.appendChild(name);
        const price = document.createTextNode(course.price);
        span.textContent = "₹";
        span.appendChild(price);
        p.appendChild(span);
        li.append(p);
        ul.appendChild(li);
    })
    
}
// generateList(); //appending new list item into course list

window.addEventListener("load", generateList); // appending new list items into course list on page loading

const button = document.querySelector(".sortButton");

button.addEventListener("click", () => {
    courses.sort( (a,b) => a.price - b.price); // for sorting in ascending order
    // courses.sort((a,b) => b.price - a.price); // for sorting in descending order
    generateList();
})