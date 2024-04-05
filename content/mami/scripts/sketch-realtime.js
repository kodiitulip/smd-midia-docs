const mruvreatime = ( p ) => {
	const INTERVALO_TEMPO = 1/60;
	
	let velInicial = [0, 0],   //o primeiro membro da array é o valor de x
		accAtual = [1, 0],     // e o segundo membro é o valor de y
		deslocam = [0, 0],
		tempo = 0;
	
	p.setup = function() {
		p.createCanvas(200, 200);
		// frameRate(1);
		// comente ou remova a função frameRate();
		
		deslocam = [0, p.height/2];
	}
	
	p.draw = function() {
		p.background(220);
		deslocam[0] = p.mruv(velInicial[0], accAtual[0], tempo);
		// deslocam[1] = mruv(velInicial[1], accAtual[1], tempo);
		/* deslocam[0] -> delocamento no x
		* deslocam[1] -> deslocameto no y */
		
		p.circle(deslocam[0], deslocam[1], 10);
		tempo += INTERVALO_TEMPO;
		
		if (deslocam[0] > p.width) {
			tempo = 0;
		}
	}
	
	p.mruv = function(velocidade, aceleracao, tempo) {
		return velocidade * tempo + aceleracao * tempo * tempo / 2;
	}
}

let mruv_realtime = new p5(mruvreatime, "mruv-realtime");