---
title: Lançamento Oblíquo
draft: false
tags: 
---
# MRUV

Vamos lá. Antes que possamos fazer lançamentos precisamos criar um movimento retilíneo uniformemente variado, em outras palavras mover um objeto com uma aceleração fixa e uma velocidade variável.

## Matemático

a formula matemática para conseguir o _deslocamento_ (∆s) a partir da velocidade, aceleração e o tempo é a seguinte:

$$
	∆s = Vot + at^2 / 2
$$

agora devemos passar isso para o modo computacional - _aproveitaremos e passaremos como uma função_

## Computacional

```javascript
function mruv(velocidade, aceleracao, tempo) {
	return velocidade * tempo + aceleracao * tempo * tempo / 2;
}
```

no topo de nosso script teremos algumas variáveis que servirão para nós:

```javascript
let velInicial, accAtual, temAtual, desAtual;
```

podemos inicializa-las também!

```js
let velInicial = 0, // a velocidade que iniciamos o movimento
	accAtual = 0,   // a aceleração atua do objeto
	deslocam = 0,   // uma variável para o deslocamento do objeto
	tempo = 0;      // uma variável para o tempo
```

podemos nos preparar para o futuro e inicializar elas como _arrays_ para termos valores x e y

```js
let velInicial = [0, 0], //o primeiro membro da array é o valor de x
	accAtual = [0, 0],   // e o segundo membro é o valor de y
	deslocam = [0, 0],
	tempo = 0;
```

agora vamos incluir nossas funções `setup()` e `draw()`

```js
function setup() {
	createCanvas(500,500);
	frameRate(1); // começaremos com um frame rate baixo para entendermos
				  // melhor oque está acontecendo
}

function draw() {
	background(220);
}
```

---
# Hora de se mexer!

## Matemático

o deslocamento de um ponto pode ser vista como a mudança de sua posição

$$
	∆s = Pf - Po
$$

porém como não temos uma posição final fixa precisamos usar a fórmula com aceleração e velocidade mostrada antes

## Computacional

podemos fazer os cálculos da movimentação utilizando nossa função do mruv

```js
function setp() {...}

function draw() {
	background(220);
	deslocam[0] = mruv(velInicial[0], accAtual[0], tempo);
	deslocam[1] = mruv(velInicial[1], accAtual[1], tempo);
	/* deslocam[0] -> delocamento no x
	 * deslocam[1] -> deslocameto no y */
}

function mruv(velocidade, aceleracao, tempo) {...}
```

agora com o que temos podemos fazer um objeto mover-se 

```js
...
function draw() {
	background(220);
	deslocam[0] = mruv(velInicial[0], accAtual[0], tempo);
	deslocam[1] = mruv(velInicial[1], accAtual[1], tempo);
	/* deslocam[0] -> delocamento no x
	 * deslocam[1] -> deslocameto no y */
	
	circle(deslocam[0], deslocam[1], 10);
}
...
```

adicione também a passagem de tempo

```js
...
function draw() {
	background(220);
	deslocam[0] = mruv(velInicial[0], accAtual[0], tempo);
	// deslocam[1] = mruv(velInicial[1], accAtual[1], tempo); 
	// por enquanto não aplicaremos movimento no y
	/* deslocam[0] -> delocamento no x
	 * deslocam[1] -> deslocameto no y */
	
	circle(deslocam[0], deslocam[1], 10);
	tempo++;
}
...
```

no topo do script, modifique o valor da aceleração e deslocamento inicial para vermos o movimento

```js
let velInicial = [0, 0],   //o primeiro membro da array é o valor de x
    accAtual = [1, 0],     // e o segundo membro é o valor de y
    deslocam = [0, 250],
    tempo = 0;
...
```

deve parecer algo assim

<iframe src="htmls/mruv-1frame.html" class="sketch-holder"></iframe>


---
# Movimento em tempo real

até o momento temos um movimento de literalmente 1 frame por segundo  
então vamos melhorar isso!

criaremos uma constante no topo do script

```js
cost INTERVALO_TEMPO = 1/60
```

a lógica por traz disso é:   
	o tempo normal do `draw()` é 60 fps  
	porém queremos m passo de tempo mais fluido  
	então dividimos 1 / 60  
	e adicionamos a passagem de tempo

```js
function setp() {
	...
	// frameRate(1);
	// comente ou remova a função frameRate()
}

function draw() {
	...
	tempo += INTERVALO_TEMPO;
	...
}
```

agora você vê um movimento bem mais fluido

<iframe src="htmls/mruv-realtime.html" class="sketch-holder"></iframe>


---

# Queda Livre

finalizamos o movimento em tempo real  
agora, podemos fazer uma queda livre usando esse código? Sim.  

esse é o nosso código completo até agora:

```js
const INTERVALO_TEMPO = 1/60;

let velInicial = [0, 0],   //o primeiro membro da array é o valor de x
    accAtual = [1, 0],     // e o segundo membro é o valor de y
    deslocam = [0, 250],
    tempo = 0;

function setup() {
    createCanvas(500, 500);
    // frameRate(1);
    // comente ou remova a função frameRate();
}

  

function draw() {
    background(220);
    deslocam[0] = mruv(velInicial[0], accAtual[0], tempo);
    // deslocam[1] = mruv(velInicial[1], accAtual[1], tempo);

    /* deslocam[0] -> delocamento no x
     * deslocam[1] -> deslocameto no y */

    circle(deslocam[0], deslocam[1], 10);
    tempo += INTERVALO_TEMPO;
}

  

function mruv(velocidade, aceleracao, tempo) {
    return velocidade * tempo + aceleracao * tempo * tempo / 2;
}
```

para queda livre precisamos que a bola mova-se no eixo y.  
faremos então as seguintes modificações:
_as reticencias indicam que existe código omitido, nesse caso o código que não precisa ser alterado_

```js
...
let velInicial = [0, 0],   //o primeiro membro da array é o valor de x
    accAtual = [0, 10],    // e o segundo membro é o valor de y
    deslocam = [250, 0],
    tempo = 0;
...

function draw() {
	background(220);
    // deslocam[0] = mruv(velInicial[0], accAtual[0], tempo);
    deslocam[1] = mruv(velInicial[1], accAtual[1], tempo);
...
}

...
```

e pronto! essas modificações devem ser suficientes para criar queda livre!

<iframe src="" class="sketch-holder"></iframe>


---

# Lançamento Vertical

fizemos queda livre. E quanto a um lançamento vertical?  
_É só inverter o eixo correto?_ Exatamente!  
  
vamos inverter o eixo y modificando os seguintes dados:
```js
...
let velInicial = [0, 100],   // altere o valor da velocidade inicial para
	accAtual = [0, -10],     // valores que sejam bons para você
	deslocam = [250, 0],
	tempo = 0;
...

function draw() {
	...
	deslocam[1] = height - mruv(velInicial[1], accAtual[1], tempo);
	...
}
...
```

e pronto! criamos lançamento vertical!

<iframe src="" class="sketch-holder"></iframe>


---

# Finalmente... Lançamento Obliquo

agora podemos combinar o movimento no eixo x com o do eixo y para criar um movimento em parábola!

```js
...
let velInicial = [47, 47],   //o primeiro membro da array é o valor de x
	accAtual = [0, -10],     // e o segundo membro é o valor de y
	deslocam = [0, 0],
	tempo = 0;
...

function draw() {
	...
	deslocam[0] = mruv(velInicial[0], accAtual[0], tempo);
	deslocam[1] = height - mruv(velInicial[1], accAtual[1], tempo);
	...
}
...
```

Prontinho! temos um lançamento em parábola!

<iframe src="" class="sketch-holder"></iframe>


---

# Alternativas

caso você queira algo mais nesse estilo:

>[!NOTA]
>obs: Tente clicar na tela desse para ver oque acontece ;)

<iframe src="" class="sketch-holder"></iframe>

o código estará nesse [link](https://editor.p5js.org/kodiitulip/sketches/zdM1l3Lwq)