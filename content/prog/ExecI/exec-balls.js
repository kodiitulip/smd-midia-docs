const execballs = ( p ) => {
    let balls = [];
    
    p.setup = () => {
        p.createCanvas(200, 200);
        p.generateBalls(p.width/15);
        p.textAlign(p.CENTER,p.CENTER);
    };
    
    p.draw = () => {
        p.background(220);
        for (let i = 0; i < balls.length; i++) {
            let ball = balls[i];
            p.circle(ball.x, ball.y, 10);
            ball.fall();
        }
        p.text("!Click to Reset!", p.width/2, 20);
    };
    
    p.mousePressed = () => {
        let inCanvas = p.mouseX > 0 &&
        p.mouseX < p.width &&
        p.mouseY > 0 &&
        p.mouseY < p.height;
        
        if (!inCanvas) {
            return;
        }
        
        for (let i = 0; i < balls.length; i++) {
            let ball = balls[i];
            ball.reset();
        }
    }
    
    /**
    * Generate the balls
    * @param {number} amt the amount of balls
    */
    p.generateBalls = (amt) => {
        for (let i = 0; i < amt; i++) {
            let b = {
                x: 5 + i * 15,
                y: 5,
                maxim: p.height,
                speed: 1,
                fall: function() {
                    this.y += this.speed;
                    if (this.y - 5 > this.maxim) {
                        this.y = -5;
                    }
                },
                reset: function() {
                    this.y = 5;
                },
            }
            
            balls[i] = b;
        }
    }
}

let execBalls = new p5(execballs, "exec-balls");