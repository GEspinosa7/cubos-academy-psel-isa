function solucao(resultado1, resultado2, resultado3) {
	if(resultado1 === resultado2 && resultado1 === resultado3){
        console.log(true);
    }else {
        console.log(false);
    }
}

console.log(solucao('A', 'A', 'C'));