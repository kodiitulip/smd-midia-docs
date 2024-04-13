const ratio = 600 / 800;

const flagsrect = ( p ) => {
    p.setup = function() {
        p.createCanvas(480, 360);
    };

    p.draw = function() {
        p.background(220);
        p.drawFlag();
    };

    p.drawFlag = function() {
        let modu = 300 / 3;

        let larg = 3 * modu;
        let altu = 2 * modu;

        p.fill(255);
        p.rect(0, 0, larg, altu);
    };
}

const flagscircle = ( p ) => {
    p.setup = function() {
        p.createCanvas(480, 360);
    };

    p.draw = () => {
        p.background(220);
        p.drawFlag();
    }

    p.drawFlag = function() {
        let modu = 300 / 3;

        let larg = 3 * modu;
        let altu = 2 * modu;
        p.noStroke();

        p.fill(255);
        p.rect(0, 0, larg, altu);
        p.fill('#BC002D');
        p.circle(larg / 2, altu / 2, 1.2 * modu);
    };
}

const flagsparam = ( p ) => {
    p.setup = function() {
        p.createCanvas(480, 360);
    };

    p.draw = () => {
        p.background(220);
        p.drawFlag(150, 120, 180);
    }

    p.drawFlag = function(x, y, largura) {
        let modu = largura / 3;

        let larg = 3 * modu;
        let altu = 2 * modu;
        p.noStroke();

        p.fill(255);
        p.rect(x, y, larg, altu);
        p.fill('#BC002D');
        p.circle(x + larg / 2, y + altu / 2, 1.2 * modu);
    };
}

const flagstomany = ( p ) => {
    p.setup = function() {
        p.createCanvas(480, 360);
    };

    p.draw = () => {
        p.background(220);
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                p.drawFlag(
                    120 + i * 24,
                    60 + j * 24,
                    18
                );
            }
        }
    }

    p.drawFlag = function(x, y, largura) {
        let modu = largura / 3;

        let larg = 3 * modu;
        let altu = 2 * modu;
        p.noStroke();

        p.fill(255);
        p.rect(x, y, larg, altu);
        p.fill('#BC002D');
        p.circle(x + larg / 2, y + altu / 2, 1.2 * modu);
    };
}

const flagsfinal = ( p ) => {

    p.setup = function() {
        p.createCanvas(480, 360);
    };

    p.draw = function() {
        p.background(220);
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                p.drawFlag(
                    120 + i * 24,
                    60 + j * 24,
                    p.random(
                        3,
                        18
                    )
                );
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
    };
}

const flagsfinalnoloop = ( p ) => {
    p.setup = function() {
        p.createCanvas(480, 360);
        p.noLoop();
    };

    p.draw = () => {
        p.background(220);
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                p.drawFlag(
                    120 + i * 24,
                    60 + j * 24,
                    p.random(
                        3,
                        18
                    )
                );
            }
        }
    }

    p.drawFlag = function(x, y, largura) {
        let modu = largura / 3;

        let larg = 3 * modu;
        let altu = 2 * modu;
        p.noStroke();

        p.fill(255);
        p.rect(x, y, larg, altu);
        p.fill('#BC002D');
        p.circle(x + larg / 2, y + altu / 2, 1.2 * modu);
    };
}

let flagsRect = new p5(flagsrect, "flags-rect");
let flagsCircle = new p5(flagscircle, "flags-circle");
let flagsParam = new p5(flagsparam, "flags-param");
let flagsToMany = new p5(flagstomany, "flags-tomany");
let flagsFinal = new p5(flagsfinal, "flags-final");
let flagsFinalNoLoop = new p5(flagsfinalnoloop, "flags-finalnoloop");