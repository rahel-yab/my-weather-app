let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(axios);

function showCity(event) {
  event.preventDefault();
  let currentCity = document.querySelector(".search-input").value;
  showTemp(currentCity);
}
function showTemp(city) {
  let key = "4at0eb64a44133d38bobabb147b38f4d";
  let api = `https://api.shecodes.io/weather/v1/current?query=${city}}&key=${key}`;
  axios.get(api).then(showWeather);
}
function showWeather(response) {
  let city2 = document.querySelector("h1");
  city2.innerHTML = response.data.city;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.condition.description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  let wind = document.querySelector("#wind-speed");
  wind.innerHTML = `${response.data.wind.speed}km/hr`;
  let temp = Math.round(response.data.temperature.current);
  let currentTemp = document.querySelector(".temp");
  currentTemp.innerHTML = temp;
  let now = new Date();
  let day = document.querySelector(".day");
  let hour = document.querySelector(".hour");
  let minute = document.querySelector(".minute");
  day.innerHTML = days[now.getDay()];
  hour.innerHTML = now.getHours();
  minute.innerHTML = now.getMinutes();
}
let form = document.querySelector(".search-form");
form.addEventListener("submit", showCity);
