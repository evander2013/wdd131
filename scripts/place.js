document.getElementById("currentyear").textContent =
new Date().getFullYear();

document.getElementById("lastModified").textContent =
`Last Modified: ${document.lastModified}`;

const temperature = 8;
const windSpeed = 10;

function calculateWindChill(t, s) {
    return (
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(s, 0.16) +
        0.3965 * t * Math.pow(s, 0.16)
    ).toFixed(1);
}

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed)} °C`;
}

document.getElementById("windchill").textContent = windChill;