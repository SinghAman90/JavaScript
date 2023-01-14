//for all regular funtion calls, this points to window object
console.log(this);//in local machine i.e. node it will show empty, but in console it will show window object
var user = {
    firstName : "Aman",
    courseCount : 4,
    getCourseCount : function(){
        console.log('Line 7', this);
        function sayHello(){
            console.log("Hello");
            console.log("Line 10", this);
        }
        sayHello();//it is a regular function call
    }
}; 
user.getCourseCount();// it is not regular function call, it is object function call