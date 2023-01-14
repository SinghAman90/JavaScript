const myStates = ["Chhatisgarh", "Delhi", "Assam", "Maharastra", "TamilNadu"];

myStates.forEach(element => { //for each loop
    console.log(element);
});

const names = ["Youtube", "facebook", "instagram", "netflix", 'amazon'];

for(const n of names){
    console.log(n);
}

const symbols = {
    yt : "youtube",
    ig : "instgram",
    fb : "facebook"
};

for(const n in symbols){
    console.log(symbols[n]);
}