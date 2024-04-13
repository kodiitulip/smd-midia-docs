const flagsrect = ( p ) => {
    p.setup = function() {
        p.createCanvas(800, 600);
        let ratio = p.height / p.width;
        let element = document.getElementById('flags-rect');
        let style = window.getComputedStyle(element);
        let newwidth = style.getPropertyValue('width');

        p.resizeCanvas(newwidth, newwidth * ratio);
        p.background(220);
        p.drawFlag();
    };

    p.draw = function() {
    };

    p.drawFlag = function() {
        let modu = 300 / 3;

        let larg = 3 * modu;
        let altu = 2 * modu;

        p.fill(255);
        p.rect(0, 0, larg, altu);
    }
}

const flagscircle = ( p ) => {
    p.setup = function() {
        p.createCanvas(800, 600);
        let ratio = p.height / p.width;
        let element = document.getElementById('flags-circle');
        let style = window.getComputedStyle(element);
        let newwidth = style.getPropertyValue('width');

        p.resizeCanvas(newwidth, newwidth * ratio);
        p.background(220);
        p.drawFlag();
    };

    p.draw = function() {
    };

    p.drawFlag = function() {
        let modu = 300 / 3;

        let larg = 3 * modu;
        let altu = 2 * modu;
        p.noStroke();

        p.fill(255);
        p.rect(0, 0, larg, altu);
        p.fill('#BC002D');
        p.circle(larg / 2, altu / 2, 1.2 * modu);
    }
}

const flagsparam = ( p ) => {
    p.setup = function() {
        p.createCanvas(800, 600);
        let ratio = p.height / p.width;
        let element = document.getElementById('flags-param');
        let style = window.getComputedStyle(element);
        let newwidth = style.getPropertyValue('width');

        p.resizeCanvas(newwidth, newwidth * ratio);
        p.background(220);
        p.drawFlag(250, 200, 300);
    };

    p.draw = function() {
    };

    p.drawFlag = function(x, y, largura) {
        let modu = largura / 3;

        let larg = 3 * modu;
        let altu = 2 * modu;
        p.noStroke();

        p.fill(255);
        p.rect(x, y, larg, altu);
        p.fill('#BC002D');
        p.circle(x + larg / 2, y + altu / 2, 1.2 * modu);
    }
}

const flagstomany = ( p ) => {
    p.setup = function() {
        p.createCanvas(800, 600);
        let ratio = p.height / p.width;
        let element = document.getElementById('flags-tomany');
        let style = window.getComputedStyle(element);
        let newwidth = style.getPropertyValue('width');

        p.resizeCanvas(newwidth, newwidth * ratio);
        p.background(220);
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                p.drawFlag(200 + i * 40, 100 + j * 40, 30);
            }
        }
    };

    p.draw = function() {
    };

    p.drawFlag = function(x, y, largura) {
        let modu = largura / 3;

        let larg = 3 * modu;
        let altu = 2 * modu;
        p.noStroke();

        p.fill(255);
        p.rect(x, y, larg, altu);
        p.fill('#BC002D');
        p.circle(x + larg / 2, y + altu / 2, 1.2 * modu);
    }
}

const flagsfinal = ( p ) => {
    p.setup = function() {
        p.createCanvas(800, 600);
        let ratio = p.height / p.width;
        let element = document.getElementById('flags-final');
        let style = window.getComputedStyle(element);
        let newwidth = style.getPropertyValue('width');

        p.resizeCanvas(newwidth, newwidth * ratio);
    };

    p.draw = function() {
        p.background(220);
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                p.drawFlag(200 + i * 40, 100 + j * 40, p.random(5, 30));
            }
        }
    };

    p.drawFlag = function(x, y, largura) {
        let modu = largura / 3;

        let larg = 3 * modu;
        let altu = 2 * modu;
        p.noStroke();

        p.fill(255);
        p.rect(x, y, larg, altu);
        p.fill('#BC002D');
        p.circle(x + larg / 2, y + altu / 2, 1.2 * modu);
    }
}

const flagsfinalnoloop = ( p ) => {
    p.setup = function() {
        p.createCanvas(800, 600);
        let ratio = p.height / p.width;
        let element = document.getElementById('flags-finalnoloop');
        let style = window.getComputedStyle(element);
        let newwidth = style.getPropertyValue('width');

        p.resizeCanvas(newwidth, newwidth * ratio);
        p.background(220);
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                p.drawFlag( 200 + i * 40, 100 + j * 40, p.random(5, 30));
            }
        }
    };

    p.draw = function() {
        
    };

    p.drawFlag = function(x, y, largura) {
        let modu = largura / 3;

        let larg = 3 * modu;
        let altu = 2 * modu;
        p.noStroke();

        p.fill(255);
        p.rect(x, y, larg, altu);
        p.fill('#BC002D');
        p.circle(x + larg / 2, y + altu / 2, 1.2 * modu);
    }
}

let flagsRect = new p5(flagsrect, "flags-rect");
let flagsCircle = new p5(flagscircle, "flags-circle");
let flagsParam = new p5(flagsparam, "flags-param");
let flagsToMany = new p5(flagstomany, "flags-tomany");
let flagsFinal = new p5(flagsfinal, "flags-final");
let flagsFinalNoLoop = new p5(flagsfinalnoloop, "flags-finalnoloop");