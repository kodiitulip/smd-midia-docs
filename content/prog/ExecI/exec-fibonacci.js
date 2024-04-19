const execfibonacci = ( p ) => {
    let numbers = [];

    let started = false;

    p.setup = () => {
        p.createCanvas(400, 400);
        p.textSize(10);
        p.textAlign(p.CENTER,p.CENTER);
    };

    p.draw = () => {
        p.background(220);

        if (!started) {
            p.text("Click Me!",p.width/2, p.height/2);
        } else {
            p.drawNumbers();
        }
    };

    p.mousePressed = () => {
        let pressedInCanvas = p.mouseX > 0 &&
                            p.mouseX < p.width &&
                            p.mouseY > 0 &&
                            p.mouseY < p.height;
        if (!pressedInCanvas) {
            return;
        }

        started = !started;
        if (!started) {
            p.textAlign(p.CENTER,p.CENTER);
            return;
        } else {
            p.textAlign(p.LEFT,p.TOP);
        }
        let n = (prompt('Type an amount of numbers:', '10'));

        while (isNaN(n)) {
            n = (prompt('Type an amount of numbers:', '10'));
        }

        for (let i = 0; i < n; i++) {
            if (i < 2) {
                numbers[i] = 1;
            } else {
                numbers[i] = numbers[i - 1] + numbers[i - 2];
            }
        }
    }

    p.drawNumbers = () => {
        let t = 'Fibonacci sequence (click again to reset) : ';
        for (let i = 0; i < numbers.length; i++) {
            number = numbers[i];
            t += p.str(number) + ', ';
        }
        p.text(t, 2, 2, p.width);
    }
}

let execFibonacci = new p5(execfibonacci, "exec-fibonacci");