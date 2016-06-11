# Capítulo 10. Objetos

La programación orientada a objetos (OOP) es una manera diferente de pensar sobre tus programas. Los objetos son también una manera de agrupar variables con funciones relacionadas. Como ya sabes cómo trabajar con variables y funciones, los objetos simplemente combinan lo que ya has aprendido en un paquete más fácil de entender.

Los objetos son importantes, porque permiten dividir las ideas en bloques más pequeños. Esto se parece al mundo real donde, por ejemplo, los órganos están hechos de tejido, el tejido está hecho de células y así. Similarmente, a medida que tu código se va volviendo más complejo, tienes que pensar en términos de estructuras más pequeñas que forman estructuras más complicadas. Es más fácil escribir y mantener pedazos de código más pequeños y fáciles de entender, que trabajan en conjunto con otros, que es escribir un gran trozo de código que hace todo al mismo tiempo.

## Propiedades y métodos

Un objeto es un conjunto de variables y funciones relacionadas. En el contexto de los objetos, una variable se llama propiedad (o variable de instancia) y una función es llamada método. Las propiedades y los métodos funcionan tal como las variables y las funciones vistas en los capítulos anteriores, pero usaremos estos nuevos términos para enfatizar que son parte de un objeto. Para decirlo de otra manera, un objeto combina datos relacionados (propiedades) con acciones y comportamientos relacionados (métodos). La idea es agrupar datos y métodos relacionados.

Por ejemplo, para hacer un modelo de una radio, piensa en los parámetros que pueden ser ajustados y las acciones que pueden afectar estos parámetros:

Propiedades

volume, frequency, band(FM, AM), power (on, off)

Métodos

setVolume, setFrequency, setBand

Modelar un dispostivo mecánico simple es fácil comparado a modelar un organismo como una hormiga o una persona. No es posible reducir un organismo complejo a unas pocas propiedades y métodos, pero es posible modelarlo suficientemente bien como para crear una simulación interesante. El video juego The Sims es un claro ejemplo. Este juego consiste en administrar las actividades diarias de personas simuladas. Los personajes tienen la suficiente personalidad como para hacer un juego adictivo, pero no más que eso. De hecho, ellos solo tienen cinco atributos de personalidad: ordenado, extrovertido, activo, juguetón y simpático. Con el conocimiento de que es posible hacer un modelo altamente simplificado de organismos complejos, podríamos empezar a programar una hormiga con unas pocas propiedades y métodos:

Propiedades:

tipo(trabajador, soldado), peso, ancho

Métodos:

caminar, picar, liberarFeromonas, comer

Si hicieras una lista de las propiedades y métodos de una hormiga, podrías escoger enfocarte en modelar diferentes aspectos de la hormiga. No existe una manera correcta de hacer un modelo, mientras lo hagas apropiado para el próposito de las metas de tu programa.

## Define un Constructor

Para crear un objeto, empieza por definir una función constructor. Una función constructor es la especificación de un objeto. Usando una analogía arquitectónica, una función constructor es como el plano de una casa, y un objeto es como la casa en sí misma. Cada casa construida con el mismo plano puede tener variaciones, y el plano es la única especificación, no una estructura fija. Por ejemplo, una casa puede ser azul y otra roja, una casa puede tener una chimenea y la otra no. Tal como los objetos, el constructor define los tipos de datos y comportamientos, pero cada objeto (casa) hecho de la misma función constructor (plano) tiene variables (color, chimenea) que tienen distintos valores. Para usar un término más técnico, cada objeto es una instancia y cada instancia tiene su propio conjunto de propiedades y métodos.

Antes de que escribas una función constructor, recomendamos un poco de planificación. Piensa en qué propiedades y métodos deberían tener tus objetos. Haz una lluvia de ideas para imaginar todas las opciones posibles y luego prioriza y haz tu mejor conjetura sobre qué funcionará. Harás cambios durante el proceso de programación, pero es importante tener un buen comienzo.

Para nuestra primera función constructor, convertiremos el Ejemplo 8-9 de antes en el libro. Empezamos por hacer una lista de propiedades del ejemplo:

```javascript
var x;
var y;
var diameter;
var speed;
```

El siguiente paso es resolver qué métodos pueden ser útiles para el objeto. Revisando la función draw() del ejemplo que estamos adaptando, vemos dos componentes primarios. La posición de la figura es actualizada y dibujada en la pantalla. Creemos dos métodos para nuestro objeto, uno para cada función:

```javascript
function move();
function display();
```

Ninguno de nuestros métodos retornan un valor. Una vez que hemos determinado las propiedades y métodos que el objeto debería tener, escribiremos nuestra función constructor para asignarlos a cada instancia del objeta que crearemos (Figura 10-1).

El código dentro la función constructor es corrido una vez cuando el objeto es creado. Para crear la función constructor, seguiremos tres pasos:

1. Crear un bloque de función.

2. Añadir las propiedades y asignarles valores.

3. Añadir los métodos.

Primero, creamos un bloque de función para nuestro constructor:

```javascript
function JitterBug() {

}
```

Observa que el nombre JitterBug empieza con mayúscula. Nombrar la función constructor con letra mayúscula no es requerida, pero es una convención (que recomendamos fuertemente) usada para denotar que es un constructor. (La palabra clave function, sin embargo, debe ser minúscula porque es una regla del lenguaje de programación).

Segundo, añadimos las propiedades. Javascript tiene una palabra reservada especial, this, que puedes usar dentro la función constructor para referirse al objeto actual. Cuando declaras una propiedad de un objeto, dejamos fuera el símbolo var, y en vez de eso anteponemos el nombre de la variable con this. para indicar que estamos asignando una propiedad, una variable del objeto. Podemos declarar y asignar la propiedad speed de la siguiente manera:

```javascript
function JitterBug() {
  this.speed = 0.5;
}
```

Mientras estamos haciendo esto, tenemos que decidir qué propiedades tendrán sus valores pasados a través del constructor. Como regla general, los valores de las propiedades que quieran ser diferentes para cada instancia son pasados a través del constructor, y los otros valores de propiedades pueden ser definidos dentro del constructor, como lo es speed en este caso. Para el objeto JitterBug, hemos decidido que los valores de x, y y diámetro serán pasados. Cada uno de los valores pasados es asignado a una variable temporal que existe solo mientras el código es ejecutado. Para clarificar esto, hemos añadido el nombre temp a cada una de estas variables, pero pueden ser nombradas con cualquier nombre que prefieras. Serán usadas solo para asignar los valores de las propiedades que son parte del objeto. Así que añadimos tempX, tempY y tempDiameter como parámetros para la función, y las propiedades son declaradas y asignadas así:

```javascript
function JitterBug(tempX, tempY, tempDiameter) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 0.5;   // El mismo valor para cada instancia
}
```

El último paso es añadir los métodos. Esto es justo como escribir funciones, pero aquí están contenidas dentro de la función constructor, y la primera línea es escrita un poco diferente. Normalmente, una función para actualizar variables puede ser escrita así:

```javascript
function move() {
  x += random(-speed, speed);
  y += random(-speed, speed);
}
```

Como queremos hacer esta función un método del objeto, nuevamente necesitamos usar la palabra reservada this. La función anterior puede ser convertida en un método así:

```javascript
this. move = function() {
  this.x += random(-this.speed, this.speed);
  this.y += random(-this.speed, this.speed);
};
```

La primera línea se ve un poco extraña, pero la manera de interpretarla es "crear una variable de instancia (propiedad) llamada move, y luego le asigna como su valor esta función". Luego, cada vez que nos referimos a las propiedades del objeto, podemos nuevamente usar this., tal como lo hacemos cuando están inicialmente declaradas. Juntando todo en el constructor el resultado es este:

```javascript
function JitterBug(tempX, tempY, tempDiameter) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 2.5;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}
```

También observa el espaciado en el código. Cada línea dentro del constructor está indentada unos pocos espacios para mostrar lo que está dentro del bloque. Dentro de estos métodos, el código está espaciado nuevamente para mostrar claramente la jerarquía.

## Crea objetos

Ahora que has definido una función constructor, para usarla en un programa debes crear un instancia de objeto con ese constructor. Hay dos pasos para crear un objeto:

1. Declara la variable objeto.

2. Crea (inicializa) el objeto con la palabra clave new.

## Ejemplo 10-1: haz un objeto

Para hacer tu primer objeto, empezaremos mostrando cómo esto funciona dentro un bosquejo de p5.js y luego continuaremos explicando cada parte en profundidad:

```javascript
var bug;

function setup() {
  createCanvas(480, 120);
  background(204);
  // Crea un objeto y pasa los parámetros
  bug = new JitterBug(width/2, height/2, 20);
}

function draw() {
  bug.move();
  bug.display();
}

// Copia aquí el código del constructor de Jitterbug
```

Declaramos variables de objeto en la misma manera que todas las otras variables - el objeto es declarado escribiendo la palabra reservada var seguida del nombre de la variable:

 ```javascript
 var bug;
 ```

 El segundo paso es inicializar el objeto con la palabra reservada new. Hace espacio en la memoria para el objeto con todas sus propiedades y métodos. El nombre del constructor es escrito a la derecha de la palabra reservada new, seguido de los parámetros dentro del constructor, si es que tiene alguno:

 ```javascript
 bug = new JitterBug(width/2, height/2, 20);
 ```

 Los tres números dentro de los paréntesis son los parámetros pasados dentro de la función constructor JitterBug. El número y orden de estos parámetros deben corresponder con los del constructor.

## Ejemplo 10-2: haz múltiples objetos

En el Ejemplo 10-1, vimos algo nuevo: el punto que es usado para acceder a los métodos del objeto dentro de draw(). El operador punto es usado para unir el nombre del objeto con sus propiedades y métodos. Es análogo a la manera en que usamos this. dentro de la función constructor, pero cuando nos referimos a esto fuera del constructor, this es reemplazado por el nombre de la variable.

Esto se torna más claro en este ejemplo, donde dos objetos son hechos con el mismo constructor. La función jit.move() se refiere al método move() que pertenece al objeto nombrado jit, y bug.move() se refiere al método move() y pertenece al objeto llamado bug:

```javascript
var jit;
var bug;

function setup() {
  createCanvas(480, 120);
  background(204);
  jit = new JitterBug(width * 0.33, height/2, 50);
  bug = new JitterBug(width * 0.55, height/2, 10);
}

function draw() {
  jit.move();
  jit.display();
  bug.move();
  bug.display();
}

// Copia aquí el código del constructor de JitterBug
```

Ahora que la función constructor existe como su propio módulo de código, cualquier cambio modificará los objetos hechos con élla. Por ejemplo, podrías añadir una propiedad al constructor JitterBug que controla el color, u otra que determina su tamaño. Estos valores pueden ser pasados usados el constructor o usando métodos adicionales, como setColor() o setSize(). Y como es una unidad auto-contenida, también puedes usar el constructor JitterBug en otro bosquejo.

Ahora es un buen momento para aprender sobre usar múltiples archivos en Javascript. Esparcir tu código en más de un archivo hace que el código más largo sea más fácil de editar y más manejable en general. Un nuevo archivo es usualmente creado para cada constructor, lo que refuerza la modularidad de trabajar con objetos y hacer el código más fácil de encontrar.

Crea un nuevo archivo en el mismo directorio que tu actual archivo sketch.js. Puedes nombrarlo como quieras, pero es una buena idea nombrarlo JitterBug.sjs por conceptos de organización. Mueve la función constructor JitterBug a este nuevo archivo. Enlaza el archivo JitterBug.js en tu archivo HTML añadiendo una líena dentro de HEAD bajo la línea donde enlazas el archivo sketch.js:

```html
<script type="text/javascript" src="sketch.js"></script>
<script type="text/javascript" src="JitterBug.js"></script>
```

## Robot 8: objetos

Un objeto en software puede combinar métodos (funciones) y propiedades (variables) en una unidad. La función constructor Robot en este ejemplo define todos los objetos robot que serán creados desde él. Cada objeto Robot tiene su propio conjunto de propiedades para almacenar una posicón y la ilustración que dibujará en la pantalla. Cada uno tiene métodos para actualizar la posición y mostrar la ilustración.

Los parámetros para bot1 y bot2 en setup() definen las coordenadas x e y y el archivo .svg que será usado para dibujar el robot. Los parámetros tempX y tempY son pasados al constructor y asignados a las propiedades xpos y ypos. El parámetro imgPath es usado para cargar la ilustración relacionada. Los objetos (bot1 y bot2) dibujan en su propia ubicación con una ilustración difrente porque cada uno tienen valores distintos pasados a los objetos a través de sus constructores:

```javascript
var img1;
var img2;

var bot1;
var bot2;

function preload() {
  img1 = loadImage("robot1.svg");
  img2 = loadImage("robot2.svg");
}

function setup() {
  createCanvas(720, 480);
  bot1 = new Robot(img1,  90, 80);
  bot2 = new Robot(img2, 440, 30);
}

function draw() {
  background(204);

  // Actualiza y muestra el primer robot
  bot1.update();
  bot2.display();

  // Actualiza y muestra el segundo robot
  bot2.update();
  bot2.display();
}

function Robot(img, tempX, tempY) {
  // Define los valores iniciales para las propiedades
  this.xpos = tempX;
  this.ypos = tempY;
  this.angle = random(0, TWO_PI);
  this.botImage = img;
  this.yoffset = 0.0;

  // Actualiza las propiedades
  this.update = function() {
    this.angle += 0.05;
    this.yoffset = sin(this.angle) * 20;
  }

  // Dibuja el robot en la pantallla
  this.display = function() {
    image(this.botImage, this.xpos, this.ypos + this.yoffset);
  }
}
```