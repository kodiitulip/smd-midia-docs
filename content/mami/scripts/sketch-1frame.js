let velInicial = [0, 0],   //o primeiro membro da array é o valor de x
	accAtual = [1, 0],     // e o segundo membro é o valor de y
	deslocam = [0, 0],
	tempo = 0;

function setup() {
	createCanvas(200, 200);
	frameRate(1);

	deslocam = [0, height/2];
}

function draw() {
	background(220);
	deslocam[0] = mruv(velInicial[0], accAtual[0], tempo);
	// deslocam[1] = mruv(velInicial[1], accAtual[1], tempo);
	/* deslocam[0] -> delocamento no x
	 * deslocam[1] -> deslocameto no y */
	
	circle(deslocam[0], deslocam[1], 10);
	tempo++;

	if (deslocam[0] > width) {
		tempo = 0;
	}
}

function mruv(velocidade, aceleracao, tempo) {
	return velocidade * tempo + aceleracao * tempo * tempo / 2;
}