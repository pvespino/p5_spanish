# Capítulo 9. Funciones

Las funciones son los bloques fundamentales de los programas hechos en p5.js. Han aparecido en cada ejemplo que hemos presentado. Por ejemplo, hemos frecuentemente usado la función createCanvas(), la función line(), y la función fill(). Este capítulo muestra cómo escribir nuevas funciones para extender las capacidades de p5.js más allá de sus características incorporadas.

El poder de las funciones es su modularidad. Las funciones son unidades de software independientes que son usadas para construir programas complejos - como bloques de LEGO, donde cada tipo de ladrillo sirve para un propósito específico y para lograr un modelo complejo requiere usar las diferentes partes en conjunto. Como con las funciones, el verdadero poder de estos ladrillos es la habilidad de construir muchas formas distintas usando el mismo conjunto de elementos. El mismo grupo de LEGOs que forma una navae espacial puede ser reusado para construir un camión, un rascacielos y muchos otros objetos.

Las funciones son útiles si quieres dibujar una forma más compleja como un árbol, una y otra vez. La función para dibujar un árbol puede estar compuesta con las funciones incorporadas de p5.js, como line(), para crear la forma. Después de que el código para dibujar el árbol es escrito, no necesitas pensar sobre los detalles de dibujar un árbol nuevamente - puedes simplemente escribir tree() (o algún otro nombre que le hayas puesto a la función) para dibujar la figura. Las funciones permiten que una secuencia compleja de declaraciones pueda ser abstraída, para que te puedas enfocar en una meta de alto nivel (como dibujar un árbol), y no los detalles de la implementación (las funciones line() que definen la forma del árbol). Una vez que una función es definida, el código dentro de la función no necesita ser repetido.

## Funciones básicas

Un computador corre los programas una línea de código a la vez. Cuando una función es ejecutada, el computador salta a donde la función está definida y corre el código ahí, luego vuelve a donde estaba anteriormente.

## Ejemplo 9-1: tira los dados

Este comportamiento es ilustrado con la función rollDice() escrita para este ejemplo. Cuando el programa empieza, corre el código en setup() y luego para. El programa toma un desvío y corre el código dentro de rollDice() cada vez que aparece.

```javascript
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
```

Las dos líneas de código en rollDice() seleccionan un número aleatorio entre 1 y el número de caras del dado, e imprime ese número a la consola. Como los números son aleatorios, verás diferentes números cada vez que el prorgama es ejecutado:

Cada vez que la función rollDice() es ejecutada dentro de setup(), el código dentro de la función corre de arriba a abajo, luego el programa continúa con la siguiente línea dentro de setup().

La función random() (descrita en "Aleatorio") arroja un número entre 0 y hasta (pero sin incluir) el número especificado. Entonces random(6) entrega un número entre 0 y 5.99999... Como random() arroja un número con punto decimal, también usamos la función int() para convertir el número a uno entero.  Entonces int(random(6)) arrojará 0, 1, 2, 3, 4 o 5. Como muchas otros casos en este libro, contar desde 0 hace más fácil usar los resultados de random() con otros cálculos.

## Ejemplo 9-2: otra manera de tirar los dados

Si un programa equivalente hubiera sido hecho sin la función rollDice(), hubiera sido así:

```javascript
function setup() {
  print("¡Listo para lanzar los dados!");
  var d1 = 1 + int(random(20));
  print("Lanzando... " + d1);
  var d2 = 1 + int(random(20));
  print("Lanzando... " + d2);
  var d3 = 1 + int(random(6));
  print("Lanzando... " + d3);
  print("Listo.");
}
```

La función rolldice() en el Ejemplo 9-1 hace que el código sea más fácil de leer y mantener. El programa es más claro, porque el nombre de la función claramente determina su propósito. En este ejemplo, podemos ver la función random() en setup(), pero su uso no es tan obvio. El número de lados en un dado es más claro con una función: cuando el código dice rollDice(6), es obvio que está simulando el lanzamiento de un dado de seis caras. Además, el Ejemplo 9-1 es fácil de mantener, porque la información no está repetida. La frase Lanzando... se repite tres veces en este caso. Si quieres cambiar el texto a algo distinto, tienes que actualizar el código en tres lugares, en vez de hacer una sola edición dentro de la función rollDice(). Además, como verás en el Ejemplo 9-5, una función puede hacer un programa mucho más corto (y por lo tanto más fácil de mantener y leer), lo que ayuda a reducir el potencial número de errores.

## Hacer una función

En esta sección, dibujaremos una lechuza para explicar los pasos involucrados en hacer una función.

## Ejemplo 9-3: dibuja la lechuza

Primero, dibujaremos la lechuza sin usar una función:

```javascript
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  translate(110, 110);
  stroke(0);
  strokeWeight(70);
  line(0, -35, 0, -65); // Cuerpo
  noStroke();
  fill(255);
  ellipse(-17.5, -65, 35, 35);  // Pupila izquierda
  ellipse( 17.5, -65, 35, 35);  // Pupila derecha
  arc(0, -65, 70, 70, 0, PI);   // Barbilla
  fill(0);
  ellipse(-14, -65, 8, 8);  // Ojo izquierdo
  ellipse( 14, -65, 8, 8);  // Ojo derecho
  quad(0, -58, 4, -51, 0, -44, -4, -51);  // Pico
}
```

Observa que la función translate() es usada para mover el origen (0, 0) 110 pixeles a la derecha y 110 pixeles hacia abajo. Luego la leechuza es dibujada relativamente al (0,0), con sus coordenadas algunas veces positivas y otras negativas, centradas alrededor del nuevo punto (0,0). (Ver Figura 9-1).

## Ejemplo 9-4: Dos son compañía

El código del Ejemplo 9-3 es razonable si solo hay una lechuza, pero cuando añadimos una segunda, el largo del código es casi el doble:

```javascript
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);

  // Lechuza izquierda
  translate(110, 110);
  stroke(0);
  strokeWeight(70);
  line(0, -35, 0, -65); // Cuerpo
  noStroke();
  fill(204);
  ellipse(-17.5, -65, 35, 35);  // Pupila izquierda
  ellipse( 17.5, -65, 35, 35);  // Pupila derecha
  arc(0, -65, 70, 70, 0, PI);   // Barbilla
  fill(0);
  ellipse(-14, -65, 8, 8);  // Ojo izquierdo
  ellipse( 14, -65, 8, 8);  // Ojo derecho
  quad(0, -58, 4, -51, 0, -44, -4, -51);  // Pico

  // Lechuza derecha
  translate(70, 0);
  stroke(0);
  strokeWeight(70);
  line(0, -35, 0, -65); // Cuerpo
  noStroke();
  fill(255);
  ellipse(-17.5, -65, 35, 35);  // Pupila izquierda
  ellipse( 17.5, -65, 35, 35);  // Pupila derecha
  arc(0, -65, 70, 70, 0, PI);   // Barbilla
  fill(0);
  ellipse(-14, -65, 8, 8);  // Ojo izquierdo
  ellipse( 14, -65, 8, 8);  // Ojo derecho
  quad(0, -58, 4, -51, 0, -44, -4, -51);  // Pico
}
```

El programa crece de 21 líneas de código a 34, el código para dibujar la primera lechuza fue copiado y pegado en el programa y una función translate fue insertada para moverla 70 pixeles a la derecha. Esto es una manera tediosa e ineficiente de dibujar la segunda lechuza, no sin mencionar el dolor de cabeza que será añadir una tercera lechuza con este método. Pero duplicar el código es innecesario, porque este es el tipo de situación donde una función puede llegar al rescate.

## Ejemplo 9-5: una función lechuza

En este ejemplo, una función es introducida para dibujar dos lechuzas con el mismo código. Si hacemos que el código que dibuja una lechuza en la pantalla sea una nueva función, entonces el código solo necesita aparecer una vez en el programa:

```javascript
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  owl(110, 110);
  owl(180, 110);
}

function owl(x,y) {
  push();
  translate(x,y);
  stroke(0);
  strokeWeight(70);
  line(0, -35, 0, -65); // Cuerpo
  noStroke();
  fill(255);
  ellipse(-17.5, -65, 35, 35);  // Pupila izquierda
  ellipse( 17.5, -65, 35, 35);  // Pupila derecha
  arc(0, -65, 70, 70, 0, PI);   // Barbilla
  fill(0);
  ellipse(-14, -65, 8, 8);  // Ojo izquierdo
  ellipse( 14, -65, 8, 8);  // Ojo derecho
  quad(0, -58, 4, -51, 0, -44, -4, -51);  // Pico
  pop();
}
```

Puedes ver por las ilustraciones de este ejemplo y del Ejemplo 9-4 que tienen el mismo resultado, pero que este es más corto, porque el código para usar la lechuza aparece solo una vez, dentro de la función llamada owl(). Este código es ejecutado dos veces, porque es llamado dos veces dentro de la función draw(). La lechuza es dibujada en dos ubicaciones distintas porque los parámetros pasados a la función determinan las coordenadas x e y.

Los parámetros son una parte importante de las funciones, porque proveen flexibilidad. Vimos otro ejemplo de esto en la función rollDice(), el parámetro único numSides hizo posible simular un dado de 6 caras, uno de 20 y cualquier otro número de caras.  Esto es como otras funciones de p5.js. Por ejemplo, los parámetros de la función line() hacen posible dibujar una línea de un pixel a otro en el lienzo. Sin los parámetros, la función solo sería capaz de dibujar una línea desde un punto fijo a otro fijo.

Cada parámetro es una variable que es creada cada vez que la función corre. Cuando este ejemplo corre, la primera vez que la función owl es llamada, el valor del parámetro x es 110 y el parámetro y es 110 también. En el segundo uso de la función, el valor de x es 180 y y es nuevamente 110. Cada valor es pasado a la función y luego cada vez que el nombre de la variable aparece dentro de la función, es reemplazado con el valor.

## Ejemplo 9-6: aumentando la población

Ahora que tenemos una función básica para dibujar la lechuza en cualquier ubicación, podemos ahora dibujar muchas lechuzas eficientemente poniendo la función dentro de un for loop y cambiando el primer parámetro cada vez que corre el loop:

```javascript
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  for (var x = 35; x < width + 70; x += 70) {
    owl(x, 110);
  }
}

// Insertar la función owl() del Ejemplo 9-5
```

Es posible seguir añadiendo más y más parámetros a la función para cambiar diferentes aspectos de cómo la lechuza es dibujada. Los valores son pasados a la función para cambiar el color de la lechuza, la rotación, la escala o el diámetro de los ojos.

## Ejemplo 9-7: lechuzas de diferentes tamaños

En este ejemplo, hemos añadido dos parámetros para cambiar el valor de gris y el tamaño de cada lechuza:

```javascript
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  randomSeed(0);
  for (var i = 35; i < width + 40; i += 40) {
    var gray = int(random(0, 102));
    var scalar = random(0.25, 1.0);
    owl(i, 110, gray, scalar);
  }
}

function owl(x, y, g, s) {
  push();
  translate(x,y);
  scale(s);   // Define la escala
  stroke(g);  // Define el valor de gris
  strokeWeight(70);
  line(0, -35, 0, -65); // Cuerpo
  noStroke();
  fill(255-g);
  ellipse(-17.5, -65, 35, 35);  // Pupila izquierda
  ellipse( 17.5, -65, 35, 35);  // Pupila derecha
  arc(0, -65, 70, 70, 0, PI);   // Barbilla
  fill(g);
  ellipse(-14, -65, 8, 8);  // Ojo izquierdo
  ellipse( 14, -65, 8, 8);  // Ojo derecho
  quad(0, -58, 4, -51, 0, -44, -4, -51);  // Pico
  pop();
}
```

## Valores de retorno

Las funciones pueden hacer un cálculo y luego retornar un valor al programa principal. Hemos ya usado funciones de este tipo, incluyendo random() y sin(). Observa que cuando esta función aparece, el valor de retorno es usualmente asignado a una variable:

```javascript
var r = random(1, 10);
```

En este caso, la función random() retorna un valor entre 1 y 10, el que luego es asignado a la variable r.

Las funciones que retornan un valor son frecuentemente usadas como un parámetro a otra función, como por ejemplo:

```javascript
point(random(width), random(height));
```

En este caso, los valores de random() no son asignados a una variable - son pasados como parámetros a la función point() y usados para posicionar el punto dentro del lienzo.

## Ejemplo 9-8: retorna un valor

Para hacer que una función retorne un valor, especifica el dato a ser pasado de vuelta con la palabra clave return. En este ejemplo se incluye una función llamada calculateMars() que calcula el peso de una persona u objeto en nuestro planeta vecino:

```javascript
function setup() {
  var yourWeight = 132;
  var marsWeight = calculateMars(yourWeight);
  print(marsWeight);
}

function calculateMars(w) {
  var newWeight = w * 0.38;
  return newWeight;
}
```

Revisa la última línea del código del bloque, que retorna la variable newWeight. En la segunda línea de setup(), el valor es asignado a la variable marsWeight. (Para ver tu propio peso en Marte, cambia el valor de la variable yourWeight a tu peso).

## Robot 7: funciones

En contraste con el Robot 2 (ver "Robot 2: variables"), este ejemplo usa una función para dibujar cuatro variaciones del robot dentro del mismo programa. Como la función drawRobot() aparece cuatro veces dentro de la función draw(), el código dentro del bloque drawRobot() es ejecutado cuatro veces, cada vez con un diferente conjunto de parámetros para cambiar la posición y la altura del cuerpo del robot.

Observa cómo las variables globales en Robot 2 ahora han sido aisladas dentro de la función drawrobot(). Como estas variables aplican solamente a dibujar el robot, ellas tienen que estar dentro de las llaves que definen el bloque de la función drawRobot(). Como el valor de la variable radius no cambia, no necesita ser un parámetro. En cambio, es definida al principio de drawRobot():

```javascript
function setup() {
  createCanvas(720, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  background(204);
  drawRobot(120, 420, 110, 140);
  drawRobot(270, 460, 260,  95);
  drawRobot(420, 310,  80,  10);
  drawRobot(570, 390, 180,  40);
}

function drawRobot(x, y, bodyHeight, neckHeight) {

  var radius = 45;
  var ny = y - bodyHeight - neckHeight - radius;

  // Cuello
  stroke(102);
  line(x +  2, y - bodyHeight, x +  2, ny);
  line(x + 12, y - bodyHeight, x + 12, ny);
  line(x + 22, y - bodyHeight, x + 22, ny);

  // Antenas
  line(x + 12, ny, x - 18, ny - 43);
  line(x + 12, ny, x + 42, ny - 99);
  line(x + 12, ny, x + 78, ny + 15);

  // Cuerpo
  noStroke(102);
  fill(102);
  ellipse(x, y - 33, 33, 33);
  fill(0);
  rect(x - 45, y - bodyHeight, 90, bodyHeight - 33);
  fill(102);
  rect(x - 45, y - bodyHeight + 17, 90, 6);

  // Cabeza
  fill(0);
  ellipse(x + 12, ny    , radius, radius);
  fill(255);
  ellipse(x + 24, ny - 6, 14, 14);
  fill(0);
  ellipse(x + 24, ny - 6, 3, 3);
  fill(153);
  ellipse(x     , ny -  8, 5, 5);
  ellipse(x + 30, ny - 26, 4, 4);
  ellipse(x + 41, ny +  6, 3, 3);
}
```