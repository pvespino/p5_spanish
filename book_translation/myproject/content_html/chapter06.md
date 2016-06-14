# Capítulo 6. Trasladar, rotar, escalar

Una técnica alternativa para posicionar y mover objetos en la pantalla es cambiar el sistema de coordenadas de la pantalla. Por ejemplo, puedes mover una figura 50 pixeles a la derecha, o puedes mover la ubicación de la coordenada (0,0) 50 pixeles a la derecha - el resultado visual en la pantalla es el mismo.

Al modificar el sistema de coordenadas por defecto, podemos crear diferentes transformaciones incluyendo traslación, rotación y escalamiento.

## Traslación

Trabajar con transformaciones puede ser difícil, pero la función translate() es la más sencilla, así que empezaremos con esta. Como muestra la Figura 6-1, esta función puede cambiar el sistema de coordenadas hacia la izquierda, derecha, arriba y abajo.

## Ejemplo 6-1: trasladando la ubicación

En este ejemplo, observa que el rectángulo está dibujado en la coordenada (0,0), pero está en otra posición en el lienzo, porque es afectado por la función translate():

```
function setup() {
  createCanvas(120, 120);
  background(204);
}

function draw() {
  translate(mouseX, mouseY);
  rect(0, 0, 30, 30);
}
```

La función translate() define la coordenada (0,0) de la pantalla a la ubicación del ratón (mouseX y mouseY). Cada vez que el bloque draw() se repite, el rectángulo es dibujado en el nuevo origen, derivado de la posición actual del ratón.

## Ejemplo 6-2: múltiples traslados

Después de que la transformación es realizada, es aplicada a todas las veces que la función draw() es ejecutada. Observa lo que pasa cuando una segunda función translate() es añadida para controlar un segundo rectángulo:

```
function setup() {
  createCanvas(120, 120);
  background(204);
}

function draw() {
  translate(mouseX, mouseY);
  rect(0, 0, 30, 30);
  translate(35, 10);
  rect(0, 0, 15, 15);
}
```
Los valores para la función translate() son acumulados. El pequeño rectángulo es trasladado según mouseX + 35 0,0y mouseY + 10. Las coordenadas x e y para ambos rectángulos son (0,0), pero las funciones translate() los mueven a otras posiciones en el lienzo.
Sin embargo, incluso cuando las transformaciones se acumulan dentro del bloque draw(), se reinician cada vez que la función draw() empieza de nuevo.

## Rotación
La función rotate() rota el sistema de coordenadas. Tiene un parámetro, que es el ángulo (en radianes) a rotar. Siempre rota relativo a (0,0), lo que se conoce como rotar en torno al origen. La Figura 3-2 muestra los valores de ángulo en radianes. La figura 6-2 muestra la diferencia entre rotar con números positivos y negativos.

## Ejemplo 6-3: rotación de la esquina

Para rotar una figura, primero define el ángulo de rotación con rotate(), luego dibuja la figura. En este bosquejo, el parámetro para rotar (mouseX / 100.0) tendrá un valor entre 0 y 1.2 para definir el ángulo de rotación porque mouseX tendrá un valor entre 0 y 120, el ancho del lienzo según lo definido en createCanvas():

```
function setup() {
  createCanvas(120, 120);
  background(204);
}

function draw() {
  rotate(mouseX / 100.0);
  rect(40, 30, 160, 20);
}
```

## Ejemplo 6-4: rotación del centro

Para rotar una figura en torno a su propio centro, deben ser dibujada con la coordenada (0,0) en su centro. En este ejemplo, como la figura tiene un ancho de 160 y una altura de 20 según lo definido en la función rect(), es dibujada en la coordenada (-80, -10) para poner la coordenada (0,0) al centro de la figura:

```
function setup() {
  createCanvas(120, 120);
  background(204);
}

function draw() {
  rotate(mouseX / 100.0);
  rect(-80, -10, 160, 20);
}
```

El par anterior de ejemplos muestra cómo rotar alrededor de un sistema de coordenadas (0,0), ¿pero qué otras posibilidades hay? Puedes usar las funciones translate() y rotate() para mayor control. Cuando son combinadas, el orden en que aparecen afecta el resultado. Si el sistema de coordenadas es trasladado y después rotado, es diferente que primero rotar y después mover el sistema de coordenadas.

## Ejemplo 6-5: traslación, después rotación

Para girar una figura en torno a su centro a un lugar en la pantalla lejos del orgien, primero usa la función traslate() para mover la figura a la ubicación donde quieres la figura, luego usa rotate(), y luego dibuja la figura con su centro en la coordenada (0,0):

```
var angle = 0.0;

function setup() {
  createCanvas(120, 120);
  background(204);
}

function draw() {
  translate(mouseX, mouseY);
  rotate(angle);
  rect(-15, -15, 30, 30);
  angle += 0.1;
}
```

## Ejemplo 6-6: rotación, después traslación

El siguiente ejemplo es idéntico al Ejemplo 6-5, excepto que translate() y rotate() ocurren en el orden inverso. La figura ahora rota alrededor de la esquina superior izquierda, con la distancia desde la esquina definida por translate():

```
var angle = 0.0;

function setup() {
  createCanvas(120, 120);
  background(204);
}

function draw() {
  rotate(angle);
  translate(mouseX, mouseY);
  rect(-15, -15, 30, 30);
  angle += 0.1;
}
```

## Nota

Puedes usar también las funciones rectMode(), ellipseMode() y imageMode() hacen más simple dibujar figuras desde su centro. Puedes leer sobre estas funciones en la Referencia de p5.js.

## Ejemplo 6-7: un brazo articulado

En este ejemplo, hemos puesto juntas una serie de funciones translate() y rotate() para crear un brazo articulado. Cada función translate() mueve la posición de las líneas, y cada función rotate() añade a la rotación previa para doblar más:

```
var angle = 0.0;
var angleDirection = 1;
var speed = 0.005;

function setup() {
  createCanvas(120, 120);
}

function draw() {
  background(204);
  translate(20, 25);  // Mover a la posición inicial
  rotate(angle);
  strokeWeight(12);
  line(0, 0, 40, 0);
  translate(40, 0);   // Mover la siguiente articulación
  rotate(angle * 2.0);
  strokeWeight(6);
  line(0, 0, 30, 0);
  translate(30, 0);
  rotate(angle * 2.5);
  strokeWeight(3);
  line(0, 0, 20, 0);

  angle += speed * angleDirection;
  if ((angle > QUARTER_PI) || (angle < 0)) {
    angleDirection *= -1;
  }
}
```

La variable angle crece desde 0 hasta QUARTER_PI (un cuarto del valor de pi), luego decae hasta que es menor que cero, luego el ciclo se repite. El valor de la variable angleDirection está siempre entre 1 y -1 para hacer que el valor de angle correspondiente crezca o decrezca.

## Escalar

La función scale() estira las coordenadas del lienzo. Como las coordenadas se expanden o se contraen cuando cambia la escala, todo lo que está dibujado en el lienzo aumenta o disminuye sus dimensiones. El monto de escalamiento está escrito en porcentajes decimales. Entonces, el parámetro 1.5 en la función scale() resulta en un 150% y 3 es 300% (Figura 6-3).

## Ejemplo 6-8: escalamiento

Como rotate(), la función scale() transforma desde el origen. Entonces, tal como rotate(), para escalar una figura desde su centro, debemos trasladar su ubicación, escalar y luego dibujar con el centro en la coordenada (0,0):

```
function setup() {
  createCanvas(120, 120);
  background(204);
}

function draw() {
  translate(mouseX, mouseY);
  scale(mouseYX / 60.0);
  rect(-15, -15, 30, 30);
}
```

## Ejemplo 6-9: manteniendo los trazos constantes

De las líneas gruesas del Ejemplo 6-8, puedes ver cómo la función scale() afecta el grosor del trazado. Para mantener un grosor de trazado consistente a medida que la figura se escala, divide el trazado deeseado por el valor escalar:

```
function setup() {
  createCanvas(120, 120);
  background(204);
}

function draw() {
  translate(mouseX, mouseY);
  var scalar = mouseX / 60.0;
  scale(scalar);
  strokeWeight(1.0 / scalar);
  rect(-15, -15, 30, 30);
}
```

## Push y pop

Para aislar los efectos de la transformación para que no afecten otras funciones, usa las funciones push() y pop(). When ejecutas push(), graba una copia del sistema de coordenadas actual y luego restaura ese sistema cuando ejecutas pop(). Esto es útil cuando las transformaciones son necesarias para una figura, pero no son deseadas para otras.

## Ejemplo 6-10: aislando transformaciones

En este ejemplo, el rectángulo pequeño siempre dibuja en la misma pop():

```
function setup() {
  createCanvas(120, 120);
  background(204);
}

function draw() {
  push();
  translate(mouseX, mouseY);
  rect(0, 0, 30, 30);
  pop();
  translate(35, 10);
  rect(0, 0, 15, 15);
}
```

## Nota

Las funciones push() y pop() siempre se usan en pares. Por cada push(), tiene que haber un correspondiente pop().

## Robot 4: trasladar, rotar, escalar

Las funciones translate(), rotate() y scale() son utilizadas para modificar el bosquejo del robot. En relación al ejemplo Robot 3: respuesta, translate() es usado para hacer el código más fácil de leer. Aquí, observa cómo ya no es necesario el valor de x a cada función de dibujo porque la función translate() mueve todo. Similarmente, la función scale() es usada para definir las dimensiones para todo el robot. Cuando el ratón no está presionado, el tamaño es de un 60% y cuando sí está presionado, es de un 100% en relación a las coordenadas originales. La función rotate() es usada dentro del loop para dibujar una línea, rotarla un poco, luego dibujar una segunda línea, luego rotarla un poco más, y así hasta que el loop ha dibujado 30 líneas en forma de círculo para estilizar el pelo de la cabeza del robot:

```
var x = 60;           // Coordenada x
var y = 440;          // Coordenada y
var radius = 45;      // Radio de la cabeza
var bodyHeight = 180; // Altura del cuerpo
var neckHeight = 40;  // Altura del cuello

var easing = 0.04;

function setup() {
  createCanvas(360, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  var neckY = -1 * (bodyHeight + neckHeight + radius);

  background(204);

  translate(mouseX, y); // Mueve todo a (mouseX, y)

  if (mouseIsPressed) {
    scale(1.0);
  } else {
    scale(0.6);       // 60% de tamaño si el ratón está presionado
  }

  // Cuerpo

  noStroke();
  fill(102);
  ellipse(0, -33, 33, 33);
  fill(0);
  rect(-45, -bodyHeight, 90, bodyHeight - 33);

  // Cuello
  stroke(102);
  line(12, -bodyHeight, 12, neckY);

  // Pelo
  push();
  translate(12, neckY);
  var angle = -PI/30.0;
  for (var i = 0l i <= 30; i++) {
    line(80, 0, 0, 0);
    rotate(angle);
  }
  pop();

  // Cabeza
  noStroke();
  fill(0);
  ellipse(12, neckY, radius, radius);
  fill(255);
  ellipse(24, neckY - 6, 14, 14);
  fill(0);
  ellipse(24, neckY - 6, 3, 3);
}
```
