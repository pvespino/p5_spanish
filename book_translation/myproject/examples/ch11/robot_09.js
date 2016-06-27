var robotImage;
var bots = [];    // Declara un arreglo para almacenar objetos Robot

function preload() {
  robotImage = loadImage("robot1.svg");
}

function setup() {
  createCanvas(720, 480);

  var numRobots = 20;

  // Crea cada objeto
  for (var i = 0; i < numRobots; i++) {
    // Crea una coordenada x aleatoria
    var x = random(-40, width - 40);
    // Asigna la coordenada y basada en el orden
    var y = map(i, 0, numRobots, -100, height - 200);
    bots[i] = new Robot(robotImage, x, y);
  }
}

function draw() {
  background(204);
  // Actualiza y muestra cada bot en el arreglo
  for (var i = 0; i < bots.length; i++) {
    bots[i].update();
    bots[i].display();
  }
}

function Robot(img, tempX, tempY) {
  // Define los valores iniciales para las propiedades
  this.xpos = tempX;
  this.ypos = tempY;
  this.angle = random(0, TWO_PI);
  this.botImage = img;
  this.yoffset = 0.0;

  // Actualiza las propiedades
  this.update = function() {
    this.angle += 0.05;
    this.yoffset = sin(this.angle) * 20;
  }

  // Dibuja el robot en la pantalla
  this.display = function() {
    image(this.botImage, this.xpos, this.ypos + this.yoffset);
  }
}
