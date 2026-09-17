document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Última modificación: " + document.lastModified;

const temp = parseFloat(document.getElementById('temp').textContent);
const wind = parseFloat(document.getElementById('wind').textContent);
let chill = "N/A";

if (temp <= 10 && wind > 4.8) {
    chill = (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1) + " °C";
} else {
    chill = "N/A";
}
document.getElementById('windchill').textContent = chill;