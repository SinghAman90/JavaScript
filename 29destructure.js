const user = ["Aman", 3, "admin"];
// var role = user[2];
// var name = user[0];

var [name, courseCount, role] = user;
console.log(role);

const myUser = {
    myName: "hitesh",
    courseCount: 5,
    myRole: "admin"
};
console.log(myUser.courseCount);
const {myName, mycourseCount, myRole} = myUser;

console.log(myRole);
console.log(mycourseCount); // it will be undefined, as name should be same in object notation as well as in while picking it up