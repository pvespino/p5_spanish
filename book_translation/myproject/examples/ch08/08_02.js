function setup() {
  frameRate(30);    // Treinta cuadros por segundo
  //frameRate(12);  // Doce cuadros por segundo
  //frameRate(2);   // Dos cuadros por segundo
  //frameRate(0.5); // Un cuadro cada dos segundos
}
function draw() {
  var fr = frameRate();
  print(fr);
}
