let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date(document.lastModified);
let year = d.getFullYear();
let dayName = dayNames[d.getDay()];
let monthName = months[d.getMonth()];
let fullDate = dayName + ", " + monthName + " " + d.getDate() + ", " + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

document.getElementById("currentDate").textContent = fullDate;
document.querySelector("#currentYear").textContent = year;
/**************************************** */