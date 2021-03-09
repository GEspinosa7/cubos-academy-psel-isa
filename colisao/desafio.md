Com o sucesso da sua ultima tarefa na Tesla, lhe foi passada uma melhoria.

A melhoria consiste em mostrar no visor do carro se ele irá colidir com um objeto em sua frente, usando a fórmula da sua tarefa anterior e a distância do objeto.

Seu programa sempre receberá como entrada a velocidade, aceleração e a distância do objeto e deverá imprimir na tela se o carro irá colidir ou não.

#### Input Format

A entrada será sempre três números inteiros: a velocidade, a aceleração e a distância.

#### Output Format

-   "COLISAO A FRENTE" quando a distância até o objeto for menor do que a distância de derrapagem do carro

-   "NAO ACELERE" quando as distâncias forem iguais

-   "CAMINHO SEGURO" quando a distância até o objeto for maior do que a distância de derrapagem do carro

### ATENTE-SE À CAPITALIZAÇÃO DA RESPOSTA, TUDO DEVERÁ ESTAR EM MAIÚSCULAS

#### Sample Input 0

      {
      "velocidade": 20,
      "aceleracao": -2,
      "distanciaObjeto": 500
      }

####Sample Output 0

      CAMINHO SEGURO

####Explanation 0

Como o resultado da fórmula será 100 e 100 é menor que 500, então CAMINHO SEGURO deverá ser mostrado na tela.
