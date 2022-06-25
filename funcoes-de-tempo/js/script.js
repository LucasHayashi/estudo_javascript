let iniciar = document.getElementById('iniciar');
let parar = document.getElementById('parar');
let reiniciar = document.getElementById('reiniciar');
let timer = document.getElementById('timer');

let seg = document.querySelector('.seg');
let min = document.querySelector('.min');

let progress = document.getElementById('preenchimento');

let segundos = 0;
let minutos = 0;

let width = 0;

function iniciarCronometro(){
    teste = setInterval(() => {
        segundos+=1;
        width+=1.66;
        if (segundos < 10){
            seg.innerHTML = "0" + segundos;
            progress.style.width = width+"%";
            
        }else {
            seg.innerHTML = segundos;
            progress.style.width = width+"%";
        }
    
        if (segundos == 60){
            segundos = 0;
            minutos+=1;
            if (minutos < 10){
                min.innerHTML = "0" + minutos;
                seg.innerHTML = "0" + segundos;
            }else {
                min.innerHTML = minutos;
                seg.innerHTML = "0" + segundos;
            }
        }

        if (width == 97.94){
            width = 0;
            progress.style.width = width;
        }
    }, 1000);

    iniciar.setAttribute('disabled','');
}

function pausarCronometro(){
    clearInterval(teste);
    iniciar.removeAttribute('disabled');
    iniciar.innerText = 'Continuar';
}

function reiniciarCronometro(){
    clearInterval(teste);
    iniciar.removeAttribute('disabled');
    iniciar.innerText = 'Iniciar';
    min.innerHTML = "00";
    seg.innerHTML = "00";
    segundos = 0;
    minutos = 0;
}

iniciar.addEventListener('click',iniciarCronometro);

parar.addEventListener('click',pausarCronometro);

reiniciar.addEventListener('click',reiniciarCronometro);

/*exemplo de data*/

const agora = new Date();
const promocao = new Date('December 05 2021 23:59');

function converterEmDias(time) {
  return time / (24 * 60 * 60 * 1000);
}

const diasAgora = converterEmDias(agora);
const diasPromocao = converterEmDias(promocao);

const faltam = diasPromocao - diasAgora;