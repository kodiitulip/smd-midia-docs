---
title: Lista de Exercícios I
description: Uma lista de exercícios de programação em javascript com a biblioteca p5
draft: false
tags:
---
<script scr="./Exec1/exec1-5.js"></script>
<script scr="./Exec1/exec1-6.js"></script>
<"script" scr="./Exec1/exec1-7.js"></"script">

# Lista de atividades Programação:

## 1. Quais são as diferenças entre as variáveis do tipo var, let e const?

Declarações com __var__ tem escopo global ou escopo de função, podem ser declaradas de novo e atualizadas, e sofrem o `hoisting` e vão para o topo do escopo, sendo inicializadas com um valor de `undefined`.   

Variáveis __let__ têm escopo de bloco, pode ser atualizado, mas não declarado novamente e também sofrem o `hoisting` para o topo, porém não será inicializada.   

Variáveis declaradas com __const__ mantêm valores constantes, têm escopo de bloco não podem ser atualizadas nem declaradas novamente e sofrem o `hoisting` para o topo do escopo, mas não são inicializadas.  

## 2. O que significa escopo de função e escopo de bloco?

No escopo de função, as variáveis declaradas dentro da função, somente serão acessadas por dentro da função, não sendo possível acessá-las do lado de fora. No escopo de função, esse comportamento acontece independente da palavra chave usada na criação da variável ou constante.   

O escopo de bloco não está relacionado necessariamente a funções, estamos nos referindo por exemplo: if, for, while. No escopo de bloco é preciso atenção às palavras chaves para criação de variáveis, pois se utilizarmos let e const, o escopo do bloco será respeitado, mas se utilizarmos var, a variável poderá ser acessada de qualquer lugar do código, passando a ter o escopo global.  

## 3. O que significa hoisting?

__Hoisting__ foi pensado como uma maneira geral de pensar sobre como os contextos de execução funcionam em JavaScript. Conceitualmente, uma definição estrita de hoisting sugere que as declarações de variáveis e funções são fisicamente movidas para o topo do seu código, mas isso não é realmente o que acontece. Em vez disso, as declarações de variável e função são colocadas na memória durante a fase de compilação.  

Em outras palavras, declarações de variáveis e funções são salvas na memória na compilação do seu código para que você possa chamá-las ou usá-las mesmo que antes de suas declarações.  

## 4. Quais são as funções existentes na biblioteca P5JS que servem para desenhar formas geométricas no canvas?

```js
point(), line(), triangle(), 
quad(), rect(), square(), 
circle(), ellipse(), arc()
```

## 5. Crie uma aplicação que desenhe círculos pequenos no topo da tela, os círculos devem cair lentamente até que no momento onde tocarem o chão crie outro círculo.

<div class="sketch-holder" id="exec1-q5"></div>

## 6. Crie uma aplicação que desenhe aleatoriamente um círculo, um quadrado ou um triângulo no centro da tela. Quando o usuário clicar na forma geométrica, ela deve trocar para outra forma geométrica.

<div class="sketch-holder" id="exec1-q6"></div>

## 7. Desenvolva um programa para criar uma representação de um céu noturno estrelado, onde estrelas e bolinhas são exibidas. Utilize vetores para armazenar as coordenadas de cada forma, garantindo que sejam geradas aleatoriamente.

<div class="sketch-holder" id="exec1-q7"></div>

