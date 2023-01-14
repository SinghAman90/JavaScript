var users = ["ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
console.log(users.slice(1,3)); //starting index is inclusive and ending index is exclusive


users.splice(1,3,'HI');//staring index, count from starting index and replace whole by 'HI'


console.log(users);