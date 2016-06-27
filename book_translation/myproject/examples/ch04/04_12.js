function setup() {
  createCanvas(480, 120);
  fill(255);
  stroke(102);
}

function draw() {
  background(0);
  for (var y = 20; y < height - 20; y += 10) {
    for (var x = 20; x <= width - 20; x += 10) {
      ellipse(x, y, 4, 4);
      // Dibuja una línea al centro de la imagen
      line(x, y, 240, 60);
    }
  }
}
