// import User from "./31classes"

const User = require("./31classes.js");

const Aman = new User("Aman", "pariharaman490@gmail.com");
console.log(Aman.getInfo());
Aman.enrollCourse("React Bootcamp");
Aman.enrollCourse("Angular Bootcamp");

let courses = Aman.getCourseList();

courses.forEach((c) =>console.log(c));