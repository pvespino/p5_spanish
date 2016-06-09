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
