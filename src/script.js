function todayFormatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
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
    "December",
  ];
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();
  let formattedDate = `${currentDay}, ${currentMonth} ${currentDate}, ${currentHour}:${currentMinutes}`;
  return formattedDate;
}
let now = new Date();
let today = document.querySelector(".date");
today.innerHTML = `${todayFormatDate(now)}`;

function dayTwoFormatDate(date) {
  let daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let dayTwoDay = daysShort[date.getDay()];
  let dayTwoMonth = monthsShort[date.getMonth()];
  let dayTwoDate = date.getDate();
  let formattedDateDayTwo = `${dayTwoDay}, ${dayTwoMonth} ${dayTwoDate}`;
  return formattedDateDayTwo;
}
let nowPlusTwoDays = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000);
let dayTwo = document.querySelector("#day-two");
dayTwo.innerHTML = `${dayTwoFormatDate(nowPlusTwoDays)}`;

function dayThreeFormatDate(date) {
  let daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let dayThreeDay = daysShort[date.getDay()];
  let dayThreeMonth = monthsShort[date.getMonth()];
  let dayThreeDate = date.getDate();
  let formattedDateDayThree = `${dayThreeDay}, ${dayThreeMonth} ${dayThreeDate}`;
  return formattedDateDayThree;
}
let nowPlusThreeDays = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
let dayThree = document.querySelector("#day-three");
dayThree.innerHTML = `${dayThreeFormatDate(nowPlusThreeDays)}`;

function dayFourFormatDate(date) {
  let daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let dayFourDay = daysShort[date.getDay()];
  let dayFourMonth = monthsShort[date.getMonth()];
  let dayFourDate = date.getDate();
  let formattedDateDayFour = `${dayFourDay}, ${dayFourMonth} ${dayFourDate}`;
  return formattedDateDayFour;
}
let nowPlusFourDays = new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000);
let dayFour = document.querySelector("#day-four");
dayFour.innerHTML = `${dayFourFormatDate(nowPlusFourDays)}`;

function dayFiveFormatDate(date) {
  let daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let dayFiveDay = daysShort[date.getDay()];
  let dayFiveMonth = monthsShort[date.getMonth()];
  let dayFiveDate = date.getDate();
  let formattedDateDayFive = `${dayFiveDay}, ${dayFiveMonth} ${dayFiveDate}`;
  return formattedDateDayFive;
}
let nowPlusFiveDays = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
let dayFive = document.querySelector("#day-five");
dayFive.innerHTML = `${dayFiveFormatDate(nowPlusFiveDays)}`;

function displayWeatherCondition(response) {
  document.querySelector(".currentCity").innerHTML = response.data.name;
  document.querySelector(".todayTemperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector(".todayWeather").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "81b29a104e42877f6afcd5cf8b6e7ac1";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "81b29a104e42877f6afcd5cf8b6e7ac1";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#localisation-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

function temperatureInCelsius() {
  let temperatureCelsius = document.querySelector(".todayTemperature");
  temperatureCelsius.innerHTML = `20`;
}

let celsiusButton = document.querySelector("#celsius");
celsiusButton.addEventListener("click", temperatureInCelsius);

function temperatureInFahrenheit() {
  let temperatureFahrenheit = document.querySelector(".todayTemperature");
  temperatureFahrenheit.innerHTML = `80`;
}

let fahrenheitButton = document.querySelector("#fahrenheit");
fahrenheitButton.addEventListener("click", temperatureInFahrenheit);
