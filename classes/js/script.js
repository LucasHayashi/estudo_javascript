import countDown from "./countdown.js";

function startCountdown(dataFutura) {
    const endSpecialOffer = new countDown(dataFutura);
    if (timer) {
        clearInterval(timer);
    }
    timer = setInterval(() => {
        dias.innerText = endSpecialOffer.total.days;
        horas.innerText = endSpecialOffer.total.hours;
        minutos.innerText = endSpecialOffer.total.minutes;
        segundos.innerText = endSpecialOffer.total.seconds;
    }, 1000);
}

function stopCountdown() {
    clearInterval(timer);
}

let dias = document.querySelector('.dias');
let horas = document.querySelector('.horas');
let minutos = document.querySelector('.minutos');
let segundos = document.querySelector('.segundos');
let btnIniciar = document.getElementById('btnIniciar');
let btnParar = document.getElementById('btnParar');
let timer = null;

btnIniciar.addEventListener('click', () => {
    let endOfferDate = document.getElementById('data_fim').value;

    if (endOfferDate == '') {
        alert('Por favor, preencha a data');
        return;
    }

    startCountdown(new Date(endOfferDate));
});
btnParar.addEventListener('click', stopCountdown);