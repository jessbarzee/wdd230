
const datefieldUK = document.querySelector("aside");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// "full" or long, medium, short options ... try them

datefieldUK.textContent = fulldate;
datefieldUK.innerHTML = `${fulldateUK}`;