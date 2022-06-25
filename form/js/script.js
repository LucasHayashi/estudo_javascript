const formulario = document.forms.formulario;

var valores = {};

function pegaTodosValores(event){
    valores[event.target.name] = event.target.value;
    console.log(valores);
}

function validaInput(event){
    const target = event.target;

    if(!target.checkValidity()) {
        target.classList.add('invalido');
        target.nextElementSibling.innerText = target.validationMessage;
      } else {
        target.classList.remove('invalido');
        target.nextElementSibling.innerText = "";
      }
    
}

formulario.addEventListener('change',validaInput);

formulario.addEventListener('change',pegaTodosValores);