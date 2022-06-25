let botaoAbrir = document.querySelector("[data-modal='abrir']");
let botaoFechar = document.querySelector("[data-modal='fechar']");
let modalContainer = document.querySelector("[data-modal='container']");


function modalToggle(event) {
    event.preventDefault();
    modalContainer.classList.toggle('ativo');
};

function clickForaModal(event){
    if (event.target === this){
        modalContainer.classList.remove('ativo');
    }
}

botaoAbrir.addEventListener('click',modalToggle);

botaoFechar.addEventListener('click',modalToggle);

modalContainer.addEventListener('click',clickForaModal);