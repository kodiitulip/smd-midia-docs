const execfactory = ( p ) => {
	let cate1 = [], cate2 = [], cate3 = [];
	let brin1 = 0, brin2 = 0, brin3 = 0;
	let salTotal = 0, brinqTotal = 0;
	let cate1m = 0, cate2m = 0, cate3m = 0;
	let maiorSal = 0, maiorSalNumb = 0;
	
	p.setup = () => {
		p.createCanvas(600,200);
        p.textSize(20);
		p.genEmployees();
	}
	
	p.draw = () => {
		p.background(220);
		p.drawToyGraph(10, 10, p.width - 20, p.height - 20);
	}
    
    p.mousePressed = () => {
        let mousein = p.mouseX > 0 &&
            p.mouseX < p.width &&
            p.mouseY > 0 &&
            p.mouseY < p.height;
        
        if (!mousein) {
            return;
        }
        
        p.genEmployees();
    }

	p.drawToyGraph = (x, y, w, h) => {
		p.push();
		p.translate(x, y);
		p.text(`Salário total: R$${salTotal.toFixed(2)}
Brinquedos fabricados: ${brinqTotal}
Média de salários:
Categoria 1: R$${cate1m.toFixed(2)}
Categoria 2: R$${cate2m.toFixed(2)}
Categoria 3: R$${cate3m.toFixed(2)}
Funcionário com maior salário: Funcionário#${maiorSal} com R$${maiorSalNumb.toFixed(2)}`, 0, 0, w, h);
		p.translate(-x, -y);
		p.pop();
	}
	
	p.genEmployees = () => {
        maiorSal = 0;
        maiorSalNumb = 0;
        salTotal = 0;
        brinqTotal = 0;
        brin1 = 0;
        brin2 = 0;
        brin3 = 0;
        cate1 = [];
        cate2 = [];
        cate3 = [];
        
		let employeeAmount = 50;
		let cate1Amount = p.int(p.random(1, employeeAmount));
		let cate2Amount = p.int(p.random(1, employeeAmount - cate1Amount));
		let cate3Amount = employeeAmount - (cate2Amount + cate1Amount);
		
		for (let i = 0; i < cate1Amount; i++) {
			let t = p.int(p.random(1, 101));
			cate1[i] = new Cate1Employee(
				i,
				t
			);
			brin1 += t;
		}

		cate1m = brin1 / cate1Amount;
		
		for (let i = 0; i < cate2Amount; i++) {
			let t = p.int(p.random(101, 201));
			cate2[i] = new Cate2Employee(
				cate1Amount + i,
				t
			);
			brin2 += t;
		}
		cate2m = brin2 / cate2Amount;
		
		for (let i = 0; i < cate3Amount; i++) {
			let t = p.int(p.random(201, 301));
			cate3[i] = new Cate3Employee(
				cate2Amount + i,
				t
			);
			brin3 += t;
		}
		cate3m = brin3 / cate3Amount;
		
		
		let company = cate1.concat(cate2, cate3);
		for (let i = 0; i < company.length; i++) {
			company[i].calMoney();
			salTotal += company[i].money;
			brinqTotal += company[i].toysMade;
			
			if (company[i].money > maiorSalNumb) {
				maiorSalNumb = p.max(maiorSalNumb, company[i].money);
				maiorSal = company[i].idNumber;
			}
		}
	}
	
	class Employee {
		constructor(id, toys) {
			this.idNumber = id;
			this.toysMade = toys;
			this.money = 0;
		}
	}
	
	class Cate1Employee extends Employee {
		constructor(id, toys) {
			super(id, toys);
		}
		
		calMoney() {
			this.money = 1000;
		}
	}
	
	class Cate2Employee extends Employee {
		constructor(id, toys) {
			super(id, toys);
		}
		
		calMoney() {
			this.money = 1200 + 2 * this.toysMade;
		}
	}
	
	class Cate3Employee extends Employee {
		constructor(id, toys) {
			super(id, toys);
		}
		
		calMoney() {
			this.money = 1500 + 3 * this.toysMade;
		}
	}
}

const execFactory = new p5(execfactory, "exec-factory");