---
title: Lista de Exercícios I
description: Uma lista de exercícios de programação em javascript com a biblioteca p5
draft: false
tags:
---
<script src="./ExecI/exec-balls.js"></script>
<script src="./ExecI/exec-geo.js"></script>
<script src="./ExecI/exec-stars.js"></script>
<script src="./ExecI/exec-fibonacci.js"></script>
<script src="./ExecI/exec-exam.js"></script>
<script src="./ExecI/exec-factory.js"></script>
# Lista de atividades Programação:

## 1. VAR, LET, CONST

>Quais são as diferenças entre as variáveis do tipo var, let e const?

Declarações com __var__ tem escopo global ou escopo de função, podem ser declaradas de novo e atualizadas, e sofrem o `hoisting` e vão para o topo do escopo, sendo inicializadas com um valor de `undefined`.   

Variáveis __let__ têm escopo de bloco, pode ser atualizado, mas não declarado novamente e também sofrem o `hoisting` para o topo, porém não será inicializada.   

Variáveis declaradas com __const__ mantêm valores constantes, têm escopo de bloco não podem ser atualizadas nem declaradas novamente e sofrem o `hoisting` para o topo do escopo, mas não são inicializadas.  

## 2. Escopo

>O que significa escopo de função e escopo de bloco?

No escopo de função, as variáveis declaradas dentro da função, somente serão acessadas por dentro da função, não sendo possível acessá-las do lado de fora. No escopo de função, esse comportamento acontece independente da palavra chave usada na criação da variável ou constante.   

O escopo de bloco não está relacionado necessariamente a funções, estamos nos referindo por exemplo: if, for, while. No escopo de bloco é preciso atenção às palavras chaves para criação de variáveis, pois se utilizarmos let e const, o escopo do bloco será respeitado, mas se utilizarmos var, a variável poderá ser acessada de qualquer lugar do código, passando a ter o escopo global.  

## 3. Hoisting

>O que significa hoisting?

__Hoisting__ foi pensado como uma maneira geral de pensar sobre como os contextos de execução funcionam em JavaScript. Conceitualmente, uma definição estrita de hoisting sugere que as declarações de variáveis e funções são fisicamente movidas para o topo do seu código, mas isso não é realmente o que acontece. Em vez disso, as declarações de variável e função são colocadas na memória durante a fase de compilação.  

Em outras palavras, declarações de variáveis e funções são salvas na memória na compilação do seu código para que você possa chamá-las ou usá-las mesmo que antes de suas declarações.  

## 4. Geometria

>Quais são as funções existentes na biblioteca P5JS que servem para desenhar formas geométricas no canvas?

```js
point(), line(), triangle(), 
quad(), rect(), square(), 
circle(), ellipse(), arc()
```

## 5. Gravidade?

>Crie uma aplicação que desenhe círculos pequenos no topo da tela, os círculos devem cair lentamente até que no momento onde tocarem o chão crie outro círculo.

<div class="sketch-holder" id="exec-balls"></div>

## 6. Formas

>Crie uma aplicação que desenhe aleatoriamente um círculo, um quadrado ou um triângulo no centro da tela. Quando o usuário clicar na forma geométrica, ela deve trocar para outra forma geométrica.

<div class="sketch-holder" id="exec-geo"></div>

## 7. Estrelas

>Desenvolva um programa para criar uma representação de um céu noturno estrelado, onde estrelas e bolinhas são exibidas. Utilize vetores para armazenar as coordenadas de cada forma, garantindo que sejam geradas aleatoriamente.

<div class="sketch-holder" id="exec-stars"></div>

## 8. Fibonacci

>Utilizando estruturas de repetição, faça um programa que imprima n números da sequência de Fibonacci, onde n é a quantidade de termos que deve ser informada pelo usuário

<div class="sketch-holder" id="exec-fibonacci"></div>

## 9. Notas

>Um professor decidiu criar um programa em que possa inserir as notas de seus alunos em uma matrix 10 x 3, onde cada linha representa um aluno e cada coluna representa uma prova.
>O próprio programa insere as notas e, depois, deve gerar um relatório detalhado indicando, para cada aluno, em qual prova ele obteve a menor nota e qual sua média final.
>Além disso, ao final do relatório, o sistema deve fornecer informações sobre quantos alunos tiveram a menor nota em cada uma das 3 provas.

<div class="sketch-holder" id="exec-exam"></div>

## 10.Fábrica de Brinquedos

>Uma fábrica de brinquedos deseja calcular o salário mensal de seus funcionários com base na quantidade de brinquedos produzidos. Os funcionários são divididos em três categorias, de acordo com sua produtividade:
> - Categoria 1: Funcionários que produzem até 100 brinquedos por mês.
> - Categoria 2: Funcionários que produzem de 101 a 200 brinquedos por mês. 
> - Categoria 3: Funcionários que produzem mais de 200 brinquedos por mês. 
> 
>O salário dos funcionários é calculado da seguinte forma:
> - Funcionários da Categoria 1 recebem um salário fixo de R$1000,00. 
> - Funcionários da Categoria 2 recebem um salário base de R$1200,00 mais um adicional de R$2,00 por brinquedo produzido acima de 100. 
> - Funcionários da Categoria 3 recebem um salário base de R$1500,00 mais um adicional de R$3,00 por brinquedo produzido acima de 200.
> 
>Escreva um programa que receba o número de funcionários de cada categoria, o número de brinquedos produzidos por cada funcionário e calcule e exiba:
>- O salário total da fábrica. 
>- O número total de brinquedos produzidos no mês. 
>- O número médio de brinquedos produzidos por funcionário em cada categoria. 
>- O número do funcionário com o maior salário.
> 
>Considere que a fábrica possui 50 funcionários

<div class="sketch-holder" id="exec-factory"></div>