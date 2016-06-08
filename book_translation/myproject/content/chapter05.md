# Capítulo 5. Respuesta

El código que responde a acciones de entrada del ratón, teclado u otros dispositivos  depende en que el programa corra continuamente. Ya nos enfrentamos a las funciones setup() y draw() en el Capítulo 1. Ahora aprenderemos más sobre qué hacen y cómo usarlas para reaccionar a entradas al programa.

## Una vez y para siempre

El código dentro del bloque draw() corre desde el principio al final, luego se repite hasta que cierras el programa cuando cierras la ventana. Cada iteración a través del bloque draw() es llamado un cuadro o frame. (La tasa de cuadros por defecto es de 60 cuadros por segundo, pero esto puede ser modificado).

## Ejemplo 5-1: la función draw()

Para observar como la función draw() funciona, corre este ejemplo:

```
function draw() {
  //Muestra en la consola el contador de cuadros
  print("Estoy dibujando");
  print(frameCount);
}
```
Verás lo siguiente:

```
Estoy dibujando
1
Estoy dibujando
2
Estoy dibujando
3
...
```

En el ejemplo anterior, las funciones print() escriben el texto "Estoy dibujando" seguido del contador actual de cuadros, tarea efectuada por la variable especial frameCount. El texto aparece en la consola de tu navegador.

## Ejemplo 5-2: la función setup()

Para complementar la repetitiva función draw(), p5.js posee la función setup() que solo corre una vez cuando el programa empieza:

```
function setup() {
  print("Estoy empezando");
}

function draw() {
  print("Estoy corriendo");
}
```

Cuando corres el código, en la consola se escribe lo siguiente:

```
Estoy empezando
Estoy corriendo
Estoy corriendo
Estoy corriendo
...
```

El texto "Estoy corriend" sigue escribiéndose en la consola hasta que el programa es parado.

En algunos navegadores, en vez de escribir una y otra vez "Estoy corriendo", lo imprimirá solo una vez, y después para cada subsecuente vez, incrementará un número junto a la línea, representando el número total de veces que la línea ha sido impresa de corrido.

En un programa típico, el código dentro de setup() es usado para definir las condiciones iniciales. La primera línea es usualmente la función createCanvas(), a menudo seguida de código para definir los colores de relleno y trazado iniciales. (Si no incluyes la función createCanvas(), el lienzo para dibujar tendrá una dimensión de 100x100 pixeles por defecto).

Ahora sabes cómo usar setup() y draw() en mayor detalle, pero esto no es todo.

Hay una ubicación adicional dónde has estado poniendo código - también puedes poner variables globales fuera de setup() y draw(). Esto se hace más claro cuando listamos el orden en que el código es ejecutado.

1. Las variables declaradas fuera de setup() y draw() son creadas.

2. El código dentro de setup() es ejecutado una vez.

3. El código dentro de draw() corre continuamente.

## Ejemplo 5-3: setup(), te presento a draw()

El siguiente ejemplo pone en práctica todos estos conceptos:

```
var x = 280;
var y = -100;
var diameter = 380;

function setup() {
  createCanvas(480, 120);
  fill(102);
}

function draw() {
  background(204);
  ellipse(x, y, diameter, diameter);
}
```

## Seguir

Como el código está corriendo continuamente, podemos seguir la posición del ratón y usar estos números para mover elementos en la pantalla.

## Ejemplo 5-4: seguir al ratón

La variable mouseX graba la coordenada x, y la variable mouseY graba la coordenada y:

```
function setup() {
  createCanvas(480, 120);
  fill(0, 102);
  noStroke();
}

function draw() {
  ellipse(mouseX, mouseY, 9, 9);
}
```
En este ejemplo, cada vez que el código en el bloque draw() es ejecutado, un nuevo círculo es añadido al lienzo. La imagen fue hecha moviendo el ratón para controlar la posición del círculo. Como la función de relleno está definida para ser parcialmente transparente, las áreas negras más densas muestran dónde el ratón estuvo más tiempo o se movió más lento. Los círculos que están más separados muestran dónde el ratón estuvo moviéndose más rápido.

## Ejemplo 5-5: el punto te persigue

En este ejemplo, un nuevo círculo es añadido al lienzo cada vez que el código dentro de draw() es ejecutado. Para refrescar la pantalla y sollo mostrar el círculo más reciente, escribe la función background() al principio del bloque draw() antes que la figura sea dibujada:

```
function setup() {
  createCanvas(480, 120);
  fill(0, 102);
  noStroke();
}

function draw() {
  background(204);
  ellipse(mouseX, mouseY, 9, 9);
}
```
La función background() pinta el lienzo completo , así que asegúrate de ponerlo antes que las otras funciones dentro de draw(). Si no haces esto, las figuras dibujadas antes serán borradas.

## Ejemplo 5-6: dibuja de forma continua

Las variables pmouseX y pmouseY guardan la posición del ratón en el cuadro anterior. Como mouseX y mouseY, estas variables especiales son actualizadas cada vez que draw() es ejecutado. Cuando las combinas, pueden ser usadas para dibujar líneas continuas al conectar las posiciones actual y más reciente:

```
function setup() {
  createCanvas(480, 120);
  strokeWeight(4);
  stroke(0, 102);
}

function draw() {
  line(mouseX, mouseY, pmouseX, pmouseY);
}
```

## Ejemplo 5-7: define el grosor sobre la marcha

Las variables pmouseX y pmouseY también pueden ser usadas para calcualr la velocidad del ratón. Esto se hace midiendo la distancia entre la posición actual y la más reciente del ratón. Si el ratón se está moviendo lentamente, la distancia es pequeña, pero si se empieza a mover más rápido, la distancia se incrementa. Una función llamada dist() simplifica este cálculo, como se muestra en el siguiente ejemplo. Aquí, la velocidad del ratón es usada para definir el grosor de la línea dibujada

```
function setup() {
  createCanvas(480, 120);
  stroke(0, 102);
}

function draw() {
  var weight = dist(mouseX, mouseY, pMouseX, pMouseY);
  strokeWeight(weight);
  line(mouseX, mouseY, pmouseX, pmouseY);
}
```
## Ejemplo 5-8: el suavizado lo hace

En el ejemplo 5-7, los valores del ratón son convertidos directamente a posiciones en la pantalla. Pero a veces queremos que estos valores sigan al ratón más libremente - que se queden atrás para creen un movimiento más fluido. Esta técnica es llamada suavizado. Con el suavizado, hay dos valores: el valor actual y el valor objetivo (ver Figura 5-1). A cada paso en el programa, el valor actual se mueve un poco más cerca del valor objetivo:

```
var x = 0;
var easing = 0.01;

function setup() {
  createCanvas(220, 120);
}

function draw() {
  var targetX = mouseX;
  x += (targetX - x) * easing;
  ellipse(x, 40, 12, 12);
  print(targetX + " : " + x);
}

```

El valor de la variable x está siempre acercándose a targetX. La velocidad con la que lo alcanzo es definida por la variable de easing, un número entre 0 y 1. Un valor pequeño de easing causa más retraso que un valor más grande. Con un valor de easing de 1, no hay retraso. Cuando corres el ejemplo 5-8, los valores actuales son mostrados en la consola a través de la función print(). Cuando muevas el mouse, observa cómo los números están alejados, pero cuando dejas de moverlo, el valor de x se acerca al valor de targetX.

Todo el trabajo en este ejemplo ocurre en la línea que empieza con x+=. Aquí, se calcula la diferencia entre el valor objetivo y el actual, y luego es multiplicada por la variable easing y añadida a x para llevarla más cerca que el objetivo.

## Ejemplo 5-9: suaviza las líneas

En este ejemplo, la técnica de suavizado es aplicada al Ejemplo 5-7. En comparación, las líneas son más fluidas:

```
var x = 0;
var y = 0;
var px = 0;
var py = 0;
function setup() {
  createCanvas(480, 120);
  stroke(0, 102);
}

function draw() {
  var targetX = mouseX;
  x += (targetX - x) * easing;
  var targetY = mouseY;
  y += (targetY - y) * easing;
  var weight = dist(x,y,px,py);
  strokeWeight(weight);
  line(x,y,px,py);
  py = y;
  px = x;
}
```
## Click

Además de la ubicación del ratón, p5.js también mantiene registro de si el botón del ratón ha sido presionado o no. La variable mouseIsPressed tiene un valor diferente cuando el botón del ratón está presionado. La variable mouseIsPressed es una variable boolean, lo que significa que solo tiene dos posibles valores: verdadero (true) o falso (falso). El valor de mouseIsPressed es verdadero cuando un botón es presionado.

## Ejemplo 5-10: haz click con el ratón

La variable mouseIsPressed es usada en conjunto con la declaración if para determinar si una línea de código será ejecutada o no. Prueba este ejemplo antes de sigamos explicado:

```
function setup() {
  createCanvas(240, 120);
  strokeWeight(30);
}

function draw() {
  background(204);
  stroke(102);
  line(40, 0, 70, height);
  if (mouseIsPressed == true) {
    stroke(0);
  }
  line(0,70,width,50);
}
```
En este programa, el código dentro del blocke if sólo corre cuando el botón del ratón es presionado. Cuando el botón no está presionado, el código es ignorado. Como el for loop discutido en "Repetition", el bloque if tiene una prueba (test) que es evaluada a verdadero (true) o falso (false).

```
if (test) {
  statements
}
```

Cuando el test es true, el código dentro del bloque es ejecutado y cuando es falso, no es ejecutado. El computador determina si el test es true o false al evaluar la expresión dentro del paréntesis. (Si quieres refrescar tu memoria, el ejemplo 4-6 discute en mayor detalle expresiones relacionales). El símbolo == compara los valores a la izquierda y la derecha para probar si son equivalentes o no. El símbolo == es diferente del operador de asignación, el símbolo unitario =. el símbolo == pregunta, "¿son estas cosas iguales?", mientras que el símbolo = define el valor de una variable

## Nota

Es un error común, incluso para programadores avanzados, escribir = en el código en vez de ==. p5.js no siempre te advertirá cuándo lo hagas, así que sé cuidadoso.

Alternativamente, la prueba en draw() puede ser escrita así:

```
if (mouseIsPressed) {
```

Las variables Boolean, incluyendo a mouseIsPressed, no necesitan la comparación explícita con el operador ==, porque su valor es solo o true o false.

## Ejemplo 5-11: detección de no clickeado

Un bloque if te da la oportunidad de correr una porción de código o de ignorarla. Puedes extender la funcionalidad del bloque if con el bloque else, permitiendo que tu programa escoja entre dos opciones. El código dentro del bloque else corre cuando el valor de la prueba del bloque if es false. Por ejemplo, el color de trazado de un programa puede ser negro cuando el botón del ratón no es presionado y puede cambiar a negro cuando sí es presionado:

```
function setup() {
  createCanvas(240, 120);
  strokeWeight(30);
}
function draw() {
  background(204);
  stroke(102);
  line(40, 0, 70, height);
  if (mouseIsPressed) {
    stroke(0);
  } else {
    stroke(255);
  }
  line(0, 70, width, 50);
}
```
## Ejemplo 5-12: Múltiples botones del ratón

p5.js también registra cuál botón del ratón es presionado si es que tienes más de uno en tu ratón. La variable mouseButton puede tener uno de estos tres valores: LEFT, CENTER o RIGHT. Para probar cuál de los botones es presionado, el operador == es necesario, como se muestra a continuación:

```
function setup() {
  createCanvas(120, 120);
  strokeWeight(30);
}

function draw() {
  background(204);
  stroke(102);
  line(40, 0, 70, height);
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      stroke(255);
    } else {
      stroke(0);
    }
    line(0,70,width,50);
  }
}
```

Un programa puede tener muchas más estructuras if y else (ver Figura 5-2) que las encontradas en estos ejemplos cortos. Pueden ser concatenadas en una larga serie con distintas pruebas, y los bloques if pueden estar anidados dentro de otros bloques if para hacer decisiones más complejas.

## Ubicación
