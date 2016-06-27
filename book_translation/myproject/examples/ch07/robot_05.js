var bot1;
var bot2;
var bot3;
var landscape;

var easing = 0.05;
var offset = 0;

// Precarga las imágenes
function preload() {
  bot1 = loadImage("robot1.svg");
  bot2 = loadImage("robot2.svg");
  bot2 = loadImage("robot3.svg");
  landscape = loadImage("alpine.svg");
}

function setup() {
  createCanvas(720, 480);
}

function draw() {
  // Definir la imagen "landscape" como función
  // Esta imagen debe tener el mismo ancho y altura que el programa
  background(landscape);

  // Definir el offset izquierdo y derecho y aplicar
  // el suavizado para hacer la transición más suave
  var targetOffset = map(mouseY, 0, height, -40, 40);
  offset += (targetOffset - offset) * easing;

  // Dibuja el robot izquierdo
  image(bot1, 85 + offset, 65);

  // Dibuja el robot derecho más pequeño y
  // haz que tenga un menor offset
  var smallerOffset = offset * 0.7;
  image(bot2, 510 + smallerOffset, 140, 78, 248);

  // Dibuja el robot más pequeño, dale un offset menor
  smallerOffset *= -0.5;
  image(bot3, 410 + smallerOffset, 225, 39, 124);
}
