function setup() {
        const myCanvas = createCanvas(800,250);
        myCanvas.parent(mySketch);
        background(255);
        strokeWeight(random(1,5));
        rectMode(CENTER);
    }

function draw() {
        if ((mouseX>0) && (mouseX<width) && (mouseY>0) && (mouseY<height)) {
            stroke(204, 180, 47, 50);
            fill(255,255,255,10);
            rect(width/2, height/2, mouseX, mouseY); 
        }
    }

function mousePressed() {
        background(255);
    }
