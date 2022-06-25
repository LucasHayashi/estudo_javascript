import countDown from "./countdown.js";

let dias = document.querySelector('.dias');
let horas = document.querySelector('.horas');
let minutos = document.querySelector('.minutos');
let segundos = document.querySelector('.segundos');

let endOfferDate = new Date("01 June 2022 00:00");

const endSpecialOffer = new countDown(endOfferDate);

const SpecialOfferTime = setInterval(() => {
    dias.innerText = endSpecialOffer.total.days;
    horas.innerText = endSpecialOffer.total.hours;
    minutos.innerText = endSpecialOffer.total.minutes;
    segundos.innerText = endSpecialOffer.total.seconds;
}, 1000);
