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
