---
layout: post
title:  "Android Studio: Configurar Control de Versiones (Git y Github)"
date:   2015-10-12 15:00:20
tags: tutorial android cvs github
permalink: tutorial-android-studio-control-de-versiones
---

El otro día me tuve que estar peleando con el sistema de control de versiones integrado en Android Studio 1.4. Y tras un rato con ello conseguí sacarlo y pensé... por que no hacer un tutorial explicando como funciona?, como enfrentarnos con el? por que usarlo? Y así animando a algunos a que empiecen a utilizar el control de versiones en sus proyectos.

El sistema de control de versiones de Android Studio tiene soporte para varias de estas herramientas, nosotros nos centraremos en utilizar **[Git][giturl]**, que si no lo tenemos un buen primer paso es instalarlo y configurarlo. También necesitaremos una cuenta en **[Github][githuburl]**, donde crearemos el repositorio en el que trabajaremos.

Así que vamos a ello!

## Configurando Android Studio

Una vez creada la cuenta en **Github** e instalado **Git** pasaremos a configurar Android Studio con estos datos. Para ello dentro de la selección de proyectos seguiremos la siguiente ruta: **Configure > Settings > Version Control > Github**, acabando en la siguiente pantalla:

<div class="ui centered card">
  <div class="image">
    <img src="/images/android-cvs-1.png">
  </div>
  <div class="content">
    <a class="header">Settings > Control Version > Github</a>
  </div>
</div>

En ella debemos introducir nuestro nombre de usuario y contraseña de la cuenta de Github que acabamos de crear, o ya teníamos. Si presionamos el botón **Test** nos verificará que los datos introducidos son correctos.

Ahora iremos al apartado de Git y nos aseguraremos de que la ruta de instalación es la adecuada (*es posible que mi ruta no coincida con la vuestra debido a que estoy trabajando en Linux*):

<div class="ui centered card">
  <div class="image">
    <img src="/images/android-cvs-3.png">
  </div>
  <div class="content">
    <a class="header">Settings > Control Version > Git</a>
  </div>
</div>

Perfecto! Ya tenemos nuestra cuenta vinculada a Android Studio! Ahora tenemos dos opciones, Importar un proyecto que ya este en Github para trabajar con él, o subir nuestro proyecto a un repositorio.

##Subir nuestro proyecto a un repositorio

*Si ya tienes lo único que quieres importar un proyecto ya en Github puedes saltarte este paso!*

El primer caso que trataremos es el de querer subir nuestro proyecto ya creado a un nuevo repositorio. Para ello en la barra superior nos iremos a **VCS > Import into Version Control > Share Project on Github**:

<div class="ui centered card">
  <div class="image">
    <img src="/images/android-cvs-4.png">
  </div>
  <div class="content">
    <a class="header">VCS > Import into Version Control > Share Project on Github</a>
  </div>
</div>

Dentro de esta opción escribiremos el nombre de nuestro repositorio y una descripción (esta ultima es opcional). Y haremos nuestro primer Commit :D

Por último en este caso decir que ahora en **VPS** nos aparecerán múltiples opciones, las mas usadas son las siguientes (con una breve descripción):

<div class="ui bulleted list">
  <div class="item">Update Project: Nos descarga la ultima versión subida al repositorio.</div>
  <div class="item">Git > Add+: Añade los cambios (pero no los comenta).</div>
  <div class="item">Commit Changes: Comenta los cambios añadidos.</div>
  <div class="item">Git > Push: Sube los cambios comentados al repositorio.</div>
</div>

Ahí muchas mas opciones, pero en este tutorial nos centramos en la configuración y preparación del control de versiones, no en todas las funciones que tenemos a nuestra disposición.

##Importar Proyecto ya existente de Github

Ahora nos pondremos en el caso de que el proyecto ya esta creado y subido a un repositorio y queremos importarlo a nuestro Android Studio. Para ello desde la selección de proyectos pulsaremos la opción de **Check out proyect form Control Version > GitHub**, introducimos la contraseña que pusimos en el apartado de configuración.

Continuamos eligiendo el repositorio, la ruta donde lo pondremos y el nombre del proyecto, tal que así:

<div class="ui centered card">
  <div class="image">
    <img src="/images/android-cvs-10.png">
  </div>
  <div class="content">
    <a class="header">VCS > Import into Version Control > Share Project on Github</a>
  </div>
</div>

Aceptamos y ya tenemos nuestro proyecto importado! :D

##Conclusiones

Utilizar las herramientas de control de versiones que nos pone a nuestra disposición Android Studio es muy sencillo y nos facilita mucho la vida. Sobre todo si vamos a trabajar en proyectos con mucha gente o queremos tener diferentes versiones por si acaso se nos "pierde" algo.

Espero que os haya servido este tutorial y para cualquier duda poner un comentario o poneros en contacto conmigo :D

[giturl]:   https://git-scm.com/
[githuburl]:   https://github.com/
