const mruvkodie = ( p ) => {
    const GRAVITY = 0.1;
    let ball;
    
    let vel = [5.0, 5.0],
        acc = [0.0, GRAVITY],
        pos = [0.0, 0.0],
        diameter = 30.0,
        ang = 0,
		angTo = 0;

    p.preload = function() {
        ball = p.loadImage('./MRUV/baby.png');
    }
    
    p.setup = function() {
        p.createCanvas(200, 200);
        p.angleMode(p.DEGREES);
        pos = [p.width/2, p.height/2];
    }
    
    p.draw = function() {
        p.background(220);
        p.mruv();
        p.hitWall();
        
        p.moveCircleWithMouse();
        
        p.drawPhysicsObject();
    }
    
    p.drawPhysicsObject = function() {
        p.push();
        p.translate(pos[0], pos[1]);
        p.rotate(ang);
        // p.rect(-diameter / 2, -diameter / 2, diameter);
        // p.circle(pos[0], pos[1], diameter);
        p.image(ball, -diameter/2, -diameter/2, diameter, diameter);
        p.translate(-pos[0], -pos[1]);
        p.pop();
    }
    
    p.hitWall = function() {
        let hit = false;
      
        if (pos[0] + diameter / 2 > p.width) {
            vel[0] *= -1;
            pos[0] = p.width - diameter / 2;
            hit = true;
        } else if (pos[0] - diameter / 2 < 0) {
            vel[0] *= -1;
            pos[0] = diameter / 2;
            hit = true;
        }
        if (pos[1] + diameter / 2 > p.height) {
            vel[1] *= -1;
            pos[1] = p.height - diameter / 2;
            hit = true;
        } else if (pos[1] - diameter / 2 < 0) {
            vel[1] *= -1;
            pos[1] = diameter / 2;
            hit = true;
        }
      
        let v = p.createVector(vel[0], vel[1]);
        if (hit && p.abs(v.y) > GRAVITY * 5) {
            angTo += v.heading();
        }
    }
    
    p.drag = function() {
        vel[0] *= 0.997;
        vel[1] *= 0.997;
    }
    
    p.mruv = function() {
        // aceleração é a variação de velocidade através do tempo
        vel[0] += acc[0];
        vel[1] += acc[1];
        // velocidade é a variação de posição através do tempo
        pos[0] += vel[0];
        pos[1] += vel[1];
        
        ang = p.lerp(ang, angTo, 0.05);
        
        p.drag();
    }
    
    p.moveCircleWithMouse = function() {
        let mouseInCanvas = p.mouseX > 0 &&
                            p.mouseX < p.width &&
                            p.mouseY > 0 &&
                            p.mouseY < p.height;
        if (p.mouseIsPressed && mouseInCanvas) {
            pos[0] = p.lerp(
                pos[0],
                p.constrain(p.mouseX, 0, p.width - diameter / 2),
                0.8
            );
            pos[1] = p.lerp(
                pos[1],
                p.constrain(p.mouseY, 0, p.height - diameter / 2),
                0.8
            );
            
            vel = [(p.mouseX - p.pmouseX) / 2, (p.mouseY - p.pmouseY) / 2];
        }
    }
}

let mruv_kodie = new p5(mruvkodie, "mruv-kodie");

const p1frame = ( p ) => {
	let velInicial = [0, 0],   //o primeiro membro da array é o valor de x
		accAtual = [1, 0],     // e o segundo membro é o valor de y
		deslocam = [0, 0],
		tempo = 0;
	
	p.setup = function() {
		p.createCanvas(200, 200);
		p.frameRate(1);
		
		deslocam = [0, p.height/2];
	}
	
	p.draw = function() {
		p.background(220);
		deslocam[0] = p.mruv(velInicial[0], accAtual[0], tempo);
		// deslocam[1] = mruv(velInicial[1], accAtual[1], tempo);
		/* deslocam[0] -> delocamento no x
		* deslocam[1] -> deslocameto no y */
		
		p.circle(deslocam[0], deslocam[1], 10);
		tempo++;
		
		if (deslocam[0] > p.width) {
			tempo = 0;
		}
	}
	
	p.mruv = function(velocidade, aceleracao, tempo) {
		return velocidade * tempo + aceleracao * tempo * tempo / 2;
	}
}

let mruv_1frame = new p5(p1frame, "mruv-1frame");

const mruvfreefal = ( p ) => {
	const INTERVALO_TEMPO = 1/60;
	
	let velInicial = [0, 0],   //o primeiro membro da array é o valor de x
		accAtual = [0, 10],     // e o segundo membro é o valor de y
		deslocam = [0, 0],
		tempo = 0;
	
	p.setup = function() {
		p.createCanvas(200, 200);
		// frameRate(1);
		// comente ou remova a função frameRate();
		deslocam = [p.width/2, 0]
	}
	
	p.draw = function() {
		p.background(220);
		// deslocam[0] = p.mruv(velInicial[0], accAtual[0], tempo);
		deslocam[1] = p.mruv(velInicial[1], accAtual[1], tempo);
		/* deslocam[0] -> delocamento no x
		* deslocam[1] -> deslocameto no y */
		
		p.circle(deslocam[0], deslocam[1], 10);
		tempo += INTERVALO_TEMPO;
		
		if (deslocam[1] > p.height) {
			tempo = 0;
		}
	}
	
	p.mruv = function(velocidade, aceleracao, tempo) {
		return velocidade * tempo + aceleracao * tempo * tempo / 2;
	}
}

let mruv_freefall = new p5(mruvfreefal, "mruv-freefall");

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

const mruvsidelaunch = ( p ) => {
	const INTERVALO_TEMPO = 1/60;
	
	let velInicial = [22, 45],   //o primeiro membro da array é o valor de x
		accAtual = [0, -10],     // e o segundo membro é o valor de y
		deslocam = [0, 0],
		tempo = 0;
	
	p.setup = function() {
		p.createCanvas(200, 200);
		// frameRate(1);
		// comente ou remova a função frameRate();
	}
	
	p.draw = function() {
		p.background(220);
		deslocam[0] = p.mruv(velInicial[0], accAtual[0], tempo);
		deslocam[1] = p.height - p.mruv(velInicial[1], accAtual[1], tempo);
		/* deslocam[0] -> delocamento no x
		* deslocam[1] -> deslocameto no y */
		
		p.circle(deslocam[0], deslocam[1], 10);
		tempo += INTERVALO_TEMPO;
		
		if (deslocam[1] > p.height + 10 || deslocam[0] > p.width + 10) {
			tempo = 0;
		}
	}
	
	p.mruv = function(velocidade, aceleracao, tempo) {
		return velocidade * tempo + aceleracao * tempo * tempo / 2;
	}
}

let mruv_sidelaunch = new p5(mruvsidelaunch, "mruv-sidelaunch");

const mruvverticallaunch = ( p ) => {
	const INTERVALO_TEMPO = 1/60;
	
	let velInicial = [0, 50],   //o primeiro membro da array é o valor de x
		accAtual = [0, -10],     // e o segundo membro é o valor de y
		deslocam = [0, 0],
		tempo = 0;
	
	p.setup = function() {
		p.createCanvas(200, 200);
		// frameRate(1);
		// comente ou remova a função frameRate();
		deslocam = [p.width/2, 0];
	}
	
	p.draw = function() {
		p.background(220);
		// deslocam[0] = p.mruv(velInicial[0], accAtual[0], tempo);
		deslocam[1] = p.height - p.mruv(velInicial[1], accAtual[1], tempo);
		/* deslocam[0] -> delocamento no x
		* deslocam[1] -> deslocameto no y */
		
		p.circle(deslocam[0], deslocam[1], 10);
		tempo += INTERVALO_TEMPO;
		
		if (deslocam[1] > p.height + 10) {
			tempo = 0;
		}
	}
	
	p.mruv = function(velocidade, aceleracao, tempo) {
		return velocidade * tempo + aceleracao * tempo * tempo / 2;
	}
}

let mruv_verticallaunch = new p5(mruvverticallaunch, "mruv-verticallaunch");