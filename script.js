let apiKey = process.env.API_KEY;
let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    let inputtedCity = document.getElementById("userInput").value.trim()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputtedCity}&appid=${apiKey}&units=metric`).then(
        (response) => {
            return response.json()
        }
    ).then(
        (value) => {
            let tempHTML = value.main.temp;
            let cityNameHTML = value.name
            let feelsLike = value.main.feels_like;
            let weatherStatus = value.weather[0].main
            let weatherDescription = value.weather[0].description;
            let pressureHTML = value.main.pressure;
            let humidityHTML = value.main.humidity;
            let cloudHTML = value.clouds.all;
            let windSpeed = value.wind.speed;
            let weatherIcon = value.weather[0].icon
            let weatherDivs = document.querySelectorAll(".weather");
            weatherDivs.forEach(weatherDiv => {
                weatherDiv.style.backgroundColor = "white";
                weatherDiv.style.boxShadow = "0 4px 6px rgba(0,0,0,0.2)"
            })
            let temperatureDiv = document.getElementById("cityName");
            let statusDiv = document.getElementById("weather");
            let detailedDiv = document.getElementById("detailed");
            temperatureDiv.innerHTML = `<p>${cityNameHTML}</p> <p id = "special">${tempHTML}°C</p> <p>Feels Like: ${feelsLike}°C</p>`
            statusDiv.innerHTML = `<p>${weatherStatus}</p><img src = "https://openweathermap.org/img/wn/${weatherIcon}@2x.png"> <p>${weatherDescription}</p>`
            detailedDiv.innerHTML = `<br>Pressure: ${pressureHTML} hPa<br><br> Humidity: ${humidityHTML}%<br><br>Cloud Cover: ${cloudHTML}%<br><br>Wind Speed: ${windSpeed}m/s<br><br>`
            }).catch(
                (error) =>{
                    alert("Invalid City Name")
                }
)})