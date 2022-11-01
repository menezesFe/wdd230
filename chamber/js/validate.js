const regex = /([a-zA-Z-\s]{7})/g;
let position = document.getElementById("title");
let text = position.value;
// let valid = document.getElementById("container");

position.addEventListener('keyup', function () {
    let test = regex.test(text);
    console.log(test);
    if (regex.test(text)) {
        position.style.backgroundColor = "green";
        console.log("Check");
    } else {
        position.style.backgroundColor = "red";
    };
    console.log(position.value);
});