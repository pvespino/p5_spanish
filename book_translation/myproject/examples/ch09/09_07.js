function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  randomSeed(0);
  for (var i = 35; i < width + 40; i += 40) {
    var gray = int(random(0, 102));
    var scalar = random(0.25, 1.0);
    owl(i, 110, gray, scalar);
  }
}

function owl(x, y, g, s) {
  push();
  translate(x,y);
  scale(s);   // Define la escala
  stroke(g);  // Define el valor de gris
  strokeWeight(70);
  line(0, -35, 0, -65); // Cuerpo
  noStroke();
  fill(255-g);
  ellipse(-17.5, -65, 35, 35);  // Pupila izquierda
  ellipse( 17.5, -65, 35, 35);  // Pupila derecha
  arc(0, -65, 70, 70, 0, PI);   // Barbilla
  fill(g);
  ellipse(-14, -65, 8, 8);  // Ojo izquierdo
  ellipse( 14, -65, 8, 8);  // Ojo derecho
  quad(0, -58, 4, -51, 0, -44, -4, -51);  // Pico
  pop();
}
