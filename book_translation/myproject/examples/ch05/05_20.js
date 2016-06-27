function setup() {
  createCanvas(240, 120);
}

function draw() {
  background(204);
  line(220, 20, 220, 100);
  if (touchIsdown) {
    line(220, 20, 20, 100);
  }
}
