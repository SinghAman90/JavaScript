const Aman = {
    firstName : "Aman",
    lastName : "Singh Parihar",
    role : "Admin",
    courseCount : 3,
    getInfo : function(){
        console.log(`
            First name is ${this.firstName}
            Last name is ${this.lastName}
            his role is ${this.role}
            and he is studying ${this.courseCount} courses
        `)
    }
};

const sam = {
    firstName : "Sam",
    lastName : "samson",
    role : "Admin",
    courseCount : 4
};
Aman.getInfo();
// sam.getInfo();, it will produce error
// to solve it , we'll use concept of binding or bind prototype for an function object

// var samInfo = Aman.getInfo.bind(sam);
// samInfo();

Aman.getInfo.call(sam);
