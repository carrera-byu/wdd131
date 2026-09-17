document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastmod').textContent = document.lastModified;

function calculateWindChill(t, v) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1) + "°C";
}

const temp = parseFloat(document.getElementById('temp').textContent);
const wind = parseFloat(document.getElementById('wind').textContent);
let result = "N/A";
if (temp <= 10 && wind > 4.8) {
    result = calculateWindChill(temp, wind);
}
document.getElementById('windchill').textContent = result;