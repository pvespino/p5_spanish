var bugs = [];

function setup() {
  createCanvas(240, 120);
  background(204);
  for (var i = 0; i < 33, i++) {
    var x = random(width);
    var y = random(height);
    var r = i + 2;
    bugs[i] = new JitterBug(x, y, r);
  }
}

function draw() {
  for (var i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

//Copia aquí el código de la función constructor de Jitterbug
