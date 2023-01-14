var joke;

fetch('https://api.chucknorris.io/jokes/random')
.then((response) => {
    return response.json();
})
.then((data) => {
    // console.log("DATA is : ", data);
    var joke = data.value;
    console.log("joke is : ", joke);
})
.catch();
