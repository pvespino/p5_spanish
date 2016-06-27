var numFrames = 12;     // El número de cuadros
var images = [];        // Crear el arreglo
var currentFrame = 0;

function preload() {
  for (var i = 0; i < numFrames; i++) {
    var imageName = "frame-" + nf(i, 4) + ".png";
    images[i] = loadImage(imageName); //Carga cada imagen
  }
}

function setup() {
  createCanvas(240, 120);
  frameRate(24);
}

function draw() {
  image(images[currentFrame], 0, 0);
  currentFrame++;  // Siguiente cuadro
  if (currentFrame == images.length) {
    currentFrame = 0; // Retorna al primer cuadro
  }
}
