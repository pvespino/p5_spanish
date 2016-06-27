var y = 100;
var d = 130;

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  //izquierda
  ellipse(75, y, d, d);
  //centro
  ellipse(175, y, d, d);
  //derecha
  ellipse(275, y, d, d);
}
