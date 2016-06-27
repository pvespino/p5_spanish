function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);

  // Lechuza izquierda
  translate(110, 110);
  stroke(0);
  strokeWeight(70);
  line(0, -35, 0, -65); // Cuerpo
  noStroke();
  fill(204);
  ellipse(-17.5, -65, 35, 35);  // Pupila izquierda
  ellipse( 17.5, -65, 35, 35);  // Pupila derecha
  arc(0, -65, 70, 70, 0, PI);   // Barbilla
  fill(0);
  ellipse(-14, -65, 8, 8);  // Ojo izquierdo
  ellipse( 14, -65, 8, 8);  // Ojo derecho
  quad(0, -58, 4, -51, 0, -44, -4, -51);  // Pico

  // Lechuza derecha
  translate(70, 0);
  stroke(0);
  strokeWeight(70);
  line(0, -35, 0, -65); // Cuerpo
  noStroke();
  fill(255);
  ellipse(-17.5, -65, 35, 35);  // Pupila izquierda
  ellipse( 17.5, -65, 35, 35);  // Pupila derecha
  arc(0, -65, 70, 70, 0, PI);   // Barbilla
  fill(0);
  ellipse(-14, -65, 8, 8);  // Ojo izquierdo
  ellipse( 14, -65, 8, 8);  // Ojo derecho
  quad(0, -58, 4, -51, 0, -44, -4, -51);  // Pico
}
