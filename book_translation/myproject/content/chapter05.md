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
  fill(0, 102);
  noStroke();
}

function draw() {
  background(204);
  ellipse(mouseX, mouseY, 9, 9);
}
```
