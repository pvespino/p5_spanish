function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  line(0, 0, width, height); // Línea desde (0,0) a (480, 120)
  line(width, 0, 0, height); // Línea desde (480,0) a (0, 120)
  ellipse(width/2, height/2, 60, 60);
}
