O Tesla Model X é um carro autônomo que consegue dirigir sozinho. Para evitar acidentes, o carro deve ser capaz de calcular qual a distância que ele percorrerá, ao iniciar o processo de frenagem, até parar.

Você acabou de ser contratado(a) como desenvolver(a) de software na Tesla. Sua primeira tarefa é fazer um programa capaz de calcular essa distância. A fórmula para o cálculo é a seguinte:

       distancia = - velocidade² / 2 * aceleracao

Seu programa sempre receberá como entrada a a velocidade e a aceleração e deverá imprimir na tela a distância percorrida pelo carro até parar.

#### Input Format

A entrada será sempre composta por dois números inteiros: a velocidade e a aceleração.

#### Output Format

A saída deverá ser sempre um número representando a distância percorrida pelo carro ao longo da frenagem.

#### Sample Input 0

       {
       "velocidade": 20,
       "aceleracao": -2
       }

#### Sample Output 0

       100

#### Explanation 0

Como a velocidade é 20 e a aceleração -2, a distância será 100.
