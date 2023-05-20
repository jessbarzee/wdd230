const message = document.querySelector('#cta');
const currentDay = new Date(Date.now()).getDay();

if (currentDay == [1]) {
    message = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'
}
if (currentDay ==  [2]) {
    message = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'
}
else {
    //do nothing
}

