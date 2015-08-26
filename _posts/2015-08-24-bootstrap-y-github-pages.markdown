---
layout: post
title:  "¿Cómo poner Bootstrap en tu nuevo Blog de Github pages?"
date:   2015-08-24 13:16:20
categories: tutorial bootstrap github
---
¿Qué mejor manera de inaugurar el blog que con un pequeño tutorial? En este aprenderemos lo fácil
y sencillo que resulta incorporar un Framework (*Bootstrap*) a nuestro nuevo blog creado con Github Pages. Este primer tutorial es muy corto y sencillo, pero también es una buena manera de presentarnos.

Muy bien, comencemos con algo de teoría.

##¿Qué es Bootstrap?
Segun mi profesor de Desarrollo de Aplicaciones Web:

>"Bootstrap es la solución perfecta para, sin tener ni idea de diseño, dejarlo todo bonito."

Bootstrap es un Framework CSS desarrollado por Twitter que nos permite dar forma a una pagina web por medio de un conjunto de librerías. Estas librerías incluyen fuentes, botones, panels, inputs, etc. Además tiene una buena compatibilidad con el desarrollo responsivo.

Actualmente su desarrollo continua en un repositorio de Github.

[Pagina Oficial de Bootstrap][bs-page]

##Lo primero es situarnos
Tendremos que acceder al archivo *head.html* situado en la carpeta **_includes** de nuestro blog. Dentro de la etiqueta *<head>* colocaremos el CDN de Bootstrap. El CDN, simplificando, es el enlace con las librerías. Este lo podemos encontrar la pagina oficial [enlace][bs-gs] o a continuación:

{% highlight HTML %}
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
{% endhighlight %}

Con esto ya podremos utilizar cualquier componente de Bootstrap tanto en la estructura de nuestra página como dentro de los propios Posts.

##En "local"
Fácil ¿verdad? Pero y si nosotros tenemos descargadas estas librerías, ¿cómo las incluimos?

Dentro del mismo archivo *head.html* debemos añadirlo de la siguiente manera, donde **nombreCarpeta** es la carpeta donde tenéis situadas las librerías y **nombreArchivo** es el nombre de la librería.

{% highlight HTML %}
<link rel="stylesheet" href="{{ "/nombreCarpeta/nombreArchivo.css" | prepend: site.baseurl }}">

<!-- Ejemplo -->

<link rel="stylesheet" href="{{ "/css/bootstrap.min.css" | prepend: site.baseurl }}">

{% endhighlight %}

Conseguido! Ya tenemos Bootstrap funcionando en nuestro blog! Pero no solo Bootstrap, siguiendo los mismos pasos podemos añadir cualquier Framework!

Espero que os haya gustado este primer tutorial. Cualquier duda comentar!

[bs-gs]:   http://getbootstrap.com/getting-started/
[bs-page]:   http://getbootstrap.com/
