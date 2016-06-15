# Capítulo 11. Arreglos

Un arreglo es una lista de variables que comparten un nombre común. Los arreglos son útiles porque hacen posible trabajar con más variables sin crear un nombre nuevo para cada uno. Esto hace que el código sea más corto, más fácil de leer, y más conveniente de actualizar.

## De variables a arreglos

Cuando un programa necesita mantener registro de una o dos cosas, no es necesario crear un arreglo. Sin embargo, cuando un programa posee muchos elementos (por ejemplo, un campo de estrellas en un juego sobre el espacio o múltiples puntos de datos en una visualización), los arreglos hacen que el código sea más fácil de escribir.

## Ejemplo 11-1: muchas variables

Para entender lo que significa, revisa el Ejemplo 8-3. Este código funciona bien si estamos moviendo una sola figura, ¿pero qué pasa si queremos tener dos? Necesitamos crear una nueva variable x y actualizarla dentro de draw():

```javascript
var x1 = -20;
var x2 =  20;

function setup() {
  createCanvas(240, 120);
  noStroke();
}

function draw() {
  background(0);
  x1 += 0,5;
  x2 += 0.5;
  arc(x1, 30, 40, 40, 0.52, 5.76);
  arc(x2, 90, 40, 40, 0.52, 5.76);
}
```

## Ejemplo 11-2: demasiadas variables

El código del ejemplo anterior es todavía manejable, ¿pero qué pasa si queremos tener cinco círculos? Necesitamos añadir tres otras variables a las dos que ya tenemos:

```javascript
var x1 = -10;
var x2 =  10;
var x3 =  35;
var x4 =  18;
var x5 =  30;

function setup() {
  createCanvas(240, 120);
  noStroke();
}

function draw() {
  background(0);
  x1 += 0,5;
  x2 += 0.5;
  x3 += 0.5;
  x4 += 0.5;
  x5 += 0.5;
  arc(x1,  20, 20, 20, 0.52, 5.76);
  arc(x2,  40, 20, 20, 0.52, 5.76);
  arc(x3,  60, 20, 20, 0.52, 5.76);
  arc(x4,  80, 20, 20, 0.52, 5.76);
  arc(x5, 100, 20, 20, 0.52, 5.76);
}
```

¡Este código está empezando a salirse de control!

## Ejemplo 11-3: arreglos, no variables

Imagina lo que pasaría si quisieras tener 3.000 variables. Esto significaría crear 3.000 variables individuale y luego actualizar cada una de ellas de forma separada. ¿Podrías mantener registro de esta cantidad de variables? ¿Quisieras hacerlo? En vez de eso, usemos un arreglo:

```javascript
var x = [];

function setup() {
  createCanvas(240, 120);
  noStroke();
  fill(255, 200);
  for (var i = 0; i < 3000; i++) {
    x[i] = random(-1000, 200);
  }
}

function draw() {
  background(0);
  for (var i = 0; i < x.length; i ++) {
    x[i] += 0.5;
    var y = i * 0.4;
    arc(x[i], y, 12, 12, 0.52, 5.76);
  }
}
```

Durante el resto de este capítulo revisaremos los detalles que hacen que este ejemplo sea posible.

## Construir un arreglo

Cada item en el arreglo es llamado un elemento, y cada uno tiene un índice para señalar su posición dentro del arreglo. Tal como las coordenadas en el lienzo, los valores de índice para un arreglo empiezan su cuenta desde 0. Por ejemplo, el primer elemento en el arreglo tiene un índice con valor 0, el segundo elemento del arreglo tiene un índice con valor 1, y así. Si hay 20 valores en el arreglo, el valor del índice del último elemento es 19. La Figura 11-1 muestra la estructura conceptual de un arreglo.

Usar arreglos es similar a trabajar con variables únicas, sigue los mismos patrones. Como ya sabes, puedes hacer una variable sola llamada x con este código:

```javascript
var x;
```

Para hacer un arreglo, basta con determinar que el valor de la variable sea un par de corchetes vacíos:

```javascript
var x = [];
```

Nota que no es necesario declarar por adelantado la longitud del arreglo, la longitud es determinada por el número de elementos que tú pones en él.

## Nota

Un arreglo puede almacenar todos los diferentes tipos de datos (boolean, number, string, etc). Puedes mezclar y combinar diferentes tipos de datos en un mismo arreglo.

Antes de que nos adelantemos, desaceleremos y hablemos del trabajo con arreglos en mayor detalle. Hay dos pasos cuando se trabaja con arreglos:

1. Declara el arreglo

2. Asigna valores a cada elemento.

Cada paso puede pasar en una línea distinta, o se pueden combinar los dos pasos en uno. Cada uno de los dos siguientes ejemplos muestra una técnica diferente para crear un arreglo llamado x que almacena dos números, 12 y 2. Toma mucha atención a lo que pasa antes de setup() y lo que pasa en setup().

## Ejemplo 11-4: declara y asigna un arreglo

Primero, declararemos un arreglo fuera de setup() y luego creamos y asignamos valores dentro. La sintaxis x[0] se refiere al primer elemento del arreglo y x[1] es el segundo:

```javascript
var x = [];   // Declara el arreglo

function setup() {
  createCanvas(200, 200);
  x[0] = 12;  // Asigna el primer valor
  x[1] = 2;   // Asigna el segundo valor
}
```

## Ejemplo 11-5: asigna valores en un arreglo en una pasada

También puedes asignar valores a un arreglo cuando es creado, si todo es parte de la misma declaración:

```javascript
var x = [12, 2];   // Declara y asigna valores en el arreglo

function setup() {
  createCanvas(200, 200);
}
```

## Nota

Evita crear arreglos dentro de draw(), porque crear un nuevo arreglo en cada cuadro desacelerará la tasa de cuadros.

## Ejemplo 11-6: revisitando el primer ejemplo

Como un ejemplo completo de cómo usar arreglos, hemos reescrito el Ejemplo 11-1 aquí. A pesar de que no vemos todavía todos los beneficios revelados en el Ejemplo 11-3, sí vemos algunos detalles importantes de cómo funcionan los arreglos:

```javascript
var x = [-20, 20];

function setup() {
  createCanvas(240, 120);
  noStroke();
}

function draw() {
  background(0);
  x[0] += 0.5; // Incrementa el primer elemento
  x[1] += 0.5; // Incrementa el segundo elemento
  arc(x[0], 30, 40, 40, 0.52, 5.76);
  arc(x[1], 90, 40, 40, 0.52, 5.76);
}
```

## Repetición y arreglos

El for loop, introducido en "Repetición", hará más fácil trabajar con arreglos grandes mientras se mantiene el código conciso. La idea es escribir un loop para recorrer cada elemento del arreglo uno a uno. Para hacerlo, necesitarás saber el largo del arreglo. La propiedad length asocidada con cada arreglo almacena el número de elementos. Usamos el nombre del arreglo con el operador punto para accedera este valor. Por ejemplo:

```javascript
var x = [12, 20];     // Declara y asigna valores al arreglo
print(x.length);      // Imprime 2 en la consola

var y = ["cat", 10, false, 50];     // Declara y asigna valores al arreglo
print(y.length);      // Imprime 4 en la consola

var z = [];       // Declara un arreglo vacío
print(z.length);  // Imprime 0 en la consola
z[0] = 20;        // Asigna un elemento al arreglo
print(z.length);  // Imprime 1 en la consola
z[1] = 4;         // Asigna un elemento al arreglo
print(z.length);  // Imprime 2 en la consola
```

## Ejemplo 11-7: llenando un arreglo con un for loop

Un for loop puede ser usado para llenar un arreglo con valores, o para leer los valores. En este ejemplo, el arreglo es primero llenado con números aleatorios dentro de setup(), y luego esos números son usados para definir el valor del trazado dentro de draw(). Cada vez que el programa corre, un nuevo conjunto de valores aleatorios es puesto en el arreglo:

```javascript
var gray = [];    

function setup() {
  createCanvas(240, 120);
  for (var i = 0; i < width; i++) {
    gray[i] = random(0, 255);
  }
}

function draw() {
  background(204);
  for (var i = 0; i < gray.length; i++) {
    stroke(gray[i]);
    line(i, 0, i, height);
  }
}
```

En setup(), insertamos tantos elementos como el ancho del lienzo. Esto es un número arbitrario, lo hemos elegido para que al dibujar una línea vertical por cada elemento, se llene el ancho del lienzo. Podrías tratar de cambiar width a cualquier número. Una vez que los elementos son asignados al arreglo, somos capaces de iterar a través de ellos en draw() usando la propiedad length. No podemos iterar a través del arreglo en setup() porque antes de que cualquier elemento sea puesto dentro, el largo del arreglo gray es 0.

## Ejemplo 11-8: seguir la trayectoria del ratón

En este ejemplo, existen dos arreglos para almacenar la posición del ratón - uno para la coordenada x y uno para la coordenada y. Estos arreglos graban la posición del ratón durante los últimos 60 cuadros. Con cada nuevo cuadro, los valores de las coordenadas x e y más antiguos son removidos y reemplazados con el valor actual de mouseX y mouseY. Los nuevos valores son añadidos a la primera posición del arreglo, pero antes de que esto pase, cada valor del arreglo es movido una posición a la derecha (desde el último hasta el primero) para hacer espacio para los nuevos números. (La Figura 11-2 es un diagrama que ilustra este proceso). Este ejemplo visualiza esta acción. Además, en cada cuadro, las 60 coordenadas son usadas para dibujar una serie de elipses en la pantalla:

```javascript
var num = 60;
var x = [];
var y = [];

function setup() {
  createCanvas(240, 120);
  noStroke();

  for (var i = 0; i < num; i++) {
    x[i] = 0;
    y[i] = 0;
  }
}

function draw() {
  background(0);
  // Copia los valores del arreglo de atrás hacia adelante
  for (var i = num-1; i > 0; i--) {
    x[i] = x[i - 1];
    y[i] = y[i - 1];
  }
  x[0] = mouseX;  // Define el primer elemento
  y[0] = mouseY;  // Define el primer elemento
  for (var i = 0; i < num; i++) {
    fill(i * 4);
    ellipse(x[i], y[i], 40, 40);
  }
}
```

## Arreglos de objetos

Los dos ejemplos cortos en esta sección juntan cada gran concepto de programación en este libro: iteración, condicionales, funciones, objetos y arreglos. Hacer un arreglo de objetos es casi lo mismo que construir los arreglos que introducimos en las páginas anteriores, pero existe una consideración inicial: porque cada elemento es un objeto, primero debe ser creado con la palabra reservada new (tal como cualquier otro objeto) antes de ser asignado a un arreglo. Con un objeto construido por el usuario como JitterBug (ver Capítulo 10), esto significa que new definirá cada elemento antes de ser asignado al arreglo.

## Ejemplo 11-9: administrando varios objetos

Este ejemplo crea un arreglo de 33 objetos JitterBug y luego actualiza y muestra cada uno dentro de draw(). Para que este ejemplo funcione, necesitas añadir la función constructor JitterBug al código:

```javascript
var bugs = [];

function setup() {
  createCanvas(240, 120);
  background(204);
  for (var i = 0; i < 33, i++) {
    var x = random(width);
    var y = random(height);
    var r = i + 2;
    bugs[i] = new JitterBug(x, y, r);
  }
}

function draw() {
  for (var i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

//Copia aquí el código de la función constructor de Jitterbug
```

El ejemplo final de arreglos carga una secuencia y almacena cada elemento dentro de un arreglo.

## Ejemplo 11-10: secuencias de imágenes

Para correr este ejemplo, obtén las imágenes desde media.zip tal como lo descrito en el Capítulo 7. Las imágenes son nombradas secuencialmente (frame-0000.png, frame-0001.png, etc.), lo que hace posile crear el nombre de cada archivo dentro de un for loop, tal como lo vemos en la séptima línea del programa:

```javascript
var numFrames = 12;     // El número de cuadros
var images = [];        // Crear el arreglo
var currentFrame = 0;

function preload() {
  for (var i = 0; i < numFrames; i++) {
    var imageName = "frame-" + nf(i, 4) + ".png";
    images[i] = loadImage(imageName); //Carga cada imagen
  }
}

function setup() {
  createCanvas(240, 120);
  frameRate(24);
}

function draw() {
  image(images[currentFrame], 0, 0);
  currentFrame++;  // Siguiente cuadro
  if (currentFrame == images.length) {
    currentFrame = 0; // Retorna al primer cuadro
  }
}
```

La función nf() define el formato de números de modo que nf(1, 4) retorna el string "0001" y nf(11, 4) retorna "0011". Estos valores están concatenados con el inicio del nombre del archivo (frame-) y el final (.png) para crear el nombre completo del archivo almacenado en una variable. Los archivos son cargados en un arreglo en la siguiente línea. Las imágenes son mostradas en la pantalla una a la vez en draw(). Cuando la última imagen en el arreglo es mostrada, el programa vuelve al principio del arreglo y muestra las imágenes en secuencia.

## Robot 9: arreglos

Los arreglos hacen más fácil que un programa trabaje con muchos elementos. En este ejemplo, un arreglo de objetos Robot es declarado al principio. El arreglo es luego posicionado dentro de setup(), y cada objeto Robot es creado dentro del for loop. En draw(), otro for loop es usado para actualizar y mostrar cada elemento del arreglo bots.

El for loop y un arreglo hacen una combinación poderosa. Observa las diferencias sutiles entre el código para este ejemplo y Robot 8 (ver "Robot 8: objetos") en contraste a los cambios extremos en el resultado visual. Una vez que el arreglo es creado y un for loop es incluido, es igualmente de fácil trabajar con 3 elementos que con 3,000.

```javascript
var robotImage;
var bots = [];    // Declara un arreglo para almacenar objetos Robot

function preload() {
  robotImage = loadImage("robot1.svg");
}

function setup() {
  createCanvas(720, 480);

  var numRobots = 20;

  // Crea cada objeto
  for (var i = 0; i < numRobots; i++) {
    // Crea una coordenada x aleatoria
    var x = random(-40, width - 40);
    // Asigna la coordenada y basada en el orden
    var y = map(i, 0, numRobots, -100, height - 200);
    bots[i] = new Robot(robotImage, x, y);
  }
}

function draw() {
  background(204);
  // Actualiza y muestra cada bot en el arreglo
  for (var i = 0; i < bots.length; i++) {
    bots[i].update();
    bots[i].display();
  }
}

function Robot(img, tempX, tempY) {
  // Define los valores iniciales para las propiedades
  this.xpos = tempX;
  this.ypos = tempY;
  this.angle = random(0, TWO_PI);
  this.botImage = img;
  this.yoffset = 0.0;

  // Actualiza las propiedades
  this.update = function() {
    this.angle += 0.05;
    this.yoffset = sin(this.angle) * 20;
  }

  // Dibuja el robot en la pantalla
  this.display = function() {
    image(this.botImage, this.xpos, this.ypos + this.yoffset);
  }
}
```