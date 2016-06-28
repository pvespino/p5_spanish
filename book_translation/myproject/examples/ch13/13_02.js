var mic;
var amp;

var scale = 1.0;

function setup() {
  createCanvas(440, 440);
  background(0);
  // Crea una entrada de audio y empieza a escuchar
  mic = new p5.AudioIn();
  mic.start();
  // Crea un nuevo analizador de amplitud y conéctalo a la entrada
  amp = new p5.Amplitude();
  amp.setInput(mic);
}

function draw() {
  // Dibuja un fondo que se vaya a negro
  noStroke(0);
  fill(0, 10);
  rect(0, 0, width, height);
  // El método getLevel() retorna valores entre 0 y 1
  // así que map() es usado para convertir los valores a números mayores
  scale = map(amp.getLevel(), 0, 1.0, 10, width);
  // Dibuja el círculo basado en el volumen
  fill(255);
  ellipse(width/2, height/2, scale, scale);
}
