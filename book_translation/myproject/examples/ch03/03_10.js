function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  ellipse(140, 0, 190, 190);
  // El rectángulo es dibujado sobre la elipse
  // porque está después en el código
  rect(160, 30, 260, 20);
}
