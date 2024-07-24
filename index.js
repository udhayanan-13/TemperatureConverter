<<<<<<< HEAD
const temperature = document.getElementById("temperature");
const tofahrenheit = document.getElementById("tofahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

let temp;

function convert() {
  if (tofahrenheit.checked) {
    temp = Number(temperature.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = `${temp.toFixed(1)} ℉`;
  } else if (toCelcius.checked) {
    temp = Number(temperature.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = `${temp.toFixed(1)} ℃`;
  } else {
    result.textContent = "Select a unit";
  }
}
=======
const temperature = document.getElementById("temperature");
const tofahrenheit = document.getElementById("tofahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

let temp;

function convert() {
  if (tofahrenheit.checked) {
    temp = Number(temperature.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = `${temp.toFixed(1)} ℉`;
  } else if (toCelcius.checked) {
    temp = Number(temperature.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = `${temp.toFixed(1)} ℃`;
  } else {
    result.textContent = "Select a unit";
  }
}
>>>>>>> 972eb2f6138fd6703b53a8b8a0b01322a2364eb8
