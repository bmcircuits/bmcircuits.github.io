---
layout: page
title: Portfolio
permalink: /portfolio/
body_class: subpage
---

<header class="align-center">
  <h2>Portfolio</h2>
  <p>Selected work</p>
</header>

{% comment %} Build unique tag list for filters {% endcomment %}
{% capture tags_str %}{% for p in site.projects %}{% if p.tags %}{% for t in p.tags %}{{ t }},{% endfor %}{% endif %}{% endfor %}{% endcapture %}
{% assign tags = tags_str | split: ',' | uniq | sort %}

<ul class="actions align-center" style="margin-bottom: 2rem;">
  <li><a href="#" class="button special" data-filter="all">All</a></li>
  {% for tag in tags %}
    {% unless tag == '' %}
    <li><a href="#" class="button" data-filter="{{ tag }}">{{ tag }}</a></li>
    {% endunless %}
  {% endfor %}
</ul>

<div class="flex flex-2" data-portfolio-grid>
  {% assign projects = site.projects | sort: 'title' %}
  {% for project in projects %}
  {% assign img = project.image | default: project.gallery | first %}
  <article data-tags="{% if project.tags %}{{ project.tags | join: ',' }}{% endif %}">
    <a href="{{ project.url | relative_url }}" class="image fit">
      {% if img %}
      <img src="{{ img | relative_url }}" alt="{{ project.title }}" width="576" height="196">
      {% endif %}
    </a>
    <header>
      <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
    </header>
    {% if project.description %}<p>{{ project.description }}</p>{% endif %}
  </article>
  {% endfor %}
</div>
