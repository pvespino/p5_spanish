var stats;

function preload() {
  stats = loadTable("ortiz.csv");
}

function setup() {
  for (var i = 0; i < stats.getRowCount(); i++) {
    // Recupera el valor de la fila i, columna 0 del archivo
    var year = stats.get(i, 0);
    // Recupera el valor de la fila i, columna 1 del archivo
    var homeRuns = stats.get(i, 1);
    var rbi = stats.get(i, 2);
    var average = stats.get(i, 3);
    print(year, homeRuns, rbi, average);
  }
}
