const execexam = ( p ) => {
	let alun = [];
	let menorNotas = {
		1: 0,
		2: 0,
		3: 0,
	};
	
	p.setup = () => {
		p.createCanvas(400, 400);
		p.textSize(0.03625 * p.width);
		p.textAlign(p.CENTER,p.CENTER);
		for (let i = 0; i < 10; i++) {
			alun[i] = new StudentInfo(
				i + 1,
				Math.random(),
				Math.random(),
				Math.random()
			)
		}
	};
	
	p.draw = () => {
		p.background(220);
		p.drawMatrixes();
		p.text(
			'Click On Screen to Regen', 
			p.width/2, 
			p.height * 11/12
		);
	};

	p.touchStarted = () => {
        let pressedInCanvas = p.mouseX > 0 &&
                            p.mouseX < p.width &&
                            p.mouseY > 0 &&
                            p.mouseY < p.height;
        if (!pressedInCanvas) {
            return false;
        }

		menorNotas = {
            1: 0,
            2: 0,
            3: 0,
        };

		for (let i = 0; i < 10; i++) {
			alun[i] = new StudentInfo(
				i + 1,
				Math.random() * 10,
				Math.random() * 10,
				Math.random() * 10
			)
		}
    }

	p.mousePressed = () => {
        let pressedInCanvas = p.mouseX > 0 &&
                            p.mouseX < p.width &&
                            p.mouseY > 0 &&
                            p.mouseY < p.height;
        if (!pressedInCanvas) {
            return;
        }

        menorNotas = {
            1: 0,
            2: 0,
            3: 0,
        };

		for (let i = 0; i < 10; i++) {
			alun[i] = new StudentInfo(
				i + 1,
				Math.random() * 10,
				Math.random() * 10,
				Math.random() * 10
			)
		}
	}
	
	p.drawMatrixes = () => {
		let ts = p.textSize();
		for (let i = 0; i < 6; i++) {
			if (i == 5) {
				p.rect(i * ts * 4, 0, ts * 8, ts * 2);
			} else {
				p.rect(i * ts * 4, 0, ts * 4, ts * 2);
			}
		}
		p.text('Aluno'     , ts * 4 * 0, 0, ts * 4, ts * 2);
		p.text('Prova1'    , ts * 4 * 1, 0, ts * 4, ts * 2);
		p.text('Prova2'    , ts * 4 * 2, 0, ts * 4, ts * 2);
		p.text('Prova3'    , ts * 4 * 3, 0, ts * 4, ts * 2);
		p.text('Média'     , ts * 4 * 4, 0, ts * 4, ts * 2);
		p.text('Menor Nota', ts * 4 * 5, 0, ts * 8, ts * 2);
		
		for (let a = 0; a < alun.length; a++) {
			let alu = alun[a];
			alu.renderMarix(0, ts * 2 * (a + 1));
		}
		for (let f = 0; f < 3; f++) {
			p.rect(
				ts * 4 * (f + 1), 
				ts * 2 * (alun.length + 1), 
				ts * 4, ts * 2
			);
			p.text(
				menorNotas[f + 1], 
				ts * 4 * (f + 1), 
				ts * 2 * (alun.length + 1), 
				ts * 4, ts * 2
			);
		}
	}
	
	class StudentInfo {
		/**
		* 
		* @param {string} name The Student name
		* @param {number} n1 nota 1
		* @param {number} n2 nota 2
		* @param {number} n3 nota 3
		*/
		constructor(name, n1, n2, n3) {
			this.name = name;
			this.n1 = n1;
			this.n2 = n2;
			this.n3 = n3;
			this.menornota = 0;
			this.media = (n1 + n2 + n3) / 3;
            let mi = p.min(n1, n2, n3);
			if (this.n1 == mi) {
				this.menornota = 1;
			} else if (this.n2 == mi) {
				this.menornota = 2;
			} else if (this.n3 == mi) {
				this.menornota = 3;
			}
			menorNotas[this.menornota] += 1;
		}
		
		/**
		* 
		* @param {number} x x render
		* @param {number} y y render
		*/
		renderMarix(x, y) {
			let ts = p.textSize();
			p.push();
			p.translate(x, y);
			for ( let i = 0; i < 6; i++) {
				if (i == 5) {
					p.rect(i * ts * 4, 0, ts * 8, ts * 2);
				} else {
					p.rect(i * ts * 4, 0, ts * 4, ts * 2);
				}
			}
			p.textAlign(p.CENTER,p.CENTER);
			p.text(this.name, 0, 0, ts * 4, ts * 2);
			p.text(
				this.n1.toFixed(2), 
				ts *  4, 
				0, ts * 4, 
				ts * 2
			);
			p.text(
				this.n2.toFixed(2), 
				ts *  8, 
				0, ts * 4, 
				ts * 2
			);
			p.text(
				this.n3.toFixed(2), 
				ts * 12, 
				0, ts * 4, 
				ts * 2
			);
			
			p.text(
				this.media.toFixed(2), 
				ts * 16, 
				0, 
				ts * 4, 
				ts * 2
			);
			p.text(
				`Prova ${this.menornota}`, 
				ts * 20, 
				0, 
				ts * 8, 
				ts * 2
			);
			p.translate(-x, -y);
			p.pop();
		}
	}
}

let execExam = new p5(execexam, "exec-exam");