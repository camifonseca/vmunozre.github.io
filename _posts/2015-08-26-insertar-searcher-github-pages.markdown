---
layout: post
title:  "Añadir un buscador en nuestro Blog de Github pages"
date:   2015-08-26 17:22:20
categories: tutorial search github
permalink: searcher-github-pages
---

Hoy aprenderemos algo muy práctico, como añadirle un buscador a nuestro blog de Github pages de una manera muy simple. Para ello utilizaremos un plugin de jekyll. Pero no solo tenemos ante nosotros un pequeño buscador, tenemos una herramienta muy potente y, como veremos más adelante, con un amplio grado de personalización.

### Lo primero es lo primero

El plugin que usaremos se llama Simple-Jekyll-Search y podéis encontrar la fuente oficial en el siguiente [enlace][SJS]. Pero en este tutorial se explicará paso a paso como instalarlo.

##Comenzamos.
En la raíz de nuestro blog crearemos un archivo con el nombre de **search.json**. En el se incluirán asignaciones de búsqueda mediante el siguiente código:

{% highlight json %}
---
layout: none
---
[
  {% for post in site.posts %}
    {
      "title"    : "{{ post.title | escape }}",
      "category" : "{{ post.category }}",
      "tags"     : "{{ post.tags | array_to_sentence_string }}",
      "url"      : "{{ site.baseurl }}{{ post.url }}",
      "date"     : "{{ post.date }}"
    } {% unless forloop.last %},{% endunless %}
  {% endfor %}
]
{% endhighlight %}

Si nuestros post tienen algún argumento añadido, y queremos que nuestro buscador filtre por ese argumento, deberíamos introducirlo en este documento de la misma manera que, por ejemplo, están incluidas las caregorias *""category" : "{{ post.category }}","*.

Ahora crearemos otro archivo, en la carpeta que queramos, con el nombre **jekyll-search.js**, pero no os asustéis, no vamos a pelearnos con JavaScript hoy. En el interior de este archivo pegaremos el siguiente código [aqui][jese] (haciendo clic derecho, guardar enlace como, podemos guardarlo directamente. Si no, copiar su contenido en vuestro *jekyll-search.js*).
Como último paso en este apartado debemos recordar incluir este nuevo archivo en el **head.html** de nuestro blog, ejemplo:
{% highlight HTML %}
<script type="text/javascript" src="{{ "/js/jekyll-search.js" | prepend: site.baseurl }}"></script>
{% endhighlight %}

##Añadiendo buscador
Nuestro pequeño motor de búsqueda funciona de la siguiente manera, coge el contenido escrito dentro de un *input* con id **search-input** y lo vuelca en una lista con el id **results-container**. Como orientación aquí tenéis un ejemplo:
{% highlight HTML %}
<div>
  <input id="search-input" type="text" placeholder="Search...">
  <ul id="results-container"></ul>
</div>
{% endhighlight %}

De esta manera nosotros controlamos donde se introduce la búsqueda y donde se vuelcan los resultados.

##Ya queda nada!
Para terminar añadiremos el siguiente script a nuestro **footer.html**:
{% highlight HTML %}
<script type="text/javascript">
    SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: 'search.json',
      searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
      noResultsText: 'No se han encontrado resultados.',
      limit: 10,
      fuzzy: false,
      exclude: ['Welcome']
    })
</script>
{% endhighlight %}

Modificando este script podemos cambiar las ids del paso anterior. Aquí también se especifica como se van a mostrar los resultados, en el apartado **searchResultTemplate**, personalizarlo o no queda a nuestra elección.

##Conseguido!
Ya tenemos nuestro buscador funcionando! Ahora solo queda saber donde ponerlo y dejarlo todo bonito.

Espero que os haya ayudado este tutorial y para cualquier duda poner un comentario.



[SJS]:   http://www.jekyll-plugins.com/plugins/simple-jekyll-search/
[jese]:   https://github.com/vmunozre/vmunozre.github.io/blob/master/dist/jekyll-search.js
