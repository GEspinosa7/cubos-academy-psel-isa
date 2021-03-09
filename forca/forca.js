function solucao(palpite, palavra) {
	let qtd = 0;
    
    for (let letra of palavra) {
        if (palpite === letra) {
            qtd++;
        }
    }
    console.log(qtd);
}

console.log(solucao('a', 'abelha'));