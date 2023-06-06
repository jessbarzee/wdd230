// get the two input values of temperature and wind speed
let temperature = document.querySelector("#temperature").textContent
let speed = document.querySelector("#speed").textContent
let windChill = document.querySelector("#windChill")

// check to make sure they meet the specification limits  (<=50°F and >3.0mph) allowed to officially calculate the wind chill


// either calculate and display the wind chill factor value or display "N/A" (not applicable) if

// the input values did not meet the requirements.
// windspeed = 35.74 + 0.6125t - 35.75s^0.16+ 0.4275ts^0.16 
console.log(temperature, speed)
if (temperature <= 50 && speed >= 3){
    let chill = Math.round((35.75 + (0.6215 *temperature)) - (35.75 * Math.pow(speed,0.16))+(0.4275*temperature*Math.pow(speed,0.16)));
    windChill.textContent = chill
}else {
    windChill.textContent = "N/A"
}