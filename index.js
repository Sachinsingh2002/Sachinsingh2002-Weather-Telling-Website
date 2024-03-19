// TO Access the API go to openweathermap.org and API Doc and current weather api and Built in api request by city Name..

function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = 'e228f81492fff4dc1361198f554d8d47';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response=>response.json())
        .then(data=>{
            const weatherInfo = document.getElementById("weatherInfo");
            const temparature = data.main.temp;
            const windSpeed = data.wind.speed;
            const atomosphere = data.weather[0].main; 
            const description = data.weather[0].description;

            weatherInfo.innerHTML = 
            `<p>Temparature: ${temparature} &#8451;</p>
             <p>Wind Speed: ${windSpeed} km/h
             <p>Atmosphere: ${atomosphere}
             <p>Description: ${description}`
        })
        .catch(error => {
            console.log("Error fetching weather Data:",error);
            alert("Error while fetching Data ! Try again!");
        });
}

