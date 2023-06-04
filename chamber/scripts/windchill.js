// get the two input values of temperature and wind speed

// get value for temperature
function temperature(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
console.log("Random Number between 1 and 100: ")

console.log( windspeed(1, 100) );

// get value for windspeed
function windspeed(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

console.log("Random Number between 1 and 100: ")

console.log( windspeed(1, 50) );



// check to make sure they meet the specification limits  (<=50°F and >3.0mph) allowed to officially calculate the wind chill

// either calculate and display the wind chill factor value or display "N/A" (not applicable) if

// the input values did not meet the requirements.