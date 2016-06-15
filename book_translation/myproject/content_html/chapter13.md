# Capítulo 13. Extensión

Este libro se enfoca en usar p5.js para hacer gráficas interactivas, porque eso es lo principal que p5.js hace. Sin embargo, este software puede realizar mucho más que esto, y está siendo extendido más allá todo el tiempo.

Una librería de p5.js es un conjunto de código que extiende el software más allá de sus funciones principales. Las librerías han sido una parte importante del crecimiento de este proyecto, porque le permite a los desarrolladores añadir nuevas funciones rápidamente. Como projectos autocontenidos y más pequeños, las librerías son más fáciles de manejar que si sus características estuvieran integradas al software principal.

El archivo .zip completo de p5.js incluye las librerías p5.dom y p5.sound. También puedes bajar otras librerías desde http://p5js.org/libraries/. Para usar una de estas librerías, primero asegúrate de que está dentro del directorio que contiene tus archivos HTML y JavaScript. En segundo lugar, añade una línea de código a tu archivo HTML para indicar que la librería será usada en el bosquejo actual. Esta línea debería verse así:

```html
<script language="javascript" type="text/javascript"
src="relative/path/to/p5.libraryName.js"> </script>
```

relative/path debería ser reemplazado por la ubicación requerida para ubicar el archivo de librería relativo al archivo HTML. Si necesitas subir un directorio, inserta "..". Por ejemplo, si estás trabajando con el ejemplo vacío de la librería de p5.sound.js de la descarga completa de p5.js complet, la línea ser vería así:

```html
<script language="javascript" type="text/javascript"
src="../p5.sound.js"> </script>
```

## p5.sound

 La librería p5.sound tiene la habilidad de reproducir, analizar y generar (sintetizar) sonido. A continuación se presentan una s pocas funciones clave; consultar la Referencia de p5.js para muchos más objetos que pueden ser creados y funciones que pueden ser llamadas: http://p5js.org/reference/#/libtstird/p5.sound.

 Como las imágenes, archivos JSON, y los archivos de texto introducidos en el Capítulo 7, un archivo de audio es otro tipo de medio para aumentar un bosquejo de p5.js. Sigue las instrucciones en ese capítulo para aprender cómo cargar un archivo de sonido en el directorio de un bosquejo. La librería p5.sound puede cargar un gran rango de formatos de archivos de audio incluyendo WAV, AIFF y MP3. Una vez que un archivo es cargado, puede ser reproducido, pausado y repetido así mismo como distorsionado por un grupo de funciones de efecto.

 ## Ejemplo 13-1: reproduce un sample

 El uso más común de la librería p5.sound es para tocar un sonido cuando un evento ocurre en la pantalla o como música de fondo. Este ejemplo se basa en el Ejemplo 8-5 para reproducir un sonido cuando la figura llega a los bordes de la pantalla. El archivo blip.wav es incluido en la carpeta media que puede ser descargada siguiendo las instrucciones del capítulo 7. Así como con otros medios, una variable para almacenar un objeto p5.SoundFile (que es lo que la función loadSound() retorna) es definida en la parte superior del bosquejo, es cargada con preload() y después de eso, puede ser usada en cualquier parte del prorgrama:

 ```javascript
 var blip;

 var radius = 120;
 var x = 0;
 var speed = 1.0;
 var direction = 1;

 function preload() {
   blip = loadSound("blip.wav");
 }

 function setup() {
   createCanvas(440, 440);
   ellipseMode(RADIUS);
   x = width/2; // Parte en el centro
 }

 function draw() {
   background(0);
   x += speed * direction;
   if ((x > width - radius) || (x < radius)) {
     direction = - direction; // Invierte la dirección
     bip,play();
   }
   if (direction == 1) {
     arc(x, 220, radius, radius, 0.52, 5.76);
   } else {
     arc(x, 220, radius, radius, 3.67, 8.9);
   }
 }
 ```

El sonido es gatillado cada vez que el método play() es ejecutado. Este ejemplo funciona bien porque el sonido solo está siendo reproducido cuando el valor de la variable x está en las orillas de la pantalla. Si el sonido fuera tocado en cada ejecución de draw(), el sonido se reiniciaría 60 veces por segundo y no tendría tiempo de terminar de sonar. El resultado sería un sonido distorsionando rápidamente. Para tocar un sample más largo mientras un programa corre, llama a los métodos play(), loop() para que suenen dentro de setup() así que el sonido así se gatilla una sola vez.

## Nota

El objeto p5.soundFile tiene muchos métodos para controlar cómo un sonido es reproducido. Lo más esenciales son play() para tocar el sample una vez, loop() para tocarlo desde el principio hasta el fin una y otra vez, stop() para parar la reproducción y jump() para moverse a un momento específico dentro del archivo.

## Ejemplo 13-2: escucha un micrófono

Además de reproduicr sonidos, p5.js puede escuchar. Si tu computador tiene un micrófono incorporado o conectado, la librería p5.sound puede leer audio en vivo a través de él. Una vez que los datos del micrófono están conectados al software, los puedes analizar, modificar o reproducir:

```javascript
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
```

Hay dos partes que están tomando la amplitud (volumen) del micrófono añadido. El objeto p5.AudioIn es usado para obtener la señal del micrófono y el objeto p5.Amplitude es usado para medir la señal.

Las variables para almacenar ambos objetos está definidas en la parte de arriba del código y creadas dentro de setup(). Después del objeto p5.Amplitude() (en este programa es llamado amp), el objeto p5.AudioIn, nombrado mic, es conectado al objeto amp con el método setInput(). Después de eso, el método getLevel() del objeto amp puede ser ejecutado en cualquier momento para leer la amplitud del micrófono dentro del programa. En este ejemplo, eso es hecho cada vez en draw() y ese valor es usado para definir el tamaño del círculo.

Además de tocar un sonido y analizar un sonido como fue demostrado en los últimos dos ejemplos, p5.js puede sintetizar sonido directamente. Los fundamentos de la síntesis de sonido son formas de onda, entre las que se incluyen las ondas sinusoidales, triangulares y cuadradas. Una onda sinusoidal suena agradable, una onda cuadrada es más dura y una onda triangular está entre medio. Cada onda tiene un número de propiedades. La frecuencia, medida en Hertz, determina la altura, cuán grave o agudo es el tono. La amplitud de la onda determina el volumen.

## Ejemplo 13-3: crear una onda sinusoidales

En el siguiente ejemplo, el valor de mouseX determina la frecuencia de la onda sinusoidal. Mientras el ratón se mueve a la izquierda y derecha, la frecuencia audible y la correspondiente visualización de la onda aumenta y decae:

```javascript
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
```

El objeto sine, creado con el constructor de p5.SinOsc, es definido al principio del código y luego creado dentro de setup(). El método start() hace que la onda empieza a generar sonido. Dentro de draw(), el método freq() define continuamente la frecuencia de la onda, basándose en la posición izquierda y derecha del ratón.

## p5.dom

La librería p5.dom tiene la habilidad de crear e interactuar con elementos HTML fuera del lienzo gráfico. La sigla DOM viene de Document Object Model, que se refiere a un conjunto de métodos para interactuar programáticamente con la página HTML. Los siguientes ejemplos presentan unas pocas funciones clave. Revisa la Referencia de p5.js para muchos más elementos que pueden ser creados y funciones que pueden ser llamadas: http://p5js.org/reference/#/libraries/p5.dom.

Tal como createCanvas() crea un lienzo gráfico en la página, p5.dom incluye un número de otros métodos create para añadir otros elementos HTML a la página. Ejemplos incluyen video, links URL, cuadros de entrada y barras deslizadoras.

## Ejemplo 3-14: accede a la webcam

createCapture() accede a la webcam en tu computador y crea un elemento HTML que muestra su audio y video. Una vez que el elemento de captura es creado, puede ser dibujado en el lienzo y ser manipulado:

```javascript
var capture;

function setup() {
  createCanvas(480, 120);
  capture = createCapture();
  capture.hide();
}

function draw() {
  var aspectRatio = capture.height/capture.width;
  var h = width * aspectRatio;
  image(capture, 0, 0, width, h);
  filter(INVERT);
}
```

El objeto de capture está definido en la parte superior del código y luego es creado dentro de setup(). createCapture() de hecho adjunta un nuevo elemento a la página, pero como queremos dibujarlo en el lienzo, el método hide() es usado para esconder el objeto de captura. Revisa lo que pasa cuando descomentas esta línea de código.

Deberías ver dos copias del video, una invertida y una normal.

Los datos del objeto de captura son dibujados en el lienzo en la función draw() e invertidos usando el método filter().

## Ejemplo 13-5: crea una barra deslizadora

La función createSlider() crea una barra deslizadora que puede ser usada para manipular aspectos del bosquejo. Acepta tres argumentos - el valor mínimo, el valor máximo y el valor inicial:

```javascript
var slider;

function setup() {
  createCanvas(480, 120);
  slider = createSlider(0, 255, 100);
  slider.position(20, 20);
}

function draw() {
  var gray = slider.value();
  background(gray);
}
```

El objeto barra deslizadora es definido en la parte superior del código y luego creado dentro de setup(). Por defecto, el elemento será adjuntado a la página, justo después del elemento más recientemente creado en la página. El método position() permite darle una posición relativa a la esquina superior izquierda. El método value() retorna el valor actual de la barra deslizadora, el cual está siendo usado para definir el color del fondo del lienzo en draw().

## Ejemplo 13-6: crea un recuadro de entrada

La función createInput() añade un recuardo que puede ser usado para darle entrada de texto a tu programa. createButton() añade un botón que puede gatillar cualquier función que escojas. En este caso, el botón es usado para entregar el texto dentro del recuadro de entrada al programa:

```javascript
var input;
var button;

function setup() {
  createCanvas(480, 120);
  input = createInput();
  input.position(20, 30);
  button = createButton("submit");
  button.position(160, 30);
  button.mousePressed(drawName);

  background(100);
  noStroke();
  text("Enter your name. ", 20, 20);
}

function drawName() {
  background(100);
  textSize(30);
  var name = input.value();
  for (var i = 0; i < 30; i++) {
    text(name, random(width), random(height));
  }
}
```

Los objetos entrada y botón son definidos en la parte superior del código y creados dentro de setup(). createButton() aceptoa un argumento, la etiqueta a ser mostrada en el botón. El método mousePressed() es usado para asignar una función a ejecutar cuando el botón es presionado. Dentro de drawName(), los contenidos del recuadro de entrada son leídos usando el método value(), y usados para llenar el fondo con el texto.