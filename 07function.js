//create an application with following roles
//admin : gets full access
//subadmin : gets access to create/delete courses
//testprep : prpares test
//user : gets access to consume content
// function getUserRole

function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break; // this is not necessary
        case "subadmin":
            return `${name} is sub admin with access to create and delete`;
            break;
        case "testprep":
            return `${name} is testprep with access to create and delete test papers`
            break;
        case "user":
            return `${name} is user and have access to contents`
            break;
        default:
            return `${name} is trial user`;
            break;
    }
}
var getUser = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break; // this is not necessary
        case "subadmin":
            return `${name} is sub admin with access to create and delete`;
            break;
        case "testprep":
            return `${name} is testprep with access to create and delete test papers`
            break;
        case "user":
            return `${name} is user and have access to contents`
            break;
        default:
            return `${name} is trial user`;
            break;
    }
}
console.log(getUserRole("Aman", "subadmin"));
console.log()