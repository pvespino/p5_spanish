var startX = 20;  // Coordenada x inicial
var stopX = 160;  // Coordenada x final
var startY = 30;  // Coordenada y inicial
var stopY = 80;   // Coordenada y final
var x = startX;   // Coordenada x actual
var y = startY;   // Coordenada y actual
var step = 0.005; // createCanvas para cada paso (0.0 a 1.0)
var pct = 0.0;    // Porcentaje avanzado (0.0 a 1.0)

function setup() {
  createCanvas(240, 120);
}

function draw() {
  background(0);
  if (pct < 1.0) {
    x = startX + ((stopX - startX) * pct);
    y = startY + ((stopY - startY) * pct);
    pct += step;
  }
  ellipse(x, y, 20, 20);
}
