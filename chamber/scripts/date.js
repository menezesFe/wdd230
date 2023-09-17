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
let curDay = new Date();
// console.log(currentDay);
let year = d.getFullYear();
let dayName = dayNames[d.getDay()];
let monthName = months[d.getMonth()];
let fullDate = d.getMonth() + "/" + d.getDate() + "/" + year + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
//current Dates
let cDayName = dayNames[curDay.getDay()];
let cMonthName = months[curDay.getMonth()];
let cYear = curDay.getFullYear();
let spelledDate = cDayName + ", " + curDay.getDate() + " " + cMonthName + " " + cYear;

document.getElementById("currentDate").textContent = spelledDate;
document.getElementById("modifiedDate").textContent = fullDate;
document.querySelector("#currentYear").textContent = year;
let x = new Date();
document.getElementById("date-current").value = x;
/**************************************** */