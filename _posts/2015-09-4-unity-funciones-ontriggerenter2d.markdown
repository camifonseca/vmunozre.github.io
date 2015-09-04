---
layout: post
title:  "Unity2D: Detectar colisiones entre cuerpos con OnTriggerEnter2D"
date:   2015-09-04 15:00:20
categories: tutorial unity script
permalink: unity-colisiones-ontriggerenter2d
---
[OnTriggerEnter2D][onturl] es una función propia de unity que nos envía un evento cada vez que dos **Colliders2D**, que contengan en sus scripts esta función, colisionen entre ellos. Estos eventos se pueden manejar a nuestro antojo, y en este tutorial veremos como hacerlo.

##Tags everywhere

Para poder manejar bien el evento resultante de la colisión de dos objetos debemos asignarles **etiquetas** o *Tags* a cada uno de ellos. Es una buena practica tener bien organizados nuestros objetos con sus correspondientes identificadores (**[Tags][tagurl]**).

Y bien, ¿dónde están los tags? Se encuentran en la parte superior del inspector, en la **Figura 1.1** podemos ver su localización exacta. Podemos añadir tantos tags como queramos y así identificar cada entidad por separado.

<div class="ui centered card">
  <div class="image">
    <img src="/images/Unity-detectar-colisiones-OnTriggerEnter2D-figura1.1.png">
  </div>
  <div class="content">
    <a class="header">Figura 1.1</a>
  </div>
</div>

##Función

Una vez que tenemos nuestros objetos identificados viene lo bueno, la función. **OnTriggerEnter2D** es una función que se acciona automáticamente cuando el objeto que la posee *(que tiene el script que contiene esta función)* entra en colisión con otro cuerpo, nuestra función quedaría así:

{% highlight c# %}
void OnTriggerEnter2D (Collider2D col) {
    if (col.gameObject.tag == "Proyectil"){
        Debug.log("PROYECTIL COLISIONO CON OBJETO")
    }
}
{% endhighlight %}

En este ejemplo si el objeto contenedor de la función colisiona con otra entidad que se llame Proyectil (que su tag sea Proyectil) mostrará por consola el mensaje: *"PROYECTIL COLISIONO CON OBJETO."*

##Aclaración: **2D**, no 3D

En esta explicaciones estamos trabajando sobre el supuesto de que el proyecto es **2D**, no 3D. Esto es relevante a la hora de declarar la función, no de usarla, y me explico. **OnTriggerEnter2D** recibirá como argumento un **Collider2D**, mientras que la función equivalente propia de unity3D recibe un *Collider* a secas y pasa a llamarse *OnTriggerEnter*. Suele ser fuente de muchos errores y comederos de cabeza utilizar Colliders a secas en unity2D.

##Conclusión

*OnTriggerEnter2D* es una función muy sencilla de utilizar y que nos facilita en gran medida el manejo de las colisiones en nuestros juegos o proyectos. Os animo a que la uséis y para cualquier duda no olvidéis comentar!


[onturl]:   http://docs.unity3d.com/ScriptReference/MonoBehaviour.OnTriggerEnter2D.html
[tagurl]:   http://docs.unity3d.com/es/current/Manual/Tags.html
