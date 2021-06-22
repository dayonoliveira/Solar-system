let sun = new Sphere(0, 0, 0, 545, 20, 20);
let mercury = new Sphere(620, 0, 0, 1.915, 10, 10);
let venus = new Sphere(820, 0, 0, 4.745, 15, 15);
let earth = new Sphere(1020, 0, 0, 5, 15, 15);
let moon = new Sphere(1022.57, 0, 2, 1.362, 10, 10);
let mars = new Sphere(1220, 0, 0, 2.66, 10, 10);
let jupiter = new Sphere(1420, 0, 0, 56.05, 15, 15);
let saturn = new Sphere(1620, 0, 0, 47.25, 15, 15);
let uranus = new Sphere(1820, 0, 0, 20.05, 15, 15);
let neptune = new Sphere(2020, 0, 0, 19.4, 15, 15);
let pluto = new Sphere(2220, 0, 0, 0.94, 15, 15);

function setup(){
    
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    createEasyCam();
    frameRate(24);
    orbsColor();
    
}

function draw(){
    background(52);
    orbsRoute();

    sun.draw();
    sun.rotate(-0.5);

    mercury.draw();
    mercury.rotate(-117.6);
    
    venus.draw();
    venus.rotate(488);

    earth.draw();
    earth.rotate(-2);

    moon.draw();
    moon.rotate(-2);

    mars.draw();
    mars.rotate(-2.06);
    
    jupiter.draw();
    jupiter.rotate(-0.83);

    saturn.draw();
    saturn.rotate(-0.89);

    uranus.draw();
    uranus.rotate(1.44);

    neptune.draw();
    neptune.rotate(-1.346);

    pluto.draw();
    pluto.rotate(-12.82);

    
}

function orbsColor(){
    sun.fillColor[0] = 230;
    sun.fillColor[1] = 138;
    sun.fillColor[2] = 0;

    mercury.fillColor[0] = 255;
    mercury.fillColor[1] = 255;
    mercury.fillColor[2] = 102;

    mercury.strokeColor[0] = 255;
    mercury.strokeColor[1] = 255;
    mercury.strokeColor[2] = 102;

    venus.fillColor[0] = 204;
    venus.fillColor[1] = 255;
    venus.fillColor[2] = 255;

    venus.strokeColor[0] = 204;
    venus.strokeColor[1] = 255;
    venus.strokeColor[2] = 255;

    earth.fillColor[0] = 0;
    earth.fillColor[1] = 102;
    earth.fillColor[2] = 255;

    earth.strokeColor[0] = 0;
    earth.strokeColor[1] = 102;
    earth.strokeColor[2] = 255;

    moon.fillColor[0] = 255;
    moon.fillColor[1] = 255;
    moon.fillColor[2] = 255;

    moon.strokeColor[0] = 255;
    moon.strokeColor[1] = 255;
    moon.strokeColor[2] = 255;

    mars.fillColor[0] = 255;
    mars.fillColor[1] = 102;
    mars.fillColor[2] = 102;

    mars.strokeColor[0] = 255;
    mars.strokeColor[1] = 102;
    mars.strokeColor[2] = 102;

    jupiter.fillColor[0] = 255;
    jupiter.fillColor[1] = 204;
    jupiter.fillColor[2] = 102;

    jupiter.strokeColor[0] = 255;
    jupiter.strokeColor[1] = 204;
    jupiter.strokeColor[2] = 102;

    saturn.fillColor[0] = 255;
    saturn.fillColor[1] = 255;
    saturn.fillColor[2] = 102;

    saturn.strokeColor[0] = 255;
    saturn.strokeColor[1] = 255;
    saturn.strokeColor[2] = 102;

    uranus.fillColor[0] = 51;
    uranus.fillColor[1] = 204;
    uranus.fillColor[2] = 204;

    uranus.strokeColor[0] = 51;
    uranus.strokeColor[1] = 204;
    uranus.strokeColor[2] = 204;

    neptune.fillColor[0] = 51;
    neptune.fillColor[1] = 102;
    neptune.fillColor[2] = 255;

    neptune.strokeColor[0] = 51;
    neptune.strokeColor[1] = 102;
    neptune.strokeColor[2] = 255;

    pluto.fillColor[0] = 255;
    pluto.fillColor[1] = 255;
    pluto.fillColor[2] = 255;

    pluto.strokeColor[0] = 255;
    pluto.strokeColor[1] = 255;
    pluto.strokeColor[2] = 255;
}

function orbsRoute(){
    // Mercury route
    stroke(color(255, 255, 102));
    noFill();
    ellipse(0, 0, 1240, 1240, 50);

    // Venus route
    stroke(color(204, 255, 255));
    noFill();
    ellipse(0, 0, 1640, 1640, 50);

    // Earth route
    stroke(color(0, 102, 255));
    noFill();
    ellipse(0, 0, 2040, 2000, 50);

    // Mars route
    stroke(color(255, 102, 102));
    noFill();
    ellipse(0, 0, 2440, 2440, 50);

    // Jupiter route
    stroke(color(255, 204, 102));
    noFill();
    ellipse(0, 0, 2840, 2840, 50);

    // Saturn route
    stroke(color(255, 255, 102));
    noFill();
    ellipse(0, 0, 3240, 3240, 50);

    // Uranus route
    stroke(color(51, 204, 204));
    noFill();
    ellipse(0, 0, 3640, 3640, 50);

    // Neptune route
    stroke(color(51, 102, 255));
    noFill();
    ellipse(0, 0, 4040, 4040, 50);

    // Pluto route
    stroke(color(255, 255, 255));
    noFill();
    ellipse(0, 0, 4440, 4440, 50);
}
