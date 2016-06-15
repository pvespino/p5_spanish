# Capítulo 8. Movimiento

Tal como un folioscopio, la animación en la pantalla es creada para dibujar una imagen, luego otra, y así. La ilusión de movimiento fluido es creada por persistencia de visión. Cuando un conjunto de imágenes similares es presentado a una tasa suficiente, nuestros cerebros traducen estas imágenes en movimiento.

## Cuadros

Para crear movimiento fluido, p5.js trata de correr el código dentro de draw() a una tasa de 60 cuadros por segundo. Un cuadro es una ejecución de la función draw() y la tasa de cuadros equivale a cuántos cuadros son dibujados cada segundo. Entonces, un programa que dibuja 60 cuadros cpor segundo corre todo el código dentro de la función draw() 60 veces por segundo.

## Ejemplo 8-1: ve la tasa de cuadros

Para confirmar la tasa de cuadros, podemos usar la consola del navegador que aprendimos a usar en el Capítulo 1. La función frameRate() te arroja la velocidad actual de tu programa. Abre la consola, corre este programa y revisa los valores impresos:

```javascript

function draw() {
  var fr = frameRate();
  print(fr);
}
```

## Ejemplo 8-2: define la tasa de cuadros

La función frameRate() puede también cambiar la velocidad a la que el programa corre. Cuando es ejecutada sin parámetro (como en el Ejemplo 8-1), arroja la actual tasa de cuadros. Sin embargo, cuando la función frameRate() es llamada con un parámetro, define la tasa de cuadros a ese valor. Para ver el resultado, ejecuta las distintas versiones de frameRate() de este ejemplo, descomentándolas:

```javascript
function setup() {
  frameRate(30);    // Treinta cuadros por segundo
  //frameRate(12);  // Doce cuadros por segundo
  //frameRate(2);   // Dos cuadros por segundo
  //frameRate(0.5); // Un cuadro cada dos segundos
}
function draw() {
  var fr = frameRate();
  print(fr);
}
```

## Nota:

p5.js trata de correr el código a una tasa de 60 cuadros por segundo, pero si tarda más de de 1/60 segundos en correr el método draw(), entonces la tasa decrecerá. La función frameRate() especifica solo la tasa máxima, y la tasa real para cualquier programa depende en el computador corriendo el código.

## Velocidad y dirección

Para crear exemplos de movimiento fluido, creamos variables que guardan números y los modifican un poco cada cuadro.

## Ejemplo 8-3: mueve una figura.

El siguiente ejemplo mueve una figura de izquierda a derecha, actualizando la variable x:

```javascript
var radius = 40;
var x = -radius;
var speed = 0.5;

function setup() {
  createCanvas(240, 120);
  ellipseMode(RADIUS);
}

function draw() {
  background(0);
  x += speed;   // Aumenta el valor de x
  arc(x, 60, radius, radius, 0.52, 5.76);
}
```

Cuando corres este código, observarás que la figura se mueve más allá del borde derecho de la pantalla cuando el valor de la variable x es mayor que el ancho de la ventana. El valor de x sigue aumentando, pero la figura ya no es visible.

## Ejemplo 8-4: dar la vuelta

Existen muchas alternativas a este comportamiento, que puedes escoger de acuerdo a tu preferencia. Primero, extenderemos el código para mostrar cómo mover la figura de vuelta al borde izquierdo de la pantalla después de que desaparece del borde derecho. En este caso, imagina la pantalla como un cilindro aplanado, con la figura moviéndose por fuera para volver al borde izquierdo:

```javascript
var radius = 40;
var x = -radius;
var speed = 0.5;

function setup() {
  createCanvas(240, 120);
  ellipseMode(RADIUS);
}

function draw() {
  background(0);
  x += speed;     // Aumenta el valor de x
  if (x > width + radius) { // Si la figura está fuera de la pantalla
    x = - radius; // Mueve la figura al borde izquierdo
  }
  arc(x, 60, radius, radius, 0.52, 5.76);
}
```

En cada viaje alrededor de draw(), el código prueba si el valor de x ha aumentado más allá del ancho de la pantalla (sumado al radio de la figura). Si lo ha hecho, hacemos que el valor de x sea negativo nuevamente, para que cuando siga aumentando, entre a la pantalla por la izquierda. Mira la Figura 8-1 para ver un diagrama de cómo funciona.

## Ejemplo 8-5: rebota contra la pared

En este ejemplo, extenderemos el Ejemplo 8-3 para que la figura cambie de dirección cuando llegue a un borde, en vez de volver a aparecer por la izquierda. Para hacer que esto pase, añadimos una nueva variable para almacenar la dirección de la figura. Un valor de dirección de 1 mueve la figura hacia la derecha, mientras que un valor de -1 la mueve hacia la izquierda:

```javascript
var radius = 40;
var x = 110;
var speed = 0.5;
var direction = 1;

function setup() {
  createCanvas(240, 120);
  ellipseMode(RADIUS);
}

function draw() {
  background(0);
  x += speed * direction;
  if ((x > width-radius) || (x < radius)) {
    direction = -direction;   // Cambiar dirección
  }
  if (direction == 1) {
    arc(x, 60, radius, radius, 0.52, 5.76); // Hacia la derecha
  } else {
    arc(x, 60, radius, radius, 3.67, 8.9);  // Hacia la izquierda
  }
}
```

Cuando la figura llega a un borde, este código invierte la dirección de la figura, cambiando el signo de la variable dirección. Por ejemplo, si la variable dirección es positiva cuando la figura llega a un borde, el código la invierte a negativa.

## Posiciones intermedias (tweening)

A veces quieres animar una figura para ir de un punto de la pantalla a otro. Con unas pocas líneas de código, puedes configurar la posición inicial y final, y luego calcular las posiciones entremedio (tween) en cada cuadro.

## Ejemplo 8-6: calcula las posiciones intermedias

Para hacer que el ejemplo de este código sea modular, hemos creado un grupo de variables en la parte superior. Corre el código unas cuantas veces y cambia los valores para ver cómo este código puede mover a la figura desde cualquier ubicación a cualquier otra en cualquier rango de velocidades. Cambia la variable step para alterar la velocidad:

```javascript
var startX = 20;  // Coordenada x inicial
var stopX = 160;  // Coordenada x final
var startY = 30;  // Coordenada y inicial
var stopY = 80;   // Coordenada y final
var x = startX;   // Coordenada x actual
var y = startY;   // Coordenada y actual
var step = 0.005; // createCanvas para cada paso (0.0 a 1.0)
var pct = 0.0;    // Porcentaje avanzado (0.0 a 1.0)

function setup() {
  createCanvas(240, 120);
}

function draw() {
  background(0);
  if (pct < 1.0) {
    x = startX + ((stopX - startX) * pct);
    y = startY + ((stopY - startY) * pct);
    pct += step;
  }
  ellipse(x, y, 20, 20);
}
```

## Aleatorio

A diferencia del movimiento linear y suave típico en las gráficas por computadora, el movimiento en el mundo físico es usualmente idiosincrático. Por ejemplo, si pensamos en una hoja flotando hacia la tierra, o una hormiga caminando por un terreno rugoso. Podemos simular las cualidades impredecibles del mundo generando números aleatorios. La función random() calcula estos valores, podemos definir un rango para afinar la cantidad de desorden en un programa.

## Ejemplo 8-7: genera valores aleatorios

El siguiente ejemplo corto imprime valores aleatorios en la consola, con el rango limitado por la posición del ratón:

```javascript
function draw() {
  var r = random(0, mouseX);
  print(r);
}
```

## Ejemplo 8-8: dibuja aleatoriamente

Construyendo sobre el Ejemplo 8-7, este ejemplo usa valores de la función random() para cambiar la posición de líneas en el lienzo. Cuando el ratón está a la izquierda del lienzo, el cambio es pequeño; si se mueve a la derecha, los valores de random() aumentan y el movimiento se torna más exagerado. Como la función random() está dentro de un for loop, un nuevo valor aleatorio es calculado para cada punto de cada línea:

```javascript
function setup() {
  createCanvas(240, 120);
}

function draw() {
  background(204);
  for (var x = 20; x < width; x += 20) {
    var mx = mouseX / 10;
    var offsetA = random(-mx, mx);
    var offsetB = random(-mx, mx);
    line(x + offsetA, 20, x - offsetB, 100);
  }
}
```

## Ejemplo 8-9: mueve figuras aleatoriamente

Cuando se usa para  mover figuras alrededor de la pantalla, los valores aleatorios pueden generar imágenes que son más naturales en apariencia. En el siguiente ejemplo, la posición del círculo es modificada por valores aleatorios en cada ejecución de draw(). Como la función background() no es usad, las posiciones anteriores permanecen dibujadas:

```javascript
var speed = 2.5;
var diameter = 20;
var x;
var y;

function setup() {
  createCanvas(240, 120);
  x = width/2;
  y = height/2;
  background(204);
}

function draw() {
  x += random(-speed, speed);
  y += random(-speed, speed);
  ellipse(x, y, diameter, diameter);
}
```

Si observas este ejemplo el tiempo suficiente, el círculo podría dejar la pantalla y volver. Esto depende del azar, pero podríamos añadir unas estructuras if o usar la función constrain() para hacer que el círculo no deje la pantalla.

La función constrain() limita el valor a un rango específico, el que puede ser usado para mantener x e y dentro de los límites del lienzo. Al reemplazar la función draw con el siguiente código, te asegurarás que la elipse permanezca en la pantalla:

```javascript
function draw() {
  x += random(-speed, speed);
  y += random(-speed, speed);
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
  ellipse(x, y, diameter, diameter);
}
```
## Nota

La función randomSeed() puede ser usada para forzar a randon() para producir la misma secuencia de números cada vez que un programa es ejecutado. Esto es descrito con mayor detalle en la Referencia de p5.js.

## Temporizadores

Cada programa de p5.js cuenta el monto de tiempo que ha pasado desde que empezó. Cuenta en milisegundos (milésimas de segundo), así que después de 1 segundo el contador está en 1.000, después de 5 segundos está en 5.000 y después de un minuto en 60.000. Podemos usar este contador para gatillar animaciones en momentos específicos. La función millis() arroja el valor del contador.

## Ejemplo 8-10: el tiempo pasa

Puedes ver cómo el tiempo pasa cuando corres este programa:

 ```javascript
 function draw() {
   var timer = millis();
   print(timer);
 }
 ```

## Ejemplo 8-11: gatillando eventos temporizados

Cuando se combina con un bloque if, los valores de millis() pueden ser usados para secuenciar tanto animaciones como eventos del programa. Por ejemplo, después de que han pasado dos segundos, el código dentro del bloque if puede gatillar un cambio. En este ejemplo, las variables llamadas time1 y time2 deerminan cuándo cambiar el valor de la variable x:

 ```javascript
var time1 = 2000;
var time2 = 4000;
var x = 0;

function setup() {
  createCanvas(480, 120);
}

function draw() {
  var currentTime = millis();
  background(204);
  if (currentTime > time2) {
    x -= 0.5;
  } else if (currentTime > time1) {
    x += 2;
  }
  ellipse(x, 60, 90, 90);
}
```

## Circular

Si eres un as de la trigonometría, ya sabes cuán increíbles son las funciones seno y coseno. Si no lo eres, esperamos que los siguientes ejemplos pueden gatillar tu interés. no discutiremos la matemática en detalle aquí, pero aquí mostraremos unas pocas aplicaciones para generar movimiento fluido.

La figura 8-2 muestra una visualización de valores de la función seno y cómo se relacionan con ángulos. En la parte superior e inferior de la onda, observa cómo la tasa de cambio (el cambio en el eje vertical) desacelera, para y luego cambia de dirección. Es esta cualidad de la curva lo que genera un movimiento interesante.

Las funciones sin() y cos() en p5.js arrojan valores entre -1 y 1 para la función seno y coseno del ángulo especificado. Tal como arc(), los ángulos deben ser escritos en radianes (ver Ejemplo 3-7 y Ejemplo 3-8 para un recordatorio de cómo funcionan los radianes). Para ser útil para dibujar, los valores float arrojados por sin() y cos() son usualmente multiplicados por un valor más grande.

## Ejemplo 8-12: valores de la onda sinusoidal

Este ejemplo muestra cómo los valores de sin() oscilan entre -1 y 1 a medida que el ángulo aumenta. Con la función map(), la variable sinval es convertida desde este rango a valores de 0 a 255. Este nuevo valor es usado para definir el color del fondo del lienzo:

```javascript
var angle = 0.0;

function draw() {
  var sinval = sin(angle);
  print(sinval);
  var gray = map(sinval, -1, 1, 0, 255);
  background(gray);
  angle += 0.1;
}
```

## Ejemplo 8-13: movimiento de una onda sinusoidal

Este ejemplo muestra cómo estos valores son convertidos a movimiento:

```javascript
var angle = 0.0;
var offset = 60;
var scalar = 40;
var speed = 0.05;

function setup() {
  createCanvas(240, 120);
}

function draw() {
  background(0);
  var y1 = offset + sin(angle) * scalar;
  var y2 = offset + sin(angle + 0.4) * scalar;
  var y3 = offset + sin(angle + 0.8) * scalar;
  ellipse( 80, y1, 40, 40);
  ellipse(120, y2, 40, 40);
  ellipse(160, y3, 40, 40);
  angle += speed;
}
```

## Ejemplo 8-14: movimiento circular

Cuando las funcioens sin() y cos() son usadas en conjunto, pueden producir movimiento circular. Los valores de la función cos() proveen los valores de la coordenada x, y los valores de la función sin() proveen la coordenada y. Ambos son multiplicados por una variable llamada scalar para cambiar el radio del movimiento y son sumados con un valor offset para situar el centro de un movimiento circular:

```javascript
var angle = 0.0;
var offset = 60;
var scalar = 30;
var speed = 0.05;

function setup() {
  createCanvas(120, 120);
  background(204);
}

function draw() {
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  ellipse(x, y, 40, 40);
  angle += speed;
}
```

## Ejemplo 8-15: espirales

Un peque;o cambio hecho para aumentar el valor scalar en cada cuadro produce una espiral en vez de un círculo:

```javascript
var angle = 0.0;
var offset = 60;
var scalar = 2;
var speed = 0.05;

function setup() {
  createCanvas(120, 120);
  fill(0);
  background(204);
}

function draw() {
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  ellipse(x, y, 2, 2);
  angle += speed;
  scalar += speed;
}
```

Robot 6: movimiento

En este ejemplo, las técnicas para movimiento aleatorio y circular son aplicadas al robot. La función background() fue removida para ver más claramente cómo la posición del robot y su cuerpo cambian.

En cada cuadro, un número aleatorio entre -4 y 4 es añadido a la coordenada x, y un número aleatorio entre -1 y 1 es añadido a la coordenada y. Esto causa que el robot se mueva más de izquierda a derecha que de arriba a abajo. Los números calculados por la función sin() cambian la altura del cuello para que oscile entre 50 y 100 pixeles de altura:

```javascript
var x = 180;          // Coordenada x
var y = 400;          // Coordenada y
var bodyHeight = 153; // Altura del cuerpo
var neckHeight = 56;  // Altura del cuello
var radius = 45;      // Radio de la cabeza
var angle = 0.0;      // Ángulo de movimiento

function setup() {
  createCanvas(360, 480);
  ellipseMode(RADIUS);
  background(204);
}

function draw() {
  // Cambia la posición en un monto aleatorio pequeño
  x += random(-4, 4);
  y += random(-1, 1);

  // Cambia la altura del cuello
  neckHeight = 80 + sing(angle) * 30;
  angle += 0.05;

  // Ajusta la altura de la cabeza
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
  noStroke();
  fill(102);
  ellipse(x, y - 33, 33, 33);
  fill(0);
  rect(x - 45, y - bodyHeight, 90, bodyHeight - 33);
  fill(102);
  rect(x - 45, y - bodyHeight + 17, 90, 6);

  // Cabeza
  fill(0);
  ellipse(x + 12, ny, radius, radius);
  fill(255);
  ellipse(x + 24, ny - 6, 14, 14);
  fill(0);
  ellipse(x + 24, ny - 6, 3, 3);
}
```