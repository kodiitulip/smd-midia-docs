---
title: Marcas
description: Desenhando uma logo de uma marca com p5
draft: false
tags:
---
# Objetivo

| Escolha uma das marcas apresentadas e replique-a, em um canvas com dimensões à sua escolha, empregando p5.js |
| :----------------------------------------------------------------------------------------------------------: |
Aqui vamos nós de novo, dessa vez com uma logo!  

A logo que escolhi foi a seguinte:  
![[dropbox.png | Template de design da logo da Dropbox - center]]

Como você pode ver na imagem já temos todas as medidas que precisaremos para criar esse desenho

## Geometria

Vamos analisar algumas das medidas:

- Podemos ver que a Largura da logo é seu módulo principal e todas as suas medidas são proporcionais a largura. Irei então selecionar a largura de 400 pixels;
- A medida M (altura da logo) é representada, na referência, como 0.85 x A (largura), logo:  A = 400; M = 0.85 * A; M = 340;
- A largura de todos os losangos (L) é equivalente a 0.5 * A. E suas alturas (J) são equivalentes a 0.32 * A;
- Aquela pequena distância do último losango para os outros (B), é equivalente a 0.05 * A;
- Apesar de existirem outras medidas no desenho e acredito que essas serão suficientes para replicar a logo em um canvas;

## Codificar

Agora que temos nossas medidas podemos codificar os desenhos em nosso canvas!  

vamos colocar nossa altura e largura de nosso canvas:  

```js
function setup() {
	// Nossa largura escolhida e sua respectiva altura com base nas proporções
	createCanvas(400, 340);
}
```

e agora vamos tentar desenhar nosso primeiro losango!  

para isso utilizaremos a função `quad(x1,y1,x2,y2,x3,y3,x4,y4)`:  

para sabermos o `x, y` de cada canto do losango podemos usar o L e J  

```js
let L = 0.5 * width;
let J = 0.32 * width;
...
function draw() {
	background('#f0f0f0');
	fill('#252525');
	noStroke();
	
	quad(
		L / 2, 0,  // Ponta sperior
		0, J / 2,  // Ponta da esquerda
		L / 2, J,  // Ponta Inferior
		L, J / 2   // Ponta da direita
	)
}
```

No final o canvas deve ficar assim:  

![[canvas-firstquad.png | Um losango no canto da imagem | center]]

_caso as imagens não estejam aparecendo por favor recarregue a página_

usando essas variáveis e um pouco de matemática podemos fazer os outros losangos adjacentes _(deixe o quinto losango para depois)_

```js
let L = 0.5 * width;
let J = 0.32 * width;
...
function draw() {
	background('#f0f0f0');
	fill('#252525');
	noStroke();
	
	quad(// Superior esquerdo
		L / 2, 0,  // Ponta superior
		0, J / 2,  // Ponta da esquerda
		L / 2, J,  // Ponta Inferior
		L, J / 2   // Ponta da direita
	);
	
	quad(// Superior direito
		L + L / 2, 0,  // Ponta superior
		L, J / 2,  // Ponta da esquerda
		L + L / 2, J,  // Ponta Inferior
		L * 2, J / 2   // Ponta da direita
	);
	
	quad(// Inferior esquerdo
		L / 2, J,  // Ponta superior
		0, J + J / 2,  // Ponta da esquerda
		L / 2, J * 2,  // Ponta Inferior
		L, J + J / 2   // Ponta da direita
	);
	
	quad(// Inferior direito
		L + L / 2, J,  // Ponta superior
		L, J + J / 2,  // Ponta da esquerda
		L + L / 2, J * 2,  // Ponta Inferior
		L * 2, J + J / 2   // Ponta da direita
	);
}
```

o canvas deve ficar assim:  

![[canvas-fourquad.png | Quatro losangos alinhados em um grid | center]]

_caso as imagens não estejam aparecendo por favor recarregue a página_

E finalmente temos o quinto losango, o que decidi ter um pequeno afastamento dos outros.  
É bem simples na verdade, utilizamos as variáveis para encaixá-lo na posição correta, porém agora utilizaremos a dimensão B para adicionar um pouco de distância na sua posição `y`.  

```js
let L = 0.5 * width;
let J = 0.32 * width;
let B = 0.05 * width;
...
function draw() {
	background('#f0f0f0');
	fill('#252525');
	noStroke();
	
	quad(.../*Superior esquerdo*/...);
	quad(.../*Superior  direito*/...);
	quad(.../*Inferior esquerdo*/...);
	quad(.../*Inferior  direito*/...);
	
	quad( // Quinto losango
		L, J * 1.5 + B, // Ponta sperior
		L / 2, J * 2 + B, // Ponta esquerda
		L, J * 2.5 + B, // Ponta inferior
		L + L / 2, J * 2 + B // Ponta direita
	);
}
```

e agora deve ficar assim:  

![[canvas-fivequad.png | dropbox logo | center]]

_caso as imagens não estejam aparecendo por favor recarregue a página_

---

# Final

O link para o código que escrevemos estará [aqui](https://editor.p5js.org/kodiitulip/sketches/P9WvTF764)  

O link para um código um pouco mais meu estilo de codificar estará [aqui](https://editor.p5js.org/kodiitulip/sketches/sjUOobm7d)  

![[canvas-ultimate.png | dropbox logo | center]]

_caso as imagens não estejam aparecendo por favor recarregue a página_