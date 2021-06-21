let sun = new Sphere(0, 0, 0, 30, 10, 10);
let earth = new Sphere(110, 0, 0, 15, 10, 10);
let moon = new Sphere(130, 0, 20, 5, 10, 10);

function setup(){
    
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    createEasyCam();
    frameRate(60);
    
}

function draw(){
    background(52);

    sun.draw();
    sun.rotate(0.5);
    earth.draw();
    earth.rotate(2);
    moon.draw();
    moon.rotate(2);
    

    
}
