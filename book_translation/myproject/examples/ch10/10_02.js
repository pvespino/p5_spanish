var jit;
var bug;

function setup() {
  createCanvas(480, 120);
  background(204);
  jit = new JitterBug(width * 0.33, height/2, 50);
  bug = new JitterBug(width * 0.55, height/2, 10);
}

function draw() {
  jit.move();
  jit.display();
  bug.move();
  bug.display();
}

// Copia aquí el código del constructor de JitterBug
