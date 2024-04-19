const execexam = ( p ) => {
	let alun = [];
	
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
		p.text('Click On Screen to Regen', p.width/2, p.height * 5/6);
	};

	p.mousePressed = () => {
        let pressedInCanvas = p.mouseX > 0 &&
                            p.mouseX < p.width &&
                            p.mouseY > 0 &&
                            p.mouseY < p.height;
        if (!pressedInCanvas) {
            return;
        }

		for (let i = 0; i < 10; i++) {
			alun[i] = new StudentInfo(
				i + 1,
				Math.random(),
				Math.random(),
				Math.random()
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
		p.text('Aluno'     , ts + ts * 4 * 0, 0, ts * 2, ts * 2);
		p.text('Prova1'    , ts + ts * 4 * 1, 0, ts * 2, ts * 2);
		p.text('Prova2'    , ts + ts * 4 * 2, 0, ts * 2, ts * 2);
		p.text('Prova3'    , ts + ts * 4 * 3, 0, ts * 2, ts * 2);
		p.text('Média'     , ts + ts * 4 * 4, 0, ts * 2, ts * 2);
		p.text('Menor Nota', ts + ts * 4 * 5, 0, ts * 6, ts * 2);
		
		for (let a = 0; a < alun.length; a++) {
			let alu = alun[a];
			alu.renderMarix(0, ts * 2 * (a + 1));
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
			p.text(this.n1.toFixed(2), ts *  4, 0, ts * 4, ts * 2);
			p.text(this.n2.toFixed(2), ts *  8, 0, ts * 4, ts * 2);
			p.text(this.n3.toFixed(2), ts * 12, 0, ts * 4, ts * 2);
			let m = (this.n1 + this.n2 + this.n3) / 3;
			p.text(m.toFixed(2), ts * 16, 0, ts * 4, ts * 2);
			let mn = p.min(this.n1, this.n2, this.n3);
			if (this.n1 == mn) {
				p.text('Prova1', ts * 20, 0, ts * 8, ts * 2);
			} else if (this.n2 == mn) {
				p.text('Prova2', ts * 20, 0, ts * 8, ts * 2);
			} else if (this.n3 == mn) {
				p.text('Prova3', ts * 20, 0, ts * 8, ts * 2);
			}
			p.translate(-x, -y);
			p.pop();
		}
	}
}

let execExam = new p5(execexam, "exec-exam");