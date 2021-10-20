# BE.YOU
Proyecto para cifrar o descifrar textos.

## Índice
* [Introducción](#Introducción)
* [Tecnologías](#Tecnologías)
* [Funcionamiento](#Funcionamiento)
* [Beneficios](#Beneficios)
* [Diseño](#Diseño)
* [Descarga](#Descarga)


## Introducción
Be.you es una aplicación web diseñada para ayudar a cualquier tipo de usuario que busque una medida de seguridad práctica que le permita mantener la privacidad de textos digitales de caracter personal (tales como diarios personales, cuadernos de viaje, libreta de reflexiones, etc). 

El proyecto fue creado como parte de un ejercicio para desarrollar habilidades técnicas en el Bootcamp de una organización llamada Laboratoria, la cual busca impulsar a mujeres para que comiencen una carrera en el sector tecnológico y así reducir la brecha de género.


## Tecnologías
El proyecto fue creado haciendo uso, principalmente, de:
* HTML
* CSS
* JavaScript


## Funcionamiento
Be.you hace uso del código César, el cual es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

La aplicación cuanta con un cuadro de texto en el cual se debe indicar el dezplazamiento que el usuario prefiera o requiera. Puede tratarse de cualquier número entero tanto positivo como negativo.
Luego, se puede ingresar el texto que se quiera cifrar o descifrar en el recuadro ubicado a la izquierda, indicar con los botones en la parte superior la acción que se quiere realizar y el resultado de mostrará en el cuadro adyacente. También cuenta con opciones para borrar los textos o copiar rápidamente el texto resultante.


## Beneficios
* Automatiza el proceso de cifrado.
* Cuenta con la opción de descifrado con el que se puede ver el texto original para su lectura o revisión posterior.
* Facilita mantener la privacidad del contenido de los textos.
* Ayuda a evitar la autocensura para una buena práctica de la escritura de ideas, pensamientos, reflexiones, sueños, metas, anécdotas, experiencias, etc.



## Diseño



## Descarga
```
$ cd ../lorem
$ npm install
$ npm start
```