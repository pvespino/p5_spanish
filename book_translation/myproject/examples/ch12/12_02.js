var stats;
var homeRuns = [];

function preload() {
  stats = loadTable("ortiz.csv");
}

function setup() {
  createCanvas(480, 120);
  var rowCount = stats.getRowCount();
  homeRuns = [];
  for (var i = 0; i < rowCount; i++) {
    homeRuns[i] = stats.getNum(i, 1);
  }
}

function draw() {
  background(204);
  // Dibuja la matriz de fondo para los datos
  stroke(153);
  line(20, 100,  20,  20);
  line(20, 100, 460, 100);
  for (var i = 0; i < homeRuns.length; i++) {
    var x = map(i, 0, homeRuns.length-1, 20, 460);
    line(x, 20, x, 100);
  }
  // Dibuja líneas basadas en los datos sobre home run
  noFill(0);
  stroke(0);
  beginShape();
  for (var i = 0; i < homeRuns.length; i++) {
    var x = map(i, 0, homeRuns.length - 1, 20, 460);
    var y = map(homeRuns[i], 0, 60, 100, 20);
    vertex(x, y);
  }
  endShape();
}
