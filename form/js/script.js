const formulario = document.forms.formulario;
const btnEnviar = document.getElementById('btnEnviar');
const resultado = document.getElementById('resultado');
const valores = document.getElementById('valores');

function pegaTodosValores(event) {
  valores[event.target.name] = event.target.value;

  valores.innerHTML = JSON.stringify(valores, null, 2);
}

function validaInput(event) {
  const target = event.target;

  if (!target.checkValidity()) {
    target.classList.add('invalido');
    target.nextElementSibling.innerText = target.validationMessage;
  } else {
    target.classList.remove('invalido');
    target.nextElementSibling.innerText = "";
  }

}

formulario.addEventListener('change', validaInput);

formulario.addEventListener('change', pegaTodosValores);

btnEnviar.addEventListener('click', function (event) {
  event.preventDefault();
  const inputs = formulario.querySelectorAll('input');
  let allValid = true;

  inputs.forEach(input => {
    if (!input.checkValidity()) {
      input.classList.add('invalido');
      input.nextElementSibling.innerText = input.validationMessage;
      allValid = false;
    } else {
      input.classList.remove('invalido');
      input.nextElementSibling.innerText = '';
    }
  });

  if (allValid) {
    resultado.innerText = 'Tudo certo!';
  } else {
    resultado.innerText = 'Há campos inválidos!';
  }
});