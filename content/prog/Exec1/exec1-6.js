const exec1_6 = ( p ) => {
    let geo = 0;
    
    p.setup = () => {
        p.createCanvas(200, 200);
        let newg = p.int(p.random(0,3));
        while (newg == geo) {
            newg = p.int(p.random(0,3));
        }
        geo = newg;
    };
    
    p.draw = () => {
        p.background(220);
        p.showGeometry(p.width/2, p.height/2);
    };
    
    p.mousePressed = () => {
        let inCanvas = p.mouseX > 0 &&
        p.mouseX < p.width &&
        p.mouseY > 0 &&
        p.mouseY < p.height;
        
        if (!inCanvas) {
            return;
        }
        
        let newg = p.int(p.random(0,3));
        while (newg == geo) {
            newg = p.int(p.random(0,3));
        }
        geo = newg;
    }
    
    p.showGeometry = (x, y) => {
        p.push();
        p.translate(x, y);
        switch (geo) {
            case 0:
                let vec = p.createVector(0, -x/2);
                let x1 = vec.x, y1 = vec.y;
                vec.rotate(p.radians(120));
                let x2 = vec.x, y2 = vec.y;
                vec.rotate(p.radians(120));
                let x3 = vec.x, y3 = vec.y;

                p.triangle(x1, y1, x2, y2, x3, y3);
                break;
            case 1:
                p.circle(0, 0, x);
                break;
            case 2:
                p.rect(-x/2, -y/2, x);
                break;
        }
        p.pop();
    }
}

let exec1Q6 = new p5(exec1_6, "exec1-q6");