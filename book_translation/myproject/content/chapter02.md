# Capítulo 2. Empezando a programar

Para sacar el máximo provecho de este libro, no basta con solo leerlo. Necesitas experimentar y practica. No puedes aprender a programar solamente leyendo - debes hacerlo. Para empezar, descarga p5.js y haz tu primer bosquejo.

## Ambiente

Primero, necesitarás un editor de código. Un editor de código es similar a un editor de texto (como Bloc de notas), excepto que tiene una funcionalidad especial para editar código en vez de texto plano. Puedes usar cualquier editor que quieras, te recomendamos Atom y Brackets, ambos disponibles para descarga.
También existe un editor oficial de p5.js en desarrollo. Si lo quieres usar, lo puedes descargar visitando http://p5js.org/download y seleccionando el botón que dice "Editor". Si estás usando el editor de p5.js, puedes saltar a la sección "Tu primer programa".

## Descarga y configuración de archivos

Empieza por visitar http://p5js.org/download y selecciona "p5.js complete". Tras la descarga, haz doble click en el archivo .zip y arrastra el directorio a alguna ubicación en tu disco duro. Puede ser Archivos de programa o Documentos o simplemente tu Escritorio, pero lo importante es que el directorio p5 sea extraído de este archivo .zip.
El directorio p5 contiene un proyecto de ejemplo con el que puedes empezar a trabajar. Abre tu editor de código. Luego abre el directorio llamado "empty-example" en tu editor de código. En la mayoría de los editores de código, puedes hacer esto seleccionando en el menú Archivo la opción Abrir, y luego seleccionando "empty-example". ¡Ahora estás listo para empezar tu primer programa!

## Tu primer programa

Cuando abras el directorio "empty-example", lo más probable es que veas una barra lateral con el nombre del directorio en la parte superior y una lista con los archivos contenidos en este directorio. Si haces click en alguno de estos archivos, verás los contenidos del archivo aparecer en el área principal.

Un bosquejo en p5.js está compuesto de unos cuántos lenguajes distintos usados en conjunto. HTML (HyperText Markup language) brinda la columna vertebral, enlazando todos los otros elementos en la página. Javascript (y la librería p5.js) te permiten crear gráficas interactivas que puedes mostrar en tu página HTML. A veces CSS (Cascading Style Sheets) es usado para definir elementos de estilo en la página HTML, pero no cubriremos esta materia en este libro.

Si revisas el archivo index.html, te darás cuenta que contiene un poco de código HTML. Este archivo brinda la estructura a tu projecto, uniendo la librería p5.js y otro archivo llamado sketch.js, donde tú escribiras tu propio programa. El código que crea estos enlaces tiene esta apariencia:

```html
<script language="javascript" type="text/javascript"
src="../p5.js"></script>
<script language="javascript" type="text/javascript"
src="sketch.js"></script>
```

No necesitas hacer nada en el código HTML en este momento - ya está configurado para ti. Luego, haz click en sketch.js y revisa el código:

```javascript
function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
}
```

El código plantilla contiene dos bloques, o funciones, setup() y draw(). Puedes poner tu código en cualquiera de los dos lugares, y cada uno tiene un propósito específico.

Cualquier código que esté involucrado en la definición del estado incial de tu programa corresponde al bloque setup(). Por ahora, lo dejaremos vacío, pero más adelante en el libro, añadirás código aquí para especificar el tamaño de tu lienzo para tus gráficas, el peso de tu trazado o la velocidad de tu programa.

Cualquier código involucrado en realmente dibujar contenido a la pantalla (definir el color de fondo, dibujar figuras, texto o imágenes) será colocado en el bloque draw(). Es aquí donde empezarás a escribir tus primeras líneas de código.

## Ejemplo 2-1: dibuja una elipse

Entre las llaves del bloque draw(), borra el texto //put drawing code here y reemplázalo con el siguiente:

background(204;
ellipse(50, 50, 80, 80);

Tu programa entero deberá verse así:

Esta nueva línea de código significa "dibuja una elipse, con su centro 50 pixeles a la derecha desde el extremo izquierdo y 50 pixeles hacia abajo desde el extremo superior, con una altura y un ancho de 80 pixeles". Graba el código presionando Command-S, o desde el menú con File-Save.

Para ver el código corriendo, puedes abrir index.html en cualquier navegador web (como Chrome, Firefox o Safari). Navega al directorio "empty-example" en tu explorador de archivos y haz doble click en index.html para abrirlo. Otra alternativa es desde el navegador web, escoger Archivo-Abrir y seleccionar el archivo index.html.

Si has escrito todo correctamente, deberías ver un círculo en tu navegador. Si no lo ves, asegúrate de haber copiado correctamente el código de ejemplo. Los números tienen que estar entre paréntesis y tener comas entre ellos. La línea debe terminar con un punto coma.

Una de las cosas más difíciles sobre empezar a programar es que tienes que ser muy específico con la sintaxis. El software p5.js no es siempre suficientemente inteligente como para entender lo que quieres decir, y puede ser muy exigente con la puntuación. Te acostumbrarás a esto con un poco de práctica.

A continuación, avanzaremos para hacer esto un poco más emocionante.

## Ejemplo 2-2: hacer círculos

Borra el texto del ejemplo anterior, y prueba este. Graba tu código, y refresca (Command-R) index.html en tu navegador para verlo actualizado.

Este programa crea un lienzo para gráficas que tiene un ancho 480 pixeles y una altura de 120 pixeles, y luego empieza a dibujar círculos blancos en la posición de tu ratón. Cuando presionas un botón del ratón, el color del círculo cambia a negro. Explicaremos después y en detalle más de los elementos de este programa. Por ahora, corre el código, mueve el ratón y haz click para experimentarlo.

## La consola

El navegador web tiene incluida una consola que puede ser muy útil para depurar programas. Cada navegador tiene una manera diferente de abrir la consola. Aquí están las instrucciones sobre cómo hacerlo con los navegadores más típicos:

Para abrir la consola en Chrome, desde el menú superior escoge View-Developer-Javascript Console

Con Firefox, desde el menú superior escoge Tools-Web-Developer-Web Console.

Usando Safari, necesitarás habilitar la funcionalidad antes de que puedas usarla. Desde el menú superior, selecciona Preferencias y luego haz click en la pestaña Avanzado y activa la casilla "Show develop menu in menu bar". Tras hacer esto, serás capaz de seleccionar Develop-Show Error Console.

En Internet Explorer, abre F12 Developer Tools, luego selecciona Console Tool.

Deberías ahora ver un recuadro en la parte inferior o lateral de tu pantalla. Si hay un error de digitación, aparecerá texto rojo explicando qué error es. Este texto puede a veces ser críptico, pero si revisas al lado derecho de la línea, estará el nombre del archivo y el número de la línea de código donde fue detectado el error. Ese es un lugar adecuado donde empezar a buscar errores en tu programa.

## Creando un nuevo proyecto

Haz creado un bosquejo desde un ejemplo vacío, ¿pero cómo creas un nuevo proyecto? La manera más fácil de hacerlo es ubicando el directorio "empty-example" en tu explorador de archivos y luego copiar y pegarlo para crear un segundo "empty-example". Puedes renombrar la carpeta a lo que quieras - por ejemplo, Proyecto 2.

Ahora puedes abrir este directorio en tu editor de código y empezar a hacer un nuevo bosquejo. Cuando quieras verlo en el navegador, abre el archivo index.html dentro de tu nuevo directorio Proyecto 2.

Siemrpe es una buena idea grabar tus bosquejos frecuentemente. Mientras estás probando cosas nuevas, graba tu bosquejo con diferentes nombres (Archivo-Guardar como), para que así siempre seas capaz de volver a versiones anteriores. Esto es especialmente útil si - o cuando - algo se rompe.

Nota

Un error común es estar editando un proyecto pero estar viendo otro en el navegador web, haciendo que no puedas ver los cambios que has hecho. Si te das cuenta que tu programa se ve igual a pesar de haber hecho cambios a tu código, revisa que estás viendo el archivo index.html correcto.

## Ejemplos y referencia

Aprender cómo programar con p5.js involucra explorar mucho código: correr, alterar, romper y mejorarlo hasta que lo hayas reformulado en algo nuevo. Con esto en mente, el sitio web de p5.js tiene docenas de ejemplos que demuestran diferentes características de la librería. Visita la pagína de Ejemplos para verlos. Puedes jugar con ellos editanto el código en la página y luego haciendo click en "Run". Los ejemplos están agrupados en distintas categorías según su función, como Forma, color, e imagen. Encuentra un tema que te interese en la lista y prueba un ejemplo.

Si ves una parte del programa con la que no estás familiarizado o sobre la que quieres aprender su funcionalidad, visita la referencia de p5.js.

La referencia de p5.js explica cada elemento de código con una descripción y ejemplos. Los programas en la Referencia son mucho más cortos (usualmente cuatro o cinco líneas) y más fáciles de seguir que los ejemplos de la página Learn. Ten en cuenta que estos ejemplos usualmente omiten setup() y draw() por simplicidad, pero estas líneas de código que ves deberán ser puestas dentro de uno de estos bloques para poder se ejecutadas. Recomendamos mantener la página de Referencia abierta mientras estás leyendo este libro y mientras estás programando. Puede ser navegada por tema o usando la barra de búsqueda en la parte superior de la página.

La Referencia fue escrita con el principiante en mente, esperamos que sea clara y entendible. Estamos muy agradecidos de las personas que han visto errores y los han señalado. Si crees que puedes mejorar una entrada en al referencia o que has encontrado algún error, por favor haznos saber esto haciendo click en el link en la parte inferior de la página de referencia.
