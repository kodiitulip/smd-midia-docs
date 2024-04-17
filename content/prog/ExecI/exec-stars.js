const execstars = ( p ) => {
	let stars = [];
	
	p.setup = () => {
		p.createCanvas(400, 400);
		for (let i = 0; i < 100; i++) {
			stars[i] = new Star(
				p.random(0, p.width), 
				p.random(0, p.height), 
				p.random(3, 5)
			);
		}
	};
	
	p.draw = () => {
		p.background('#252525');
		for (let i = 0; i < stars.length; i++) {
			stars[i].tick();
		}
	};
	
	class Star {
		constructor(x, y, size) {
			this.x = x;
			this.y = y;
			this.size = size;
			this.lifetime = p.random(0, 1.5);
			this.maxLifetime = p.PI;
			this.c = [
				p.random(128,256), 
				p.random(128,256), 
				p.random(128,256),
				0,
			];
		}
		
		tick() {
			this.lifetime += 0.08;
			this.c[3] = p.abs(p.sin(this.lifetime) * 256);
			p.noStroke();
			p.fill(
				this.c
			);
			p.circle(this.x, this.y, this.size);
			if (this.isDead()) {
				this.regen(
					p.random(0, p.width), 
					p.random(0, p.height), 
					p.random(3, 5)
				);
			}
		}
		
		isDead() {
			return this.lifetime >= this.maxLifetime;
		}
		
		regen(x, y, size) {
			this.setPosition(x, y);
			this.setSize(size);
			this.lifetime = 0;
		}
		
		setPosition(x, y) {
			this.x = x;
			this.y = y;
		}
		
		setSize(size) {
			this.size = size;
		}
	}
}

let execStars = new p5(execstars, "exec-stars");

