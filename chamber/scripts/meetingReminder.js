var message = document.querySelector('span');
var d = new Date();     
var dayOfWeek = d.getDay();

if (dayOfWeek == 1 || dayOfWeek == 2) {
    message.textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
    message.style.display = "block"
}
else {
    message.style.display = "none"
}
