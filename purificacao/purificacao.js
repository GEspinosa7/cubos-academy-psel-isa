function solucao(stringCorrompida) {
    
    
   let stringPurificada = stringCorrompida.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
   
   console.log(stringPurificada);
   
}

console.log(solucao("*Canis %lupus )familiaris"));