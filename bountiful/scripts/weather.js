let date1=document.querySelector("#date-1")
let temperature1 = document.querySelector("#current-temp-1")
let humidity1 =document.querySelector("#humidity-1")

let date2=document.querySelector("#date-2")
let temperature2 = document.querySelector("#current-temp-2")
let humidity2 =document.querySelector("#humidity-2")

let date3=document.querySelector("#date-3")
let temperature3 = document.querySelector("#current-temp-3")
let humidity3 =document.querySelector("#humidity-3")

// ------ For Weather info on index.html

// select HTML elements in the document
const weatherIcon1 = document.querySelector('#weather-icon-1');
const captionDesc1 = document.querySelector('#figcaption-1');

const weatherIcon2 = document.querySelector('#weather-icon-2');
const captionDesc2 = document.querySelector('#figcaption-2');

const weatherIcon3 = document.querySelector('#weather-icon-3');
const captionDesc3 = document.querySelector('#figcaption-3');


const url = 'http://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&units=imperial&appid=8adace9cc107a4744eebee516233a46e';

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

    // Day 1
    date1.innerHTML =`${weatherData.list[0].dt_txt}`
    temperature1.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>`;
    humidity1.innerHTML = `${weatherData.list[0].main.humidity.toFixed(0)}`;

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`;
    const desc = weatherData.list[0].weather[0].description;

    weatherIcon1.setAttribute('src', iconsrc);
    weatherIcon1.setAttribute('alt', desc);
    captionDesc1.textContent = desc;

    // Day 2
    date2.innerHTML =`${weatherData.list[8].dt_txt}`
    temperature2.innerHTML = `<strong>${weatherData.list[8].main.temp.toFixed(0)}</strong>`;
    humidity2.innerHTML = `${weatherData.list[8].main.humidity.toFixed(0)}`;

    const iconsrc2 = `https://openweathermap.org/img/wn/${weatherData.list[8].weather[0].icon}@2x.png`;
    const desc2 = weatherData.list[8].weather[0].description;

    weatherIcon2.setAttribute('src', iconsrc2);
    weatherIcon2.setAttribute('alt', desc2);
    captionDesc2.textContent = desc2;

    //Day 3
    date3.innerHTML =`${weatherData.list[16].dt_txt}`
    temperature3.innerHTML = `<strong>${weatherData.list[16].main.temp.toFixed(0)}</strong>`;
    humidity3.innerHTML = `${weatherData.list[16].main.humidity.toFixed(0)}`;

    const iconsrc3 = `https://openweathermap.org/img/wn/${weatherData.list[16].weather[0].icon}@2x.png`;
    const desc3 = weatherData.list[16].weather[0].description;

    weatherIcon3.setAttribute('src', iconsrc3);
    weatherIcon3.setAttribute('alt', desc3);
    captionDesc3.textContent = desc3;

}



