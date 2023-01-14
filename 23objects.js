var user = {
    name : "",
    getUserName : function() {
        console.log(`User name is : ${this.name}`);
    },
};
var Aman = Object.create(user);
Aman.name = "Aman Singh Parihar";

Aman.getUserName();