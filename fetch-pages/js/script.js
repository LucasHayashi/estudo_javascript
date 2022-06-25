// window.addEventListener('popstate', () => {
//     fetchPage(window.location.pathname);
//     console.log('lucas')
//   });  

let menu = document.querySelectorAll('.menu li');

menu.forEach( link => {
    link.addEventListener('click',pegaURL);
});

function pegaURL(event){
    event.preventDefault();
    pegaHTML(event.target.href);
    window.history.pushState(null,null,event.target.href);
}

function geraHTML(htmlString){
    let newHTML = document.createElement('div');

    newHTML.innerHTML = htmlString;
    
    let oldContent = document.querySelector('.container');
    let newContent = newHTML.querySelector('.container')
    
    oldContent.innerHTML = newContent.innerHTML;

    document.title = newHTML.querySelector('title').innerHTML;
}

async function pegaHTML(url) {
    const pageReponse = await fetch(url);
    const pageText = await pageReponse.text();
    geraHTML(pageText);
  }

  window.addEventListener('popstate', function(){
      pegaHTML(window.location.href);
  })

