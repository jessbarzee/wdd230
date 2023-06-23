
let temperature = document.querySelector("#current-temp")
let speed = document.querySelector("#speed")
let windChill = document.querySelector("#windChill")

// ------ For Weather info on index.html

// select HTML elements in the document
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=42.97&lon=-110.95&units=imperial&appid=8adace9cc107a4744eebee516233a46e';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
    apiFetch();

function displayResults(weatherData) {
    temperature.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    speed.innerHTML = `${weatherData.wind.speed.toFixed(0)}`;


    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

}

// windspeed = 35.74 + 0.6125t - 35.75s^0.16+ 0.4275ts^0.16 

console.log(temperature, speed)
if (temperature <= 50 && speed >= 3){
    let chill = Math.round((35.75 + (0.6215 *temperature)) - (35.75 * Math.pow(speed,0.16))+(0.4275*temperature*Math.pow(speed,0.16)));
    windChill.textContent = chill
}else {
    windChill.textContent = "N/A"
}


