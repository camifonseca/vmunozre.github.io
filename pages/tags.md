---
layout: page
title: Tags
permalink: /tag/
---


<div ng-controller="Controller as vm">
<h1 class="post_title">{{page.title}}</h1>


<div class="ui middle aligned animated list">
  {% for post in site.posts %}
  {% for tag in post.tags %}

  <div class="item" ng-if="getTag() == {{tag}}">

    <i class="icon chevron right"></i>
    <div class="content">
      <div class="header"><a href='{{post.url}}'>{{post.title}}</a></div>
      <div class="description">{{ post.date | date: "%b %-d, %Y" }}</div>
    </div>
  </div>

  {% endfor %}
  {% endfor %}
</div>
</div>
