function solucao(velocidade, aceleracao) {
	let distancia = -(velocidade**2)/ (2 * aceleracao); 
    console.log(distancia);
}

console.log(solucao(20, -2));