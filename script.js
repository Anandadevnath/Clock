function seconds() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const secondHand = document.querySelector('.sec');
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}
function minutes() {
    const now = new Date();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const minuteHand = document.querySelector('.min');
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
}
function hours() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    const hourHand = document.querySelector('.hour');
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
function setdate() {
    seconds();
    minutes();
    hours();
}
setInterval(setdate, 1000);
setdate();