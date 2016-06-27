var x = 180;          // Coordenada x
var y = 400;          // Coordenada y
var bodyHeight = 153; // Altura del cuerpo
var neckHeight = 56;  // Altura del cuello
var radius = 45;      // Radio de la cabeza
var angle = 0.0;      // Ángulo de movimiento

function setup() {
  createCanvas(360, 480);
  ellipseMode(RADIUS);
  background(204);
}

function draw() {
  // Cambia la posición en un monto aleatorio pequeño
  x += random(-4, 4);
  y += random(-1, 1);

  // Cambia la altura del cuello
  neckHeight = 80 + sing(angle) * 30;
  angle += 0.05;

  // Ajusta la altura de la cabeza
  var ny = y - bodyHeight - neckHeight - radius;

  // Cuello
  stroke(102);
  line(x +  2, y - bodyHeight, x +  2, ny);
  line(x + 12, y - bodyHeight, x + 12, ny);
  line(x + 22, y - bodyHeight, x + 22, ny);

  // Antenas
  line(x + 12, ny, x - 18, ny - 43);
  line(x + 12, ny, x + 42, ny - 99);
  line(x + 12, ny, x + 78, ny + 15);

  // Cuerpo
  noStroke();
  fill(102);
  ellipse(x, y - 33, 33, 33);
  fill(0);
  rect(x - 45, y - bodyHeight, 90, bodyHeight - 33);
  fill(102);
  rect(x - 45, y - bodyHeight + 17, 90, 6);

  // Cabeza
  fill(0);
  ellipse(x + 12, ny, radius, radius);
  fill(255);
  ellipse(x + 24, ny - 6, 14, 14);
  fill(0);
  ellipse(x + 24, ny - 6, 3, 3);
}
