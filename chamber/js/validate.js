const regex = /([A-Za-z\s\-]){7,}/;
let position = document.getElementById("title");

// let valid = document.getElementById("container");
// REGEx not working

// console.log(regex);

position.addEventListener('keyup', function () {
    let valid = regex.test(position.value);
    console.log(valid);
    if (valid) {
        // console.log(text);
        position.style.backgroundColor = "lightgreen";
        // console.log("Check");
    } else {
        position.style.backgroundColor = "#fff3bf";
    }
    console.log(position.value);
});