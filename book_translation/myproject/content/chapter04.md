# Capítulo 4. Variables

Una variable guarda un valor en memoria para que pueda ser usado posteriormente en un programa. Una variable puede ser usada muchas veces dentro del mismo programa, y el valor puede ser fácilmente modificado mientras el programa está corriendo.

## Primeras Variables

La razón principal por la que usamos variables es para evitar repetirnos en el código. Si estás escribiendo el mismo número una y otra vez, considera usar una variable para que tu código sea más general y más fácil de actualizar.

## Ejemplo 4-1: reusa los mismos valores

Por ejemplo, cuando haces variables la coordenada y y el diámetro para los tres círculos en este ejemplo, los mismos valores son usados para cada elipse:

## Ejemplo 4-2: cambiar los valores

Simplemente cambiar las variables y y d entonces altera las tres elipses:

Sin las variables, necesitarías cambiar la coordenada y usada en el código tres veces y la del diámetro seis veces. Cuando comparas los ejemplos 4-1 y 4-2, revisa cómo todas las líneas son iguales, excepto las dos primeras líneas con variables que son diferentes. Las variables te permiten separar las líneas de código que cambian de las que no cambian, lo que hace que los programas sean fáciles de modificar. Por ejemplo, si pones las variables que controlan colores y tamaños en un lugar, entonces puedes explorar diferentes opciones visuales enfocándote en sólo unas pocas líneas de código.

## Haciendo variables

Cuando haces tus propias variables, puedes determinar el nombre y el valor. Tú decides cómo se llama la variable. Escoge un nombre que sea informativo sobre lo que está almacenado en la variable, pero que sea consistente y no muy largo. Por ejemplo, el nombre de variable "radio" es mucho más claro que "r" cuando lo lees posteriormente en tu código.

Las variables primero deben ser declaradas, lo que reserva espacio en la memoria del computador para guardar la información. Cuando declaras una variable, usas la palabra var, para indicar que estás creando una nueva variable, seguida del nombre. Después de que el nombre es fijado, un valor puede ser asignado a la variable:

Este código hace lo mismo, pero es más corto:

Los caracteres var son incluidos en la línea de código que declara la variable, pero no son escritos de nuevo. Cada vez que var es escrito antes que el nombre de una variable, el computador piensa que estás tratando de declarara una nueva variable. No puedes tener dos variables con el mismo nombre en la misma sección del programa (Apéndice C), o el programa podría comportarse extrañamente:

 
