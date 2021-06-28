
//api key: c242577ae678b9f9481126925b0063fe
/*openweather api: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} */

const API_KEY = "c242577ae678b9f9481126925b0063fe";
function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) =>{
        const weather = document.querySelector("#weather span:first-child");
        const cityAndTemp = document.querySelector("#weather p");
        weather.innerText = `${data.weather[0].main} `;
        cityAndTemp.innerText = `${data.main.temp}°C @ ${data.name}`
    });
}
function onGeoError(){
    alert("Can't get your location. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
