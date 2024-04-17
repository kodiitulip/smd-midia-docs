---
title: Bandeiras
description: Um documento descrevendo o processo de criação de uma aplicação que desenha bandeiras do Japão com proporções adequadas
draft: false
tags:
---
<script src="./Bandeiras/flags.js"></script>

# O Objetivo

| Crie uma aplicação que apresenta, em um canvas de 800 x 600px, 100 bandeiras do Japão com larguras randômicas variando entre 5 e 30 px. |
| :-------------------------------------------------------------------------------------------------------------------------------------: |

Okay então, aqui está nosso objetivo de hoje!  
  
vamos primeiro a como vamos fazer a bandeira do Japão:  

![[japao.png | center]]

Como podemos ver a bandeira está dividida em _módulos_.  
Você pode ver que a largura da bandeira se encontra como 3 unidades e a altura se encontra com 2 unidades.  
Essas unidades permitem que possamos utilizar qualquer largura de bandeira e nosso desenho se manterá nas proporções adequadas  

## Vamos a um exemplo

Digamos que eu queira fazer uma bandeira de 120 cm de largura usando esse design.  
1. Primeiro descobrimos o valor de um módulo:
$$
	Modulo = 120cm / 3u 
$$
$$
	Modulo = 40cm 
$$

2. Agora que sabemos o valor de 1 módulo (_ou 1u_) podemos então multiplicar esse valor de 1 módulo pelos valores no design original.

## Vamos ao código

Para manter nosso código bem organizado vamos criar uma função utilizando o valor de 120 como a largura que queremos:  
_(não se esqueça de adicionar a função ao `draw()`)_

```js
function desenharBandeira() {
	let modu = 300 / 3; // pegamos o valor de um módulo
	
	let larg = 3 * modu; // usando o valor de um módulo calculamos a largura
	let altu = 2 * modu; // e a altura
	
	fill(255);
	rect(0, 0, larg, altu); // e aplicamos ao rect
}
```

Agora devemos ver algo assim:  

<div class="sketch-holder" id="flags-rect"></div>

_caso as imagens não estejam aparecendo por favor recarregue a página_

Agora vamos fazer o círculo vermelho  
O círculo esta exatamente no centro do retângulo, então suas posições x e y serão a metade da largura e altura. E seu diâmetro é exatamente 1.2 `modu`  
_aproveite e coloque `noStroke()`_

```js
function desenharBandeira() {
	let modu = 300 / 3; // pegamos o valor de um módulo
	
	let larg = 3 * modu; // usando o valor de um módulo calculamos a largura
	let altu = 2 * modu; // e a altura
	noStroke();
	
	fill(255);
	rect(0, 0, larg, altu); // e aplicamos ao rect
	fill('#BC002D');
	circle(larg / 2, altu / 2, 1.2 * modu);
}
```

<div class="sketch-holder" id="flags-circle"></div>

_caso as imagens não estejam aparecendo por favor recarregue a página_

# Modularidade

Agora que temos nossa bandeira completa, vamos fazer nosso código se adaptar  

Para fazer isso corretamente precisamos que nossa função receba algum tipo de input, e podemos fazer isso com _parâmetros_  

```js
function desenharBandeira(largura) {
	let modu = largura / 3; // pegamos o valor de um módulo
	
	let larg = 3 * modu; // usando o valor de um módulo calculamos a largura
	let altu = 2 * modu; // e a altura
	noStroke();
	
	fill(255);
	rect(0, 0, larg, altu); // e aplicamos ao rect
	fill('#BC002D');
	circle(larg / 2, altu / 2, 1.2 * modu);
}
```

Mas nossa bandeira ainda só aparece no canto (0,0). Vamos criar parâmetros para a posição da bandeira também  
E aplicar um pouco de matemática para desenhar nosso desenho naquela posição

```js
function desenharBandeira(x, y, largura) {
	let modu = largura / 3; // pegamos o valor de um módulo
	
	let larg = 3 * modu; // usando o valor de um módulo calculamos a largura
	let altu = 2 * modu; // e a altura
	noStroke();
	
	fill(255);
	rect(x, y, larg, altu); // e aplicamos ao rect
	fill('#BC002D');
	circle(x + larg / 2, y + altu / 2, 1.2 * modu);
}
```

e no `draw()`, quando chamamos nossa função, devemos colocar nosso x, y e largura

```js
function setup() {
	createCanvas(800, 600);
}

function draw() {
	background(220);
	desenharBandeira(250, 200, 300);
}
```

nosso desenho deve estar assim:


<div class="sketch-holder" id="flags-param"></div>

_caso as imagens não estejam aparecendo por favor recarregue a página_

# 100 Bandeiras

Agora que nossa bandeira está modularmente adaptando-se a qualquer posição e largura, vamos desenha 100 delas...  

No `draw()` faremos dois for loop para criar uma grade com as 100 bandeiras  
_Meu grid será de 10 x 10 e estou colocando 200 + i e 100 + j para que fique no centro do canvas_  

```js
function draw() {
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			// 40 é apenas um valor que eu escolhi para o tamanho de
			// cada grid
			desenharBandeira(200 + i * 40, 100 + j * 40, 30);
		}
	}
}
```

<div class="sketch-holder" id="flags-tomany"></div>

_caso as imagens não estejam aparecendo por favor recarregue a página_

Agora vamos adicionar os valores aleatórios...  

```js
function draw() {
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			// 40 é apenas um valor que eu escolhi para o tamanho de
			// cada grid
			desenharBandeira(200 + i * 40, 100 + j * 40, random(5, 30));
		}
	}
}
```

<div class="sketch-holder" id="flags-final"></div>

_caso as imagens não estejam aparecendo por favor recarregue a página_

talvez seja uma boa tirarmos do `draw()`...

```js
function setup() {
	createCanvas(800, 600);
	background(220);
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			// 40 é apenas um valor que eu escolhi para o tamanho de
			// cada grid
			desenharBandeira(200 + i * 40, 100 + j * 40, random(5, 30));
		}
	}
}
```

<div class="sketch-holder" id="flags-finalnoloop"></div>

_caso as imagens não estejam aparecendo por favor recarregue a página_


---

# Final

Definitivamente não é meu melhor feito mas acredito que cumpre com o objetivo...

o código final está disponível nesse [link](https://editor.p5js.org/kodiitulip/full/CnPqbAdZ8)  

>[!NOTA]
>No link o código tem algumas diferenças por conta de hábitos próprios meus