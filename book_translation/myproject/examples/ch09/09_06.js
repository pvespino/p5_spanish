function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  for (var x = 35; x < width + 70; x += 70) {
    owl(x, 110);
  }
}

// Insertar la función owl() del Ejemplo 9-5
