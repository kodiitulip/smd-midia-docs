const mruvkodie = ( p ) => {
    const GRAVITY = 0.1;
    let ball;
    
    let vel = [5.0, 5.0],
        acc = [0.0, GRAVITY],
        pos = [0.0, 0.0],
        diameter = 30.0,
        ang = 0;

    p.preload = function() {
        ball = p.loadImage('baby.png');
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
        if (pos[0] + diameter / 2 > p.width) {
            vel[0] *= -1;
            pos[0] = p.width - diameter / 2;
        } else if (pos[0] - diameter / 2 < 0) {
            vel[0] *= -1;
            pos[0] = diameter / 2;
        }
        if (pos[1] + diameter / 2 > p.height) {
            vel[1] *= -1;
            pos[1] = p.height - diameter / 2;
        } else if (pos[1] - diameter / 2 < 0) {
            vel[1] *= -1;
            pos[1] = diameter / 2;
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
        
        let v = p.createVector(vel[0], vel[1]);
        ang = p.lerp(ang, v.heading(), 0.4);
        
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