const currentDay = new Date();
let day = currentDay.getDay();
if (day == "1" || day == "2") {
    document.getElementsByClassName("banner")[0].classList.add("active");
} 

// console.log(currentDay);
// else {
//     document.getElementsByClassName("banner")[0].classList.toggle("dayoff");
// }

// document.getElementById("banner1").classList.remove("dayoff");
// document.getElementsByClassName("banner")[0].classList.add("active");

bannerBtn.onclick = () => {
    const el = document.querySelector('#bannerone');
    el.classList.remove("active");
}