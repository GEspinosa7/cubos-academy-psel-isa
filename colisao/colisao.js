function solucao(velocidade, aceleracao, distanciaObjeto) {
   let distanciaDerrapagem = -(velocidade**2)/(2*aceleracao);
     
     if (distanciaObjeto === distanciaDerrapagem) {
         console.log("NAO ACELERE");
     }else if (distanciaObjeto < distanciaDerrapagem){
         console.log("COLISAO A FRENTE");
     }else {
         console.log("CAMINHO SEGURO");
     }
     
}

console.log(solucao(20, -2, 500))