function solucao(ganhos, serasaScore, mesesParaPagar) {
    
   let juros = 0;
   
   if ( serasaScore < 300) {
       juros = 3;
   }else if (serasaScore < 700) {
       juros = 9;
   }else {
       juros = 15;
   }
   
   let parcela = ((ganhos * 3) + (ganhos * (juros/100))) / mesesParaPagar;
   
   console.log(parcela);
}

console.log(solucao(4000, 800, 3));