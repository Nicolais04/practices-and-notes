/* CSS
CSS (Cascading Style Sheets) (hojas de estilo en cascada) no es un lenguaje de programacion
y no es un lenguaje de marcado, es un lenguaje de hojas de estilo que permite darle estilo
a la pagina como la seleccion del color de texto, en que parte de la pantalla se mostrara
que cosa. CSS permite aplicar estilo de manera selectiva en documentos html.
EJEMPLO: vamos a aplicar la regla.: p{
color: red;
}
esto va a generar el cambio de color en el parrafo.
La propiedad mas el valor tienen por nombre declaracion

ANATOMIA DE UNA REGLA CSS.
P: se llama selector. Es el que selecciona los elementos de html en el cual va a dar el
estilo. en el caso del ejemplo de arriba va a dar el estilo a los p-parrafos.
Para dar estilo a otros elementos solo cambia el selector.

PROPIEDADES: Maneras en las cuales puedes dar estilo a un elemento HTML. (En este caso,
"color" es una propiedad del elemento <p> ). En CSS, seleccionas qué propiedad quieres
afectar en tu regla, como el color, la estructura etc.

DECLARACION: Una sola regla como color: red; especifica a cuál de las propiedades del
elemento quieres dar estilo
NOTA: color: red es la declaracion.
EJEMPLO: Si quieres dar estilo al color o a otra cosa que afecta el estilo, como al ancho
de una imagen, agregar un marco etc.

VALOR DE LA PROPIEDAD: A la derecha de la propiedad, después de los dos puntos (:), tienes 
el valor de la propiedad, para elegir una de las muchas posibles apariencias para una 
propiedad determinada (hay muchos valores para color además de red).

La estructura completa es llamada regla

Cada una de las reglas (aparte del selector) deben estar encapsuladas entre llaves ({})

Dentro de cada declaración, debes usar los dos puntos (:) para separar la propiedad de 
su valor

Dentro de cada regla, debes usar el punto y coma (;) para separar una declaración de la 
siguiente.
Si una propiedad tiene dos nombres no estaran divididas por un espacio sino por un guion (-)

SELECCIONAR VARIOS ELEMENTOS:
También puedes seleccionar varios elementos y aplicar una sola regla a todos ellos. 
Incluye varios selectores separados por comas (,).
EJEMPLO: p,
li,
h1 {
  color: red;
}

CAMBIO DE FUENTE: Se hace añadiendo la url https://fonts.googleapis.com/css?family="nombre
de la fuente" si la fuente tiene varias palabras se dividen por un +.
<link href="https://fonts.googleapis.com/css2?family=Open+Sans" rel="stylesheet" 
type="text/css"/>
Despues se cita el selector de html ya que esto hará que se aplique a toda la pagina.
EJEMPLO:
html{
    font-size: 10px;
    font-family: "open sans", sans-serif;
}

No es de extrañar que el diseño de CSS esté basado principalmente en el modelo de caja. 
Cada una de las cajas que ocupa espacio en tu página tiene propiedades como estas:

-------PROPIEDADES:------

padding (relleno), el espacio alrededor del contenido. En el ejemplo siguiente, es el 
espacio alrededor del texto del párrafo.
Lo que hace es ampliar lo que seria el borde del color que le pusimos al cuerpo.
osea simplemente aumentar el relleno dando mas espacio entre el texto y el borde.
PADDING: 0 20px 20px 20px; 
Los valores se ponen: arriba, derecha, abajo e izquierda, en ese orden. 

border (marco), la línea que se encuentra fuera del relleno.
Simplemente agrega un marco al relleno.

margin (margen), el espacio fuera del elemento que lo separa de los demás.
Basicamente lo que hace es darle ubicacion al el width que es el que contiene todo el texto.
Le da ubicacion al ancho del contenido encerrado. los valores del margin no hacen nada si
no hay un ancho (width)
margin:0 auto;
el primer valor afectará los lados superior (top) e inferior (bottom) (en este caso 
haciéndolo en 0), y el segundo valor los lados izquierdo (left) y derecho (right) (aquí, 
auto es un valor especial (auto) que divide el espacio disponible entre derecha e izquierda).

width (ancho del elemento)
Es el ancho en donde va encerrado el contenido dado en px (pixeles)

font-size: 10px; ajusta en pixeles el tamaño de la fuente/texto.

font-family: "open sans", sans-serif; Selecciona el tipo de fuente.

background-color, el color de fondo del contenido y del relleno

color, el color del contenido del elemento (generalmente texto)

text-shadow: coloca una sombra difuminada en el texto dentro del elemento

display: selecciona el modo de visualización para el elemento (no te preocupes de esto por 
ahora)

text-align: center; ajusta el alineado del texto.

line-height: 2; ajusta el espacio entre textos.
letter-spacing: 1px; ajusta el espacio entre letras.

display:block; se usa con una imagen para permitir que use el level-block y se le pueda
dar una margen como para poderla centrar por ejemplo.


*/