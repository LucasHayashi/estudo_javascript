// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

let piada = document.getElementById('piada');

let btnProxima = document.getElementById('proxima');

btnProxima.addEventListener('click',gerarPiada);

function gerarPiada(){
  const piadaAleatoria = fetch('https://api.chucknorris.io/jokes/random')
  .then(tipo => {return tipo.json();})
  .then(body => { piada.innerText = body.value});
}

let bitcoin = document.getElementById('bitcoin');
/*
setInterval(function(){
  const bitcoinBRL = fetch('https://blockchain.info/ticker')
  .then(tipo=> {return tipo.json()})
  .then(body=> {
    bitcoin.innerText = `R$ ${body.BRL.last}`;
    console.log('oi')
  });  
},30000);
*/

let buscar = document.getElementById('buscar');

function carregaEndereco(event){
    event.preventDefault();
    let CEP = document.getElementById('cep').value;
    importarDados(CEP);
}

function importarDados(CEP){
    let div = document.getElementById('endereco');

    const endereco = fetch(`https://viacep.com.br/ws/${CEP}/json/`)
                      .then(tipo => {return tipo.json()})
                      .then(body => {
                        for (obj in body){
                            div.innerHTML += `${obj}: ${body[obj]} <br>`;
                        }
                      });
}

buscar.addEventListener('click',carregaEndereco);


const invocador = fetch('https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Hayashi2',{
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "Access-Control-Allow-Methods",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36 Edg/96.0.1054.43",
    "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://developer.riotgames.com",
    "X-Riot-Token": "RGAPI-4ed47d2c-eee3-46a1-a32f-076e4803b766"
  }
})
