// Miami ID = 4164138
let temp = parseFloat(document.getElementById("temperature").textContent);
let speed = parseFloat(document.getElementById("w-speed").textContent);
let windChill = 35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + 0.4275 * temp * (speed ** 0.16);

if (temp > 50 || speed < 3.0) {
    document.getElementById("chill").textContent = "N/A";
} else {
    document.getElementById("chill").textContent = windChill.toFixed(1);
}
