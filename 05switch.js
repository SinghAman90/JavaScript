//create an application with following roles
//admin : gets full access
//subadmin : gets access to create/delete courses
//testprep : prpares test
//user : gets access to consume content

var user = 'testprep';

switch (user) {
    case "admin":
        console.log("You got full access");
        break;
    case "subadmin":
        console.log("You got partial access");
        break;
    case "testprep":
        console.log("You got acces to prepare test");
        break;
    case "user":
        console.log("You can consume content");
        break;
    default:
        console.log("Trial User");
        break;
}