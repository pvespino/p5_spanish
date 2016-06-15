# Capítulo 4. Variables

Una variable guarda un valor en memoria para que pueda ser usado posteriormente en un programa. Una variable puede ser usada muchas veces dentro del mismo programa, y el valor puede ser fácilmente modificado mientras el programa está corriendo.

## Primeras variables

La razón principal por la que usamos variables es para evitar repetirnos en el código. Si estás escribiendo el mismo número una y otra vez, considera usar una variable para que tu código sea más general y más fácil de actualizar.

## Ejemplo 4-1: reusa los mismos valores

Por ejemplo, cuando haces variables la coordenada y y el diámetro para los tres círculos en este ejemplo, los mismos valores son usados para cada elipse:

```
var y = 60;
var d = 80;

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  //izquierda
  ellipse(75, y, d, d);
  //centro
  ellipse(175, y, d, d);
  //derecha
  ellipse(275, y, d, d);
}
```

## Ejemplo 4-2: cambiar los valores

Simplemente cambiar las variables y y d entonces altera las tres elipses:

```
var y = 100;
var d = 130;

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  //izquierda
  ellipse(75, y, d, d);
  //centro
  ellipse(175, y, d, d);
  //derecha
  ellipse(275, y, d, d);
}
```

Sin las variables, necesitarías cambiar la coordenada y usada en el código tres veces y la del diámetro seis veces. Cuando comparas los ejemplos 4-1 y 4-2, revisa cómo todas las líneas son iguales, excepto las dos primeras líneas con variables que son diferentes. Las variables te permiten separar las líneas de código que cambian de las que no cambian, lo que hace que los programas sean fáciles de modificar. Por ejemplo, si pones las variables que controlan colores y tamaños en un lugar, entonces puedes explorar diferentes opciones visuales enfocándote en sólo unas pocas líneas de código.

## Haciendo variables

Cuando haces tus propias variables, puedes determinar el nombre y el valor. Tú decides cómo se llama la variable. Escoge un nombre que sea informativo sobre lo que está almacenado en la variable, pero que sea consistente y no muy largo. Por ejemplo, el nombre de variable "radio" es mucho más claro que "r" cuando lo lees posteriormente en tu código.

Las variables primero deben ser declaradas, lo que reserva espacio en la memoria del computador para guardar la información. Cuando declaras una variable, usas la palabra var, para indicar que estás creando una nueva variable, seguida del nombre. Después de que el nombre es fijado, un valor puede ser asignado a la variable:

```
var x;  // Declara la variable x
x = 12; // Asigna un valor a x
```

Este código hace lo mismo, pero es más corto:

```
var x = 12;  // Declara la variable x y le asigna un valor
```

Los caracteres var son incluidos en la línea de código que declara la variable, pero no son escritos de nuevo. Cada vez que var es escrito antes que el nombre de una variable, el computador piensa que estás tratando de declarara una nueva variable. No puedes tener dos variables con el mismo nombre en la misma sección del programa (Apéndice C), o el programa podría comportarse extrañamente:

```
var x;      // Declara la variable x
var x = 12; // ERROR! No pueden haber dos variables x
```
Puedes situar tus variables afuera de setup() y draw(). Si creas una variable dentro de setup(), no puedes usarla dentro de draw(), así que necesitas situar estas variables en otro lugar. Estas variables reciben el nombre de variables globales, porque pueden ser usadas en cualquier lugar ("globalmente") del programa.

## Variables de p5.js

p5.js tiene una serie de variables especiales para almacenar información sobre el programa mientras corre. Por ejemplo, el ancho y la altura del lienzo están almacenados en las variables width y height. Estos valores son definidos por la función createCanvas(). Pueden ser usados para dibujar elementos relativos al tamaño del lienzo, incluso si la línea de código de createCanvas() es alterada.

## Ejemplo 4-3: ajusta el lienzo, observa lo que sucede

En este ejemplo, cambia los parámetros de createCanvas() para observar cómo funciona:

```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  line(0, 0, width, height); // Línea desde (0,0) a (480, 120)
  line(width, 0, 0, height); // Línea desde (480,0) a (0, 120)
  ellipse(width/2, height/2, 60, 60);
}
```
Existen también variables epsciales que mantienen registro del estado del ratón y de los valores del teclado, entre otras. Serán discutidas en el Capítulo 5.

## Un poco de matemáticas

La gente a menudo asume que las matemáticas y la programación son lo mismo. Aunque un poco de conocimiento de matemáticas puede ser útil para ciertos tipos de programación, la aritmética básica cubre las partes más importantes.

## Ejemplo 4-4: aritmética básica

```

var x = 25;
var h = 20;
var y = 25;

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  x = 20;
  rect(x,y,300,h);          // Superior
  x = x + 100;
  rect(x, y + h, 300, h);   // Centro
  x = x - 250;
  rect(x, y + h*2, 300, h); // Inferior
}
```
En el código, símbolos como +, - y * son llamados operadores. Cuando se encuentran entre dos valores, crean una expresión. Por ejemplo, 5 + 9 y 1024 - 512 son expresiones. Los operadores para operaciones matemáticas básicas son:

Javascript tiene un conjunto de reglas para definir el orden de precedencia que los operadores tienen entre sí, lo que significa, cuáles cálculos son efectuados en primer, segundo y tercer lugar, etc. Estas reglas definen el orden en el que el código se ejecuta. Un poco de conocimiento sobre esto es un gran paso hacia el entendimiendo de cómo funciona una corta línea de código como esta:

```
var x = 4 + 4 * 5;  // Se le asigna el valor 24 a x
```
La expresión 4*5 es evaluada primero porque la multiplicación tiene la prioridad más alta. Luego, se le suma 4 al producto 4*5, resultando 24. Finalmente, como el operador de asignación (el signo igual) tiene la menor predecencia, el valor 24 es asignado a la variable x. Esto se puede aclarar con el uso de paréntesis, pero el resultado es el mismo:

```
var x = 4 + (4 * 5);  // Se le asigna el valor 24 a x
```
Si quieres forzar que la suma ocurra primero, usa paréntesis. Como los paréntesis tienen mayor precedencia que la multiplicación, al cambiar los paréntesis de lugar se cambia el cálculo efectuado:

```
var x = 4 + (4 * 5);  // Se le asigna el valor 24 a x
```
Un acrónimo para este orden se enseña en clases de matemáticas: PEMDAS, que significa paréntesis, exponentes, multiplicación, división, adición, substracción, donde los paréntesis tienen la mayor prioridad y la substracción la menor. El orden completo de operaciones se encuentra anotado en el Apéndice B.

Algunos cálculos son usados tan frecuentemente en programación que se han desarrollado atajos, es útil ahorrar tiempo en el teclado. Por ejemplo, cuando puedes sumar o restar a una variable con un operador:

```
x += 10;  // Es equivalente a x = x + 10;
x -= 15;  // Es equivalente a x = x - 15;
```
También es muy común sumar o restar 1 a una variable, así que esto también tiene un atajo. Los operadores ++ y -- hacen esto:

```
x ++;  // Es equivalente a x = x + 1;
x --;  // Es equivalente a x = x - 1;
```

## Repetición

Mientras escribes programas, te darás cuenta que ocurren patrones al repetir líneas de código con pequeñas modificaciones. Una estructura de código llamada "for loop" hace posible que una línea de código corre más de una vez para condensar el tipo de repetición a unas pocas líneas de código. Esto hace que tus programas sean modulares y más simples de modificar.

## Ejemplo 4-5: haz lo mismo una y otra vez

Este ejemplo tiene el tipo de patrón que puede ser simplificado con un "for loop":

```
function setup() {
  createCanvas(480, 120);
  strokeWeight(8);
}

function draw() {
  background(204);
  line( 20, 40,  80, 80);
  line( 80, 40, 140, 80);
  line(140, 40, 200, 80);
  line(200, 40, 260, 80);
  line(260, 40, 320, 80);
  line(320, 40, 380, 80);
  line(380, 40, 440, 80);
}
```

## Ejemplo 4-6: usa un for loop

Lo mismo puede ser logrado con un for loop, y con mucho menos código:

```
function setup() {
  createCanvas(480, 120);
  strokeWeight(8);
}

function draw() {
  background(204);
  for (var i = 20; i < 400; i += 60) {
    line( i, 40,  i + 60, 80);
  }
}
```

El for loop es diferente en muchas maneras del código que hemos escrito hasta ahora. Fíjate en las llaves, los caracteres { y }. El código repetido entre las llaves es llamado bloque. Este es el código que será repetido en cada iteración del for loop.

Adentro del paréntesis hay tres declaraciones, separadas por punto y coma, que funcionan en conjunto para controlar cuántas veces el código dentro del bloque es ejecutado. De izquierda a derecha, estas declaraciones son nombradas así: inicialización (init), prueba (test), actualización (update):

```
for (init; test; update) {
  declaraciones
}
```
Init típicamente declara una variable nueva a ser usada en el for loop y le asigna un valor. El nombre de variable i es frecuentemente usado, pero esto no tiene nada de especial. El test evalúa el valor de esta variable, y update change el valor de la variable. La figura 4-1 muestra el orden en el que el código es ejectuado y cómo controlan el código dentro del bloque.

La prueba o test requiere más explicación. Siempre es una expresión de relación que compara dos valores con un operador relacional. En este ejemplo, la expresión es "i < 400" y el operador es el símbolo < (menor que). Los operadores relacionales más comunes son:

La expresión relacional siempre evalua a verdadero (true) o falso (false). Por ejemplo, la expresión 5 > 3 es true. Podemos preguntar, "¿es cinco mayor que tres?". Como la respuesta es "sí", decimos que la expresión es true. Para la expresión 5 < 3, podemos preguntar, "¿es cinco menor que tres?". Como la respuesta es no, decimos que la expresión es false. Cuando la evaluación es true, el código dentro del bloque se ejecuta y cuando es false, el código dentro del bloque no se ejecuta y el for loop se acaba.

## Ejemplo 4-7: entrena tus músculos para hacer for loops

El poder definitivo que entregan los for loop es la habilidad para hacer cambios rápidos a tu código. Como el código dentro del bloque es ejecutado típicamente múltiples veces, un cambio al bloque es magnificado cuando el código es ejecutado. Al modificar el ejemplo 4-6 un poco, podemos crear una variedad de distintos patrones:

```
function setup() {
  createCanvas(480, 120);
  strokeWeight(2);
}

function draw() {
  background(204);
  for (var i = 20; i < 400; i += 8) {
    line( i, 40,  i + 60, 80);
  }
}
```

## Ejemplo 4-8: desplegando las líneas

```
function setup() {
  createCanvas(480, 120);
  strokeWeight(2);
}

function draw() {
  background(204);
  for (var i = 20; i < 400; i += 20) {
    line( i, 0,  i + i/2, 80);
  }
}
```

## Ejemplo 4-9: modificando las líneas

```
function setup() {
  createCanvas(480, 120);
  strokeWeight(2);
}

function draw() {
  background(204);
  for (var i = 20; i < 400; i += 20) {
    line( i, 0,  i + i/2, 80);
    line( i + i/2,  80, i * 1.2, 80);
  }
}
```

## Ejemplo 4-10: anidando un for loop dentro de otro

Cuando un for loop es anidado dentro de otro, el número de repeticiones se multiplica. Primero veamos un ejemplo corto y luego lo veremos por partes en el ejemplo 4-11.

```
function setup() {
  createCanvas(480, 120);
  noStroke();
}

function draw() {
  background(0);
  for (var y = 0; y <= height; y += 40) {
    for (var x = 0; y <= width; y += 40) {
      fill(255, 140);
      ellipse(x, y, 40, 40);
    }
  }
}
```
## Ejemplo 4-11: filas y columnas

En este ejemplo, los for loops están adyacentes, en vez de estar uno dentro de otro. El resultado muestra que un for loop está dibujando una columna de 4 círculos y el otro está dibujando una fila de 13 círculos.

```
function setup() {
  createCanvas(480, 120);
  noStroke();
}

function draw() {
  background(0);
  for (var y = 0; y < height + 45; y += 40) {
    fill(255, 140);
    ellipse(0, y, 40, 40);
  }
  for (var x = 0; x <= width + 45; x += 40) {
    fill(255, 140);
    ellipse(x, 0, 40, 40);
  }
}
```
Cuando uno de estos for loop es puesto dentro del otro, como en el ejemplo 4-10, las 4 repeticiones del primer loop son compuestas con las 13 del segundo, para así ejecutar el código dentro del bloque compuesta 52 veces (4 x 13 = 52).

El ejemplo 4-10 es una buena base para explorar muchos tipos de patrones visuales repetitivos. Los siguientes ejemplos muestran un par de maneras en que esto puede ser extendido, pero esto es solo una pequeña muestra de lo que es posible.

## Ejemplo 4-12: alfileres y líneas

En este ejemplo, el código dibuja una línea desde cada punto de la matriz hasta el centro de la pantalla:

```
function setup() {
  createCanvas(480, 120);
  fill(255);
  stroke(102);
}

function draw() {
  background(0);
  for (var y = 20; y < height - 20; y += 10) {
    for (var x = 20; x <= width - 20; x += 10) {
      ellipse(x, y, 4, 4);
      // Dibuja una línea al centro de la imagen
      line(x, y, 240, 60);
    }
  }
}
```

## Ejemplo 4-13: Puntos semitono

En este ejemplo, las elipses se reducen en tamaño con cada nueva fila y son movidas hacia la derecha, por medio de añadir la coordenada y a la coordenada x:

```
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(0);
  for (var y = 32; y < height; y += 8) {
    for (var x = 12; x <= width; x += 15) {
      ellipse(x + y, y, 16 - y/10.0, 16 - y/10.0);
    }
  }
}
```

## Robot 2: variables

Las variables introducidas en este programa hacen que el código se vea más difícil que el de la Robot 1 (ver "Robot 1: dibuja"), pero ahora es mucho más simple hacer modificaciones, porque los números que dependen uno de otro están en una misma ubicación. Por ejemplo, el dibujo del cuello está basado en la variable neckHeight. El grupo de variables al principio del código controla los aspectos del robot que queremos cambiar: ubicación, altura del cuerpo y altura del cuello. Puedes observar algunas de las posibles variaciones posibles en la figura; de izquierda a derecha, acá están los valores correspondientes:


Cuando alteras tu propio código para usar variables en vez de números, planea los cambios cuidadosamente y después haz las modificaciones en pasos cortos. Por ejemplo, cuando este programa fue escrito, cada variable fue creada de a una a la vez para minimizar la complejidad de la transición. Solo después de que una variable era creada y el código era ejecutado para asegurarse de que funcionara correctamente, se añadía una siguiente variable:

```
var x = 60;                                      // Coordenada X
var y = 420;                                    // Coordenada Y
var bodyHeight = 110;                           // Altura del cuerpo
var neckHeight = 140;                           // Altura del cuello
var radius = 45;
var ny = y - bodyHeight - neckHeight - radius;  // Y del cuello

function setup(){
  createCanvas(170, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  background(204);

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
  fill(153);
  ellipse(x, ny - 8, 5, 5);
  ellipse(x + 30, ny - 26, 4, 4);
  ellipse(x + 41, ny + 6, 3, 3);
}

```