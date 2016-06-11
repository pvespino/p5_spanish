# Capítulo 12. Datos

La visualización de datos es una de las áreas más activas en la intersección de la programación y las gráficas y también uno de los usos más populares de p5.js. Este capítulo expando lo que se ha discutido sobre almacenamiento y carga de datos en el libro e introduce más características relevantes a conjuntos de datos que pueden ser usados para visualización.

Existe un gran rango de software que puede producir visualizaciones estándar como gráficos de barras y gráficos de dispersión. Sin embargo, escribir código desde cero para crear visualización nos brinda mayor control sobre el resultado y anima a los usuarios a imaginar, explorar y crear representaciones de datos únicos. Para nosotros, este es el objetivo sobre aprender a programar y usar software como p5.js, y encontramos mucho más interesante que estar limitado por métodos prefabricados o herramientas ya disponibles.

## Resumen de datos

Es un buen momento para rebobinar y discutir cómo los datos fueron introducidos a través de este libro. Una variable en un bosquejo de p5.js es usado para almacenar datos. Empezamos con variables primitivas. En este caso, la palabra primitiva significa un solo trozo de información. Por ejemplo, una variable puede almacenar un número o un string.

Un arreglo es creado para almacenar una lista de elementos dentro de un único nombre de variable.En el Ejemplo 11-7 se almacenan cientos de números a usarse para definir el trazado de las líneas. Un objeto es una variable que almacena un conjunto de variables y funciones relacionadas.

Las variables y los objetos pueden ser definidos dentro del código, pero también pueden ser cargados dentro de un archivo en el directorio del bosquejo. Los siguientes ejemplos en este capítulo lo demuestran.

## Tablas

Muchos conjuntos de datos son almacenados como filas y columnas (ver Figura 12-1), así que p5.js incluye un objeto tabla para hacer más fácil trabajar con ellos. Si haz trabajado con hojas de cálculo, tienes una ventaja al momento de trabajar con tablas al programar. p5.js puede leer una tabla desde un archivo, o crear una nueva directamente en código. También es posible leer y escribir cualquier fila y columna y modificar celdas individuales dentro de la tabla. En este capítulo, nos enfocaremos en trabajar con datos en tablas.

Los datos en tablas son usualmente almacenados en archivos de texto planos con las columnas usando comas o tabulación. Un archivo de valores separados por comas es abreviado como CSV y usa la extensión de archivo .csv. Cuando se usa tabulación, la extensión .tsv puede ser usada.

Para crear un archivo CSV o TSV, primero ponlo en el directorio del bosquejo tal como descrito en el comienzo del Capítulo 7, y luego usa la función loadTable() para obtener los datos y ponerlos en un objeto.

## Nota

Solo las primeras líneas de cada conjunto de datos son mostradas en estos ejemplos. Si estás escribiendo manualmente el código, necesitarás el archivo .csv, .json o .tsv completo para replicar las visualizaciones mostradas en las figuras. Puedes encontrarlos en el archivo media.zip.

Los datos para el siguiente ejemplo son una versión simplificada de las estadísticas del jugador David Ortiz del equoipo Red Sox. De izquierda a derecha, está el año, el número de home runs, runs batted in (RBI), y el promedio de bateo. Cuando el archivo es abierto en un editor de texto, las primeras cinco líneas del código se ven así:

## Ejemplo 12-1: lee la tabla

Para cargar los datos a p5.js, un objeto es creado usando el constructor p5.Table. El objeto en este ejemplo es llamado stats. La función loadTable() carga el archivo ortiz.csv desde el directorio de tu bosquejo. La función se encuentra dentro de preload() para asegurar que esté completamente cargada antes de que los datos sean usados en setup().

En setup(), el for loop lee cada fila de la tabla en secuencia. Toma los datos desde la tabla y los graba en variables. El método getRowCount() es usado para contar el número de filas en cada archivo de datos. Como los datos sobre las estadísticas de Ortiz van de 1997 a 2014, hay 18 filas que leer:

```javascript
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
```

Dentro del for loop, el método get() es usado para tomar datos desde la tabla. Este método tiene dos parámetros: el primero es la fila a leer y el segundo es la columna.

## Ejemplo 12-2: dibuja la tabla

El siguiente ejemplo expande el anterior. Crea un arreglo llamado homeRuns para grabar los datos después de ser cargados dentro de setup() y los datos del arreglo son usados dentro de draw(). El largo del arreglo es usado dos veces con el código homeRuns.length, para contar el número de iteraciones de un for loop. Es usado por primera vez para poner una marca vertical por cada item en el arreglo. Luego es usado para leer cada elemento del arreglo uno por uno y parar de leer del arreglo cuando termina. Después de que los datos son cargados dentro de preload() y leídos desde el arreglo en setup(), el resto de este programa aplica lo que aprendimos en el Capítulo 11. La función getNum() es usada en vez de get() para asegurar que el valor es entendido como un número a usar en el gráfico.

Este ejemplo es la visualización de una versión simplificada de las estadísticas de bateo entre 1997 y 2014 del jugador David Ortiz de los Boston Red Sox, dibujados con los datos de una tabla:

```javascript
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
```

Este ejemplo es tan minimalista que no es necesario guardar estos datos en un arreglo, pero la idea puede ser aplicada a ejemplos más complejos que podrías querer hacer en el futuro. Adicionalmente, puedes ver cómo este ejemplo puede ser aumentado con más información - por ejemplo, la información en el eje vertical puede definir el número de home runs y en el horizontal definir el año.

## Ejemplo 12-3: 29.740 ciudades

Para tener una mejor idea del potencial de trabajar con tablas de datos, el siguiente ejemplo usa un conjunto de datos más grande e introduce una característica conveniente. Esta tabla de datos es diferente, porque la primera fila, la primera línea en el archivo, es un encabezado. El encabezado define una etiqueta para cada columna para clarificar el contexto. Estas son las primeras cinco líneas de nuestro archivo de datos llamado cities.csv

```
zip, state, city, lat, lng
35004, AL, Acmar, 33.584132, -86.51557
35005, AL, Adamsville, 33.588437, -86.959727
35006, AL, Adger, 33.434277, -87.167455
35007, AL, Keystone, 33.236868, -86.812861
```

El encabezado hace más fácil leer el código - por ejemplo, la segunda línea del archivo establece que el código zip de Acmar, Alabama es 35004 y define la latitud de la ciudad como 33.584132 y la longitud como -86.51557. En total, el archivo tiene un largo de 29.741 líneas y define la ubicación y los códigos zip de 29.740 ciudades en Estados Unidos. El siguiente ejemplo carga estos datos dentro la función preload() y luego los dibuja en la pantalla con un for loop dentro de draw(). La función setXY() convierte la latitud y la longitud de un archivo en una elipse en la pantalla:

```javascript
var cities;

function preload() {
  cities = loadTable("cities.csv", "header");
}

function setup() {
  createCanvas(480, 240);
  fill(255, 150);
  noStroke();
}

function draw() {
  background(0);
  var xoffset = map(mouseX, 0, width, -width * 3, -width);
  translate(xoffset, -600);
  scale(10);
  for (var i = 0; i < cities.getRowCount(); i++) {
    var latitude = cities.getNum(i, "lat");
    var longitude = cities.getNum(i, "lng");
    setXY(latitude, longitude);
  }
}

function setXY(lat, lng) {
  var x = map(lng, -180, 180, 0,  width);
  var y = map(lat,   90, -90, 0, height);
  ellipse(x, y, 0.25, 0.25);
}
```

Dentro de la función preload(), observa que hay un segundo parámetro "header" añadido a la función loadTable(). Si esto no es hecho, entonces el código tratará la primera línea como datos y no como el título de cada columna. p5.Table tiene docenas de métodos para lograr añadir y remover columnas y filas, obtener una lista de entradas únicas en una columna, o ordenar la tabla. Una lista más completa de métodos y ejemplos cortos son incluidos en la Referencia de p5.js.


## JSON

El formato JSON (JavaScript Object Notation) es otro sistema común para almacenar datos. Tal como los formatos HTML y XML, los elementos tienen etiquetas asociadas a ellos. Por ejemplo, los datos de una película pueden incluir etiquetas para el título, director, año de lanzamiento, calificación y más. Estas etiquetas serán emparejadas con datos de la siguiente manera:

```JSON
"title": "Alphaville"
"director": "Jean-Luc Godard"
"year": 1964
"rating": 9.1
```

Para funcionar como un archivo JOSN, necesida un poco de puntuación para separar los elementos. Se usan comas entre cada par de datos y llaves para encapsularlo. Los datos definidos dentro de las llaves son un objeto JSON. Con estos cambios nuestro archivo de datos JSON con formato válido luce así:

```JSON
{
  "title": "Alphaville",
  "director": "Jean-Luc Godard",
  "year": 1964,
  "rating": 9.1
}
```

Existe otro detalle interesante en este corto ejemplo JSON relacionado a los tipos de datos: te darás cuenta que los datos de título y director están encerrados en comillas para demarcarlos como datos de tipo string, mientras que el año y la calificación no tienen comillas para definirlos como números. Esta distinción se hace importante después de cargar los datos a un bosquejo.

Para añadir otra película a la lista, se usa un par de corchetes en el comienzo y el final del archivo JSON para significar que los datos son un arreglo de objetos JSON. Cada objeto es separado por una coma. Poniendo todo esto en práctica, luce así:

```JSON
[
  {
    "title": "Alphaville",
    "director": "Jean-Luc Godard",
    "year": 1965,
    "rating": 9.1
  },
  {
    "title": "Pierrot le Fou",
    "director": "Jean-Luc Godard",
    "year": 1965,
    "rating": 7.3
  }
]
```

Este patrón puede ser repetido para incluir muchas películas. En este punto, es interesante comparar esta notación JSON a la representación de tabla correspondiente a los mismos datos. Como un archivo CSV, los datos hubieran lucido así:

title, director, year, rating
Alphaville, Jean-Luc Godard, 1965, 9.1
Pierrot le Fou, Jean-Luc Godard, 1965, 7.3

Observa que la notación CSV usa menos caracteres, lo que puede ser importante al momento de trabajar con conjuntos enormes de datos. Por otro lado, la versión JSON es usualmente más fácil de leer porque cada trozo de información está etiquetado.

Ahora que se han introducido las nociones básicos de JSON y su relación a tablas, revisemos el código necesario para leer un archivo JSON en un bosquejo de p5.js.

## Ejemplo 12-4: leer un archivo JSON

Este bosquejo carga el archivo JSON visto al principio de esta sección, el archivo que incluye solo los datos de la película Alpaville:

```javascript
var film;

function preload() {
  film = loadJSON("film.json");
}

function setup() {
  var title = film.title;
  var dir = film.director;
  var year = film.year;
  var rating = film.rating;
  print(title + " by " + dir + ", " + year + ". Rating: " + rating);
}
```

Los datos del archivo son cargados a la variable. Los valores individuales pueden ser accesados usando el operador punto, de forma similar a como accedemos a las propiedades dentro de un objeto.

## Ejemplo 12-5: visualiza datos desde un archivo JSON

También podemos trabajar con un archivo JSON que contiene más de una película. Aquí, el archivo de datos comenzado en el ejemplo previo ha sido actualizado para incluir todas las películas del director entre 1960 y 1966. El nombre de cada película es posicionado en orden en la pantalla según el año de lanzamiento y es asignado un valor en la escala de grises según su calificación.

Existen varias diferencias entre este ejemplo y el Ejemplo 12-4. La más importante es la manera en que el archivo JSON es cargado en los objetos FIlm. El archivo JSON es precargado dentro de preload(), poblando la variable filmData con un arreglo que tiene la misma estructura que los datos en el archivo. En setup(), un for loop es usado para iterar a través del arreglo de la información de las películas y crear un objeto basado en cada elemento en el arreglo, usando el constructor Film deinido aquí. El constructor accede a porciones de la información y los asigna a propiedades dentro de cada objeto. El constructor Film también define un método para mostrar el nombre de la película:

```javascript
var films = [];
var filmData;

function preload() {
  filmData = loadJSON("films.json");
}

function setup() {
  createCanvas(480, 120);
  for (var i = 0; i < filmData.length; i++) {
    var o = filmData[i];
    films[i] = new Film(o);
  }
  noStroke();
}

function draw() {
  background(0);
  for (var i = 0; i < films.length; i++) {
    var x = i * 32 + 32;
    films[i].display(x, 105);
  }
}

function Film(f) {
  this.title = f.title;
  this.director = f.director;
  this.year = f.year;
  this.rating = f.rating;

  this.display = function(x,y) {
    var ratingGray = map(this.rating, 6.5, 81, 102, 255);
    push();
    translate(x, y);
    rotate(QUARTER_PI);
    fill(ratingGray);
    text(this.title, 0, 0);
    pop();
  }
}
```

Este ejemplo es crudo en su visualización de datos sobre películas, Muestra cómo cargar los datos y cómo dibujar basándose en esos valores de los datos, pero es tu desafío encontrar el formato que acentúe lo que encuentras interesante sobre los datos. Por ejemplo, ¿es más interesante mostrar el número de películas que hizo Godard cada año?, ¿es más interesante comprar y contrastar estos datos con las películas de otro director?, ¿sería más fácil de leer con una fuente, tamaño del bosquejo o razón de aspecto distintos?. Las habilidades introducidas en los capítulos anteriores de este libro pueden ser aplicadas para llevar este bosquejo al siguiente paso de refinamiento.

## Datos de redes y APIs

El acceso público a cantidades gigantes de datos recolectados por gobiernos, corporaciones, organizaciones e individuos está cambiando nuestra cultura, desde la manera en que socializamos hasta cómo pensamos osbre ideas intangibles como la privacidad. Estos datos son muy frecuentemente accesados a través de estructuras de software lllamadas APIs.

El acrónimo API es misterioso y su signifciad - interfaz de programación de aplicaciones - no es mucho más clara. Sin embargo, las APIs son esenciales para trabajar con datos y no son necesariamente difíciles de comprender. Esencialmente, son requerimientos de datos hechos a un servicio. Cuando los conjuntos de datos son enormes, no es práctico ni deseable copiar la totalidad de los datos. Una API le permite a un programador pedir solo el goteo de datos que es relevante de este océano masivo.

El concepto puede ser ilustrado de manera más clara con un ejemplo hipotético. Asumamos que existe una organización que mantiene una base de datos de rangos de temperatura para cada ciudad dentro de un país. La API para este conjunto de datos le permite a un programador pedir las temperaturas máxima y mínimas de cualquier ciudad durante el mes de octubre del año 1972. Para requerir estos datos, la petición debe ser hecha mediante una específica línea o líneas de código, en el formato requerido por el servicio de datos.

Algunas APIs son completamente públicas, pero muchas requieren autenticación, que corresponde típicamente a una identidad (ID) de usuario o llave para que el servicio de datos pueda mantener registro de sus usuarios. La mayor parte de las APIs tiene reglas sobre cuántos y cuán frecuentemente se pueden hacer peticiones. Por ejemplo, podría ser posible hacer solo 1.000 requerimientos al mes, o no más de una petición por segundo.

p5.js puede solictar datos en Internet cuando el computador está corriendo el programa en línea. Los archivos CSV, TSV, JSON y
XML correspondientes pueden ser cargados usando la función correspondiente de cargado usando la URL como parámetro. Por ejemplo, el clima actual en Cincinnati está disponible en formato JSON en esta URL: http://api.openweathermap.org/data/2.5/find?q=Cincinnati&units=imperial.

Lee la URL detenidamente para decodificarla:

1. Pide datos al subdominio api del sitio openweathermap.org.

2. Especifica una ciudad a buscar (q es abreviación de query, búsqueda, lo que frecuentemente es usado en URLs para especificar búsquedas).

3. También indica que los datos deben ser retornados en formato imperial, lo que significa que la temperatura estará en Fahrenheit. Reemplazando imperial con metric se obtendrá la temperatura en grados Celsius.

Revisar estos datos de OpenWeatherMap es un ejemplo más realístico de trabajar con datos encontrados que los conjuntos de datos simplificados anteriores. Al momento de escribir, el archivo que retornaba la URL era el siguiente:

Este archivo es mucho más fácil de leer cuando es retornado con saltos de línea, y el objeto JSON y las estructuras del arreglo están definidas con llaves y corchetes:

```JSON
{
  "message": "accurate",
  "count": 1,
  "cod": "200",
  "list": [{
    "clouds": {"all": 80},
    "dt": 1423501526,
    "coord": {
      "lon": -84.456886,
      "lat":  39.161999
    },
    "id": 4508722,
    "wind": {
      "speed": 9.48,
      "deg": 354.002
    },
    "sys": {"country": "US"},
    "name": "Cincinati",
    "weather": [{
      "id": 803,
      "icon": "04d",
      "description": "broken clouds",
      "main": "Clouds"
      }],
      "main": {
        "humidity": 77,
        "pressure": 999.98,
        "temp_max": 34.16,
        "sea_level": 1028.34,
        "temp_min": 34.16,
        "temp": 34.16,
        "grnd_level": 999.98
      }
    }]
}
```

Observa que los corchetes en las secciones de "list" y "weather", indican una sección de objetos JSON. Aunque el arreglo en este ejemplo solo contiene un solo ítem, en otros casos, la API podría retornar diversos días o varaciones de múltiples estaciones metereolóigicas.

## Ejemplo 12-6: procesando la información del tiempo

El primer paso en trabajar con estos datos es estudiarlos y luego escribir un poco de código para extraer los datos deseados. En este caso, estamos curiosos sobre la temperatura actual. Podemos ver que nuestro dato de temperatura es de 34.16. Está marcado como temp y está dentro del objeto main y está adentro del arreglo list. Una función llamada getTemp() fue escrito específicamente para que este código funcione con el formato de organización de archivos JSON.

```javascript
var weatherData;

function preload() {
  var temp = getTemp(weatherData);
  print(temp);
}

function setup() {
  var temp = getTemp(weatherData);
  print(temp);
}

function getTemp(data) {
  var list = data.list;
  var item = list[0];
  var main = item.main;
  var t = main.temp;
  return t;
}
```

Los datos del archivo JSON son cargados en preload() y son pasados a la función getTemp() dentro de setup(). Luego, por el formato del archivo JSON, una serie de variables es usada para llegar más y más profundo en la estructura de los datos para finalmente llegar al número que deseamos. Este número es almacenado en la variable temperature y luego retornada por la función para ser asignada a la variable temp en setup() donde es impresa en la consola.

## Ejemplo 12-7: concatenando métodos

La secuencia de variables JSON creada en sucesión en el ejemplo anterior puede ser aproximada de forma distinta usando accesores. Este ejemplo funciona como el Ejemplo 12-6, pero los métodos son conectadas con el operador punto, en vez de ser calculados uno a la vez y asignados a variables entre medio:

```javascript
var weatherData;

function preload() {
  weatherData = loadJSON("cincinnati.json");
}

function setup() {
  var temp = getTemp(weatherData);
  print(temp);
}

function getTemp(data) {
  return data.list[0].main.temp;
}
```

Además nota cómo la temperatura final es retornada por la función getTemp(). En el Ejemplo 12-6, una variable es creada para almacenar el valor, luego ese valor es retornado. Aquí, el valor de la temperatura es retornado directamente, sin una variable intermedia.

Este ejemplo puede ser modificado para acceder a más datos de la organización y para construir un bosquejo que muestre los datos en la pantalla en vez de solo escribirlos en la consola. También puedes modificarlo para que lea datos de otra API - te encontrarás con que los datos retornados por muchas APIs comparten un formato similar.


## Robot 10: datos

El ejemplo final de robot en este libro es diferente del resto porque tiene dos partes. La primera parte genera un archivo usando valores aleatorios y for loops y la segunda parte lee ese archivo de datos para dibujar un ejército de robots en la pantalla.

El primer bosquejo usa dos nuevos elementos de código, la clase PrintWriter y la función createWriter(). Usadas en conjunto, crean y abren un archivo en el directorio del bosquejo para almacenar los datos generados por el bosquejo. En este ejemplo, el objeto creado con PrintWriter es llamado output y el archivo es llamado botArmy.tsv. En los loops, los datos son escritos al archivo corriendo el método println() en el objeto de salida. Aquí, los valores aleatorios son usados para definir cuál de las tres imágenes del robot serán dibujadas para cada coordenada. Para que el archivo se cree correctamente, el método close() debe ser ejecutado antes de que el programa se detenga. El código que dibuja una elipse es un adelanto visual para revelar la posición de la coordenada en la pantalla, pero noten que la elipse no está grabada en el archivo:

```javascript
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
```

Después que el programa es corrido, el archivo botArmy.tsv será creado en el directorio del bosquejo. Ábrelo para revisar cómo se escriben los datos. Las primeras líneas de código de este archivo serán similares a esto:

La primera columna es esencial para definir qué imagen de robot se va a usar, la segunda columna es la coordenada x, la tercera coluna es la coordenada y. El siguiente bosquejo carga nuestro archivo botArmy.tsv y usa los datos para estos propósitos:

```javascript
 var robots;
 var bot1;
 var bot2;
 var bot3;

 function preload() {
   bot1 = loadImage("robot1.png");
   bot2 = loadImage("robot2.png");
   bot3 = loadImage("robot3.png");
   robots = loadTable("botArmy.tsv", "header");
 }

 function setup() {
   createCanvas(720, 480);
   imageMode(CENTER);
   for (var i = 0; i < robots.getRowCount(); i++) {
     var bot = robots.getNum(i, "type");
     var x = robots.getNum(i, "x");
     var y = robots.getNum(i, "y");
     var sc = 0.15;
     if (bot == 1) {
       image(bot1, x, y, bot1.width*sc, bot1.height*sc);
     } else if (bot == 2) {
       image(bot2, x, y, bot2.width*sc, bot2.height*sc);
     } else {
       image(bot3, x, y, bot3.width*sc, bot3.height*sc);
     }
   }
 }
```

Una variación más concisa (y flexible) de este bosquejo usa arreglos como un enfoque más avanzado:

```javascript
var numRobotTypes = 3;
var images = [];
var scaling = 0.15;
var botArmy;

function preload() {
  for (var i = 0; i < numRobotTypes; i++) {
    images[i] = loadImage("robot" + (i+1) + ".png");
  }
  botArmy = loadTable("botArmy.tsv", "header");
}

function setup() {
  createCanvas(720, 480);
  imageMode(CENTER);
  for (var i = 0; i < botArmy.getRowCount(); i++) {
    var robotType = botArmy.getNum(i, "type");
    var x = botArmy.getNum(i, "x");
    var y = botarmy.getNum(i, "y");

    var bot = images[robotType - 1];
    image(bot, x, y, width*scaling, bot.height * scaling);
  }
}
```
