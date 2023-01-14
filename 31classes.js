class User{

    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    
    #courseList = []; // no var, let, const, to make it private we put hash in front of property anem
    
    getInfo(){ //no function prefix
        return {name: this.name, email: this.email};
    }
    enrollCourse(cname){
        this.#courseList.push(cname);
    }
    getCourseList(){
        return this.#courseList;
    }
    static login() { // to make it inaccesible to child classes
        return "You are logged in ";
    }
}

//inheritance in js using extends keyword
class SubAdmin extends User{
    constructor(name, email){
        super(name, email);
    }
    getAdminInfo() {
        return "I am SubAdmin";
    }
    login() {
        return "You are logged in as SubAdmin";
    }
}
module.exports = User; //exporting class to other programms

const rock = new User("rock", "rock@yahoo.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
console.log(rock.getCourseList());
console.log(rock.courseList);//unlike other languages property will not be by default private, we will explicitly define it as private by using hash symbol

const tom = new SubAdmin("tom", "toma@jerry.com");
console.log(tom.getAdminInfo());

//accesing parents method using child object
console.log(tom.login());
console.log(tom.getInfo());
