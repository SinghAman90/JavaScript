var User = function(firstName, courseCount) { //way of defining a oobject, more like a class in other languages
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is : ${this.courseCount}`);
    };
}

User.prototype.getFirstName = function () { // defining a function for a object, from outside object function
    console.log(`Your first name is : ${this.firstName}`);
}

var Aman = new User('Aman', 2);
// console.log(Aman);

var sam = new User('Sam', 3);
// console.log(sam);

Aman.getFirstName();
Aman.getCourseCount();
sam.getCourseCount();