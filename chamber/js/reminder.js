const currentDay = new Date();
if (currentDay == "1" || currentDay == "2") {
    document.getElementsByClassName("banner")[0].classList.toggle("active");
} 
// else {
//     document.getElementsByClassName("banner")[0].classList.toggle("dayoff");
// }

// document.getElementById("banner1").classList.remove("dayoff");

bannerBtn.onclick = () => {
    const el = document.querySelector('#bannerone');
    el.classList.remove("dayoff");
}