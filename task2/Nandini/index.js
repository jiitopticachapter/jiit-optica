const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// application user interface where we are getting the data(open weather map)(unit-metric to temp in C)(q-city name)
const apikey = "9d3ea3773d5ebff460c5c52453ed9d29";//authentication when requesting for using openweathermap data 

//represent field where we have to enter data
const cityname = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

searchbtn.addEventListener("click", async () => {
    const city = cityname.value;
    const response = await fetch(apiurl + city + `&appid=${apikey}`);//fetch for http request
    if (response.status == 404) {//404-not found
        alert("Wrong City Name");
        cityname.value = "";
    }
    else {
        const data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = 'images/clouds.png';
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = 'images/clear.png';
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = 'images/rain.png';
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = 'images/drizzle.png';
        }
        else if ((data.weather[0].main == "Mist") || (data.weather[0].main == "Haze")) {
            weathericon.src = 'images/mist.png';
        }
        document.querySelector(".weather").style.display = "block";//it will take the available screen wridth
    }
});