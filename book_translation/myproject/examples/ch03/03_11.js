function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  rect(160, 30, 260, 20);
  // La elipse es dibujada sobre el rectángulo
  // porque está después en el código
  ellipse(140, 0, 190, 190);
}
