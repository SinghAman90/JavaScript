const uno = () => {
    return "I am first";
};
// const dos = () => {
//     setTimeout(() => {
//        return "I am second"; 
//     }, 3000);
// };

const dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am two");
        }, 3000);
    });
}
const tres = () => {
    return "I am third";
};
const callme = async () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};

callme();