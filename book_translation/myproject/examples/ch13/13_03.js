var sine;

var freq = 440;

function setup() {
  createCanvas(440, 440);

  // Crea e inicia el oscilador sinusoidal
  sine = new p5.SinOsc();
  sine.start;
}

function draw() {
  background(0);
  // Mapea el valor de mouseX entre 20 Hz y 440 Hz para la frecuencia
  var hertz = map(mouseX, 0, width, 20.0, 440.0);
  sine.freq(hertz);
  // Dibuja una onda para visualizar la frecuencia del sonido
  stroke(204);
  for (var x = 0; x < width; x++) {
    var angle = map(x, 0, width, 0, TWO_PI * hertz);
    var sinValue = sin(angle) * 120;
    line(x, 0, x, height/2 + sinValue);
  }
}
