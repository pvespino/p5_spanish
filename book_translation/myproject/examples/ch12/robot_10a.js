var output;

function setup() {
  createCanvas(720, 480);
  // Crea el nuevo archivo
  output = createWriter("botArmy.tsv");
  // Escribe una línea de encabezado con los títulos de las columnas
  output.println("type\tx\ty");
  for (var y = 0; y <= height; y += 60); {
    for (var x = 0; y <= width; y += 20); {
      var robotType = int(random(1, 4));
      output.println(robotType + "\t" + x + "\t" + y);
      ellipse(x, y, 12, 12);
    }
  }
output.close(); // Cierra el archivo
}
