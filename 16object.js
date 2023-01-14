var user = {
    firstName : "Aman",
    lastname : "Singh Parihar",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function(courseName){ //method inside object
        this.courseList.push(courseName);
    },
    getCourseCount : function () {
        return `${this.firstName} is enrolled in total of ${this,this.courseList.length}`;
    } 
};
user.buyCourse("Raact JS");
user.buyCourse("Angular JS");
console.log(user.getCourseCount());