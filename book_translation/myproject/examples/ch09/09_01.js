function setup() {
  print("¡Listo para lanzar los dados!");
  rollDice(20);
  rollDice(20);
  rollDice(6);
  print("Listo.");
}

function rollDice(numSides) {
  var d = 1 + int(random(numSides));
  print("Lanzando... " + d);
}
