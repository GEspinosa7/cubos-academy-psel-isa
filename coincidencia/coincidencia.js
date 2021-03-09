function solucao(jogadas) {
   let um = 0;
   let zero = 0;
   
 for (let i of jogadas) {
     if (i === 0) {
         zero++;
     }else if (i === 1){
         um++;
     }
     
 }
   if (um === zero) {
       console.log(true);
   }else {
       console.log(false);
   }
}

let array1 = [1,0,0,1];
let array2 = [1,1,1,0,0,1];

console.log(solucao(array1)); //true
console.log(solucao(array2)); //false