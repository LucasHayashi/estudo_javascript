/*Usar export Default apenas quando for único*/
export function exibeNome(nome){
    console.log("O nome digitado foi "+nome);
}

export function exibeCarros(){
    let carros = ['Gol','Voyage','HB20','Civic'];
    carros.forEach( (item)=> console.log(item) );
}