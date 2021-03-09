function solucao(numero, x) {
	if (numero % x === 0){
       return true
    }else {
        return false
    }
}

console.log(solucao(6, 2)); //true
console.log(solucao(6, 4)); //false