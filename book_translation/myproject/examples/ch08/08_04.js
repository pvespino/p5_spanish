var radius = 40;
var x = -radius;
var speed = 0.5;

function setup() {
  createCanvas(240, 120);
  ellipseMode(RADIUS);
}

function draw() {
  background(0);
  x += speed;     // Aumenta el valor de x
  if (x > width + radius) { // Si la figura está fuera de la pantalla
    x = - radius; // Mueve la figura al borde izquierdo
  }
  arc(x, 60, radius, radius, 0.52, 5.76);
}
