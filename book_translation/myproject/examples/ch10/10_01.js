var bug;

function setup() {
  createCanvas(480, 120);
  background(204);
  // Crea un objeto y pasa los parámetros
  bug = new JitterBug(width/2, height/2, 20);
}

function draw() {
  bug.move();
  bug.display();
}

// Copia aquí el código del constructor de Jitterbug
