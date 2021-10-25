# Mósy's Lamp
Proyecto para cifrar o descifrar textos.

### Estado del proyecto
En desarrollo.

## Índice
* [Introducción](#Introducción)
* [Tecnologías](#Tecnologías)
* [Funcionamiento](#Funcionamiento)
* [Diseño](#Diseño)
* [Descarga](#Descarga)


## Introducción
Mósy's Lamp es una aplicación web diseñada para personas que cuenten con un diario personal digital y buscan asegurar su privacidad.

La medida de seguridad extra y práctica que brinda Mósys's Lamp está hecha con el objetivo de que pueda ser completamente sincero al escribir en su diario y así ayudarlos a disfrutar de los beneficios de escribir con libertad sobre los pensamientos o sentimientos propios, sin temor a que alguien más pueda invadir su privacidad al acceder a los textos escritos.

El proyecto fue creado como parte de un ejercicio para desarrollar habilidades técnicas de el Bootcamp de una organización llamada Laboratoria, la cual busca impulsar a mujeres para que comiencen una carrera en el sector tecnológico y así reducir la brecha de género.


## Tecnologías
El proyecto fue creado haciendo uso, principalmente, de:
* HTML
* CSS
* JavaScript
* Git y Git Bash
* Node.js
* EsLint
* Jest


## Funcionamiento
Mósy's Lamp hace uso del código César, un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

La aplicación cuanta con un bloque en el cual el usuario puede indicar el dezplazamiento que prefiera o requiera.
Puede tratarse de cualquier número entero tanto positivo como negativo.
El siguiente paso es ingresar el texto que se quiera cifrar o descifrar en el primer recuadro ubicado a la izquierda. Al escribir, el texto se convertirá automáticamnete a mayúsculas. Con los botones en la parte inferior se indica la acción que se quiere realizar (cifrar o descifrar) y el resultado de mostrará en el cuadro adyacente. También cuenta con opciones para borrar los textos o intercambiarlos.

Importante: Mósy's Lamp actualmente sólo cifra y descrifra textos en mayúculas y no incluye signos de puntuación, caracteres especiales o números.



## Diseño

### Nombre
Mósy's Lamp traduce al español 'La Lámpara de Mósy', que hace referencia a la obra de Dante Gabril Rosseti llamada 'Lamp of Memory', también conocida como 'Mnemósine' o 'Recordanza'. 
Menmósine es la diosa griega que en la mitología representaba a la memoria, más no se refiere sólo a la capacidad de recordar eventos pasados importantes, sino también al razonamiento y análisis del hecho para así prever y anticipar situaciones.


### Colores
Basandose en la psicología del color en diseño, para la aplicación web se consideró:
* Inspirar sobre todo confianza, seguridad y empatía para que puedan escribir sin limitaciones ni temor, para lo cual se usó el color azul oscuro y el celeste.
* También se usó un anaranjado amarillento para transmitir optimismo, calidez y apertura pensando en situaciones en las que lo que tenga o quiera escribir el usuario sea sobre vivencias complicadas.


![Prueba de colores](https://github.com/andreahenos/Cesar-Cipher/blob/main/Pictures/Colores.png)


### Prototipados
![Primer prototipo](https://github.com/andreahenos/Cesar-Cipher/blob/main/Pictures/Prototipo%201.png)
![Segundo prototipo](https://github.com/andreahenos/Cesar-Cipher/blob/main/Pictures/Prototipo%202.png)
![Tercer prototipo](https://github.com/andreahenos/Cesar-Cipher/blob/main/Pictures/Prototipo%203.png)



## Descarga
* Hacer click en el botón FORK para crear una copia del repositorio y copiar el enlace HTTPS que aparece en el botón CODE.
* Crear una carpeta nueva en su escritorio.
En Git Bash:
* Ubicar la carpeta en el directorio (Puede usar pwd, ls, ll y cd).
* Escribir 'git clone' seguido de el enlace HTTPS que copió.
* Luego, para instalar las dependencias ingrese el comando 'npm install'.
* Si quiere ejecutar los test, escribir el comando 'npm run test'.
* Usar 'npm run start' para ejecutar el archivo del servidor.
