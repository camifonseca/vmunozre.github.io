---
layout: post
title:  "Unity Scrips: Funciones por defecto y básicas."
date:   2015-09-14 12:00:20
tags: tutorial unity script
permalink: unity-funciones-por-defecto
---

Hoy vamos a mostrar la estructura básica de un script (*C#*) en unity. Es importante tener claro para que valen las funciones por defecto que vienen al crear un nuevo script, las que vamos a explicar a continuación, y las diferencias entre ellas.

Este tutorial se explicará usando **C#**, pero lo visto aquí se puede aplicar perfectamente a **JS** o **BOO**.

##**Awake y Start**

Awake y Start son funciones que son llamadas automáticamente al iniciar el script. **Awake** siempre se llama primero y en ella se deben inicializar las *variables* y declarar las *referencias* entre scripts.

**Start** es llamado inmediatamente después de que *Awake* termine. En esta función se suelen habilitar los diferentes estados de la entidad que va a llevar el script.

Para ver la diferencia entre estas dos funciones usaremos un ejemplo. Si estamos haciendo un juego en el que nuestro personaje tiene un arma con la que dispara, en la función **awake** pondremos la munición que tiene y en la función **Start** habilitaremos que pueda disparar.

Ejecutando el siguiente Script podemos ver un ejemplo claro de lo que acabamos de explicar:

{% highlight c# %}
using UnityEngine;
using System.Collections;

public class AwakeAndStart : MonoBehaviour
{
    void Awake ()
    {
        Debug.Log("Awake called.");
    }


    void Start ()
    {
        Debug.Log("Start called.");
    }
}
{% endhighlight %}



##Update y FixedUpdate

**Update** es una función que se llama cada fotograma por segundo (frame), es aconsejable usarla en los siguientes casos:
<div class="ui ordered list">
  <span class="item">Para manejar el movimiento de objetos **SIN** físicas.</span>
  <span class="item">Como un contador simple, si tenemos 30 *frames*por segundo sabemos que esa funcion se llamara 30 veces en un segundo.</span>
  <span class="item">Para recibir eventos de entrada (*Inputs*), como detección de teclas, de clicks, etc.</span>
</div>

**FixedUpdate** se llama en intervalos de tiempo regulares, cada vez que esto sucede se realizan todos los calculos de fisica necesarios, es aconsejable usarla en los siguientes casos:
<div class="ui ordered list">
  <span class="item">Para manejar el movimiento de objetos **CON** físicas.</span>
  <span class="item">Para ajustar las físicas de objetos como los **Rigidbody**</span>
</div>

Ejecutando el siguiente Script podemos ver un ejemplo claro de lo que acabamos de explicar:

{% highlight c# %}
using UnityEngine;
using System.Collections;

public class UpdateAndFixedUpdate : MonoBehaviour
{
    void FixedUpdate ()
    {
        Debug.Log("FixedUpdate time :" + Time.deltaTime);
    }


    void Update ()
    {
        Debug.Log("Update time :" + Time.deltaTime);
    }
}
{% endhighlight %}


##Conclusión

Todo esto es algo sencillo de entender, pero importante que conozcamos y tengamos claro. Espero que os haya servido como orientación y para cualquier duda comentar!
