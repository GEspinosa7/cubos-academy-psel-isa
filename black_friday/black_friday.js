function solucao(produtos, valorMaximo, avaliacaoMinima) {
   let validos = [];
   
   for(let i of produtos){
       if (i.valor <= valorMaximo && i.avaliacao >= avaliacaoMinima) {
           validos.push(i);
       }
   }
   console.log(validos);
 
}

let produtos = [
      {
      "valor": 100,
      "avaliacao": 5
      },
      {
      "valor": 230,
      "avaliacao": 4
      },
      {
      "valor": 12,
      "avaliacao": 4.5
      },
      {
      "valor": 550,
      "avaliacao": 2
      },
      {
      "valor": 1000,
      "avaliacao": 4.8
      },
      {
      "valor": 26,
      "avaliacao": 5
      },
      {
      "valor": 30,
      "avaliacao": 1
      },
      {
      "valor": 2800,
      "avaliacao": 3.6
      },
      {
      "valor": 340,
      "avaliacao": 2.2
      },
      {
      "valor": 3670,
      "avaliacao": 1.8
      }
   ];

   let valorMaximo = 600
   let avaliacaoMinima = 3.5


console.log(solucao(produtos, valorMaximo, avaliacaoMinima));