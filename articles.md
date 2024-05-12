---
layout: page
title: Articles
---

<ul>
{% for articlePage in site.articles %}
    <li><a href="{{ articlePage.url }}">{{ articlePage.title }}</a></li>
{% endfor %}
</ul>
