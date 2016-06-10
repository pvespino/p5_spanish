# Capítulo 8. Movimiento

05.js es capaz de dibujar más que simplemente líneas y figuras. Es tiempo de aprender cómo crear imágenes y texto en nuestros programas para extener las posibilidades visuales a fotografía, diagramas detallados y diversas tipografías.

## Nota

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
