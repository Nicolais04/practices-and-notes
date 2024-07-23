/*          HTML
HTML no es un lenguaje de programacion, es un codigo que se utiliza para estructurar
el contenido de una pagina web. Es un lenguaje de marcado que define la estructura de una
pagina web.

Etiquetas de encierre: pueden volver una imagen o una palabra un hipervinculo, cambiar 
letra agrandarla etc.
<p>  etiqueta de apertura. La P se utiliza para especificar que es un parrafo.
</P>  etiqueta de cierre
CONTENIDO: va en medio de las etiquetas.
EJEMPLO: <p>mi gato es muy gruñon</p>

ELEMENTOS: Las etiquetas mas el contenido crean un elemento.

// ATRIBUTOS: son informacion adicional que no quiere que se vea en el contenido real
// del documento. tambien se usa para asignarle un nombre y un valor para despues agregarle
al elemento informacion de estilo etc.
Se debe agregar el atributo dentro de la primera etiqueta.
EJEMPLO: <p class="xxx">
<p class="editor-note">mi gato es un gruñon</p>

// ANIDAMIENTO: SE SE LLAMA AL ACTO DE AÑADIR UN ELEMENTO DENTRO DE OTRO.
// si queremos enfatizar una palabra de un texto, podemos añadir un elemento
// creado con la etiqueta <strong> </strong>.
// EJEMPLO: <p>mi gato es <strong>muy</strong> gruñon</p>

//ELEMENTOS VACIOS: son los que no tienen etiqueta de cierre.
EJEMPLO: <img src="" alt=""/>
Posee dos atributos, pero no hay etiqueta de cierre </img> ni contenido encerrado.

//ENCABEZADOS: Al igual que un libro tiene su titulo y subtitulos tambien se le puede
//asignar a la pagina. Se tienen varios niveles para esto, 6 en total que posee HTML. se usa
//las etiquetas <hx></hx> enumeradas respectivamente.
//EJEMPLO: <H1>primer encabezado</h1> -- <h2>segundo encabezado</h2> etc.

//PARRAFOS: Se usa para el marcado de contenido de texto regular. se usan las etiquetas <p>

//LISTAS: Los dos tipos de listas mas comunes son las ordenadas y las desordenadas.
//El marcado de listas siempre se realiza en al menos dos elementos.
//DESORDENADAS: Son aquellas en la que el orden no es relevante. se encierra por el 
//elemento <ul> (unordered list)
//ORDENADAS: Son aquellas en las que el orden si es relevante. se encierra en las etiquetas
//<ol> (ordered list)
//Cada elemento de la lista se encierra por la etiqueta <li> (list item)
//EJEMPLO: <p>En Mozilla, somos una comunidad de</p>
/* <ul>
  <li>tecnólogos</li>
  <li>pensadores</li>
  <li>constructores</li>
</ul>

<p>trabajando juntos...</p> 

VINCULOS: se usan para agregar direcciones de otras paginas.
para implementar un vinculo se usa la etiqueta <a></a> que es la abreviatura de la palabra
inglesa (anchor) (ancla) se le proporciona al elemento <a> el atributo href (hypertext 
reference) (referencia de hipertexto) y por valor
se le va a agregar la direccion web al que queremos que redirija.
EJEMPLO: <a href="https://youtube.com">un vinculo x </a>

*/