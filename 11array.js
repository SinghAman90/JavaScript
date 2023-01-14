var countries = ["india", "usa", "japan", "russia"];

var states = new Array("C.G.", "M.P.", "Maharastra", "Odisha");

console.log(states[1]);
console.log(countries.length);

//unlike other langugaes we can have where data types of ots contenet can be different
states.pop();
console.log(states);
states.push("AndhraPradesh");
console.log(states);
states.unshift("Delhi"); // for pushing values at the starting of array
console.log(states);
states.shift(); // for poping values from begining of array
console.log(states);


console.log(Array.from("Aman"));
