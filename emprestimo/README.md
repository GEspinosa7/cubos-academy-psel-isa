Um novo banco abriu em seu estado e liberou a fórmula que ele utiliza para calcular o valor da parcela de um tipo de empréstimo.

A fórmula precisa de 3 dados, os ganhos por mês da pessoa, seu score no Serasa e em quantos meses a pessoa pretende pagar.

      parcela = ganhos * 3 + (ganhos * (juros/100)) / mesesParaPagar

Existem 3 faixas de juros que as pessoas se encaixam dependendo de seu score no Serasa:

-   1ª faixa (Score menor que 300), juros = 3%;
-   2ª faixa (Score menor que 700), juros = 9%;
-   3ª faixa (Score maior ou igual a 700), juros = 15%;

Um amigo seu viu isso como uma forma de empreender e decidiu criar um aplicativo que calcula o valor da parcela. Para fazer isso ele pediu a sua ajuda.

Seu programa receberá sempre como entrada os ganhos da pessoa, seu score no Serasa e em quantos meses a pessoa pagará e deverá imprimir na tela o valor da parcela.

#### Input Format

A entrada será sempre três números inteiros:

-   os ganhos da pessoa
-   seu score no Serasa
-   em quantos meses a pessoa pagará.

#### Output Format

A saída deverá ser sempre um número representando o valor da parcela.

#### Sample Input 0

      {
         "ganhos": 4000,
         "serasaScore": 800,
         "mesesParaPagar": 3
      }

#### Sample Output 0

      4200
