# Capítulo 7. Media

05.js es capaz de dibujar más que simplemente líneas y figuras. Es tiempo de aprender cómo crear imágenes y texto en nuestros programas para extener las posibilidades visuales a fotografía, diagramas detallados y diversas tipografías.

Antes de que hagamos esto, primero tenemos que hablar un poco sobre servidores. Hasta este punto, hemos estado viendo el archivo index.html directamente en el navegador. Esto funciona bien para correr animaciones simples. Sin embargo, si quieres hacer cosas como cargar una imagen externa en tu bosquejo, tu navegador no lo va a permitir. Si revisas la consola, te encontrarás con un error conteniendo el término "cross-origin". Para cargar archivos externos, tienes que correr un servidor. Un servidor es un programa que funciona como un manejador de capas. Responde cuando escribes una URL en la barra de direcciones, y sirve los archivos correspondientes a ti para su visualización.

Existen diferentes maneras de correr servidores. Visita https://github.com/processing/p5.js/wiki/Local-server para ver las instrucciones de cómo correr un servidor en sistemas Mac OS X, Windows y Linux. Una vez que lo tengas configurado, ¡estás listo para cargar media!

Hemos subido algunos archivos para que los uses en los ejemplos de este capítulo: http://p5js.org/learn/books/media.zip.

Descarga este archivo, descomprímelo en tu escritorio (o en otro lugar conveniente) y anota su ubicación.

## Nota

Para descomprimir en Mac OS X, basta con hacer doble click en el archivo y se creará un directorio llamado media. En Windows, haz doble click en el archivo media.zip, el que abrirá una nueva ventana. En esa ventana, arrastra el directorio llamado media al escritorio

Crea un nuevo bosquejo, y copia el archivo lunar.jpg desde el directorio media que acabas de descomprimir al directorio de tu bosquejo.

## Nota

En Windows y Mac OS X, las extensiones de los archivos están escondidas por defecto. Es una buena idea cambiar esta opción para que siempre veas el nombre completo de tus archivos. En Mac OS X, selecciona Preferencias desde el menú principal, y luego asegúrate que "Mostrar la extensión completa" esté seleccionado en la pestaña de opciones avanzadas. En Windows, busca las Opciones de Directorio, y selecciona la opción ahí.


## Images

Estos son los tres pasos que tienes que seguir antes de que puedas dibujar una imagen en la pantalla:

1. Añade la imagen al directorio del bosquejo

2. Crea una variable para almacenar la imagen.

3. Carga la imagen a la variable con la función loadImage().

## Ejemplo 7-1: carga una imagen

Para cargar una imagen, introduciremos una nueva función llamada preload(). La función preload() corre una vez y antes de que la función setup() corra. Generalmente deberías cargar tus imagenes y otros archivos dentro de preload() para asegurarte que estén completamente cargadas antes de que tu programa empiece a correr. Discutiremos esto en mayor profundidad más adelante en el capítulo.

Después de que los tres pasos son completados, puedes dibujar la imagen en la pantalla con la función image(). El primer parámetro de image() especifica la imagen a dibujar, el segundo y tercero son las coordenadas x e y:

```
var img;

function preload() {
  img = loadImage("lunar.jpg");
}

function setup() {
  createCanvas(480, 120);
}

function draw() {
  image(img, 0, 0);
}
```

Los parámetros opcionales cuarto y quinto determinan el ancho y altura de la imagen a dibujar. Si no se usan los parámetros cuarto y quinto, la imagen es dibujada al tamaño original que fue creada.

Los siguientes ejemplos muestran cómo trabajar con más de una imagen en el mismo programa y cómo escalar la imagen.

## Ejemplo 7-2: carga más imágenes

Para este ejemplo, necesitarás agregar el archivo capsule.jpg (que está dentro del directorio media que descargaste) al directorio de tu bosquejo.

```
var img1;
var img2;

function preload() {
  img1 = loadImage("lunar.jpg");
  img2 = loadImage("capsule.jpg");
}

function setup() {
  createCanvas(480, 120);
}

function draw() {
  image(img1, -120, 0);
  image(img1, 130, 0, 240, 120);
  image(img2, 300, 0, 240, 120);
}
```
## Ejemplo 7-3: mover las imágenes con el ratón

Cuando las variables mouseX y mouseY son usadas como los parámetros cuarto y quinto de la función image(), el tamaño de la imagen cambia con el movimiento del ratón:

```javascript
var img;

function preload() {
  img = loadImage("lunar.jpg");
}

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(0);
  image(img, 0, 0, mouseX * 2, mouseY * 2);
}
```

## Nota

Cuando una imagen es mostrada más grande o pequeña que su tamaño original, puede aparecer distorsionada. Ten cuidado en preparar tus imágenes a los tamaños en que serán usadas. Cuando el tamaño de la imagen es cambiado con la función image(), el archivo original en tu directorio del bosquejo no cambia.

p5.js puede cargar y mostrar imágenes raster en los formatos JPEG, PNG y GIF, además de imágenes vector en el formato SVG. Puedes convertir imágenes a los formatos JPEG, PNG, GIF y SVG usando programas como GIMP, Photoshop e Illustrator. La mayor parte de las cámaras digitales graban sus imágenes en el formato JPEG, pero usualmente necesitan ser reducidas en tamaño para ser usadas con p5.js. Una cámara digital típica crea una imagen que es varias veces más grande que el área de dibujo de gran parte de los bosquejos creados en p5.js. Cambiar el tamaño de estas imágenes antes de que sean añadidas al directorio del bosquejo hace que los bosquejos carguen más rápido, corran más eficientemente y ahorra espacio en el disco duro.

Las imágenes GIF, PNG y SVG soportan transparencia, lo que significa que los pixeles pueden ser invisibles o parcialmente visibles (recuerda la discusión de color() y valores alpha en el Ejemplo 3-17). Las imágenes GIF tienen transparencia de 1 bit, lo que significa que los pixeles son totalmente opacos o totalmente transparentes. Las imágenes PNG soportan transparencia de 8 bits, lo que significa que cada pixel tiene una variable de opacidad. Los siguientes ejemplos usan los archivos clouds.gif y clouds.png para mostrar las diferencias entre los formatos. Las imágenes están dentro del directorio media que has descargado anteriormente. Asegúrate de incluirlas al directorio de tu bosquejo antes de probar cada ejemplo.

## Ejemplo 7-4: transparencia con GIF

```javascript
var img;

function preload() {
  img = loadImage("clouds.gif");
}

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  image(img, 0, 0);
  image(img, 0, mouseY * -1);
}
```

## Ejemplo 7-5: transparencia con PNG

```javascript
var img;

function preload() {
  img = loadImage("clouds.png");
}

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  image(img, 0, 0);
  image(img, 0, mouseY * -1);
}
```

## Ejemplo 7-6: mostrar una imagen SVG

```javascript
var img;

function preload() {
  img = loadImage("network.svg");
}

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  image(img, 0, 0);
  image(img, mouseX, 0);
}
```

## Nota

Recuerda incluir la extensión apropiada del archivo (.gif, .jpg, .png o .svg) cuando cargas la imagen. También asegúrate que el nombre de la imagen esté escrito exactamente como aparece en el archivo, incluyendo mayúsculas y minúsculas.

## Asincronicidad

¿Por qué necesitamos cargar las imágenes en preload()? ¿Por qué no usamos setup()? Hasta este punto, hemos estado asumiendo que nuestros programas corren desde la parte superior a la finerior, con cada línea de código siendo ejecutada completamente antes de avanzar a la siguiente. Aunque esto es generalmente cierto, en el caso de algunas funciones  como cargar imágenes, tu navegador empezará el proceso de cargar la imagen, pero se saltará a la siguiente línea antes de que la imagen haya terminado de cargarase. Esto recibe el nombre de asincronicidad, o de función asíncrona. Es un poco inesperado al principio, pero esto permite que las páginas carguen y corran más rápido en la web.

Para ver esto con mayor claridad, considera el siguiente ejemplo. Es idéntico al ejemplo 7-1, excepto que usamos loadImage() dentro de setup() en vez de preload().

## Ejemplo 7-7: demonstrando la Asincronicidad

```javascript
var img;

function setup() {
  createCanvas(480, 120);
  img = loadImage("lunar.jpg");
  noLoop();
}

function draw() {
  background(204);
  image(img, 0, 0);
}
```

Cuando corras este programa, te darás cuenta que el lienzo para pintar está gris y que la imagen no está sinedo mostrada. El bosquejo corre la función setup() primero y luego corre la función draw(). En la línea de loadImage(), empieza a cargar la imagen, pero continúa con el resto de setup() y con draw() antes de que la imagen esté cargada. La función image() no es capaz de cargar una imagen que todavía no esté cargada.

Para ayudar con este problema, p5.js tiene la función preload(). A diferencia de setup(), la función preload() forza al programa a esperar hasta que todo esté cargado. Es mejor hacer las llamadas para cargar archivos dentro de preload(), y hacer toda la configuración en setup().

Alternativamente, en vez de usar preload(), puedes usar algo llamado función de retrollamada (callback).

## Ejemplo 7-8: cargando con un callback

```javascript
function setup() {
  createCanvas(480, 120);
  loadImage("lunar.jpg", drawImage);
  noLoop();
}

function draw() {
  background(200);
}

function drawImage(img) {
  image(img, 0, 0);
}
```

En este ejemplo, añadimos un segundo argumento a loadImage(), que es la función que queremos que corra después de que la carga es completada. Una vez que la imagen ha cargado, la función callback drawImage() es automáticamente llamada, con un argumento, la imagen que ha sido cargada.

No hay necesidad de crear una variable global para guardar la imagen. La imagen es pasada directamente a la función callback, con el nombre del parámetro escogido en la definición de la función.

## Fuentes de letras

p5.js puede mostrar texto en fuentes distintas que la por defecto. Puedes usar cualquier fuente que esté en tu computador (son llamadas fuentes del sistema). Ten en cuenta que si estás compartiendo esto en la web, otra gente necesitará añadir la fuente de sistema para poder ver el texto en la fuente que escogiste. Hay un número de fuentes que la mayor parte de los computadores y dispositivos tienen: estas incluyen "Arial", "Courier", "Courier New", "Georgia", "Helvetica", "Palatino", "Times New Roman", "Trebuchet MS" y "Verdana".

## Ejemplo 7-9: dibujando con fuentes

Puedes usar la función textFont() para configurar la fuente actual. Puedes dibujar letras en la pantalla con la función text() y puedes cambiar el tamaño con la función textSize():

```javascript
function setup() {
  createCanvas(480, 120);
  textFont("Arial");
}

function draw() {
  background(102);
  textSize(32);
  text("one small step for man...", 25, 60);
  textSize(16);
  text("one small step for man...", 27, 90);
}
```

El primer parámetro de text() son los caracteres a ser dibujados en la pantalla. (Date cuenta que los caracteres están entre comillas). Los segundo y tercer parámetros definen la ubicación horizontal y vertical. La ubicación está basada en la base del texto (ver Figura 7-1).

## Ejemplo 7-10: usar una fuente de la web

Si no quieres estar limitado a esta pequeña lista de fuentes, puedes usar una de la web. Dos sitios web que son buenos recursos para encontrar fuentes web con licencias abiertas para usar con p5.js son GoogleFonts y la Open Font Library.

Para usar una webfont en tu prorgrama, deberás referenciarla en tu archivo index.html. Cuando escoges una fuente desde cualquiera de estas librerías mencionadas, te mostará una línea de código para añadir a tu archivo HTML. Cuando copias y pegas este código en cualquier parte dentro de la sección <head> de tu HTML, tu archivo se verá algo así:

```html
<html>
<head>
  <script type="text/javascript" src="../lib/p5.js"></script>
  <script type="text/javascript" src="sketch.js"></script>
  <link href="http://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet" type="text/css">
</head>
<body>
</body>
</html>
```
Una vez que hayas referenciado la fuente, puedes usarla con textFont() tal como las fuentes de sistema:

```javascript
function setup() {
  createCanvas(480, 120);
  textFont("Source Code Pro");
}

function draw() {
  background(102);
  textSize(28);
  text("one small step for man...", 25, 60);
  textSize(16);
  text("one small step for man...", 27, 90);
}
```

## Ejemplo 7-11: define el trazado del texto y el relleno

Tal como las figuras, el texto es afectado por las funciones stroke() y fill(). El siguiente ejemplo resulta en texto negro con borde blanco:

```javascript
function setup() {
  createCanvas(480, 120);
  textFont("Source Code Pro");
  fill(0);
  stroke(255);
}

function draw() {
  background(102);
  textSize(28);
  text("one small step for man...", 25, 60);
  textSize(16);
  text("one small step for man...", 27, 90);
}
```

## Ejemplo 7-12: dibuja el texto en un recuadro

Puedes también definir que el texto se dibuje dentro de un recuadro añadiendo los parámetros cuarto y quinto para especificar el ancho y altura del recuadro:

```javascript
function setup() {
  createCanvas(480, 120);
  textFont("Source Code Pro");
  textSize(24);
}

function draw() {
  background(102);
  text("one small step for man...", 26, 24, 240, 100);
}
```

## Ejemplo 7-13: guardar el texto en una variable

En el ejemplo anterior, las palabras dentro de la función text() hacen que el código sea difícil de leer. Podemos guardar estas palabras en una variable para asegurar que el código sea más modular. Aquí está una nueva versión del ejemplo anterior que usa una variable:

```javascript
var quote = "one small step for man...";

function setup() {
  createCanvas(480, 120);
  textFont("Source Code Pro");
  textSize(24);
}

function draw() {
  background(102);
  text(quote, 26, 24, 240, 100);
}
```

Hay un conjunto de funciones adicionales que afectan cómo las letras son mostradas en la pantalla. Son explicadas, con ejemplos, en la categoría de Tipografía en la Referencia de p5.js.

## Robot 5: media

A diferencia de los robots creados con líneas y rectángulos dibujados en p5.js durante los capítulos anteriores, estos robots fueron creados con un programa de dibujo vectorial. Para algunas figuras, es más fácil apuntar y hacer click con un software como Inkscape o Illustrator que definir las figuras con coordenadas en código.

Existe un compromiso al seleccionar una técnica para creación de imágenes por sobre otra. Cuando defines figuras en p5.js, existe mayor flexibilidad para modificarlas mientras el programa está corriendo. Si las figuras están definidas en otro lugar y luego cargadas a p5.js, los cambios están limitados a la posición, ángulo y tamaño. Cuando cargas cada robot desde un archivo SVG, como este ejemplo muestra, las variaciones destacadas en el Robot 2 (ver "Robot 2: variables") son imposibles.

Las imágenes pueden ser cargadas con un programa para traer visuales creadas en otros programas o capturadas con una cámara. Con esta imagen en el fondo, nuestros robots ahora están buscando formas de vida en Noruega en los inicios del siglo 20.

Los archivos SVG y PNG usados en este ejemplo pueden ser descargados desde http://p5js.org/learn/books/media.zip:

```javascript
var bot1;
var bot2;
var bot3;
var landscape;

var easing = 0.05;
var offset = 0;

// Precarga las imágenes
function preload() {
  bot1 = loadImage("robot1.svg");
  bot2 = loadImage("robot2.svg");
  bot2 = loadImage("robot3.svg");
  landscape = loadImage("alpine.svg");
}

function setup() {
  createCanvas(720, 480);
}

function draw() {
  // Definir la imagen "landscape" como función
  // Esta imagen debe tener el mismo ancho y altura que el programa
  background(landscape);

  // Definir el offset izquierdo y derecho y aplicar
  // el suavizado para hacer la transición más suave
  var targetOffset = map(mouseY, 0, height, -40, 40);
  offset += (targetOffset - offset) * easing;

  // Dibuja el robot izquierdo
  image(bot1, 85 + offset, 65);

  // Dibuja el robot derecho más pequeño y
  // haz que tenga un menor offset
  var smallerOffset = offset * 0.7;
  image(bot2, 510 + smallerOffset, 140, 78, 248);

  // Dibuja el robot más pequeño, dale un offset menor
  smallerOffset *= -0.5;
  image(bot3, 410 + smallerOffset, 225, 39, 124);
}
```
