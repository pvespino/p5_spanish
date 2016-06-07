# Capítulo 3. Dibuja

Al principio, dibujar en una pantalla de computador es como trabajar en papel cuadriculado. Parte como un procedimiento técnico cuidadoso, pero a medida que se introducen nuevos conceptos, dibujar formas simples con software se transforma en trabajar con animación e interacción. Antes de que hagamos este salto, tenemos que empezar por el principio.

Una pantalla de computador es una matriz de elementos de luz llamados pixeles. Cada pixel tiene una posición dentro de la matriz definida por coordenadas. Cuando creas un bosquejo en p5.js, lo puedes visualizar con un navegador web. Dentro de la ventana del navegador, p5.js create un lienzo para dibujar, un área en la que se dibujan las gráficas. El lienzo puede ser del mismo tamaño que la ventana, o puede tener dimensiones distintas. El lienzo está usualmente posicionado en la esquina superior izquierda de tu ventana, pero lo puedes posicionar en otros lugares.

Cuando dibujas en el lienzo, la coordenada x es la distancia desde el borde izquierdo del lienzo y la coordenada y es la distancia desde el borde superior. Escribimos las coordenadas de un pixel así (x,y). Así que, si el lienzo es de 200 x 200 pixeles, la esquina superior izquierda es (0,0), el centro está en (100, 100) y la esquina inferior derecha es (199, 199). Estos números pueden parecer confusos, ¿por qué contamos de 0 a 199 en vez de 1 a 200? La respuesta es que en programación, usualmente contamos partiendo en 0 por qué es más fácil así hacer cálculos que veremos más adelante.

## El lienzo

El lienzo es creato y las imágenes son dibujadas dentro de él a través de elementos de código llamados funciones. Las funciones son el bloque fundamental de un programa en p5.js. El comportamiento de una función está definido por sus parámetros. Por ejemplo, casi todos los programas en p5.js tienen una función createCanvas() que crea un lienzo para dibujar con un ancho y una altura específicos. Si tu programa no tiene una función createCanvas(), el lienzo creado por defecto tiene dimensiones de 100x100 pixeles.

## Ejemplo 3-1: crea un lienzo

La función createCanvas() tiene dos parámetros, el primero define el ancho del lienzo para dibujar, el segundo define la altura. Para dibujar un lienzo que es de 800 pixeles de ancho y 600 pixeles de altura, escribe:

```
function setup() {
  createCanvas(800, 600);
}
```

Corre esta línea de código para ver el resultado. Escribe diferentes valores para explorar las posibilidades. Trata con números muy pequeños y con números más grandes que las dimensiones de tu pantalla.

## Ejemplo 3-2: dibuja un punto

Para definir el color de un solo pixel dentro del lienzo, usamos la función point(). Tiene dos parámetros que definen la posición: la coordenada x, seguida de la coordenada y. Para crear un pequeño lienzo y un punto en el centro de él, coordenada (240, 60), escribe:

```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  point(240, 60);
}
```

Escribe un programa que pone un punto en cada esquina del lienzo para dibujar y uno en el centro. Luego trata de poner puntos consecutivos de manera vertical, horizontal y en líneas diagonales.

## Formas básicas

p5.js incluye un grupo de funciones para dibujar formas básicas (ver la figura 3-1). Formas simples, como líneas, pueden ser combinadas para crear formas más complicadas como una hoja o una cara.

Para dibujar solo una línea, necesitamos cuatro parámetros: dos para el punto de inicio y dos para el final.

## Ejemplo 3-3: dibuja una línea

Para dibujar una línea entre la coordenada (20, 50) y (420, 110), prueba:

```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  line(20, 50, 420, 110);
}
```

## Ejemplo 3-4: dibuja formas básicas

Siguiendo este patrón, un triángulo necesita seis parámetros y un cuadrilátero necesita ocho (un par para cada punto):

```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  quad(158, 55, 199, 14, 392, 66, 351, 107);
  triangle(347, 54, 392, 9, 392, 66);
  triangle(158, 55, 290, 91, 290, 112);
}
```

## Ejemplo 3-5: dibuja un rectángulo

Tanto rectángulos como elipses son definidos por cuatro parámetros: el primero y el segundo son las coordenadas x e y del punto ancla, el tercero es el ancho y el cuarto por la altura. Para dibujar un rectángulo (180, 60) con ancho de 220 pixeles y una altura de 40, usa la función rect() así:

```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  rect(180, 60, 220, 40);
}
```

## Ejemplo 3-6: dibuja una elipse

Las coordenadas x e y para un rectángulo son la esquina superior izquierda, pero para una elipse son el centro de la figura. En este ejemplo, date cuenta que la coordenada y para la primera elipse está fuera del lienzo. Los objetos pueden ser dibujados parcialmente (o enteramente) fuera del lienzo sin arrojar errores:
```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  ellipse(278, -100, 400, 400);
  ellipse(120, 100, 110, 110);
  ellipse(412, 60, 18, 18);
}
```
p5.js no tiene funciones distintas para hacer cuadrados y círculos. Para hacer estas figuras, usa el mismo valor para los parámetros de ancho y altura en las funciones ellipse() y rect().

## Ejemplo 3-7: dibuja una parte de una elipse

La función arc() dibuja una parte de una elipse:

```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  arc(90, 60, 80, 80, 0, HALF_PI);
  arc(190, 60, 80, 80, 0, PI + HALF_PI);
  arc(290, 60, 80, 80, PI, TWO_PI+HALF_PI);
  arc(390, 60, 80, 80, QUARTER_PI, PI+QUARTER_PI);
}
```

El primer y segundo parámetro definen la ubicación, mientras que el tercero y el cuarto definen el ancho y la altura. El quinto parámetro define el ángulo de inicio y el sexto el ángulo de parada. Los ángulos están definidos en radianes, en vez de grados. Los radianes son medidas de ángulo basadas en el valor de pi (3.14159). La figura 3-2 muestra cómo ambos están relacionados. Como se ve en este ejemplo, cuatro valores de radianes son usados tan frecuentemente que fueron agregados con nombres especiales como parte de p5.js. Los valores PI, QUARTER_PI, HALF_PI y TWO_PI pueden ser usados para reemplazar los valores en radianes de 180, 45, 90 y 360 grados.

## Ejemplo 3-8: dibuja con grados

Si prefieres usar mediciones en grados, puedes convertir a radianes con la función radians(). Esta función toma un ángulo en grados y lo transforma en su correspondiente valor en radianes. El siguiente ejemplo es el mismo que el ejemplo 3-7, pero usa la función radians() para definir en grados los valores de inicio y final:

```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  arc(90, 60, 80, 80, 0, radians(90));
  arc(190, 60, 80, 80, 0, radians(270));
  arc(290, 60, 80, 80, radians(180), radians(450));
  arc(390, 60, 80, 80, radians(45), radians(225));
}
```

## Ejemplo 3-9: usa angleMode

Alternativamente, puedes convertir tu bosquejo para que use grados en vez de radianes usando la función angleMode(). Esta función cambia todas las funciones que aceptan o retornan ángulos para que usen ángulos o radianes, basado en el parámetro de al función, en vez de que tú tengas que convertirlo. El siguiente ejemplo es el mismo que el 3-8, pero usa la función angleMode(DEGREES) para definir los valores en grados de inicio y final:

```
function setup() {
  createCanvas(480, 120);
  angleMode(DEGREES);
}

function draw() {
  background(204);
  arc(90, 60, 80, 80, 0, 90);
  arc(190, 60, 80, 80, 0, 270);
  arc(290, 60, 80, 80, 180, 450);
  arc(390, 60, 80, 80, 45, 225);
}
```

## Orden de dibujo

Cuando un programa corre, el computador empieza por el principio y lee cada línea de código hasta que llega a la última línea y luego para.

Nota

Hay unas pocas excepciones a esto, como cuando cargas archivos externos, pero revisaremos esto más adelante. Por ahora, puedes asumir que cada línea correa en orden cuando dibujas.

Si quieres que una figura sea dibujada encima de todas las otras figuras, necesita estar después de las otras en el código.

## Ejemplo 3-10: controla el orden tu código

```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  ellipse(140, 0, 190, 190);
  // The rectangle draws on top of the ellipse
  // because it comes after in the code
  rect(160, 30, 260, 20);
}
```

## Ejemplo 3-11: ponlo en reversa

Modifica el bosquejo invirtiendo el orden de rect() y ellipse() para ver el círculo encima del rectángulo:

```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  rect(160, 30, 260, 20);
  // The ellipse draws on top of the rectangle
  // because it comes after in the code
  ellipse(140, 0, 190, 190);
}
```

Puedes pensar esto como pintar con brocha o hacer un collage. El último elemento que añades es el que está visible encima.

## Propiedades de las figuras

Puedes querer tener más control de las figuras que dibujas, más allá de su posición y su tamaño. Para lograr esto, existe un conjunto de funcioens que definen las propiedades de las figuras.

## Ejemplo 3-12: define el grosor del trazado

El valor por defecto del grosor del trazado es de un pixel, pero esto puede ser cambiado con la función strokeWeight(). Un solo parámetro en la función strokeWeight() define el ancho de las líneas dibujadas:

```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  ellipse(75, 60, 90, 90);
  strokeWeight(8); //stroke weight to 8 pixels
  ellipse(175, 60, 90, 90);
  ellipse(279, 60, 90, 90);
  strokeWeight(20); //stroke weight to 20 pixels
  ellipse(389, 60, 90, 90);
}
```

## Ejemplo 3-13: define los atributos del trazado

La función strokeJoin() cambia la forma en que las líneas se unen (y cómo se ven las esquinas), y la función strokeCap() cambia cómo las líneas son dibujadas en su inicio y su final:

```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  strokeJoin(ROUND); // Round the stroke corners
  rect(40, 25, 70, 70);
  strokeJoin(BEVEL); // Bevel the stroke corners
  rect(140, 25, 70, 70);
  strokeCap(SQUARE); // Square the line endings
  line(270, 25, 340, 95);
  strokeCap(ROUND); // Round the line endings
  line(350, 25, 420, 95);
}
```

La posición de las figuras como rect() y ellipse() son controladas por las funciones rectMode() y ellipseMode(). Revisa la referencia de p5.js para ver ejemplos de cómo posicionar rectángulos según su centro (en vez de su esquina superior izquierda), o de cómo dibujar elipses desde su esquina superior izquierda como los rectángulos.

Cuando cualquiera de estos atributos es definido, todas las figuras dibujadas posteriormente son afectadas. Como se ve en el ejemplo 3-12, pon atención en cómo el segundo y tercer círculo tienen el mismo grosor de trazado, incluso cuando el grosor es definido solo una vez antes de que ambos sean dibujados.

Fíjate que la línea de código strokeWeight(12 aparece en el bloque de setup() en vez de en draw(). Esto es porque no cambia durante la duración de nuestro programa, así que podemos definirlo sólo una vez durante setup(). Esto es mayoritariamente por organización; poner la línea en draw() tendría el mismo efecto visualizar

## Color

Todas las figuras hasta el momento han sido rellenas de color blanco con borde negro. Para cambiar esto, usa las funciones fill() y stroke(). Los valores de los parámetros varían entre 0 y 255, donde 255 es blanco, 128 es gris medio y 0 es negro. En la figura 3-3 se muestra cómo los valores entre 0 y 255 corresponden a diferentes niveles de gris. La función background() que hemos visto en ejemplos anteriores funciona de la misma manera, excepto que en vez de definir el color de relleno o de trazado para dibujar, define el color del fondo del lienzo.

## Ejemplo 3-14: pinta con grises

Este ejemplo muestra tres diferentes valores de gris en un fondo negro:

```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(0);                // Black
  fill(204);                    // Light gray
  ellipse(132, 82, 200, 200);   // Light gray circle
  fill(153);                    // Medium gray
  ellipse(228, -16, 200, 200);  // Medium gray circle
  fill(102);                    // Dark gray
  ellipse(268, 118, 200, 200);  // Dark gray circle
}
```
## Ejemplo 3-15: controla el relleno y el color del trazado

Puedes usar la función noStroke() para deshabilitar el trazado para que no se dibuje el borde, y puedes deshabilitar el relleno de una figura con noFill():

```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  fill(153);                    // Medium gray
  ellipse(132, 82, 200, 200);   // Gray circle
  noFill();                     // Turn off fill
  ellipse(228, -16, 200, 200);  // Outline circle
  noStroke();                   // Turn off stroke
  ellipse(268, 118, 200, 200);  // Doesn't draw
}
```

Ten cuidado de no deshabilitar el relleno y el trazado al mismo tiempo, como lo hicimos en el ejemplo anterior, porque nada será dibujada en la pantalla.

## Ejemplo 3-16: dibuja con color

Para ir más allá de la escala de grises, usa tres parámetros para espeficar los componentes de color rojo, verde y azul. Como está libro está impreso en blanco y negro, sólo verás valores grises aquí. Corre el código para revelar los colores:

```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(0, 25, 51);        // Dark blue color
  fill(255, 0, 0);              // Red color
  ellipse(132, 82, 200, 200);   // Red circle
  fill(0, 255, 0);              // Green color
  ellipse(228, -16, 200, 200);  // Green circle  
  fill(0, 0, 255);              // Blue color
  ellipse(268, 118, 200, 200);  // Blue circle
}
```

Los colores en el ejemplo son referidos como color RGB, porque es cómo los computadores definen el color en la pantalla. Los tres números definen los valores de rojo, verde y azul, y varían entre 0 y 255 de la misma forma que los valores de gris. Estos tres números son los parámetros para tus funciones de background(), fill() y stroke().

## Ejemplo 3-17: define la transparencia

Al añadir un cuarto parámetro a fill() o a stroke(), puedes controlar la transparencia. Este cuarto parámetro es conocido como el valor alpha, y también varía entre 0 y 255 para definir el monto de transparencia. El valor 0 define el color como totalmente transparente (no será mostrado en la pantalla), el valor 255 es enteramente ópaco, y los valores entre estos extremos hacen que los colores se mezclen en la pantalla:

```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204, 226, 225);    // Light blue color
  fill(255, 0, 0, 160);         // Red color
  ellipse(132, 82, 200, 200);   // Red circle
  fill(0, 255, 0, 160);         // Green color
  ellipse(228, -16, 200, 200);  // Green circle
  fill(0, 0, 255, 160);         // Blue color
  ellipse(268, 118, 200, 200);  // Blue circle
}
```

## Formas personalizadas

No estás limitado a usar estas formas geométricas básicas - puedes dibujar nuevas formas conectando una serie de puntos.

## Ejemplo 3-18: dibuja una flecha

La función beginShape() señala el comienzo de una nueva figura. La función vertex() es usada para definir cada par de coordenadas (x,y) de la figura. Finalmente, endShape() señala que la figura está completa:


```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  beginShape();
  vertex(180, 82);
  vertex(207, 36);
  vertex(214, 63);
  vertex(407, 11);
  vertex(412, 30);
  vertex(219, 82);
  vertex(226, 109);
  endShape();
}
```

## Ejemplo 3-19: cierra la brecha

Cuando corres el ejemplo 3-18, verás que el primer y el último punto no están conectados. Para hacer esto, añade la palabra CLOSE como parámetro a la función endShape, así:

```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  beginShape();
  vertex(180, 82);
  vertex(207, 36);
  vertex(214, 63);
  vertex(407, 11);
  vertex(412, 30);
  vertex(219, 82);
  vertex(226, 109);
  endShape(CLOSE);
}
```

## Ejemplo 3-20: crea algunas criaturas

El poder de definir figuras con vertex() es la habilidad de hacer figuras con bordes complejos. p5.js puede dibujar miles y miles de líneas al mismo tiempo para llenar la pantalla con figuras fantásticas que emanan de tu imaginación. Un ejemplo modesto pero más complejo es presentado a continuación:

```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);

  // Left creature
  beginShape();
  vertex(50, 120);
  vertex(100, 90);
  vertex(110, 60);
  vertex(80, 20);
  vertex(210, 60);
  vertex(160, 80);
  vertex(200, 90);
  vertex(140, 100);
  vertex(130, 120);
  endShape();
  fill(0);
  ellipse(155, 60, 8, 8);

  // Right creature
  fill(255);
  beginShape();
  vertex(370, 120);
  vertex(360, 90);
  vertex(290, 80);
  vertex(340, 70);
  vertex(280, 50);
  vertex(420, 10);
  vertex(390, 50);
  vertex(410, 90);
  vertex(460, 120);
  endShape();
  fill(0);
  ellipse(345, 50, 10, 10);
}
```

## Comentarios

Los ejemplos en este capítulo usan doble barra (//) al final de una línea para añadir comentarios al código. Los comentarios son una parte de los programas que son ignorados cuando el programa corre. Son útiles para hacer notas para ti mismo que expliquen lo que está pasando en el código. Si otras personas están leyendo tu código, los comentarios son especialmente importantes para ayudarles a entender tu proceso.

Los comentarios son también especialmente útiles para un número de diferentes opciones, como tratar de escoger el color correcto. Así que, por ejemplo, podríamos estar tratando de encontrar el rojo preciso que queremos para una elipse:

```
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(204);
  fill(165, 57, 57);
  ellipse(100, 100, 80, 80);
}
```
Ahora supón que quieres probar un rojo distinto, pero no quieres perder el antiguo. Puedo copiar y pegar la línea, hacer un cambio y luego comentar la línea de código antigua:

```
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(204);
  //fill(165, 57, 57);
  fill(144, 39, 39);
  ellipse(100, 100, 80, 80);
}
```

Poner // al principio de una línea temporalmente la anula. O puedo remover // y escribirlo al inicio de otra línea si quiero probarlo de nuevo:

```
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(204);
  fill(165, 57, 57);
  //(144, 39, 39);
  ellipse(100, 100, 80, 80);
}
```

Mientras trabajas con bosquejos de p5.js, te encontrarás a ti mismo creando docenas de iteraciones de ideas; usar comentarios para hacer notas o para deshabilitar líneas de códigos puede ayudarte a mantener registro de tus múltiples opciones.

## Robot 1: dibuja

Ella es P5, la robot de p5.js. Hay 10 diferentes programas para dibujarla y animarla en este libro - cada uno explora una idea de programación diferente. El diseño de P5 está inspirado en Sputnik I (1957), Shakey del Stanford Research Institute (1966 - 1972), el dron luchador en la película Dune (1984) de David Lynch y HAL 9000 de 2001: Una odisea en el espacio (1968), entre otros robots favoritos.

El primer programa de robot usa las funciones de dibujo introducidas anteriormente en este capítulo. Los parámetros de las funciones fill() y stroke() definen los valores de la escala de grises. Las funciones line(), ellipse() y rect() definen las formas que crean el cuello, las antenas, el cuerpo y la cabeza de la robot. Para familiarizarze mejor con las funciones, corre el programa y cambia los valores para rediseñar el robot:

```
function setup() {
  createCanvas(720, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  background(204);

  // Neck
  stroke(102);                // Set stroke to gray
  line(266, 257, 266, 162);   // Left
  line(276, 257, 276, 162);   // Middle
  line(286, 257, 286, 162);   // Right

  // Antennae
  line(276, 155, 246, 112);   // Small
  line(276, 155, 306,  56);   // Tall
  line(276, 155, 342, 170);   // Medium

  // Body
  noStroke();                 // Disable stroke
  fill(102);                  // Set fill to gray
  ellipse(264, 377, 33, 33);  // Antigravity orb
  fill(0);                    // Set fill to black
  rect(219, 257, 90, 120);    // Main body
  fill(102);                  // Set fill to gray
  rect(219, 274, 90, 6);      // Gray stripe

  // Head
  fill(0);                    // Set fill to black
  ellipse(276, 155, 45, 45);  // Head
  fill(255);                  // Set fill to white
  ellipse(288, 150, 14, 14);  // Large eye
  fill(0);                    // Set fill to black
  ellipse(288, 150, 3, 3);    // Pupil
  fill(153);                  // Set fill to light gray
  ellipse(263, 148, 5, 5);    // Small eye 1
  ellipse(296, 130, 4, 4);    // Small eye 2
  ellipse(305, 162, 3, 3);    // Small eye 3
}
```
