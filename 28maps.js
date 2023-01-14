var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "tres");
myMap.set(4, "Curatro");

console.log(myMap);

for (const [key,value ]  of myMap) {
    console.log(`key is ${key} and value is ${value}`);
}









